import { Color } from './color';
class Solver {
    constructor(target, options) {
        this.target = target;
        this.targetHSL = target.hsl();
        this.options = Object.assign({}, 
        // Adding default values for options
        {
            acceptanceLossPercentage: 5,
            maxChecks: 15,
        }, options);
        // All the calcs done by the library to generate
        // a CSS Filter are based on the color `#000`
        // in this case, `rgb(0, 0, 0)`
        // Please make sure the background of the element
        // is `#000` for better performance
        // and color similarity.
        this.reusedColor = new Color(0, 0, 0);
    }
    /**
     * Returns the solved values for the
     *
     * @returns {(SPSAPayload & { filter: string; })}
     * @memberof Solver
     */
    solve() {
        const result = this.solveNarrow(this.solveWide());
        return {
            values: result.values,
            called: result.called,
            loss: result.loss,
            filter: this.css(result.values),
        };
    }
    /**
     * Solve wide values based on the wide values for RGB and HSL values
     *
     * @private
     * @returns {SPSAPayload}
     * @memberof Solver
     */
    solveWide() {
        const A = 5;
        const c = 15;
        // Wide values for RGB and HSL values
        // the values in the order: [`r`, `g`, `b`, `h`, `s`, `l`]
        const a = [60, 180, 18000, 600, 1.2, 1.2];
        let best = { loss: Infinity };
        let counter = 0;
        while (best.loss > this.options.acceptanceLossPercentage) {
            const initialFilterValues = [50, 20, 3750, 50, 100, 100];
            const result = this.spsa({
                A,
                a,
                c,
                values: initialFilterValues,
                // for wide values we should use the double of tries in
                // comparison of `solveNarrow()` method
                maxTriesInLoop: 1000,
            });
            if (result.loss < best.loss) {
                best = result;
            }
            counter += 1;
            if (counter >= this.options.maxChecks) {
                break;
            }
        }
        return Object.assign({}, best, { called: counter });
    }
    /**
     * Solve narrow values based on the wide values for the filter
     *
     * @private
     * @param {SPSAPayload} wide
     * @returns {SPSAPayload}
     * @memberof Solver
     */
    solveNarrow(wide) {
        const A = wide.loss;
        const c = 2;
        const A1 = A + 1;
        // Narrow values for RGB and HSL values
        // the values in the order: [`r`, `g`, `b`, `h`, `s`, `l`]
        const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
        return this.spsa({
            A,
            a,
            c,
            values: wide.values,
            maxTriesInLoop: 500,
            called: wide.called,
        });
    }
    /**
     * Returns final value based on the current filter order
     * to get the order, please check the returned value
     * in `css()` method
     *
     * @private
     * @param {number} value
     * @param {number} idx
     * @returns {number}
     * @memberof Solver
     */
    fixValueByFilterIDX(value, idx) {
        let max = 100;
        // Fixing max, minimum and value by filter
        if (idx === 2 /* saturate */) {
            max = 7500;
        }
        else if (idx === 4 /* brightness */ || idx === 5 /* contrast */) {
            max = 200;
        }
        if (idx === 3 /* hue-rotate */) {
            if (value > max) {
                value %= max;
            }
            else if (value < 0) {
                value = max + (value % max);
            }
        }
        // Checking if value is below the minimum or above
        // the maximum allowed by filter
        else if (value < 0) {
            value = 0;
        }
        else if (value > max) {
            value = max;
        }
        return value;
    }
    spsa({ A, a, c, values, maxTriesInLoop = 500, called = 0, }) {
        const alpha = 1;
        const gamma = 0.16666666666666666;
        let best = null;
        let bestLoss = Infinity;
        const deltas = new Array(6);
        const highArgs = new Array(6);
        const lowArgs = new Array(6);
        // Size of all CSS filters to be applied to get the correct color
        const filtersToBeAppliedSize = 6;
        for (let key = 0; key < maxTriesInLoop; key++) {
            const ck = c / Math.pow(key + 1, gamma);
            for (let i = 0; i < filtersToBeAppliedSize; i++) {
                deltas[i] = Math.random() > 0.5 ? 1 : -1;
                highArgs[i] = values[i] + ck * deltas[i];
                lowArgs[i] = values[i] - ck * deltas[i];
            }
            const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
            for (let i = 0; i < filtersToBeAppliedSize; i++) {
                const g = (lossDiff / (2 * ck)) * deltas[i];
                const ak = a[i] / Math.pow(A + key + 1, alpha);
                values[i] = this.fixValueByFilterIDX(values[i] - ak * g, i);
            }
            const loss = this.loss(values);
            if (loss < bestLoss) {
                best = values.slice(0);
                bestLoss = loss;
            }
        }
        return { values: best, loss: bestLoss, called };
    }
    loss(filters) {
        const color = this.reusedColor;
        color.set(0, 0, 0);
        color.invert(filters[0] / 100);
        color.sepia(filters[1] / 100);
        color.saturate(filters[2] / 100);
        color.hueRotate(filters[3] * 3.6);
        color.brightness(filters[4] / 100);
        color.contrast(filters[5] / 100);
        const colorHSL = color.hsl();
        return (Math.abs(color.r - this.target.r) +
            Math.abs(color.g - this.target.g) +
            Math.abs(color.b - this.target.b) +
            Math.abs(colorHSL.h - this.targetHSL.h) +
            Math.abs(colorHSL.s - this.targetHSL.s) +
            Math.abs(colorHSL.l - this.targetHSL.l));
    }
    css(filters) {
        const formatCssFilterValueByMultiplier = (idx, multiplier = 1) => Math.round(filters[idx] * multiplier);
        return [
            `invert(${formatCssFilterValueByMultiplier(0)}%)`,
            `sepia(${formatCssFilterValueByMultiplier(1)}%)`,
            `saturate(${formatCssFilterValueByMultiplier(2)}%)`,
            `hue-rotate(${formatCssFilterValueByMultiplier(3, 3.6)}deg)`,
            `brightness(${formatCssFilterValueByMultiplier(4)}%)`,
            `contrast(${formatCssFilterValueByMultiplier(5)}%);`,
        ].join(' ');
    }
}
export { Solver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbm93Ym9hcmQtaWNvbi9zcmMvbGliL2hleC10by1jc3MtZmlsdGVyL3NvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBWWhDLE1BQU0sTUFBTTtJQU1WLFlBQVksTUFBYSxFQUFFLE9BQThCO1FBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDMUIsRUFBRTtRQUNGLG9DQUFvQztRQUNwQztZQUNFLHdCQUF3QixFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEVBQUU7U0FDZCxFQUNELE9BQU8sQ0FDUixDQUFDO1FBRUYsZ0RBQWdEO1FBQ2hELDZDQUE2QztRQUM3QywrQkFBK0I7UUFDL0IsaURBQWlEO1FBQ2pELG1DQUFtQztRQUNuQyx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEtBQUs7UUFJSCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE9BQU87WUFDTCxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07WUFDckIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2hDLENBQUM7SUFDSixD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QUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFTyxHQUFHLENBQUMsT0FBaUI7UUFDM0IsTUFBTSxnQ0FBZ0MsR0FBRyxDQUFDLEdBQVcsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFVLEVBQUUsQ0FDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFFeEMsT0FBTztZQUNMLFVBQVUsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDakQsU0FBUyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNoRCxZQUFZLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ25ELGNBQWMsZ0NBQWdDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNO1lBQzVELGNBQWMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDckQsWUFBWSxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUNyRCxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNkLENBQUM7Q0FDRjtBQUVELE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9jb2xvcic7XG5pbXBvcnQgeyBIZXhUb0Nzc0NvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2hleC10by1jc3MtZmlsdGVyJztcblxuaW50ZXJmYWNlIFNQU0FQYXlsb2FkIHtcbiAgLyoqIEhvdyBtYW55IHRpbWVzIHRoZSBzY3JpcHQgd2FzIGNhbGxlZCB0byBzb2x2ZSB0aGUgY29sb3IgKi9cbiAgY2FsbGVkPzogbnVtYmVyO1xuICAvKiogUGVyY2VudGFnZSBsb3NzIHZhbHVlIGZvciB0aGUgZ2VuZXJhdGVkIGZpbHRlciAqL1xuICBsb3NzOiBudW1iZXI7XG4gIC8qKiBQZXJjZW50YWdlIGxvc3MgcGVyIGVhY2ggY29sb3IgdHlwZSBvcmdhbml6ZWQgaW4gUkdCOiByZWQsIGdyZWVuLCBibHVlLCBoLCBzLCBsLiAqL1xuICB2YWx1ZXM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn1cblxuY2xhc3MgU29sdmVyIHtcbiAgcHJpdmF0ZSB0YXJnZXQ6IENvbG9yO1xuICBwcml2YXRlIHRhcmdldEhTTDogeyBoOiBudW1iZXI7IHM6IG51bWJlcjsgbDogbnVtYmVyIH07XG4gIHByaXZhdGUgcmV1c2VkQ29sb3I6IENvbG9yO1xuICBwcml2YXRlIG9wdGlvbnM6IHsgYWNjZXB0YW5jZUxvc3NQZXJjZW50YWdlOiBudW1iZXI7IG1heENoZWNrczogbnVtYmVyIH0gJiBIZXhUb0Nzc0NvbmZpZ3VyYXRpb247XG5cbiAgY29uc3RydWN0b3IodGFyZ2V0OiBDb2xvciwgb3B0aW9uczogSGV4VG9Dc3NDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy50YXJnZXRIU0wgPSB0YXJnZXQuaHNsKCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICAvLyBBZGRpbmcgZGVmYXVsdCB2YWx1ZXMgZm9yIG9wdGlvbnNcbiAgICAgIHtcbiAgICAgICAgYWNjZXB0YW5jZUxvc3NQZXJjZW50YWdlOiA1LFxuICAgICAgICBtYXhDaGVja3M6IDE1LFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKTtcblxuICAgIC8vIEFsbCB0aGUgY2FsY3MgZG9uZSBieSB0aGUgbGlicmFyeSB0byBnZW5lcmF0ZVxuICAgIC8vIGEgQ1NTIEZpbHRlciBhcmUgYmFzZWQgb24gdGhlIGNvbG9yIGAjMDAwYFxuICAgIC8vIGluIHRoaXMgY2FzZSwgYHJnYigwLCAwLCAwKWBcbiAgICAvLyBQbGVhc2UgbWFrZSBzdXJlIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBlbGVtZW50XG4gICAgLy8gaXMgYCMwMDBgIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAvLyBhbmQgY29sb3Igc2ltaWxhcml0eS5cbiAgICB0aGlzLnJldXNlZENvbG9yID0gbmV3IENvbG9yKDAsIDAsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNvbHZlZCB2YWx1ZXMgZm9yIHRoZVxuICAgKlxuICAgKiBAcmV0dXJucyB7KFNQU0FQYXlsb2FkICYgeyBmaWx0ZXI6IHN0cmluZzsgfSl9XG4gICAqIEBtZW1iZXJvZiBTb2x2ZXJcbiAgICovXG4gIHNvbHZlKCk6IFNQU0FQYXlsb2FkICYge1xuICAgIC8qKiBDU1MgZmlsdGVyIGdlbmVyYXRlZCBiYXNlZCBvbiB0aGUgSGV4IGNvbG9yICovXG4gICAgZmlsdGVyOiBzdHJpbmc7XG4gIH0ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc29sdmVOYXJyb3codGhpcy5zb2x2ZVdpZGUoKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlczogcmVzdWx0LnZhbHVlcyxcbiAgICAgIGNhbGxlZDogcmVzdWx0LmNhbGxlZCxcbiAgICAgIGxvc3M6IHJlc3VsdC5sb3NzLFxuICAgICAgZmlsdGVyOiB0aGlzLmNzcyhyZXN1bHQudmFsdWVzKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNvbHZlIHdpZGUgdmFsdWVzIGJhc2VkIG9uIHRoZSB3aWRlIHZhbHVlcyBmb3IgUkdCIGFuZCBIU0wgdmFsdWVzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm5zIHtTUFNBUGF5bG9hZH1cbiAgICogQG1lbWJlcm9mIFNvbHZlclxuICAgKi9cbiAgcHJpdmF0ZSBzb2x2ZVdpZGUoKTogU1BTQVBheWxvYWQge1xuICAgIGNvbnN0IEEgPSA1O1xuICAgIGNvbnN0IGMgPSAxNTtcbiAgICAvLyBXaWRlIHZhbHVlcyBmb3IgUkdCIGFuZCBIU0wgdmFsdWVzXG4gICAgLy8gdGhlIHZhbHVlcyBpbiB0aGUgb3JkZXI6IFtgcmAsIGBnYCwgYGJgLCBgaGAsIGBzYCwgYGxgXVxuICAgIGNvbnN0IGEgPSBbNjAsIDE4MCwgMTgwMDAsIDYwMCwgMS4yLCAxLjJdO1xuXG4gICAgbGV0IGJlc3QgPSB7IGxvc3M6IEluZmluaXR5IH07XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIHdoaWxlIChiZXN0Lmxvc3MgPiB0aGlzLm9wdGlvbnMuYWNjZXB0YW5jZUxvc3NQZXJjZW50YWdlKSB7XG4gICAgICBjb25zdCBpbml0aWFsRmlsdGVyVmFsdWVzOiBTUFNBUGF5bG9hZFsndmFsdWVzJ10gPSBbNTAsIDIwLCAzNzUwLCA1MCwgMTAwLCAxMDBdO1xuICAgICAgY29uc3QgcmVzdWx0OiBTUFNBUGF5bG9hZCA9IHRoaXMuc3BzYSh7XG4gICAgICAgIEEsXG4gICAgICAgIGEsXG4gICAgICAgIGMsXG4gICAgICAgIHZhbHVlczogaW5pdGlhbEZpbHRlclZhbHVlcyxcbiAgICAgICAgLy8gZm9yIHdpZGUgdmFsdWVzIHdlIHNob3VsZCB1c2UgdGhlIGRvdWJsZSBvZiB0cmllcyBpblxuICAgICAgICAvLyBjb21wYXJpc29uIG9mIGBzb2x2ZU5hcnJvdygpYCBtZXRob2RcbiAgICAgICAgbWF4VHJpZXNJbkxvb3A6IDEwMDAsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3VsdC5sb3NzIDwgYmVzdC5sb3NzKSB7XG4gICAgICAgIGJlc3QgPSByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgIGlmIChjb3VudGVyID49IHRoaXMub3B0aW9ucy5tYXhDaGVja3MpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGJlc3QsIHsgY2FsbGVkOiBjb3VudGVyIH0pIGFzIFNQU0FQYXlsb2FkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvbHZlIG5hcnJvdyB2YWx1ZXMgYmFzZWQgb24gdGhlIHdpZGUgdmFsdWVzIGZvciB0aGUgZmlsdGVyXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7U1BTQVBheWxvYWR9IHdpZGVcbiAgICogQHJldHVybnMge1NQU0FQYXlsb2FkfVxuICAgKiBAbWVtYmVyb2YgU29sdmVyXG4gICAqL1xuICBwcml2YXRlIHNvbHZlTmFycm93KHdpZGU6IFNQU0FQYXlsb2FkKTogU1BTQVBheWxvYWQge1xuICAgIGNvbnN0IEEgPSB3aWRlLmxvc3M7XG4gICAgY29uc3QgYyA9IDI7XG4gICAgY29uc3QgQTEgPSBBICsgMTtcbiAgICAvLyBOYXJyb3cgdmFsdWVzIGZvciBSR0IgYW5kIEhTTCB2YWx1ZXNcbiAgICAvLyB0aGUgdmFsdWVzIGluIHRoZSBvcmRlcjogW2ByYCwgYGdgLCBgYmAsIGBoYCwgYHNgLCBgbGBdXG4gICAgY29uc3QgYSA9IFswLjI1ICogQTEsIDAuMjUgKiBBMSwgQTEsIDAuMjUgKiBBMSwgMC4yICogQTEsIDAuMiAqIEExXTtcbiAgICByZXR1cm4gdGhpcy5zcHNhKHtcbiAgICAgIEEsXG4gICAgICBhLFxuICAgICAgYyxcbiAgICAgIHZhbHVlczogd2lkZS52YWx1ZXMsXG4gICAgICBtYXhUcmllc0luTG9vcDogNTAwLFxuICAgICAgY2FsbGVkOiB3aWRlLmNhbGxlZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZpbmFsIHZhbHVlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGZpbHRlciBvcmRlclxuICAgKiB0byBnZXQgdGhlIG9yZGVyLCBwbGVhc2UgY2hlY2sgdGhlIHJldHVybmVkIHZhbHVlXG4gICAqIGluIGBjc3MoKWAgbWV0aG9kXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaWR4XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBTb2x2ZXJcbiAgICovXG4gIHByaXZhdGUgZml4VmFsdWVCeUZpbHRlcklEWCh2YWx1ZTogbnVtYmVyLCBpZHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IG1heCA9IDEwMDtcblxuICAgIC8vIEZpeGluZyBtYXgsIG1pbmltdW0gYW5kIHZhbHVlIGJ5IGZpbHRlclxuICAgIGlmIChpZHggPT09IDIgLyogc2F0dXJhdGUgKi8pIHtcbiAgICAgIG1heCA9IDc1MDA7XG4gICAgfSBlbHNlIGlmIChpZHggPT09IDQgLyogYnJpZ2h0bmVzcyAqLyB8fCBpZHggPT09IDUgLyogY29udHJhc3QgKi8pIHtcbiAgICAgIG1heCA9IDIwMDtcbiAgICB9XG5cbiAgICBpZiAoaWR4ID09PSAzIC8qIGh1ZS1yb3RhdGUgKi8pIHtcbiAgICAgIGlmICh2YWx1ZSA+IG1heCkge1xuICAgICAgICB2YWx1ZSAlPSBtYXg7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICB2YWx1ZSA9IG1heCArICh2YWx1ZSAlIG1heCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIENoZWNraW5nIGlmIHZhbHVlIGlzIGJlbG93IHRoZSBtaW5pbXVtIG9yIGFib3ZlXG4gICAgLy8gdGhlIG1heGltdW0gYWxsb3dlZCBieSBmaWx0ZXJcbiAgICBlbHNlIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgIHZhbHVlID0gMDtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgICB2YWx1ZSA9IG1heDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBzcHNhKHtcbiAgICBBLFxuICAgIGEsXG4gICAgYyxcbiAgICB2YWx1ZXMsXG4gICAgbWF4VHJpZXNJbkxvb3AgPSA1MDAsXG4gICAgY2FsbGVkID0gMCxcbiAgfToge1xuICAgIEE6IG51bWJlcjtcbiAgICBhOiBudW1iZXJbXTtcbiAgICBjOiBudW1iZXI7XG4gICAgdmFsdWVzOiBTUFNBUGF5bG9hZFsndmFsdWVzJ107XG4gICAgbWF4VHJpZXNJbkxvb3A6IG51bWJlcjtcbiAgICBjYWxsZWQ/OiBudW1iZXI7XG4gIH0pOiBTUFNBUGF5bG9hZCB7XG4gICAgY29uc3QgYWxwaGEgPSAxO1xuICAgIGNvbnN0IGdhbW1hID0gMC4xNjY2NjY2NjY2NjY2NjY2NjtcblxuICAgIGxldCBiZXN0ID0gbnVsbDtcbiAgICBsZXQgYmVzdExvc3MgPSBJbmZpbml0eTtcblxuICAgIGNvbnN0IGRlbHRhcyA9IG5ldyBBcnJheSg2KSBhcyBTUFNBUGF5bG9hZFsndmFsdWVzJ107XG4gICAgY29uc3QgaGlnaEFyZ3MgPSBuZXcgQXJyYXkoNikgYXMgU1BTQVBheWxvYWRbJ3ZhbHVlcyddO1xuICAgIGNvbnN0IGxvd0FyZ3MgPSBuZXcgQXJyYXkoNikgYXMgU1BTQVBheWxvYWRbJ3ZhbHVlcyddO1xuXG4gICAgLy8gU2l6ZSBvZiBhbGwgQ1NTIGZpbHRlcnMgdG8gYmUgYXBwbGllZCB0byBnZXQgdGhlIGNvcnJlY3QgY29sb3JcbiAgICBjb25zdCBmaWx0ZXJzVG9CZUFwcGxpZWRTaXplID0gNjtcblxuICAgIGZvciAobGV0IGtleSA9IDA7IGtleSA8IG1heFRyaWVzSW5Mb29wOyBrZXkrKykge1xuICAgICAgY29uc3QgY2sgPSBjIC8gTWF0aC5wb3coa2V5ICsgMSwgZ2FtbWEpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJzVG9CZUFwcGxpZWRTaXplOyBpKyspIHtcbiAgICAgICAgZGVsdGFzW2ldID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMTtcbiAgICAgICAgaGlnaEFyZ3NbaV0gPSB2YWx1ZXNbaV0gKyBjayAqIGRlbHRhc1tpXTtcbiAgICAgICAgbG93QXJnc1tpXSA9IHZhbHVlc1tpXSAtIGNrICogZGVsdGFzW2ldO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsb3NzRGlmZiA9IHRoaXMubG9zcyhoaWdoQXJncykgLSB0aGlzLmxvc3MobG93QXJncyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcnNUb0JlQXBwbGllZFNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBnID0gKGxvc3NEaWZmIC8gKDIgKiBjaykpICogZGVsdGFzW2ldO1xuICAgICAgICBjb25zdCBhayA9IGFbaV0gLyBNYXRoLnBvdyhBICsga2V5ICsgMSwgYWxwaGEpO1xuICAgICAgICB2YWx1ZXNbaV0gPSB0aGlzLmZpeFZhbHVlQnlGaWx0ZXJJRFgodmFsdWVzW2ldIC0gYWsgKiBnLCBpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbG9zcyA9IHRoaXMubG9zcyh2YWx1ZXMpO1xuICAgICAgaWYgKGxvc3MgPCBiZXN0TG9zcykge1xuICAgICAgICBiZXN0ID0gdmFsdWVzLnNsaWNlKDApO1xuICAgICAgICBiZXN0TG9zcyA9IGxvc3M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdmFsdWVzOiBiZXN0LCBsb3NzOiBiZXN0TG9zcywgY2FsbGVkIH0gYXMgU1BTQVBheWxvYWQ7XG4gIH1cblxuICBwcml2YXRlIGxvc3MoZmlsdGVyczogU1BTQVBheWxvYWRbJ3ZhbHVlcyddKTogbnVtYmVyIHtcblxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5yZXVzZWRDb2xvcjtcblxuICAgIGNvbG9yLnNldCgwLCAwLCAwKTtcblxuICAgIGNvbG9yLmludmVydChmaWx0ZXJzWzBdIC8gMTAwKTtcbiAgICBjb2xvci5zZXBpYShmaWx0ZXJzWzFdIC8gMTAwKTtcbiAgICBjb2xvci5zYXR1cmF0ZShmaWx0ZXJzWzJdIC8gMTAwKTtcbiAgICBjb2xvci5odWVSb3RhdGUoZmlsdGVyc1szXSAqIDMuNik7XG4gICAgY29sb3IuYnJpZ2h0bmVzcyhmaWx0ZXJzWzRdIC8gMTAwKTtcbiAgICBjb2xvci5jb250cmFzdChmaWx0ZXJzWzVdIC8gMTAwKTtcblxuICAgIGNvbnN0IGNvbG9ySFNMID0gY29sb3IuaHNsKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5hYnMoY29sb3IuciAtIHRoaXMudGFyZ2V0LnIpICtcbiAgICAgIE1hdGguYWJzKGNvbG9yLmcgLSB0aGlzLnRhcmdldC5nKSArXG4gICAgICBNYXRoLmFicyhjb2xvci5iIC0gdGhpcy50YXJnZXQuYikgK1xuICAgICAgTWF0aC5hYnMoY29sb3JIU0wuaCAtIHRoaXMudGFyZ2V0SFNMLmgpICtcbiAgICAgIE1hdGguYWJzKGNvbG9ySFNMLnMgLSB0aGlzLnRhcmdldEhTTC5zKSArXG4gICAgICBNYXRoLmFicyhjb2xvckhTTC5sIC0gdGhpcy50YXJnZXRIU0wubClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjc3MoZmlsdGVyczogbnVtYmVyW10pOiBzdHJpbmcge1xuICAgIGNvbnN0IGZvcm1hdENzc0ZpbHRlclZhbHVlQnlNdWx0aXBsaWVyID0gKGlkeDogbnVtYmVyLCBtdWx0aXBsaWVyID0gMSk6IG51bWJlciA9PlxuICAgICAgTWF0aC5yb3VuZChmaWx0ZXJzW2lkeF0gKiBtdWx0aXBsaWVyKTtcblxuICAgIHJldHVybiBbXG4gICAgICBgaW52ZXJ0KCR7Zm9ybWF0Q3NzRmlsdGVyVmFsdWVCeU11bHRpcGxpZXIoMCl9JSlgLFxuICAgICAgYHNlcGlhKCR7Zm9ybWF0Q3NzRmlsdGVyVmFsdWVCeU11bHRpcGxpZXIoMSl9JSlgLFxuICAgICAgYHNhdHVyYXRlKCR7Zm9ybWF0Q3NzRmlsdGVyVmFsdWVCeU11bHRpcGxpZXIoMil9JSlgLFxuICAgICAgYGh1ZS1yb3RhdGUoJHtmb3JtYXRDc3NGaWx0ZXJWYWx1ZUJ5TXVsdGlwbGllcigzLCAzLjYpfWRlZylgLFxuICAgICAgYGJyaWdodG5lc3MoJHtmb3JtYXRDc3NGaWx0ZXJWYWx1ZUJ5TXVsdGlwbGllcig0KX0lKWAsXG4gICAgICBgY29udHJhc3QoJHtmb3JtYXRDc3NGaWx0ZXJWYWx1ZUJ5TXVsdGlwbGllcig1KX0lKTtgLFxuICAgIF0uam9pbignICcpO1xuICB9XG59XG5cbmV4cG9ydCB7IFNvbHZlciB9O1xuIl19
import { Component, Input } from '@angular/core';
import { hexToCSSFilter } from './hex-to-css-filter';
import * as i0 from "@angular/core";
import * as i1 from "./nowboard-icon.service";
export class NowboardIconComponent {
    constructor(service) {
        this.service = service;
        this.size = 1;
        this.color = 'white';
        this.icon = '';
        this.style = '';
        this.spanStyleWrapper = {};
        this.src = '';
        this.default_size = 12;
    }
    ngOnInit() {
        this.style = [
            `width: (${this.default_size * this.size}) px`,
            `height: (${this.default_size * this.size}) px`,
            `filter: ${this.filter()}`,
            `transform: scale(${this.size})`
        ].join(';');
        this.spanStyleWrapper = {
            width: (this.default_size * this.size) + 'px',
            height: (this.default_size * this.size) + 'px',
        };
        this.src = this.service.getFromRegistry(this.icon);
    }
    filter() {
        var _a;
        const config = {
            acceptanceLossPercentage: 1,
            maxChecks: 10,
        };
        const convert = hexToCSSFilter(this.color, config);
        return (_a = convert.filter) === null || _a === void 0 ? void 0 : _a.replace(';', '');
    }
}
NowboardIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconComponent, deps: [{ token: i1.NowboardIconService }], target: i0.ɵɵFactoryTarget.Component });
NowboardIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: NowboardIconComponent, selector: "nb-icon", inputs: { size: "size", color: "color", icon: "icon" }, ngImport: i0, template: `
    <span class="nb-icon {{icon}}-x{{size}}" [style]="spanStyleWrapper">
      <img [src]="src" style="{{style}}">
    </span>
  `, isInline: true, styles: ["span {display: flex; align-items: center; justify-content: center;}"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-icon',
                    template: `
    <span class="nb-icon {{icon}}-x{{size}}" [style]="spanStyleWrapper">
      <img [src]="src" style="{{style}}">
    </span>
  `,
                    styles: ['span {display: flex; align-items: center; justify-content: center;}']
                }]
        }], ctorParameters: function () { return [{ type: i1.NowboardIconService }]; }, propDecorators: { size: [{
                type: Input
            }], color: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3dib2FyZC1pY29uL3NyYy9saWIvbm93Ym9hcmQtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQsT0FBTyxFQUF3QixjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBVzFFLE1BQU0sT0FBTyxxQkFBcUI7SUFTaEMsWUFBbUIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFSdEMsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixVQUFLLEdBQVcsT0FBTyxDQUFDO1FBQ3hCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUd6QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxXQUFXLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksTUFBTTtZQUM5QyxZQUFZLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksTUFBTTtZQUMvQyxXQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMxQixvQkFBb0IsSUFBSSxDQUFDLElBQUksR0FBRztTQUNqQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUN0QixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJO1lBQzdDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUk7U0FDL0MsQ0FBQTtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFHTyxNQUFNOztRQUNaLE1BQU0sTUFBTSxHQUEwQjtZQUNwQyx3QkFBd0IsRUFBRSxDQUFDO1lBQzNCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztRQUVGLE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sTUFBQSxPQUFPLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O21IQW5DVSxxQkFBcUI7dUdBQXJCLHFCQUFxQix1R0FQdEI7Ozs7R0FJVDs0RkFHVSxxQkFBcUI7a0JBVGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRTs7OztHQUlUO29CQUNELE1BQU0sRUFBRSxDQUFDLHFFQUFxRSxDQUFDO2lCQUNoRjswR0FFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tm93Ym9hcmRJY29uU2VydmljZX0gZnJvbSBcIi4vbm93Ym9hcmQtaWNvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0hleFRvQ3NzQ29uZmlndXJhdGlvbiwgaGV4VG9DU1NGaWx0ZXJ9IGZyb20gJy4vaGV4LXRvLWNzcy1maWx0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1pY29uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cIm5iLWljb24ge3tpY29ufX0teHt7c2l6ZX19XCIgW3N0eWxlXT1cInNwYW5TdHlsZVdyYXBwZXJcIj5cbiAgICAgIDxpbWcgW3NyY109XCJzcmNcIiBzdHlsZT1cInt7c3R5bGV9fVwiPlxuICAgIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbJ3NwYW4ge2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO30nXVxufSlcbmV4cG9ydCBjbGFzcyBOb3dib2FyZEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaXplOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJ3doaXRlJztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzdHlsZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzcGFuU3R5bGVXcmFwcGVyOiBhbnkgPSB7fTtcbiAgcHVibGljIHNyYzogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBkZWZhdWx0X3NpemUgPSAxMjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogTm93Ym9hcmRJY29uU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdHlsZSA9IFtcbiAgICAgIGB3aWR0aDogKCR7dGhpcy5kZWZhdWx0X3NpemUgKiB0aGlzLnNpemV9KSBweGAsXG4gICAgICBgaGVpZ2h0OiAoJHt0aGlzLmRlZmF1bHRfc2l6ZSAqIHRoaXMuc2l6ZX0pIHB4YCxcbiAgICAgIGBmaWx0ZXI6ICR7dGhpcy5maWx0ZXIoKX1gLFxuICAgICAgYHRyYW5zZm9ybTogc2NhbGUoJHt0aGlzLnNpemV9KWBcbiAgICBdLmpvaW4oJzsnKVxuICAgIHRoaXMuc3BhblN0eWxlV3JhcHBlciA9IHtcbiAgICAgIHdpZHRoOiAodGhpcy5kZWZhdWx0X3NpemUgKiB0aGlzLnNpemUpICsgJ3B4JyxcbiAgICAgIGhlaWdodDogKHRoaXMuZGVmYXVsdF9zaXplICogdGhpcy5zaXplKSArICdweCcsXG4gICAgfVxuICAgIHRoaXMuc3JjID0gdGhpcy5zZXJ2aWNlLmdldEZyb21SZWdpc3RyeSh0aGlzLmljb24pO1xuICB9XG5cblxuICBwcml2YXRlIGZpbHRlcigpIHtcbiAgICBjb25zdCBjb25maWc6IEhleFRvQ3NzQ29uZmlndXJhdGlvbiA9IHtcbiAgICAgIGFjY2VwdGFuY2VMb3NzUGVyY2VudGFnZTogMSxcbiAgICAgIG1heENoZWNrczogMTAsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnZlcnQgPSBoZXhUb0NTU0ZpbHRlcih0aGlzLmNvbG9yLCBjb25maWcpO1xuICAgIHJldHVybiBjb252ZXJ0LmZpbHRlcj8ucmVwbGFjZSgnOycsICcnKTtcbiAgfVxufVxuIl19
import { Component, Input } from '@angular/core';
import { hexToCSSFilter } from './hex-to-css-filter';
import * as i0 from "@angular/core";
import * as i1 from "./nowboard-icon.service";
export class NowboardIconComponent {
    constructor(service) {
        this.service = service;
        this.size = 1;
        this.disabled = false;
        this.icon = '';
        this.style = '';
        this.spanStyleWrapper = {};
        this.src = '';
        this.default_size = 12;
        this.service.setColorRules.subscribe((color) => {
            if (color) {
                this.setColor();
            }
        });
    }
    ngOnInit() {
        this.setColor();
        this.src = this.service.getFromRegistry(this.icon);
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    setColor() {
        var _a, _b;
        if (!this.disabled) {
            if (!this.primary && ((_a = this.service.DefaultColor) === null || _a === void 0 ? void 0 : _a.primary)) {
                this.color = this.service.DefaultColor.primary;
            }
            else if (this.primary) {
                // @ts-ignore
                this.color = this.primary;
            }
            else {
                this.color = '#000000';
            }
        }
        else {
            if (!this.disabled_color && ((_b = this.service.DefaultColor) === null || _b === void 0 ? void 0 : _b.disabled_color)) {
                this.color = this.service.DefaultColor.disabled_color;
            }
            else if (this.disabled_color) {
                this.color = this.disabled_color;
            }
            else {
                this.color = '#000000';
            }
        }
        this.style = [
            `width: ${this.default_size * this.size}px`,
            `height: ${this.default_size * this.size}px`,
            `filter: ${this.filter()}`,
            `transform: scale(0.9)`
        ].join(';');
        this.spanStyleWrapper = {
            width: (this.default_size * this.size) + 'px',
            height: (this.default_size * this.size) + 'px',
        };
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
NowboardIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: NowboardIconComponent, selector: "nb-icon", inputs: { size: "size", primary: "primary", disabled_color: "disabled_color", disabled: "disabled", icon: "icon" }, usesOnChanges: true, ngImport: i0, template: `
    <span class="nb-icon {{icon}}-x{{size}}" [style]="spanStyleWrapper">
      <img [src]="src" style="{{style}}">
    </span>
  `, isInline: true, styles: ["span {display: inline-flex; align-items: center; justify-content: center;}"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-icon',
                    template: `
    <span class="nb-icon {{icon}}-x{{size}}" [style]="spanStyleWrapper">
      <img [src]="src" style="{{style}}">
    </span>
  `,
                    styles: ['span {display: inline-flex; align-items: center; justify-content: center;}']
                }]
        }], ctorParameters: function () { return [{ type: i1.NowboardIconService }]; }, propDecorators: { size: [{
                type: Input
            }], primary: [{
                type: Input
            }], disabled_color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3dib2FyZC1pY29uL3NyYy9saWIvbm93Ym9hcmQtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBd0IsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7OztBQVkxRSxNQUFNLE9BQU8scUJBQXFCO0lBYWhDLFlBQW1CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBWnRDLFNBQUksR0FBVyxDQUFDLENBQUM7UUFHakIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQzNCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFLdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBaUMsRUFBRSxFQUFFO1lBQ3pFLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLFFBQVE7O1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUksTUFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksMENBQUUsT0FBTyxDQUFBLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO2FBQ2hEO2lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsYUFBYTtnQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7YUFDdkI7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEtBQUksTUFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksMENBQUUsY0FBYyxDQUFBLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFBO2FBQ3REO2lCQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFBO2FBQ2pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFBO2FBQ3ZCO1NBQ0Y7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsVUFBVSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUk7WUFDM0MsV0FBVyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUk7WUFDNUMsV0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDMUIsdUJBQXVCO1NBQ3hCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3RCLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUk7WUFDN0MsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSTtTQUMvQyxDQUFBO0lBQ0gsQ0FBQztJQUVPLE1BQU07O1FBQ1osTUFBTSxNQUFNLEdBQTBCO1lBQ3BDLHdCQUF3QixFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFBLE9BQU8sQ0FBQyxNQUFNLDBDQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7bUhBdEVVLHFCQUFxQjt1R0FBckIscUJBQXFCLHdMQVB0Qjs7OztHQUlUOzRGQUdVLHFCQUFxQjtrQkFUakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFOzs7O0dBSVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUMsNEVBQTRFLENBQUM7aUJBQ3ZGOzBHQUVVLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOb3dib2FyZEljb25TZXJ2aWNlfSBmcm9tIFwiLi9ub3dib2FyZC1pY29uLnNlcnZpY2VcIjtcbmltcG9ydCB7SGV4VG9Dc3NDb25maWd1cmF0aW9uLCBoZXhUb0NTU0ZpbHRlcn0gZnJvbSAnLi9oZXgtdG8tY3NzLWZpbHRlcic7XG5pbXBvcnQge0lOb3dib2FyZEljb25Db25maWd9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1pY29uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cIm5iLWljb24ge3tpY29ufX0teHt7c2l6ZX19XCIgW3N0eWxlXT1cInNwYW5TdHlsZVdyYXBwZXJcIj5cbiAgICAgIDxpbWcgW3NyY109XCJzcmNcIiBzdHlsZT1cInt7c3R5bGV9fVwiPlxuICAgIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbJ3NwYW4ge2Rpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjt9J11cbn0pXG5leHBvcnQgY2xhc3MgTm93Ym9hcmRJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzaXplOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBwcmltYXJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGRpc2FibGVkX2NvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgc3R5bGU6IGFueSA9ICcnO1xuICBwdWJsaWMgc3BhblN0eWxlV3JhcHBlcjogYW55ID0ge307XG4gIHB1YmxpYyBzcmM6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZGVmYXVsdF9zaXplID0gMTI7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcHJpdmF0ZSBjb2xvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBOb3dib2FyZEljb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5zZXJ2aWNlLnNldENvbG9yUnVsZXMuc3Vic2NyaWJlKChjb2xvcjogSU5vd2JvYXJkSWNvbkNvbmZpZyB8IG51bGwpID0+IHtcbiAgICAgIGlmIChjb2xvcikge1xuICAgICAgICB0aGlzLnNldENvbG9yKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q29sb3IoKTtcbiAgICB0aGlzLnNyYyA9IHRoaXMuc2VydmljZS5nZXRGcm9tUmVnaXN0cnkodGhpcy5pY29uKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxuICBwcml2YXRlIHNldENvbG9yKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKCF0aGlzLnByaW1hcnkgJiYgdGhpcy5zZXJ2aWNlLkRlZmF1bHRDb2xvcj8ucHJpbWFyeSkge1xuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5zZXJ2aWNlLkRlZmF1bHRDb2xvci5wcmltYXJ5O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByaW1hcnkpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5wcmltYXJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xvciA9ICcjMDAwMDAwJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWRfY29sb3IgJiYgdGhpcy5zZXJ2aWNlLkRlZmF1bHRDb2xvcj8uZGlzYWJsZWRfY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuc2VydmljZS5EZWZhdWx0Q29sb3IuZGlzYWJsZWRfY29sb3JcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXNhYmxlZF9jb2xvcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5kaXNhYmxlZF9jb2xvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xvciA9ICcjMDAwMDAwJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3R5bGUgPSBbXG4gICAgICBgd2lkdGg6ICR7dGhpcy5kZWZhdWx0X3NpemUgKiB0aGlzLnNpemV9cHhgLFxuICAgICAgYGhlaWdodDogJHt0aGlzLmRlZmF1bHRfc2l6ZSAqIHRoaXMuc2l6ZX1weGAsXG4gICAgICBgZmlsdGVyOiAke3RoaXMuZmlsdGVyKCl9YCxcbiAgICAgIGB0cmFuc2Zvcm06IHNjYWxlKDAuOSlgXG4gICAgXS5qb2luKCc7JylcbiAgICB0aGlzLnNwYW5TdHlsZVdyYXBwZXIgPSB7XG4gICAgICB3aWR0aDogKHRoaXMuZGVmYXVsdF9zaXplICogdGhpcy5zaXplKSArICdweCcsXG4gICAgICBoZWlnaHQ6ICh0aGlzLmRlZmF1bHRfc2l6ZSAqIHRoaXMuc2l6ZSkgKyAncHgnLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyKCkge1xuICAgIGNvbnN0IGNvbmZpZzogSGV4VG9Dc3NDb25maWd1cmF0aW9uID0ge1xuICAgICAgYWNjZXB0YW5jZUxvc3NQZXJjZW50YWdlOiAxLFxuICAgICAgbWF4Q2hlY2tzOiAxMCxcbiAgICB9O1xuXG4gICAgY29uc3QgY29udmVydCA9IGhleFRvQ1NTRmlsdGVyKHRoaXMuY29sb3IsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbnZlcnQuZmlsdGVyPy5yZXBsYWNlKCc7JywgJycpO1xuICB9XG59XG4iXX0=
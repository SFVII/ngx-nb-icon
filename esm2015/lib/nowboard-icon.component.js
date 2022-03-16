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
    }
    ngOnInit() {
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
            `transform: scale(${this.size * 0.9})`
        ].join(';');
        this.spanStyleWrapper = {
            width: (this.default_size * this.size) + 'px',
            height: (this.default_size * this.size) + 'px',
        };
        this.src = this.service.getFromRegistry(this.icon);
    }
    ngOnChanges(changes) {
        this.ngOnInit();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3dib2FyZC1pY29uL3NyYy9saWIvbm93Ym9hcmQtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBd0IsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7OztBQVcxRSxNQUFNLE9BQU8scUJBQXFCO0lBYWhDLFlBQW1CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBWnRDLFNBQUksR0FBVyxDQUFDLENBQUM7UUFHakIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQzNCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFLekIsQ0FBQztJQUVELFFBQVE7O1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUksTUFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksMENBQUUsT0FBTyxDQUFBLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO2FBQ2hEO2lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsYUFBYTtnQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7YUFDdkI7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEtBQUksTUFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksMENBQUUsY0FBYyxDQUFBLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFBO2FBQ3REO2lCQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFBO2FBQ2pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFBO2FBQ3ZCO1NBQ0Y7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsVUFBVSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUk7WUFDM0MsV0FBVyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUk7WUFDNUMsV0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDMUIsb0JBQW9CLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHO1NBQ3ZDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3RCLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUk7WUFDN0MsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSTtTQUMvQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUdPLE1BQU07O1FBQ1osTUFBTSxNQUFNLEdBQTBCO1lBQ3BDLHdCQUF3QixFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFBLE9BQU8sQ0FBQyxNQUFNLDBDQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7bUhBOURVLHFCQUFxQjt1R0FBckIscUJBQXFCLHdMQVB0Qjs7OztHQUlUOzRGQUdVLHFCQUFxQjtrQkFUakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFOzs7O0dBSVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUMsNEVBQTRFLENBQUM7aUJBQ3ZGOzBHQUVVLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOb3dib2FyZEljb25TZXJ2aWNlfSBmcm9tIFwiLi9ub3dib2FyZC1pY29uLnNlcnZpY2VcIjtcbmltcG9ydCB7SGV4VG9Dc3NDb25maWd1cmF0aW9uLCBoZXhUb0NTU0ZpbHRlcn0gZnJvbSAnLi9oZXgtdG8tY3NzLWZpbHRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWljb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwibmItaWNvbiB7e2ljb259fS14e3tzaXplfX1cIiBbc3R5bGVdPVwic3BhblN0eWxlV3JhcHBlclwiPlxuICAgICAgPGltZyBbc3JjXT1cInNyY1wiIHN0eWxlPVwie3tzdHlsZX19XCI+XG4gICAgPC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFsnc3BhbiB7ZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO30nXVxufSlcbmV4cG9ydCBjbGFzcyBOb3dib2FyZEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIHByaW1hcnk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgZGlzYWJsZWRfY29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzdHlsZTogYW55ID0gJyc7XG4gIHB1YmxpYyBzcGFuU3R5bGVXcmFwcGVyOiBhbnkgPSB7fTtcbiAgcHVibGljIHNyYzogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBkZWZhdWx0X3NpemUgPSAxMjtcbiAgLy8gQHRzLWlnbm9yZVxuICBwcml2YXRlIGNvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE5vd2JvYXJkSWNvblNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKCF0aGlzLnByaW1hcnkgJiYgdGhpcy5zZXJ2aWNlLkRlZmF1bHRDb2xvcj8ucHJpbWFyeSkge1xuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5zZXJ2aWNlLkRlZmF1bHRDb2xvci5wcmltYXJ5O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByaW1hcnkpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5wcmltYXJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xvciA9ICcjMDAwMDAwJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWRfY29sb3IgJiYgdGhpcy5zZXJ2aWNlLkRlZmF1bHRDb2xvcj8uZGlzYWJsZWRfY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuc2VydmljZS5EZWZhdWx0Q29sb3IuZGlzYWJsZWRfY29sb3JcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXNhYmxlZF9jb2xvcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5kaXNhYmxlZF9jb2xvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xvciA9ICcjMDAwMDAwJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3R5bGUgPSBbXG4gICAgICBgd2lkdGg6ICR7dGhpcy5kZWZhdWx0X3NpemUgKiB0aGlzLnNpemV9cHhgLFxuICAgICAgYGhlaWdodDogJHt0aGlzLmRlZmF1bHRfc2l6ZSAqIHRoaXMuc2l6ZX1weGAsXG4gICAgICBgZmlsdGVyOiAke3RoaXMuZmlsdGVyKCl9YCxcbiAgICAgIGB0cmFuc2Zvcm06IHNjYWxlKCR7dGhpcy5zaXplICogMC45fSlgXG4gICAgXS5qb2luKCc7JylcbiAgICB0aGlzLnNwYW5TdHlsZVdyYXBwZXIgPSB7XG4gICAgICB3aWR0aDogKHRoaXMuZGVmYXVsdF9zaXplICogdGhpcy5zaXplKSArICdweCcsXG4gICAgICBoZWlnaHQ6ICh0aGlzLmRlZmF1bHRfc2l6ZSAqIHRoaXMuc2l6ZSkgKyAncHgnLFxuICAgIH1cbiAgICB0aGlzLnNyYyA9IHRoaXMuc2VydmljZS5nZXRGcm9tUmVnaXN0cnkodGhpcy5pY29uKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxuXG4gIHByaXZhdGUgZmlsdGVyKCkge1xuICAgIGNvbnN0IGNvbmZpZzogSGV4VG9Dc3NDb25maWd1cmF0aW9uID0ge1xuICAgICAgYWNjZXB0YW5jZUxvc3NQZXJjZW50YWdlOiAxLFxuICAgICAgbWF4Q2hlY2tzOiAxMCxcbiAgICB9O1xuXG4gICAgY29uc3QgY29udmVydCA9IGhleFRvQ1NTRmlsdGVyKHRoaXMuY29sb3IsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbnZlcnQuZmlsdGVyPy5yZXBsYWNlKCc7JywgJycpO1xuICB9XG59XG4iXX0=
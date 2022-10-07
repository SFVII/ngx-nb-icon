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
        if (!this.disabled) {
            if (!this.primary && this.service.DefaultColor?.primary) {
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
            if (!this.disabled_color && this.service.DefaultColor?.disabled_color) {
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
        const config = {
            acceptanceLossPercentage: 1,
            maxChecks: 10,
        };
        const convert = hexToCSSFilter(this.color, config);
        return convert.filter?.replace(';', '');
    }
}
NowboardIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NowboardIconComponent, deps: [{ token: i1.NowboardIconService }], target: i0.ɵɵFactoryTarget.Component });
NowboardIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.5", type: NowboardIconComponent, selector: "nb-icon", inputs: { size: "size", primary: "primary", disabled_color: "disabled_color", disabled: "disabled", icon: "icon" }, usesOnChanges: true, ngImport: i0, template: `
    <span class="nb-icon {{icon}}-x{{size}}" [style]="spanStyleWrapper">
      <img [src]="src" style="{{style}}">
    </span>
  `, isInline: true, styles: ["span{display:inline-flex;align-items:center;justify-content:center}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NowboardIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-icon', template: `
    <span class="nb-icon {{icon}}-x{{size}}" [style]="spanStyleWrapper">
      <img [src]="src" style="{{style}}">
    </span>
  `, styles: ["span{display:inline-flex;align-items:center;justify-content:center}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3dib2FyZC1pY29uL3NyYy9saWIvbm93Ym9hcmQtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBd0IsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7OztBQVkxRSxNQUFNLE9BQU8scUJBQXFCO0lBYWhDLFlBQW1CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBWnRDLFNBQUksR0FBVyxDQUFDLENBQUM7UUFHakIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQzNCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFLdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBaUMsRUFBRSxFQUFFO1lBQ3pFLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLFFBQVE7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO2FBQ2hEO2lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsYUFBYTtnQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7YUFDdkI7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFO2dCQUNyRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQTthQUN0RDtpQkFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQTthQUNqQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQTthQUN2QjtTQUNGO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFVBQVUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJO1lBQzNDLFdBQVcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJO1lBQzVDLFdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzFCLHVCQUF1QjtTQUN4QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUN0QixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJO1lBQzdDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUk7U0FDL0MsQ0FBQTtJQUNILENBQUM7SUFFTyxNQUFNO1FBQ1osTUFBTSxNQUFNLEdBQTBCO1lBQ3BDLHdCQUF3QixFQUFFLENBQUM7WUFDM0IsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7a0hBdEVVLHFCQUFxQjtzR0FBckIscUJBQXFCLHdMQVB0Qjs7OztHQUlUOzJGQUdVLHFCQUFxQjtrQkFUakMsU0FBUzsrQkFDRSxTQUFTLFlBQ1Q7Ozs7R0FJVDswR0FJUSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tm93Ym9hcmRJY29uU2VydmljZX0gZnJvbSBcIi4vbm93Ym9hcmQtaWNvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0hleFRvQ3NzQ29uZmlndXJhdGlvbiwgaGV4VG9DU1NGaWx0ZXJ9IGZyb20gJy4vaGV4LXRvLWNzcy1maWx0ZXInO1xuaW1wb3J0IHtJTm93Ym9hcmRJY29uQ29uZmlnfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItaWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJuYi1pY29uIHt7aWNvbn19LXh7e3NpemV9fVwiIFtzdHlsZV09XCJzcGFuU3R5bGVXcmFwcGVyXCI+XG4gICAgICA8aW1nIFtzcmNdPVwic3JjXCIgc3R5bGU9XCJ7e3N0eWxlfX1cIj5cbiAgICA8L3NwYW4+XG4gIGAsXG4gIHN0eWxlczogWydzcGFuIHtkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7fSddXG59KVxuZXhwb3J0IGNsYXNzIE5vd2JvYXJkSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyID0gMTtcbiAgQElucHV0KCkgcHJpbWFyeTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBkaXNhYmxlZF9jb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHN0eWxlOiBhbnkgPSAnJztcbiAgcHVibGljIHNwYW5TdHlsZVdyYXBwZXI6IGFueSA9IHt9O1xuICBwdWJsaWMgc3JjOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGRlZmF1bHRfc2l6ZSA9IDEyO1xuICAvLyBAdHMtaWdub3JlXG4gIHByaXZhdGUgY29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogTm93Ym9hcmRJY29uU2VydmljZSkge1xuICAgIHRoaXMuc2VydmljZS5zZXRDb2xvclJ1bGVzLnN1YnNjcmliZSgoY29sb3I6IElOb3dib2FyZEljb25Db25maWcgfCBudWxsKSA9PiB7XG4gICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgdGhpcy5zZXRDb2xvcigpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENvbG9yKCk7XG4gICAgdGhpcy5zcmMgPSB0aGlzLnNlcnZpY2UuZ2V0RnJvbVJlZ2lzdHJ5KHRoaXMuaWNvbik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb2xvcigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICghdGhpcy5wcmltYXJ5ICYmIHRoaXMuc2VydmljZS5EZWZhdWx0Q29sb3I/LnByaW1hcnkpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuc2VydmljZS5EZWZhdWx0Q29sb3IucHJpbWFyeTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmltYXJ5KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMucHJpbWFyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSAnIzAwMDAwMCdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkX2NvbG9yICYmIHRoaXMuc2VydmljZS5EZWZhdWx0Q29sb3I/LmRpc2FibGVkX2NvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLnNlcnZpY2UuRGVmYXVsdENvbG9yLmRpc2FibGVkX2NvbG9yXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGlzYWJsZWRfY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGlzYWJsZWRfY29sb3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSAnIzAwMDAwMCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnN0eWxlID0gW1xuICAgICAgYHdpZHRoOiAke3RoaXMuZGVmYXVsdF9zaXplICogdGhpcy5zaXplfXB4YCxcbiAgICAgIGBoZWlnaHQ6ICR7dGhpcy5kZWZhdWx0X3NpemUgKiB0aGlzLnNpemV9cHhgLFxuICAgICAgYGZpbHRlcjogJHt0aGlzLmZpbHRlcigpfWAsXG4gICAgICBgdHJhbnNmb3JtOiBzY2FsZSgwLjkpYFxuICAgIF0uam9pbignOycpXG4gICAgdGhpcy5zcGFuU3R5bGVXcmFwcGVyID0ge1xuICAgICAgd2lkdGg6ICh0aGlzLmRlZmF1bHRfc2l6ZSAqIHRoaXMuc2l6ZSkgKyAncHgnLFxuICAgICAgaGVpZ2h0OiAodGhpcy5kZWZhdWx0X3NpemUgKiB0aGlzLnNpemUpICsgJ3B4JyxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbHRlcigpIHtcbiAgICBjb25zdCBjb25maWc6IEhleFRvQ3NzQ29uZmlndXJhdGlvbiA9IHtcbiAgICAgIGFjY2VwdGFuY2VMb3NzUGVyY2VudGFnZTogMSxcbiAgICAgIG1heENoZWNrczogMTAsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnZlcnQgPSBoZXhUb0NTU0ZpbHRlcih0aGlzLmNvbG9yLCBjb25maWcpO1xuICAgIHJldHVybiBjb252ZXJ0LmZpbHRlcj8ucmVwbGFjZSgnOycsICcnKTtcbiAgfVxufVxuIl19
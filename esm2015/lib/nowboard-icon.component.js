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
            }], color: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3dib2FyZC1pY29uL3NyYy9saWIvbm93Ym9hcmQtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQsT0FBTyxFQUF3QixjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBVzFFLE1BQU0sT0FBTyxxQkFBcUI7SUFTaEMsWUFBbUIsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFSdEMsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixVQUFLLEdBQVcsT0FBTyxDQUFDO1FBQ3hCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUd6QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxVQUFVLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSTtZQUMzQyxXQUFXLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSTtZQUM1QyxXQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMxQixvQkFBb0IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUc7U0FDdkMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSTtZQUM3QyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJO1NBQy9DLENBQUE7UUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBR08sTUFBTTs7UUFDWixNQUFNLE1BQU0sR0FBMEI7WUFDcEMsd0JBQXdCLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFFRixNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLE1BQUEsT0FBTyxDQUFDLE1BQU0sMENBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzttSEFuQ1UscUJBQXFCO3VHQUFyQixxQkFBcUIsdUdBUHRCOzs7O0dBSVQ7NEZBR1UscUJBQXFCO2tCQVRqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxNQUFNLEVBQUUsQ0FBQyw0RUFBNEUsQ0FBQztpQkFDdkY7MEdBRVUsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05vd2JvYXJkSWNvblNlcnZpY2V9IGZyb20gXCIuL25vd2JvYXJkLWljb24uc2VydmljZVwiO1xuaW1wb3J0IHtIZXhUb0Nzc0NvbmZpZ3VyYXRpb24sIGhleFRvQ1NTRmlsdGVyfSBmcm9tICcuL2hleC10by1jc3MtZmlsdGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItaWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJuYi1pY29uIHt7aWNvbn19LXh7e3NpemV9fVwiIFtzdHlsZV09XCJzcGFuU3R5bGVXcmFwcGVyXCI+XG4gICAgICA8aW1nIFtzcmNdPVwic3JjXCIgc3R5bGU9XCJ7e3N0eWxlfX1cIj5cbiAgICA8L3NwYW4+XG4gIGAsXG4gIHN0eWxlczogWydzcGFuIHtkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7fSddXG59KVxuZXhwb3J0IGNsYXNzIE5vd2JvYXJkSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnd2hpdGUnO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHN0eWxlOiBhbnkgPSAnJztcbiAgcHVibGljIHNwYW5TdHlsZVdyYXBwZXI6IGFueSA9IHt9O1xuICBwdWJsaWMgc3JjOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGRlZmF1bHRfc2l6ZSA9IDEyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBOb3dib2FyZEljb25TZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0eWxlID0gW1xuICAgICAgYHdpZHRoOiAke3RoaXMuZGVmYXVsdF9zaXplICogdGhpcy5zaXplfXB4YCxcbiAgICAgIGBoZWlnaHQ6ICR7dGhpcy5kZWZhdWx0X3NpemUgKiB0aGlzLnNpemV9cHhgLFxuICAgICAgYGZpbHRlcjogJHt0aGlzLmZpbHRlcigpfWAsXG4gICAgICBgdHJhbnNmb3JtOiBzY2FsZSgke3RoaXMuc2l6ZSAqIDAuOX0pYFxuICAgIF0uam9pbignOycpXG4gICAgdGhpcy5zcGFuU3R5bGVXcmFwcGVyID0ge1xuICAgICAgd2lkdGg6ICh0aGlzLmRlZmF1bHRfc2l6ZSAqIHRoaXMuc2l6ZSkgKyAncHgnLFxuICAgICAgaGVpZ2h0OiAodGhpcy5kZWZhdWx0X3NpemUgKiB0aGlzLnNpemUpICsgJ3B4JyxcbiAgICB9XG4gICAgdGhpcy5zcmMgPSB0aGlzLnNlcnZpY2UuZ2V0RnJvbVJlZ2lzdHJ5KHRoaXMuaWNvbik7XG4gIH1cblxuXG4gIHByaXZhdGUgZmlsdGVyKCkge1xuICAgIGNvbnN0IGNvbmZpZzogSGV4VG9Dc3NDb25maWd1cmF0aW9uID0ge1xuICAgICAgYWNjZXB0YW5jZUxvc3NQZXJjZW50YWdlOiAxLFxuICAgICAgbWF4Q2hlY2tzOiAxMCxcbiAgICB9O1xuXG4gICAgY29uc3QgY29udmVydCA9IGhleFRvQ1NTRmlsdGVyKHRoaXMuY29sb3IsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbnZlcnQuZmlsdGVyPy5yZXBsYWNlKCc7JywgJycpO1xuICB9XG59XG4iXX0=
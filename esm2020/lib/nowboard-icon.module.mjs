import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NowboardIconComponent } from './nowboard-icon.component';
import { NowboardIconService } from "./nowboard-icon.service";
import * as i0 from "@angular/core";
export class NowboardIconModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NowboardIconModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: NowboardIconModule,
            providers: [
                { provide: '__NowboardIcon__', useValue: config },
                NowboardIconService
            ]
        };
    }
}
NowboardIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NowboardIconModule, deps: [{ token: NowboardIconModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
NowboardIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.5", ngImport: i0, type: NowboardIconModule, declarations: [NowboardIconComponent], exports: [NowboardIconComponent] });
NowboardIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NowboardIconModule, providers: [
        NowboardIconService
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NowboardIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NowboardIconComponent
                    ],
                    imports: [],
                    exports: [
                        NowboardIconComponent
                    ],
                    providers: [
                        NowboardIconService
                    ]
                }]
        }], ctorParameters: function () { return [{ type: NowboardIconModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3dib2FyZC1pY29uL3NyYy9saWIvbm93Ym9hcmQtaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7QUFpQjVELE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0MsWUFBaUM7UUFDbkUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYix1RUFBdUUsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBMkI7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQy9DLG1CQUFtQjthQUNwQjtTQUNGLENBQUM7SUFDSixDQUFDOzsrR0FoQlUsa0JBQWtCO2dIQUFsQixrQkFBa0IsaUJBVjNCLHFCQUFxQixhQUlyQixxQkFBcUI7Z0hBTVosa0JBQWtCLGFBSmxCO1FBQ1QsbUJBQW1CO0tBQ3BCOzJGQUVVLGtCQUFrQjtrQkFaOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsbUJBQW1CO3FCQUNwQjtpQkFDRjs7MEJBRWMsUUFBUTs7MEJBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05vd2JvYXJkSWNvbkNvbXBvbmVudH0gZnJvbSAnLi9ub3dib2FyZC1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQge05vd2JvYXJkSWNvblNlcnZpY2V9IGZyb20gXCIuL25vd2JvYXJkLWljb24uc2VydmljZVwiO1xuaW1wb3J0IHtJTm93Ym9hcmRJY29uQ29uZmlnfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vd2JvYXJkSWNvbkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW1xuICAgIE5vd2JvYXJkSWNvbkNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBOb3dib2FyZEljb25TZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTm93Ym9hcmRJY29uTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogTm93Ym9hcmRJY29uTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTm93Ym9hcmRJY29uTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSU5vd2JvYXJkSWNvbkNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tm93Ym9hcmRJY29uTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOb3dib2FyZEljb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdfX05vd2JvYXJkSWNvbl9fJywgdXNlVmFsdWU6IGNvbmZpZ30sXG4gICAgICAgIE5vd2JvYXJkSWNvblNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=
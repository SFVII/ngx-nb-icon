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
NowboardIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconModule, deps: [{ token: NowboardIconModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
NowboardIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconModule, declarations: [NowboardIconComponent], exports: [NowboardIconComponent] });
NowboardIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconModule, providers: [
        NowboardIconService
    ], imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3dib2FyZC1pY29uL3NyYy9saWIvbm93Ym9hcmQtaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7QUFpQjVELE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0MsWUFBaUM7UUFDbkUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYix1RUFBdUUsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBMkI7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQy9DLG1CQUFtQjthQUNwQjtTQUNGLENBQUM7SUFDSixDQUFDOztnSEFoQlUsa0JBQWtCLGtCQUNzQixrQkFBa0I7aUhBRDFELGtCQUFrQixpQkFWM0IscUJBQXFCLGFBSXJCLHFCQUFxQjtpSEFNWixrQkFBa0IsYUFKbEI7UUFDVCxtQkFBbUI7S0FDcEIsWUFOUSxFQUFFOzRGQVFBLGtCQUFrQjtrQkFaOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsbUJBQW1CO3FCQUNwQjtpQkFDRjswREFFb0Qsa0JBQWtCOzBCQUF4RCxRQUFROzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tm93Ym9hcmRJY29uQ29tcG9uZW50fSBmcm9tICcuL25vd2JvYXJkLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7Tm93Ym9hcmRJY29uU2VydmljZX0gZnJvbSBcIi4vbm93Ym9hcmQtaWNvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0lOb3dib2FyZEljb25Db25maWd9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm93Ym9hcmRJY29uQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbXG4gICAgTm93Ym9hcmRJY29uQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5vd2JvYXJkSWNvblNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOb3dib2FyZEljb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBOb3dib2FyZEljb25Nb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdOb3dib2FyZEljb25Nb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBJTm93Ym9hcmRJY29uQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOb3dib2FyZEljb25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5vd2JvYXJkSWNvbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ19fTm93Ym9hcmRJY29uX18nLCB1c2VWYWx1ZTogY29uZmlnfSxcbiAgICAgICAgTm93Ym9hcmRJY29uU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
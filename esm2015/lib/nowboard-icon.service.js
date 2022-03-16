import { Injectable } from '@angular/core';
import { IconRegistry } from "./icon-database";
import * as i0 from "@angular/core";
export class NowboardIconService {
    constructor() {
        this.registry = IconRegistry;
    }
    getFromRegistry(key) {
        console.log(this.registry[key]);
        return this.registry[key];
    }
    addRegistry(key, path) {
        this.registry[key] = path;
    }
}
NowboardIconService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NowboardIconService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbm93Ym9hcmQtaWNvbi9zcmMvbGliL25vd2JvYXJkLWljb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLG1CQUFtQjtJQUc5QjtRQUZPLGFBQVEsR0FBOEIsWUFBWSxDQUFBO0lBSXpELENBQUM7SUFFRCxlQUFlLENBQUMsR0FBVztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUMvQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFXLEVBQUUsSUFBWTtRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDOztpSEFkVSxtQkFBbUI7cUhBQW5CLG1CQUFtQixjQUZsQixNQUFNOzRGQUVQLG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJY29uUmVnaXN0cnl9IGZyb20gXCIuL2ljb24tZGF0YWJhc2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm93Ym9hcmRJY29uU2VydmljZSB7XG4gIHB1YmxpYyByZWdpc3RyeTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IEljb25SZWdpc3RyeVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBnZXRGcm9tUmVnaXN0cnkoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJlZ2lzdHJ5W2tleV0pXG4gICAgcmV0dXJuIHRoaXMucmVnaXN0cnlba2V5XTtcbiAgfVxuXG4gIGFkZFJlZ2lzdHJ5KGtleTogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5W2tleV0gPSBwYXRoO1xuICB9XG59XG4iXX0=
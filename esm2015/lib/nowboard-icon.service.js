import { Inject, Injectable } from '@angular/core';
import { IconRegistry } from "./icon-database";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export class NowboardIconService {
    constructor(config) {
        this.registry = IconRegistry;
        this.setColorRules = new BehaviorSubject(null);
        if (config)
            this.DefaultColor = config;
        this.setColorRules.subscribe((colors) => {
            if (colors) {
                this.DefaultColor = colors;
            }
        });
    }
    getFromRegistry(key) {
        console.log(this.registry[key]);
        return this.registry[key];
    }
    addRegistry(key, path) {
        this.registry[key] = path;
    }
}
NowboardIconService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconService, deps: [{ token: '__NowboardIcon__' }], target: i0.ɵɵFactoryTarget.Injectable });
NowboardIconService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NowboardIconService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['__NowboardIcon__']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbm93Ym9hcmQtaWNvbi9zcmMvbGliL25vd2JvYXJkLWljb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFNckMsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QixZQUF3QyxNQUE0QjtRQUo3RCxhQUFRLEdBQThCLFlBQVksQ0FBQTtRQUNsRCxrQkFBYSxHQUFnRCxJQUFJLGVBQWUsQ0FBNkIsSUFBSSxDQUFDLENBQUE7UUFJdkgsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFrQyxFQUFFLEVBQUU7WUFDbEUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7YUFDNUI7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxlQUFlLENBQUMsR0FBVztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUMvQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFXLEVBQUUsSUFBWTtRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDOztpSEFyQlUsbUJBQW1CLGtCQUtWLGtCQUFrQjtxSEFMM0IsbUJBQW1CLGNBRmxCLE1BQU07NEZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBTWMsTUFBTTsyQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ljb25SZWdpc3RyeX0gZnJvbSBcIi4vaWNvbi1kYXRhYmFzZVwiO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0lOb3dib2FyZEljb25Db25maWd9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOb3dib2FyZEljb25TZXJ2aWNlIHtcbiAgcHVibGljIHJlZ2lzdHJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gSWNvblJlZ2lzdHJ5XG4gIHB1YmxpYyBzZXRDb2xvclJ1bGVzOiBCZWhhdmlvclN1YmplY3Q8SU5vd2JvYXJkSWNvbkNvbmZpZyB8IG51bGw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJTm93Ym9hcmRJY29uQ29uZmlnIHwgbnVsbD4obnVsbClcbiAgcHVibGljIERlZmF1bHRDb2xvcjogSU5vd2JvYXJkSWNvbkNvbmZpZyB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05vd2JvYXJkSWNvbl9fJykgY29uZmlnPzogSU5vd2JvYXJkSWNvbkNvbmZpZykge1xuICAgIGlmIChjb25maWcpIHRoaXMuRGVmYXVsdENvbG9yID0gY29uZmlnO1xuICAgIHRoaXMuc2V0Q29sb3JSdWxlcy5zdWJzY3JpYmUoKGNvbG9yczogSU5vd2JvYXJkSWNvbkNvbmZpZyB8IG51bGwpID0+IHtcbiAgICAgIGlmIChjb2xvcnMpIHtcbiAgICAgICAgdGhpcy5EZWZhdWx0Q29sb3IgPSBjb2xvcnM7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldEZyb21SZWdpc3RyeShrZXk6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucmVnaXN0cnlba2V5XSlcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RyeVtrZXldO1xuICB9XG5cbiAgYWRkUmVnaXN0cnkoa2V5OiBzdHJpbmcsIHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMucmVnaXN0cnlba2V5XSA9IHBhdGg7XG4gIH1cbn1cbiJdfQ==
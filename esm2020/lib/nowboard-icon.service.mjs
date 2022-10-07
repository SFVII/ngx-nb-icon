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
        return this.registry[key];
    }
    addRegistry(key, path) {
        this.registry[key] = path;
    }
}
NowboardIconService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NowboardIconService, deps: [{ token: '__NowboardIcon__' }], target: i0.ɵɵFactoryTarget.Injectable });
NowboardIconService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NowboardIconService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NowboardIconService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['__NowboardIcon__']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbm93Ym9hcmQtaWNvbi9zcmMvbGliL25vd2JvYXJkLWljb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFNckMsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QixZQUF3QyxNQUEyQjtRQUo1RCxhQUFRLEdBQThCLFlBQVksQ0FBQTtRQUNsRCxrQkFBYSxHQUFnRCxJQUFJLGVBQWUsQ0FBNkIsSUFBSSxDQUFDLENBQUE7UUFJdkgsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFrQyxFQUFFLEVBQUU7WUFDbEUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7YUFDNUI7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxlQUFlLENBQUMsR0FBVztRQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFXLEVBQUUsSUFBWTtRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDOztnSEFwQlUsbUJBQW1CLGtCQUtWLGtCQUFrQjtvSEFMM0IsbUJBQW1CLGNBRmxCLE1BQU07MkZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBTWMsTUFBTTsyQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ljb25SZWdpc3RyeX0gZnJvbSBcIi4vaWNvbi1kYXRhYmFzZVwiO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0lOb3dib2FyZEljb25Db25maWd9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOb3dib2FyZEljb25TZXJ2aWNlIHtcbiAgcHVibGljIHJlZ2lzdHJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gSWNvblJlZ2lzdHJ5XG4gIHB1YmxpYyBzZXRDb2xvclJ1bGVzOiBCZWhhdmlvclN1YmplY3Q8SU5vd2JvYXJkSWNvbkNvbmZpZyB8IG51bGw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJTm93Ym9hcmRJY29uQ29uZmlnIHwgbnVsbD4obnVsbClcbiAgcHVibGljIERlZmF1bHRDb2xvcjogSU5vd2JvYXJkSWNvbkNvbmZpZyB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05vd2JvYXJkSWNvbl9fJykgY29uZmlnOiBJTm93Ym9hcmRJY29uQ29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZykgdGhpcy5EZWZhdWx0Q29sb3IgPSBjb25maWc7XG4gICAgdGhpcy5zZXRDb2xvclJ1bGVzLnN1YnNjcmliZSgoY29sb3JzOiBJTm93Ym9hcmRJY29uQ29uZmlnIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKGNvbG9ycykge1xuICAgICAgICB0aGlzLkRlZmF1bHRDb2xvciA9IGNvbG9ycztcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZ2V0RnJvbVJlZ2lzdHJ5KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0cnlba2V5XTtcbiAgfVxuXG4gIGFkZFJlZ2lzdHJ5KGtleTogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5W2tleV0gPSBwYXRoO1xuICB9XG59XG4iXX0=
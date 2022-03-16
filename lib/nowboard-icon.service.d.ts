import * as i0 from "@angular/core";
export declare class NowboardIconService {
    registry: {
        [key: string]: string;
    };
    constructor();
    getFromRegistry(key: string): string;
    addRegistry(key: string, path: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NowboardIconService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NowboardIconService>;
}

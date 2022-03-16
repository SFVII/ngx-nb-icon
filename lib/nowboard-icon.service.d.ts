import { BehaviorSubject } from "rxjs";
import { INowboardIconConfig } from "./interface";
import * as i0 from "@angular/core";
export declare class NowboardIconService {
    registry: {
        [key: string]: string;
    };
    setColorRules: BehaviorSubject<INowboardIconConfig | null>;
    DefaultColor: INowboardIconConfig | undefined;
    constructor(config?: INowboardIconConfig);
    getFromRegistry(key: string): string;
    addRegistry(key: string, path: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NowboardIconService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NowboardIconService>;
}

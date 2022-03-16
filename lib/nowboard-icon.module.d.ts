import { ModuleWithProviders } from '@angular/core';
import { INowboardIconConfig } from "./interface";
import * as i0 from "@angular/core";
import * as i1 from "./nowboard-icon.component";
export declare class NowboardIconModule {
    constructor(parentModule?: NowboardIconModule);
    static forRoot(config: INowboardIconConfig): ModuleWithProviders<NowboardIconModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NowboardIconModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NowboardIconModule, [typeof i1.NowboardIconComponent], never, [typeof i1.NowboardIconComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NowboardIconModule>;
}

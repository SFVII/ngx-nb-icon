import { OnInit } from '@angular/core';
import { NowboardIconService } from "./nowboard-icon.service";
import * as i0 from "@angular/core";
export declare class NowboardIconComponent implements OnInit {
    service: NowboardIconService;
    size: number;
    color: string;
    icon: string;
    style: any;
    spanStyleWrapper: any;
    src: string;
    default_size: number;
    constructor(service: NowboardIconService);
    ngOnInit(): void;
    private filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<NowboardIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NowboardIconComponent, "nb-icon", never, { "size": "size"; "color": "color"; "icon": "icon"; }, {}, never, never>;
}

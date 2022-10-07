import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NowboardIconService } from "./nowboard-icon.service";
import * as i0 from "@angular/core";
export declare class NowboardIconComponent implements OnInit, OnChanges {
    service: NowboardIconService;
    size: number;
    primary: string | undefined;
    disabled_color: string | undefined;
    disabled: boolean;
    icon: string;
    style: any;
    spanStyleWrapper: any;
    src: string;
    default_size: number;
    private color;
    constructor(service: NowboardIconService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private setColor;
    private filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<NowboardIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NowboardIconComponent, "nb-icon", never, { "size": "size"; "primary": "primary"; "disabled_color": "disabled_color"; "disabled": "disabled"; "icon": "icon"; }, {}, never, never, false>;
}

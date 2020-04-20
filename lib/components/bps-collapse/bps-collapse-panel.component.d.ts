import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core';
import { BpsCollapseComponent } from './bps-collapse.component';
export declare class BpsCollapsePanelComponent implements OnInit, OnDestroy {
    nzConfigService: NzConfigService;
    private cdr;
    private bpsCollapseComponent;
    bpsActive: boolean;
    bpsDisabled: boolean;
    bpsShowArrow: boolean;
    bpsExtra: string | TemplateRef<void>;
    bpsHeader: string | TemplateRef<void>;
    bpsExpandedIcon: string | TemplateRef<void>;
    readonly bpsActiveChange: EventEmitter<boolean>;
    clickHeader(): void;
    markForCheck(): void;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, bpsCollapseComponent: BpsCollapseComponent, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

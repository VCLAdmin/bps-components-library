import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { BpsOptionComponent } from './bps-option.component';
import { BpsSelectService } from './bps-select.service';
export declare class BpsOptionLiComponent implements OnInit, OnDestroy {
    private elementRef;
    nzSelectService: BpsSelectService;
    private cdr;
    el: HTMLElement;
    selected: boolean;
    active: boolean;
    destroy$: Subject<unknown>;
    bpsOption: BpsOptionComponent;
    bpsMenuItemSelectedIcon: TemplateRef<void>;
    clickOption(): void;
    constructor(elementRef: ElementRef, nzSelectService: BpsSelectService, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

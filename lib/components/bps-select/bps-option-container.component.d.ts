import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { BpsOptionGroupComponent } from './bps-option-group.component';
import { BpsOptionLiComponent } from './bps-option-li.component';
import { BpsOptionComponent } from './bps-option.component';
import { BpsSelectService } from './bps-select.service';
export declare class BpsOptionContainerComponent implements OnDestroy, OnInit, AfterViewInit {
    nzSelectService: BpsSelectService;
    private cdr;
    private ngZone;
    private destroy$;
    private lastScrollTop;
    listOfNzOptionLiComponent: QueryList<BpsOptionLiComponent>;
    dropdownUl: ElementRef<HTMLUListElement>;
    bpsNotFoundContent: string;
    bpsMenuItemSelectedIcon: TemplateRef<void>;
    readonly bpsScrollToBottom: EventEmitter<void>;
    scrollIntoViewIfNeeded(option: BpsOptionComponent): void;
    trackLabel(_index: number, option: BpsOptionGroupComponent): string | TemplateRef<void>;
    trackValue(_index: number, option: BpsOptionComponent): any;
    constructor(nzSelectService: BpsSelectService, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}

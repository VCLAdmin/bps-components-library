import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, QueryList, Renderer2, TemplateRef, EventEmitter } from '@angular/core';
import { BpsListItemMetaComponent } from './bps-list-item-meta.component';
import { BpsListComponent } from './bps-list.component';
export declare class BpsListItemComponent implements OnDestroy, AfterViewInit {
    private parentComp;
    private cdr;
    _onDeleteHover: boolean;
    metas: QueryList<BpsListItemMetaComponent>;
    bpsActions: Array<TemplateRef<void>>;
    bpsContent: string | TemplateRef<void>;
    bpsExtra: TemplateRef<void>;
    bpsNoFlex: boolean;
    bpsDelete: boolean;
    ondelete: EventEmitter<any>;
    private itemLayout;
    private itemLayout$;
    get isVerticalAndExtra(): boolean;
    onDelete(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, parentComp: BpsListComponent, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}

import { AfterContentInit, ChangeDetectorRef, ElementRef, Injector, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzMenuBaseService, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzMenuDropdownService } from 'ng-zorro-antd';
export declare type NzPlacementType = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'rightTop';
export declare function dropdownMenuServiceFactory(injector: Injector): NzMenuBaseService;
export declare class BpsDropdownMenuComponent implements AfterContentInit {
    private cdr;
    private elementRef;
    private renderer;
    viewContainerRef: ViewContainerRef;
    nzMenuDropdownService: NzMenuDropdownService;
    noAnimation?: NzNoAnimationDirective;
    open: boolean;
    triggerWidth: number;
    dropDownPosition: 'top' | 'center' | 'bottom';
    visible$: Subject<boolean>;
    bpsTrigger: 'click' | 'hover';
    bpsPlacement: NzPlacementType;
    bpsOverlayClassName: string;
    bpsOverlayStyle: {
        [key: string]: string;
    };
    bpsTableFilter: boolean;
    templateRef: TemplateRef<any>;
    setVisibleStateWhen(visible: boolean, trigger?: 'click' | 'hover' | 'all'): void;
    setValue<T extends keyof BpsDropdownMenuComponent>(key: T, value: this[T]): void;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, viewContainerRef: ViewContainerRef, nzMenuDropdownService: NzMenuDropdownService, noAnimation?: NzNoAnimationDirective);
    ngAfterContentInit(): void;
}

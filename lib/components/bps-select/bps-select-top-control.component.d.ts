import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { BpsOptionComponent } from './bps-option.component';
import { BpsSelectService } from './bps-select.service';
export declare class BpsSelectTopControlComponent implements OnInit, OnDestroy {
    private renderer;
    nzSelectService: BpsSelectService;
    private cdr;
    noAnimation?: NzNoAnimationDirective;
    inputValue: string;
    isComposing: boolean;
    private destroy$;
    inputElement: ElementRef;
    mirrorElement: ElementRef;
    bpsShowSearch: boolean;
    bpsPlaceHolder: string;
    bpsOpen: boolean;
    bpsMaxTagCount: number;
    bpsAllowClear: boolean;
    bpsShowArrow: boolean;
    bpsLoading: boolean;
    bpsCustomTemplate: TemplateRef<{
        $implicit: BpsOptionComponent;
    }>;
    bpsSuffixIcon: TemplateRef<void>;
    bpsClearIcon: TemplateRef<void>;
    bpsRemoveIcon: TemplateRef<void>;
    bpsMaxTagPlaceholder: TemplateRef<{
        $implicit: any[];
    }>;
    bpsTokenSeparators: string[];
    onClearSelection(e: MouseEvent): void;
    setInputValue(value: string): void;
    get mirrorDOM(): HTMLElement;
    get inputDOM(): HTMLInputElement;
    get placeHolderDisplay(): string;
    get selectedValueStyle(): {
        [key: string]: string;
    };
    trackValue(_index: number, option: BpsOptionComponent): any;
    updateWidth(): void;
    removeSelectedValue(option: BpsOptionComponent, e: MouseEvent): void;
    animationEnd(): void;
    constructor(renderer: Renderer2, nzSelectService: BpsSelectService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

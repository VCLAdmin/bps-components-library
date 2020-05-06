import { ComponentFactory, ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipTrigger } from 'ng-zorro-antd/tooltip';
import { BpsPopoverComponent } from './bps-popover.component';
import { NzTooltipBaseDirective } from './base/nz-tooltip-base.directive';
export declare type BpsPopoverType = 'variation_1' | 'variation_2' | 'variation_3' | 'variation_4' | 'variation_5' | 'variation_6' | 'variation_7a' | 'variation_7b' | 'variation_8a' | 'variation_8b' | 'variation_9a' | 'variation_9b' | 'variation_10' | 'variation_11';
export declare class BpsPopoverDirective extends NzTooltipBaseDirective {
    noAnimation?: NzNoAnimationDirective;
    specificTitle: NzTSType;
    specificContent: NzTSType;
    directiveNameTitle: NzTSType | null;
    specificTrigger: NzTooltipTrigger;
    specificPlacement: string;
    popoverType: BpsPopoverType;
    componentFactory: ComponentFactory<BpsPopoverComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: BpsPopoverComponent, noAnimation?: NzNoAnimationDirective);
}

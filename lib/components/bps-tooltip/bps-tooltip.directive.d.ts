import { ComponentFactory, ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { BpsToolTipComponent } from './bps-tooltip.component';
import { NzTooltipBaseDirective } from '../bps-popover/base/nz-tooltip-base.directive';
import { NzTooltipTrigger, NzTooltipBaseComponentLegacy } from 'ng-zorro-antd';
import { BpsPopoverType } from '../bps-popover/bps-popover.directive';
export declare class BpsTooltipDirective extends NzTooltipBaseDirective {
    /**
     * The title that should have highest priority.
     */
    specificTitle: NzTSType;
    /**
     * Use the directive's name as the title that have priority in the second place.
     */
    directiveNameTitle: NzTSType | null;
    specificTrigger: NzTooltipTrigger;
    specificPlacement: string;
    popoverType: BpsPopoverType;
    tooltipDisabled: boolean;
    componentFactory: ComponentFactory<BpsToolTipComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, _tooltip?: NzTooltipBaseComponentLegacy, noAnimation?: NzNoAnimationDirective);
}

import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy } from 'ng-zorro-antd';
import { BpsPopoverType } from '../bps-popover/bps-popover.directive';
export declare class BpsToolTipComponent extends NzTooltipBaseComponentLegacy {
    noAnimation?: NzNoAnimationDirective;
    bpsPopoverType: BpsPopoverType;
    bpsTitle: NzTSType | null;
    bpsTooltipDisabled: boolean;
    nzTitleTemplate: TemplateRef<void>;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
}

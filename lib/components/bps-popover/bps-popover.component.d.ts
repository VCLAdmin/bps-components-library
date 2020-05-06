import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { BpsPopoverType } from './bps-popover.directive';
export declare class BpsPopoverComponent extends NzToolTipComponent {
    noAnimation?: NzNoAnimationDirective;
    _prefix: string;
    bpsPopoverType: BpsPopoverType;
    bpsTitle: NzTSType;
    bpsTitleTemplate: TemplateRef<void>;
    bpsContent: NzTSType;
    bpsContentTemplate: TemplateRef<void>;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
}

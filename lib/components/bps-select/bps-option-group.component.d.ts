import { QueryList, TemplateRef } from '@angular/core';
import { BpsOptionComponent } from './bps-option.component';
export declare class BpsOptionGroupComponent {
    isLabelString: boolean;
    label: string | TemplateRef<void>;
    listOfNzOptionComponent: QueryList<BpsOptionComponent>;
    set bpsLabel(value: string | TemplateRef<void>);
    get bpsLabel(): string | TemplateRef<void>;
}

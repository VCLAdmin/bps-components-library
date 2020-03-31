import { OnChanges, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
export declare class BpsOptionComponent implements OnChanges {
    changes: Subject<unknown>;
    template: TemplateRef<void>;
    bpsLabel: string;
    bpsValue: any;
    bpsDisabled: boolean;
    bpsHide: boolean;
    bpsCustomContent: boolean;
    ngOnChanges(): void;
}

import { NzConfigService } from 'ng-zorro-antd/core';
import { BpsCollapsePanelComponent } from './bps-collapse-panel.component';
export declare class BpsCollapseComponent {
    nzConfigService: NzConfigService;
    private listOfNzCollapsePanelComponent;
    bpsAccordion: boolean;
    bpsBordered: boolean;
    constructor(nzConfigService: NzConfigService);
    addPanel(value: BpsCollapsePanelComponent): void;
    removePanel(value: BpsCollapsePanelComponent): void;
    click(collapse: BpsCollapsePanelComponent): void;
}

import { __decorate, __param } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, OnDestroy, OnInit, Output, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { collapseMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { BpsCollapseComponent } from './bps-collapse.component';
const NZ_CONFIG_COMPONENT_NAME = 'collapsePanel';
let BpsCollapsePanelComponent = class BpsCollapsePanelComponent {
    constructor(nzConfigService, cdr, bpsCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.bpsCollapseComponent = bpsCollapseComponent;
        this.bpsActive = false;
        this.bpsDisabled = false;
        this.bpsActiveChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    clickHeader() {
        if (!this.bpsDisabled) {
            this.bpsCollapseComponent.click(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.bpsCollapseComponent.addPanel(this);
    }
    ngOnDestroy() {
        this.bpsCollapseComponent.removePanel(this);
    }
};
BpsCollapsePanelComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: BpsCollapseComponent, decorators: [{ type: Host }] },
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(), InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsActive", void 0);
__decorate([
    Input(), InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsDisabled", void 0);
__decorate([
    Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsShowArrow", void 0);
__decorate([
    Input()
], BpsCollapsePanelComponent.prototype, "bpsExtra", void 0);
__decorate([
    Input()
], BpsCollapsePanelComponent.prototype, "bpsHeader", void 0);
__decorate([
    Input()
], BpsCollapsePanelComponent.prototype, "bpsExpandedIcon", void 0);
__decorate([
    Output()
], BpsCollapsePanelComponent.prototype, "bpsActiveChange", void 0);
BpsCollapsePanelComponent = __decorate([
    Component({
        selector: 'bps-collapse-panel',
        exportAs: 'bpsCollapsePanel',
        template: "<div role=\"tab\" [attr.aria-expanded]=\"bpsActive\" class=\"ant-collapse-header\" (click)=\"clickHeader()\">\n  <ng-container *ngIf=\"bpsShowArrow\">\n    <ng-container *nzStringTemplateOutlet=\"bpsExpandedIcon\">\n      <i nz-icon [nzType]=\"bpsExpandedIcon || 'right'\" class=\"ant-collapse-arrow\" [nzRotate]=\"bpsActive ? 90 : 0\"></i>\n    </ng-container>\n  </ng-container>\n  <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\n  <div class=\"ant-collapse-extra\" *ngIf=\"bpsExtra\">\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\n  </div>\n</div>\n<div class=\"ant-collapse-content\"\n  [class.ant-collapse-content-active]=\"bpsActive\"\n  [@collapseMotion]=\"bpsActive ? 'expanded' : 'hidden' \">\n  <div class=\"ant-collapse-content-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        animations: [collapseMotion],
        host: {
            '[class.ant-collapse-no-arrow]': '!bpsShowArrow',
            '[class.ant-collapse-item-active]': 'bpsActive',
            '[class.ant-collapse-item-disabled]': 'bpsDisabled'
        },
        styles: [`
      bps-collapse-panel {
        display: block;
      }
    `]
    }),
    __param(2, Host())
], BpsCollapsePanelComponent);
export { BpsCollapsePanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1jb2xsYXBzZS9icHMtY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRSxNQUFNLHdCQUF3QixHQUFHLGVBQWUsQ0FBQztBQXNCakQsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFtQnBDLFlBQ1MsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDZCxvQkFBMEMsRUFDMUQsVUFBc0IsRUFDdEIsUUFBbUI7UUFKWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBckJuQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSzFCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQW1CL0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQWxCRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBWUQsUUFBUTtRQUNOLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRixDQUFBOztZQWhCMkIsZUFBZTtZQUMxQixpQkFBaUI7WUFDUSxvQkFBb0IsdUJBQXpELElBQUk7WUFDTyxVQUFVO1lBQ1osU0FBUzs7QUF2Qkk7SUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFOzREQUFtQjtBQUNsQjtJQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7OERBQXFCO0FBQ3dCO0lBQXBFLEtBQUssRUFBRSxFQUFFLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUU7K0RBQXVCO0FBQ2xGO0lBQVIsS0FBSyxFQUFFOzJEQUFzQztBQUNyQztJQUFSLEtBQUssRUFBRTs0REFBdUM7QUFDdEM7SUFBUixLQUFLLEVBQUU7a0VBQTZDO0FBQzNDO0lBQVQsTUFBTSxFQUFFO2tFQUF3RDtBQVB0RCx5QkFBeUI7SUFwQnJDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixxM0JBQWtEO1FBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1FBQ3JDLFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQztRQVE1QixJQUFJLEVBQUU7WUFDSiwrQkFBK0IsRUFBRSxlQUFlO1lBQ2hELGtDQUFrQyxFQUFFLFdBQVc7WUFDL0Msb0NBQW9DLEVBQUUsYUFBYTtTQUNwRDtpQkFWQzs7OztLQUlDO0tBT0osQ0FBQztJQXVCRyxXQUFBLElBQUksRUFBRSxDQUFBO0dBdEJFLHlCQUF5QixDQW9DckM7U0FwQ1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb2xsYXBzZU1vdGlvbiwgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBCcHNDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vYnBzLWNvbGxhcHNlLmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjb2xsYXBzZVBhbmVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLWNvbGxhcHNlLXBhbmVsJyxcbiAgZXhwb3J0QXM6ICdicHNDb2xsYXBzZVBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBhbmltYXRpb25zOiBbY29sbGFwc2VNb3Rpb25dLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBicHMtY29sbGFwc2UtcGFuZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1uby1hcnJvd10nOiAnIWJwc1Nob3dBcnJvdycsXG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2UtaXRlbS1hY3RpdmVdJzogJ2Jwc0FjdGl2ZScsXG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2UtaXRlbS1kaXNhYmxlZF0nOiAnYnBzRGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQnBzQ29sbGFwc2VQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0FjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgYnBzU2hvd0Fycm93OiBib29sZWFuO1xuICBASW5wdXQoKSBicHNFeHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc0hlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc0V4cGFuZGVkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY2xpY2tIZWFkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJwc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmJwc0NvbGxhcHNlQ29tcG9uZW50LmNsaWNrKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEhvc3QoKSBwcml2YXRlIGJwc0NvbGxhcHNlQ29tcG9uZW50OiBCcHNDb2xsYXBzZUNvbXBvbmVudCxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNvbGxhcHNlLWl0ZW0nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnBzQ29sbGFwc2VDb21wb25lbnQuYWRkUGFuZWwodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmJwc0NvbGxhcHNlQ29tcG9uZW50LnJlbW92ZVBhbmVsKHRoaXMpO1xuICB9XG59XG4iXX0=
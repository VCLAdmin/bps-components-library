import { __decorate, __param } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, OnDestroy, OnInit, Output, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { collapseMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { BpsCollapseComponent } from './bps-collapse.component';
var NZ_CONFIG_COMPONENT_NAME = 'collapsePanel';
var BpsCollapsePanelComponent = /** @class */ (function () {
    function BpsCollapsePanelComponent(nzConfigService, cdr, bpsCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.bpsCollapseComponent = bpsCollapseComponent;
        this.bpsActive = false;
        this.bpsDisabled = false;
        this.bpsActiveChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    BpsCollapsePanelComponent.prototype.clickHeader = function () {
        if (!this.bpsDisabled) {
            this.bpsCollapseComponent.click(this);
        }
    };
    BpsCollapsePanelComponent.prototype.markForCheck = function () {
        this.cdr.markForCheck();
    };
    BpsCollapsePanelComponent.prototype.ngOnInit = function () {
        this.bpsCollapseComponent.addPanel(this);
    };
    BpsCollapsePanelComponent.prototype.ngOnDestroy = function () {
        this.bpsCollapseComponent.removePanel(this);
    };
    BpsCollapsePanelComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: BpsCollapseComponent, decorators: [{ type: Host }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
            styles: ["\n      bps-collapse-panel {\n        display: block;\n      }\n    "]
        }),
        __param(2, Host())
    ], BpsCollapsePanelComponent);
    return BpsCollapsePanelComponent;
}());
export { BpsCollapsePanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1jb2xsYXBzZS9icHMtY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRSxJQUFNLHdCQUF3QixHQUFHLGVBQWUsQ0FBQztBQXNCakQ7SUFtQkUsbUNBQ1MsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDZCxvQkFBMEMsRUFDMUQsVUFBc0IsRUFDdEIsUUFBbUI7UUFKWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBckJuQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSzFCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQW1CL0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQWxCRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxnREFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBWUQsNENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQWZ5QixlQUFlO2dCQUMxQixpQkFBaUI7Z0JBQ1Esb0JBQW9CLHVCQUF6RCxJQUFJO2dCQUNPLFVBQVU7Z0JBQ1osU0FBUzs7SUF2Qkk7UUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFO2dFQUFtQjtJQUNsQjtRQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7a0VBQXFCO0lBQ3dCO1FBQXBFLEtBQUssRUFBRSxFQUFFLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUU7bUVBQXVCO0lBQ2xGO1FBQVIsS0FBSyxFQUFFOytEQUFzQztJQUNyQztRQUFSLEtBQUssRUFBRTtnRUFBdUM7SUFDdEM7UUFBUixLQUFLLEVBQUU7c0VBQTZDO0lBQzNDO1FBQVQsTUFBTSxFQUFFO3NFQUF3RDtJQVB0RCx5QkFBeUI7UUFwQnJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixxM0JBQWtEO1lBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQVE1QixJQUFJLEVBQUU7Z0JBQ0osK0JBQStCLEVBQUUsZUFBZTtnQkFDaEQsa0NBQWtDLEVBQUUsV0FBVztnQkFDL0Msb0NBQW9DLEVBQUUsYUFBYTthQUNwRDtxQkFWQyxzRUFJQztTQU9KLENBQUM7UUF1QkcsV0FBQSxJQUFJLEVBQUUsQ0FBQTtPQXRCRSx5QkFBeUIsQ0FvQ3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQXBDWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvbGxhcHNlTW90aW9uLCBJbnB1dEJvb2xlYW4sIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IEJwc0NvbGxhcHNlQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtY29sbGFwc2UuY29tcG9uZW50JztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NvbGxhcHNlUGFuZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtY29sbGFwc2UtcGFuZWwnLFxuICBleHBvcnRBczogJ2Jwc0NvbGxhcHNlUGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFtjb2xsYXBzZU1vdGlvbl0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIGJwcy1jb2xsYXBzZS1wYW5lbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLW5vLWFycm93XSc6ICchYnBzU2hvd0Fycm93JyxcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtLWFjdGl2ZV0nOiAnYnBzQWN0aXZlJyxcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtLWRpc2FibGVkXSc6ICdicHNEaXNhYmxlZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBicHNTaG93QXJyb3c6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJwc0V4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgYnBzSGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgYnBzRXhwYW5kZWRJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0FjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjbGlja0hlYWRlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYnBzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYnBzQ29sbGFwc2VDb21wb25lbnQuY2xpY2sodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASG9zdCgpIHByaXZhdGUgYnBzQ29sbGFwc2VDb21wb25lbnQ6IEJwc0NvbGxhcHNlQ29tcG9uZW50LFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY29sbGFwc2UtaXRlbScpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5icHNDb2xsYXBzZUNvbXBvbmVudC5hZGRQYW5lbCh0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuYnBzQ29sbGFwc2VDb21wb25lbnQucmVtb3ZlUGFuZWwodGhpcyk7XG4gIH1cbn1cbiJdfQ==
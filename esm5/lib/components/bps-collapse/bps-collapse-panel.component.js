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
        this.bpsValid = null;
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
        Input()
    ], BpsCollapsePanelComponent.prototype, "bpsValid", void 0);
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
            template: "<div role=\"tab\" [attr.aria-expanded]=\"bpsActive\" class=\"ant-collapse-header\" (click)=\"clickHeader()\">\r\n  <ng-container *ngIf=\"bpsShowArrow\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExpandedIcon\">\r\n      <div class=\"ant-collapse-arrow bps-status-indicator\"\r\n           [class.bps-collapse-panel-invalid]=\"bpsValid !== null && !bpsValid\"\r\n           [class.bps-collapse-panel-valid]=\"bpsValid\"></div>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_enabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-d1 {\r\n              fill: #666\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_disabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_enabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#fff\" />\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_disabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#666\" />\r\n      </svg>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\"\r\n  [class.ant-collapse-content-active]=\"bpsActive\"\r\n  [@collapseMotion]=\"bpsActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            animations: [collapseMotion],
            host: {
                '[class.ant-collapse-no-arrow]': '!bpsShowArrow',
                '[class.ant-collapse-item-active]': 'bpsActive',
                '[class.ant-collapse-item-disabled]': 'bpsDisabled'
            },
            styles: ["\n      bps-collapse-panel {\n        display: block;\n      }\n    ", ".ant-collapse>.ant-collapse-item{border-bottom:unset!important;background-color:transparent!important;margin-bottom:unset!important;border-radius:unset!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header{padding:0 15px!important;color:#fff!important;line-height:20px!important;font-size:12px!important;background-color:#363636!important;border-radius:10px!important;margin-bottom:10px!important}.ant-collapse-content{color:#fff!important;font-size:12px!important;background-color:transparent!important;border-top:unset!important}.ant-collapse-content>.ant-collapse-content-box{padding:0 15px 8px!important}.ant-collapse-item:last-child>.ant-collapse-content,.ant-collapse>.ant-collapse-item:last-child,.ant-collapse>.ant-collapse-item:last-child>.ant-collapse-header{border-radius:10px!important}.ant-collapse-arrow.bps-status-indicator{width:4px!important;height:4px!important;background-color:#666!important;border-radius:100px!important;right:45px!important;left:unset!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-valid{background-color:#00a2d1!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-invalid{background-color:#f18700!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow:not(.bps-status-indicator){right:15px!important;left:unset!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:hover{background-color:#474747!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:focus{box-shadow:0 0 8px 0 #00a2d1!important}.ant-collapse>.ant-collapse-item.ant-collapse-item-disabled>.ant-collapse-header{color:#666!important}"]
        }),
        __param(2, Host())
    ], BpsCollapsePanelComponent);
    return BpsCollapsePanelComponent;
}());
export { BpsCollapsePanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1jb2xsYXBzZS9icHMtY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRSxJQUFNLHdCQUF3QixHQUFHLGVBQWUsQ0FBQztBQXVCakQ7SUFvQkUsbUNBQ1MsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDZCxvQkFBMEMsRUFDMUQsVUFBc0IsRUFDdEIsUUFBbUI7UUFKWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBdEJuQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFLTixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFtQi9ELFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFsQkQsK0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsZ0RBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQVlELDRDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkFmeUIsZUFBZTtnQkFDMUIsaUJBQWlCO2dCQUNRLG9CQUFvQix1QkFBekQsSUFBSTtnQkFDTyxVQUFVO2dCQUNaLFNBQVM7O0lBeEJJO1FBQXhCLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRTtnRUFBbUI7SUFDbEI7UUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFO2tFQUFxQjtJQUNwQztRQUFSLEtBQUssRUFBRTsrREFBaUI7SUFDNEM7UUFBcEUsS0FBSyxFQUFFLEVBQUUsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRTttRUFBdUI7SUFDbEY7UUFBUixLQUFLLEVBQUU7K0RBQXNDO0lBQ3JDO1FBQVIsS0FBSyxFQUFFO2dFQUF1QztJQUN0QztRQUFSLEtBQUssRUFBRTtzRUFBNkM7SUFDM0M7UUFBVCxNQUFNLEVBQUU7c0VBQXdEO0lBUnRELHlCQUF5QjtRQXJCckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLCt1R0FBa0Q7WUFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsVUFBVSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBUzVCLElBQUksRUFBRTtnQkFDSiwrQkFBK0IsRUFBRSxlQUFlO2dCQUNoRCxrQ0FBa0MsRUFBRSxXQUFXO2dCQUMvQyxvQ0FBb0MsRUFBRSxhQUFhO2FBQ3BEO3FCQVhDLHNFQUlDO1NBUUosQ0FBQztRQXdCRyxXQUFBLElBQUksRUFBRSxDQUFBO09BdkJFLHlCQUF5QixDQXFDckM7SUFBRCxnQ0FBQztDQUFBLEFBckNELElBcUNDO1NBckNZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29sbGFwc2VNb3Rpb24sIElucHV0Qm9vbGVhbiwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgQnBzQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL2Jwcy1jb2xsYXBzZS5jb21wb25lbnQnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY29sbGFwc2VQYW5lbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1jb2xsYXBzZS1wYW5lbCcsXG4gIGV4cG9ydEFzOiAnYnBzQ29sbGFwc2VQYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtY29sbGFwc2UtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlTW90aW9uXSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYnBzLWNvbGxhcHNlLXBhbmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICBzdHlsZVVybHM6IFsnLi9icHMtY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmNzcyddLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2Utbm8tYXJyb3ddJzogJyFicHNTaG93QXJyb3cnLFxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW0tYWN0aXZlXSc6ICdicHNBY3RpdmUnLFxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW0tZGlzYWJsZWRdJzogJ2Jwc0Rpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc0NvbGxhcHNlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNBY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJwc1ZhbGlkID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgYnBzU2hvd0Fycm93OiBib29sZWFuO1xuICBASW5wdXQoKSBicHNFeHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc0hlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc0V4cGFuZGVkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY2xpY2tIZWFkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJwc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmJwc0NvbGxhcHNlQ29tcG9uZW50LmNsaWNrKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEhvc3QoKSBwcml2YXRlIGJwc0NvbGxhcHNlQ29tcG9uZW50OiBCcHNDb2xsYXBzZUNvbXBvbmVudCxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNvbGxhcHNlLWl0ZW0nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnBzQ29sbGFwc2VDb21wb25lbnQuYWRkUGFuZWwodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmJwc0NvbGxhcHNlQ29tcG9uZW50LnJlbW92ZVBhbmVsKHRoaXMpO1xuICB9XG59XG4iXX0=
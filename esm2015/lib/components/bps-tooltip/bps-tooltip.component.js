var BpsToolTipComponent_1;
import { __decorate, __param } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, NzNoAnimationDirective, NzTSType, InputBoolean } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy } from 'ng-zorro-antd';
let BpsToolTipComponent = BpsToolTipComponent_1 = class BpsToolTipComponent extends NzTooltipBaseComponentLegacy {
    constructor(cdr, noAnimation) {
        super(cdr);
        this.noAnimation = noAnimation;
        this.bpsPopoverType = 'variation_8a';
        this.bpsTooltipDisabled = false;
    }
};
BpsToolTipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
__decorate([
    Input()
], BpsToolTipComponent.prototype, "bpsPopoverType", void 0);
__decorate([
    Input()
], BpsToolTipComponent.prototype, "bpsTitle", void 0);
__decorate([
    Input(), InputBoolean()
], BpsToolTipComponent.prototype, "bpsTooltipDisabled", void 0);
__decorate([
    ContentChild('nzTemplate', { static: true })
], BpsToolTipComponent.prototype, "nzTitleTemplate", void 0);
BpsToolTipComponent = BpsToolTipComponent_1 = __decorate([
    Component({
        selector: 'bps-tooltip',
        exportAs: 'bpsTooltipComponent',
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        animations: [zoomBigMotion],
        template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"_visible\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div\n    class=\"ant-tooltip\"\n    [class.bps-tooltip-disabled]=\"bpsTooltipDisabled\"\n    [ngClass]=\"_classMap\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@zoomBigMotion]=\"'active'\">\n    <div class=\"ant-tooltip-content\">\n      <div class=\"ant-tooltip-arrow bps-tooltip-arrow-{{bpsPopoverType}}\"></div>\n      <div class=\"ant-tooltip-inner bps-tooltip-inner-{{bpsPopoverType}}\">\n        <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
        preserveWhitespaces: false,
        providers: [
            {
                provide: NzTooltipBaseComponentLegacy,
                useExisting: BpsToolTipComponent_1
            }
        ],
        styles: [`
      .ant-tooltip {
        position: relative;
      }
    `, ".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;color:#fff!important;padding:2px 10px!important;text-align:center!important;border-radius:6px!important}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important}.bps-tooltip-arrow-variation_8a::before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important}.bps-tooltip-arrow-variation_8b::before{background-color:#7bc053!important}.bps-tooltip-arrow-variation_9a::before,.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b::before,.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important;border:1px solid #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10::before,.bps-tooltip-arrow-variation_11::before{content:unset!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_8a,.bps-tooltip-disabled .bps-tooltip-inner-variation_8b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_8a::before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_8b::before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_9a,.bps-tooltip-disabled .bps-tooltip-inner-variation_9b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_9a::before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_9b::before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_10,.bps-tooltip-disabled .bps-tooltip-inner-variation_11{background-color:#363636!important;color:#666!important;border:1px solid #666!important}"]
    }),
    __param(1, Host()), __param(1, Optional())
], BpsToolTipComponent);
export { BpsToolTipComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvYnBzLXRvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25HLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTBCN0QsSUFBYSxtQkFBbUIsMkJBQWhDLE1BQWEsbUJBQW9CLFNBQVEsNEJBQTRCO0lBT25FLFlBQVksR0FBc0IsRUFBNkIsV0FBb0M7UUFDakcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRGtELGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUwxRixtQkFBYyxHQUFtQixjQUFjLENBQUM7UUFFaEMsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO0lBS3BELENBQUM7Q0FDRixDQUFBOztZQUhrQixpQkFBaUI7WUFBMkMsc0JBQXNCLHVCQUE5RCxJQUFJLFlBQUksUUFBUTs7QUFMNUM7SUFBUixLQUFLLEVBQUU7MkRBQWlEO0FBQ2hEO0lBQVIsS0FBSyxFQUFFO3FEQUEyQjtBQUNWO0lBQXhCLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRTsrREFBNEI7QUFDTjtJQUE3QyxZQUFZLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzREQUFvQztBQUx0RSxtQkFBbUI7SUF2Qi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzNCLDhoQ0FBMkM7UUFDM0MsbUJBQW1CLEVBQUUsS0FBSztRQUMxQixTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsNEJBQTRCO2dCQUNyQyxXQUFXLEVBQUUscUJBQW1CO2FBQ2pDO1NBQ0Y7aUJBRUM7Ozs7S0FJQztLQUdKLENBQUM7SUFRcUMsV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7R0FQNUMsbUJBQW1CLENBVS9CO1NBVlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB6b29tQmlnTW90aW9uLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBCcHNQb3BvdmVyVHlwZSB9IGZyb20gJy4uL2Jwcy1wb3BvdmVyL2Jwcy1wb3BvdmVyLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy10b29sdGlwJyxcclxuICBleHBvcnRBczogJ2Jwc1Rvb2x0aXBDb21wb25lbnQnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBCcHNUb29sVGlwQ29tcG9uZW50XHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC10b29sdGlwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2Jwcy10b29sdGlwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzVG9vbFRpcENvbXBvbmVudCBleHRlbmRzIE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kge1xyXG5cclxuICBASW5wdXQoKSBicHNQb3BvdmVyVHlwZTogQnBzUG9wb3ZlclR5cGUgPSAndmFyaWF0aW9uXzhhJztcclxuICBASW5wdXQoKSBicHNUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNUb29sdGlwRGlzYWJsZWQgPSBmYWxzZTtcclxuICBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbnpUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7XHJcbiAgICBzdXBlcihjZHIpO1xyXG4gIH1cclxufVxyXG4iXX0=
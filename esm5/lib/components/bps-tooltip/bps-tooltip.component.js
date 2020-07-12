import { __decorate, __extends, __param } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, NzNoAnimationDirective, NzTSType, InputBoolean } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy } from 'ng-zorro-antd';
var BpsToolTipComponent = /** @class */ (function (_super) {
    __extends(BpsToolTipComponent, _super);
    function BpsToolTipComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr) || this;
        _this.noAnimation = noAnimation;
        _this.bpsPopoverType = 'variation_8a';
        _this.bpsTooltipDisabled = false;
        return _this;
    }
    BpsToolTipComponent_1 = BpsToolTipComponent;
    var BpsToolTipComponent_1;
    BpsToolTipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
            styles: ["\n      .ant-tooltip {\n        position: relative;\n      }\n    ", ".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;color:#fff!important;padding:2px!important;text-align:center!important;border-radius:6px!important}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important}.bps-tooltip-arrow-variation_8a::before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important}.bps-tooltip-arrow-variation_8b::before{background-color:#7bc053!important}.bps-tooltip-arrow-variation_9a::before,.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b::before,.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important;border:1px solid #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10::before,.bps-tooltip-arrow-variation_11::before{content:unset!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_8a,.bps-tooltip-disabled .bps-tooltip-inner-variation_8b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_8a::before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_8b::before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_9a,.bps-tooltip-disabled .bps-tooltip-inner-variation_9b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_9a::before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_9b::before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_10,.bps-tooltip-disabled .bps-tooltip-inner-variation_11{background-color:#363636!important;color:#666!important;border:1px solid #666!important}"]
        }),
        __param(1, Host()), __param(1, Optional())
    ], BpsToolTipComponent);
    return BpsToolTipComponent;
}(NzTooltipBaseComponentLegacy));
export { BpsToolTipComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvYnBzLXRvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMEI3RDtJQUF5Qyx1Q0FBNEI7SUFPbkUsNkJBQVksR0FBc0IsRUFBNkIsV0FBb0M7UUFBbkcsWUFDRSxrQkFBTSxHQUFHLENBQUMsU0FDWDtRQUY4RCxpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFMMUYsb0JBQWMsR0FBbUIsY0FBYyxDQUFDO1FBRWhDLHdCQUFrQixHQUFHLEtBQUssQ0FBQzs7SUFLcEQsQ0FBQzs0QkFUVSxtQkFBbUI7OztnQkFPYixpQkFBaUI7Z0JBQTJDLHNCQUFzQix1QkFBOUQsSUFBSSxZQUFJLFFBQVE7O0lBTDVDO1FBQVIsS0FBSyxFQUFFOytEQUFpRDtJQUNoRDtRQUFSLEtBQUssRUFBRTt5REFBMkI7SUFDVjtRQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7bUVBQTRCO0lBQ047UUFBN0MsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztnRUFBb0M7SUFMdEUsbUJBQW1CO1FBdkIvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUMzQiw4aENBQTJDO1lBQzNDLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSw0QkFBNEI7b0JBQ3JDLFdBQVcsRUFBRSxxQkFBbUI7aUJBQ2pDO2FBQ0Y7cUJBRUMsb0VBSUM7U0FHSixDQUFDO1FBUXFDLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO09BUDVDLG1CQUFtQixDQVUvQjtJQUFELDBCQUFDO0NBQUEsQUFWRCxDQUF5Qyw0QkFBNEIsR0FVcEU7U0FWWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHpvb21CaWdNb3Rpb24sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IEJwc1BvcG92ZXJUeXBlIH0gZnJvbSAnLi4vYnBzLXBvcG92ZXIvYnBzLXBvcG92ZXIuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXRvb2x0aXAnLFxyXG4gIGV4cG9ydEFzOiAnYnBzVG9vbHRpcENvbXBvbmVudCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBhbmltYXRpb25zOiBbem9vbUJpZ01vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IEJwc1Rvb2xUaXBDb21wb25lbnRcclxuICAgIH1cclxuICBdLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXRvb2x0aXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXRvb2x0aXAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNUb29sVGlwQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSB7XHJcblxyXG4gIEBJbnB1dCgpIGJwc1BvcG92ZXJUeXBlOiBCcHNQb3BvdmVyVHlwZSA9ICd2YXJpYXRpb25fOGEnO1xyXG4gIEBJbnB1dCgpIGJwc1RpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Rvb2x0aXBEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuelRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcclxuICAgIHN1cGVyKGNkcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==
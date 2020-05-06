var BpsToolTipComponent_1;
import { __decorate, __param } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy } from 'ng-zorro-antd';
let BpsToolTipComponent = BpsToolTipComponent_1 = class BpsToolTipComponent extends NzTooltipBaseComponentLegacy {
    constructor(cdr, noAnimation) {
        super(cdr);
        this.noAnimation = noAnimation;
        this.bpsPopoverType = 'variation_8a';
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
    ContentChild('nzTemplate', { static: true })
], BpsToolTipComponent.prototype, "nzTitleTemplate", void 0);
BpsToolTipComponent = BpsToolTipComponent_1 = __decorate([
    Component({
        selector: 'bps-tooltip',
        exportAs: 'bpsTooltipComponent',
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        animations: [zoomBigMotion],
        template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"_visible\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div\n    class=\"ant-tooltip\"\n    [ngClass]=\"_classMap\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@zoomBigMotion]=\"'active'\">\n    <div class=\"ant-tooltip-content\">\n      <div class=\"ant-tooltip-arrow bps-tooltip-arrow-{{bpsPopoverType}}\"></div>\n      <div class=\"ant-tooltip-inner bps-tooltip-inner-{{bpsPopoverType}}\">\n        <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
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
    `, ".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;color:#fff!important;padding:2px!important;text-align:center!important;border-radius:6px!important}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important}.bps-tooltip-arrow-variation_8a::before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important}.bps-tooltip-arrow-variation_8b::before{background-color:#7bc053!important}.bps-tooltip-arrow-variation_9a::before,.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b::before,.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important;border:1px solid #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10::before,.bps-tooltip-arrow-variation_11::before{content:unset!important}"]
    }),
    __param(1, Host()), __param(1, Optional())
], BpsToolTipComponent);
export { BpsToolTipComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvYnBzLXRvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMEI3RCxJQUFhLG1CQUFtQiwyQkFBaEMsTUFBYSxtQkFBb0IsU0FBUSw0QkFBNEI7SUFNbkUsWUFBWSxHQUFzQixFQUE2QixXQUFvQztRQUNqRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFEa0QsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBSjFGLG1CQUFjLEdBQW1CLGNBQWMsQ0FBQztJQU16RCxDQUFDO0NBQ0YsQ0FBQTs7WUFIa0IsaUJBQWlCO1lBQTJDLHNCQUFzQix1QkFBOUQsSUFBSSxZQUFJLFFBQVE7O0FBSjVDO0lBQVIsS0FBSyxFQUFFOzJEQUFpRDtBQUNoRDtJQUFSLEtBQUssRUFBRTtxREFBMkI7QUFDVztJQUE3QyxZQUFZLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzREQUFvQztBQUp0RSxtQkFBbUI7SUF2Qi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzNCLHErQkFBMkM7UUFDM0MsbUJBQW1CLEVBQUUsS0FBSztRQUMxQixTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsNEJBQTRCO2dCQUNyQyxXQUFXLEVBQUUscUJBQW1CO2FBQ2pDO1NBQ0Y7aUJBRUM7Ozs7S0FJQztLQUdKLENBQUM7SUFPcUMsV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7R0FONUMsbUJBQW1CLENBUy9CO1NBVFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB6b29tQmlnTW90aW9uLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgQnBzUG9wb3ZlclR5cGUgfSBmcm9tICcuLi9icHMtcG9wb3Zlci9icHMtcG9wb3Zlci5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtdG9vbHRpcCcsXHJcbiAgZXhwb3J0QXM6ICdicHNUb29sdGlwQ29tcG9uZW50JyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLXRvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LFxyXG4gICAgICB1c2VFeGlzdGluZzogQnBzVG9vbFRpcENvbXBvbmVudFxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtdG9vbHRpcCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtdG9vbHRpcC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1Rvb2xUaXBDb21wb25lbnQgZXh0ZW5kcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IHtcclxuXHJcbiAgQElucHV0KCkgYnBzUG9wb3ZlclR5cGU6IEJwc1BvcG92ZXJUeXBlID0gJ3ZhcmlhdGlvbl84YSc7XHJcbiAgQElucHV0KCkgYnBzVGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuICBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbnpUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7XHJcbiAgICBzdXBlcihjZHIpO1xyXG4gIH1cclxufVxyXG4iXX0=
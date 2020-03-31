import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { helpMotion, warnDeprecation } from 'ng-zorro-antd/core';
let BpsFormExplainComponent = 
/**
 * @deprecated Use `[bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip]` in `bpsFormControlComponent` instead, will remove in 9.0.0.
 */
class BpsFormExplainComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation(`'bps-form-explain' is going to be removed in 9.0.0. Use [bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip] in bps-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
};
BpsFormExplainComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
BpsFormExplainComponent = __decorate([
    Component({
        selector: 'bps-form-explain',
        exportAs: 'bpsFormExplain',
        preserveWhitespaces: false,
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [helpMotion],
        template: "<div [@helpMotion]>\r\n  <ng-content></ng-content>\r\n</div>",
        styles: [`
      bps-form-explain {
        display: block;
      }
    `]
    })
    /**
     * @deprecated Use `[bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip]` in `bpsFormControlComponent` instead, will remove in 9.0.0.
     */
], BpsFormExplainComponent);
export { BpsFormExplainComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0tZXhwbGFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1leHBsYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFxQmpFLElBQWEsdUJBQXVCO0FBSHBDOztHQUVHO0FBQ0gsTUFBYSx1QkFBdUI7SUFDbEMsWUFBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFFLGVBQWUsQ0FDYiwyTUFBMk0sQ0FDNU0sQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQU5nQyxVQUFVO1lBQW9CLFNBQVM7O0FBRDNELHVCQUF1QjtJQW5CbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQ3hCLHdFQUFnRDtpQkFFOUM7Ozs7S0FJQztLQUVKLENBQUM7SUFDRjs7T0FFRztHQUNVLHVCQUF1QixDQU9uQztTQVBZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaGVscE1vdGlvbiwgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLWZvcm0tZXhwbGFpbicsXHJcbiAgZXhwb3J0QXM6ICdicHNGb3JtRXhwbGFpbicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1mb3JtLWV4cGxhaW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBicHMtZm9ybS1leHBsYWluIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIFVzZSBgW2Jwc1N1Y2Nlc3NUaXBdIHwgW2Jwc1dhcm5pbmdUaXBdIHwgW2Jwc0Vycm9yVGlwXSB8IFticHNWYWxpZGF0aW5nVGlwXWAgaW4gYGJwc0Zvcm1Db250cm9sQ29tcG9uZW50YCBpbnN0ZWFkLCB3aWxsIHJlbW92ZSBpbiA5LjAuMC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCcHNGb3JtRXhwbGFpbkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWV4cGxhaW4nKTtcclxuICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgYCdicHMtZm9ybS1leHBsYWluJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBVc2UgW2Jwc1N1Y2Nlc3NUaXBdIHwgW2Jwc1dhcm5pbmdUaXBdIHwgW2Jwc0Vycm9yVGlwXSB8IFticHNWYWxpZGF0aW5nVGlwXSBpbiBicHMtZm9ybS1jb250cm9sIGluc3RlYWQuIFJlYWQgaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZm9ybS9lbmBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
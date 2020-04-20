import { __decorate, __extends } from "tslib";
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation, Input } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BpsRadioComponent } from './bps-radio.component';
var BpsRadioButtonComponent = /** @class */ (function (_super) {
    __extends(BpsRadioButtonComponent, _super);
    /* tslint:disable-next-line:no-any */
    function BpsRadioButtonComponent(elementRef, renderer, cdr, focusMonitor) {
        var _this = _super.call(this, elementRef, renderer, cdr, focusMonitor) || this;
        renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
        renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
        return _this;
    }
    BpsRadioButtonComponent_1 = BpsRadioButtonComponent;
    var BpsRadioButtonComponent_1;
    BpsRadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    BpsRadioButtonComponent = BpsRadioButtonComponent_1 = __decorate([
        Component({
            selector: '[bps-radio-button]',
            exportAs: 'bpsRadioButton',
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return BpsRadioComponent; }),
                    multi: true
                },
                {
                    provide: BpsRadioComponent,
                    useExisting: forwardRef(function () { return BpsRadioButtonComponent_1; })
                }
            ],
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            template: "<span class=\"ant-radio-button\" [class.ant-radio-button-checked]=\"checked\" [class.ant-radio-button-disabled]=\"bpsDisabled\">\n  <input type=\"radio\" #inputElement class=\"ant-radio-button-input\" [disabled]=\"bpsDisabled\" [checked]=\"checked\" [attr.name]=\"name\">\n  <span class=\"ant-radio-button-inner\"></span>\n</span>\n<span class=\"bps-custom-content-radio\"><ng-content></ng-content></span>\n",
            host: {
                '[class.ant-radio-button-wrapper-checked]': 'checked',
                '[class.ant-radio-button-wrapper-disabled]': 'bpsDisabled'
            },
            styles: [".ant-radio-button-wrapper{margin-right:10px!important;height:40px!important;border-radius:8px!important;border:1px solid #666!important;padding:0!important;line-height:38px!important;background-color:transparent!important;color:#999!important;text-align:center!important}.bps-radio-button-variation2,.bps-radio-button-variation6,.bps-radio-button-variation7{font-size:11px!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:center!important;color:#999!important}.bps-radio-button-variation6,.bps-radio-button-variation7{font-size:12px!important;border-radius:8px!important;border:1px solid #666!important;margin-right:15px!important}.bps-radio-button-variation7{padding:0 15px!important;margin-bottom:15px!important}.bps-radio-button-variation3,.bps-radio-button-variation5{font-size:11px!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:4px!important;background-color:#363636!important;border:1px solid #363636!important}.bps-radio-button-variation5{text-align:unset!important;padding:0 15px!important;margin-bottom:5px!important;margin-right:0!important;display:block!important}.bps-radio-button-variation5 .bps-custom-content-radio,.bps-radio-button-variation7 .bps-custom-content-radio{margin:0!important;width:100%!important}.bps-radio-button-variation5 .bps-custom-content-radio span{position:relative!important;float:left!important}.bps-radio-button-variation5 .bps-custom-content-radio svg{float:right!important}.bps-radio-button-variation7 .bps-custom-content-radio{text-align:center!important}.bps-radio-button-variation7 .bps-custom-content-radio svg{float:left!important}.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-disabled):hover{border:2px solid #7bc053!important;color:#7bc053!important;line-height:36px!important;box-shadow:none!important}.bps-radio-button-variation6:not(.ant-radio-button-wrapper-disabled):hover,.bps-radio-button-variation7:not(.ant-radio-button-wrapper-disabled):hover{border:2px solid #445c67!important;color:#999!important}.ant-radio-button-wrapper-checked.bps-radio-button-variation6:not(.ant-radio-button-wrapper-disabled),.ant-radio-button-wrapper-checked.bps-radio-button-variation7:not(.ant-radio-button-wrapper-disabled){border:2px solid #00a2d1!important;color:#00a2d1!important}.bps-radio-button-variation3:not(.ant-radio-button-wrapper-disabled):hover,.bps-radio-button-variation5:not(.ant-radio-button-wrapper-disabled):hover{border:1px solid #445c67!important;color:#fff!important;box-shadow:none!important;line-height:38px!important}.bps-radio-button-variation3.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),.bps-radio-button-variation5.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){border:1px solid #00a2d1!important;color:#fff!important;box-shadow:none!important;line-height:38px!important}.ant-radio-button-wrapper:not(:first-child)::before{content:unset!important}.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-disabled):focus{box-shadow:0 0 8px 0 #00a2d1!important;border:1px solid #666!important;background-color:#262626!important;outline:0!important;color:#999!important}.bps-custom-content-radio{display:table;margin:0 auto;height:100%}.bps-custom-content-radio svg{display:table-cell;vertical-align:middle;height:100%}.bps-radio-button-variation10{width:40px!important;border-radius:100px!important;border:none!important;line-height:unset!important}.ant-radio-button-wrapper-checked.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled),.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled):hover{border:none!important;line-height:unset!important}.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled):focus{box-shadow:0 0 8px 0 #00a2d1!important;border:none!important}.ant-radio-button-wrapper-disabled{border:1px solid #474747!important;color:#474747!important}.bps-radio-button-variation10.ant-radio-button-wrapper-disabled{border:none!important}.ant-radio-button-wrapper-disabled svg{opacity:.2!important}.bps-radio-button-variation3:not(.ant-radio-button-wrapper-disabled):focus,.bps-radio-button-variation5:not(.ant-radio-button-wrapper-disabled):focus{box-shadow:0 0 8px 0 #00a2d1!important;border:none!important;background-color:#363636!important;color:#fff!important}.bps-radio-button-variation3.ant-radio-button-wrapper-disabled,.bps-radio-button-variation5.ant-radio-button-wrapper-disabled{color:#666!important;border:none!important;background-color:#363636!important}.bps-radio-button-variation8a span.ant-radio+*,.bps-radio-button-variation8b span.ant-radio+*,.bps-radio-button-variation8c span.ant-radio+*,.bps-radio-button-variation8d span.ant-radio+*,.bps-radio-button-variation8e span.ant-radio+*,.bps-radio-button-variation9 span.ant-radio+*{padding-right:10px!important;padding-left:0!important}.bps-radio-button-variation8a.ant-radio-wrapper,.bps-radio-button-variation8b.ant-radio-wrapper,.bps-radio-button-variation8c.ant-radio-wrapper,.bps-radio-button-variation8d.ant-radio-wrapper,.bps-radio-button-variation8e.ant-radio-wrapper,.bps-radio-button-variation9.ant-radio-wrapper{margin:0!important}.bps-radio-button-variation8a .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-inner,.bps-radio-button-variation8e .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-inner{background-color:#262626!important;border-color:#778d98!important}.bps-radio-button-variation8a .ant-radio-inner{border-color:#005068!important}.bps-radio-button-variation8b .ant-radio-inner{border-color:#00a2d1!important}.bps-radio-button-variation8c .ant-radio-inner{border-color:#005681!important}.bps-radio-button-variation8d .ant-radio-inner{border-color:#06809f!important}.bps-radio-button-variation8e .ant-radio-inner{border-color:#445c67!important}.bps-radio-button-variation8a .ant-radio-inner::after,.bps-radio-button-variation8b .ant-radio-inner::after,.bps-radio-button-variation8c .ant-radio-inner::after,.bps-radio-button-variation8d .ant-radio-inner::after,.bps-radio-button-variation8e .ant-radio-inner::after,.bps-radio-button-variation9 .ant-radio-inner::after{background-color:#778d98!important;opacity:1!important;transform:scale(1)!important}.bps-radio-button-variation8a .ant-radio-inner::after{background-color:#005068!important}.bps-radio-button-variation8b .ant-radio-inner::after{background-color:#00a2d1!important}.bps-radio-button-variation8c .ant-radio-inner::after{background-color:#005681!important}.bps-radio-button-variation8d .ant-radio-inner::after{background-color:#06809f!important}.bps-radio-button-variation8e .ant-radio-inner::after{background-color:#445c67!important}.bps-radio-button-variation8a .ant-radio::after,.bps-radio-button-variation8b .ant-radio::after,.bps-radio-button-variation8c .ant-radio::after,.bps-radio-button-variation8d .ant-radio::after,.bps-radio-button-variation8e .ant-radio::after,.bps-radio-button-variation9 .ant-radio::after{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;border:1px solid #778d98!important;border-radius:50%!important;-webkit-animation:.36s ease-in-out both antRadioEffect!important;animation:.36s ease-in-out both antRadioEffect!important;content:' '!important}.bps-radio-button-variation8a .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8e .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-checked .ant-radio-inner{border-color:#f18700!important}.bps-radio-button-variation8a .ant-radio-input:focus+.ant-radio-inner,.bps-radio-button-variation8b .ant-radio-input:focus+.ant-radio-inner,.bps-radio-button-variation8c .ant-radio-input:focus+.ant-radio-inner,.bps-radio-button-variation8d .ant-radio-input:focus+.ant-radio-inner,.bps-radio-button-variation8e .ant-radio-input:focus+.ant-radio-inner,.bps-radio-button-variation9 .ant-radio-input:focus+.ant-radio-inner{box-shadow:0 0 8px 0 #00a2d1!important;border:1px solid #778d98!important}.bps-radio-button-variation8a .ant-radio-disabled .ant-radio-inner::after,.bps-radio-button-variation8b .ant-radio-disabled .ant-radio-inner::after,.bps-radio-button-variation8c .ant-radio-disabled .ant-radio-inner::after,.bps-radio-button-variation8d .ant-radio-disabled .ant-radio-inner::after,.bps-radio-button-variation8e .ant-radio-disabled .ant-radio-inner::after,.bps-radio-button-variation9 .ant-radio-disabled .ant-radio-inner::after{opacity:0!important}.bps-radio-button-variation8a .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8e .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-disabled .ant-radio-inner{background-color:#363636!important;border:none!important}"]
        })
    ], BpsRadioButtonComponent);
    return BpsRadioButtonComponent;
}(BpsRadioComponent));
export { BpsRadioButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtcmFkaW8vYnBzLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQTBCMUQ7SUFBNkMsMkNBQWlCO0lBRTVELHFDQUFxQztJQUNyQyxpQ0FBWSxVQUFzQixFQUFFLFFBQW1CLEVBQUUsR0FBc0IsRUFBRSxZQUEwQjtRQUEzRyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxTQUcvQztRQUZDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BFLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDOztJQUMxRSxDQUFDO2dDQVBVLHVCQUF1Qjs7O2dCQUdWLFVBQVU7Z0JBQVksU0FBUztnQkFBTyxpQkFBaUI7Z0JBQWdCLFlBQVk7O0lBSGhHLHVCQUF1QjtRQXhCbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQztvQkFDaEQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEseUJBQXVCLEVBQXZCLENBQXVCLENBQUM7aUJBQ3ZEO2FBQ0Y7WUFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLG1hQUFnRDtZQUNoRCxJQUFJLEVBQUU7Z0JBQ0osMENBQTBDLEVBQUUsU0FBUztnQkFDckQsMkNBQTJDLEVBQUUsYUFBYTthQUMzRDs7U0FFRixDQUFDO09BQ1csdUJBQXVCLENBUW5DO0lBQUQsOEJBQUM7Q0FBQSxBQVJELENBQTZDLGlCQUFpQixHQVE3RDtTQVJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJwc1JhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtcmFkaW8uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwcy1yYWRpby1idXR0b25dJyxcclxuICBleHBvcnRBczogJ2Jwc1JhZGlvQnV0dG9uJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJwc1JhZGlvQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEJwc1JhZGlvQ29tcG9uZW50LFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCcHNSYWRpb0J1dHRvbkNvbXBvbmVudClcclxuICAgIH1cclxuICBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWRdJzogJ2NoZWNrZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZGlzYWJsZWRdJzogJ2Jwc0Rpc2FibGVkJ1xyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1JhZGlvQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQnBzUmFkaW9Db21wb25lbnQge1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjZHIsIGZvY3VzTW9uaXRvcik7XHJcbiAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcmFkaW8td3JhcHBlcicpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
import { __decorate, __param } from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { forwardRef, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Optional, Output, Renderer2, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEmpty, InputBoolean } from 'ng-zorro-antd/core';
import { BpsCheckboxWrapperComponent } from './bps-checkbox-wrapper.component';
var BpsCheckboxComponent = /** @class */ (function () {
    function BpsCheckboxComponent(elementRef, renderer, bpsCheckboxWrapperComponent, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.bpsCheckboxWrapperComponent = bpsCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        // tslint:disable-next-line:no-any
        this.onChange = function () { return null; };
        // tslint:disable-next-line:no-any
        this.onTouched = function () { return null; };
        this.bpsCheckedChange = new EventEmitter();
        this.bpsAutoFocus = false;
        this.bpsDisabled = false;
        this.bpsIndeterminate = false;
        this.bpsChecked = false;
        this.bpsType = 'variation2';
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
    }
    BpsCheckboxComponent_1 = BpsCheckboxComponent;
    BpsCheckboxComponent.prototype.hostClick = function (e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.bpsChecked);
    };
    BpsCheckboxComponent.prototype.innerCheckedChange = function (checked) {
        if (!this.bpsDisabled) {
            this.bpsChecked = checked;
            this.onChange(this.bpsChecked);
            this.bpsCheckedChange.emit(this.bpsChecked);
            if (this.bpsCheckboxWrapperComponent) {
                this.bpsCheckboxWrapperComponent.onChange();
            }
        }
    };
    BpsCheckboxComponent.prototype.updateAutoFocus = function () {
        if (this.inputElement && this.bpsAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    };
    BpsCheckboxComponent.prototype.writeValue = function (value) {
        this.bpsChecked = value;
        this.cdr.markForCheck();
    };
    BpsCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    BpsCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    BpsCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.bpsDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    BpsCheckboxComponent.prototype.focus = function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    BpsCheckboxComponent.prototype.blur = function () {
        this.inputElement.nativeElement.blur();
    };
    BpsCheckboxComponent.prototype.checkContent = function () {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        }
    };
    BpsCheckboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then(function () { return _this.onTouched(); });
            }
        });
        if (this.bpsCheckboxWrapperComponent) {
            this.bpsCheckboxWrapperComponent.addCheckbox(this);
        }
    };
    BpsCheckboxComponent.prototype.ngOnChanges = function (changes) {
        if (changes.bpsAutoFocus) {
            this.updateAutoFocus();
        }
    };
    BpsCheckboxComponent.prototype.ngAfterViewInit = function () {
        this.updateAutoFocus();
        this.checkContent();
    };
    BpsCheckboxComponent.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.bpsCheckboxWrapperComponent) {
            this.bpsCheckboxWrapperComponent.removeCheckbox(this);
        }
    };
    var BpsCheckboxComponent_1;
    BpsCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: BpsCheckboxWrapperComponent, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    __decorate([
        ViewChild('inputElement', { static: true })
    ], BpsCheckboxComponent.prototype, "inputElement", void 0);
    __decorate([
        ViewChild('contentElement', { static: false })
    ], BpsCheckboxComponent.prototype, "contentElement", void 0);
    __decorate([
        Output()
    ], BpsCheckboxComponent.prototype, "bpsCheckedChange", void 0);
    __decorate([
        Input()
    ], BpsCheckboxComponent.prototype, "bpsValue", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsCheckboxComponent.prototype, "bpsAutoFocus", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsCheckboxComponent.prototype, "bpsDisabled", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsCheckboxComponent.prototype, "bpsIndeterminate", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsCheckboxComponent.prototype, "bpsChecked", void 0);
    __decorate([
        Input()
    ], BpsCheckboxComponent.prototype, "bpsType", void 0);
    BpsCheckboxComponent = BpsCheckboxComponent_1 = __decorate([
        Component({
            selector: '[bps-checkbox]',
            exportAs: 'bpsCheckbox',
            preserveWhitespaces: false,
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            template: "<ng-template #content><ng-content></ng-content></ng-template>\r\n\r\n<span class=\"ant-checkbox\"\r\n  [class.ant-checkbox-checked]=\"bpsChecked && !bpsIndeterminate\"\r\n  [class.ant-checkbox-disabled]=\"bpsDisabled\"\r\n  [class.bps-checkbox-variation1]=\"bpsType === 'variation1'\"\r\n  [class.bps-checkbox-variation3]=\"bpsType === 'variation3'\"\r\n  [class.ant-checkbox-indeterminate]=\"bpsIndeterminate\">\r\n  <input #inputElement [checked]=\"bpsChecked\" [ngModel]=\"bpsChecked\" [disabled]=\"bpsDisabled\" (ngModelChange)=\"innerCheckedChange($event)\" (click)=\"$event.stopPropagation();\" type=\"checkbox\" class=\"ant-checkbox-input\">\r\n  <span class=\"ant-checkbox-inner\">\r\n    <ng-container *ngIf=\"bpsType === 'variation1' || bpsType === 'variation3'\">\r\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n    </ng-container>\r\n  </span>\r\n</span>\r\n<span #contentElement (cdkObserveContent)=\"checkContent()\">\r\n  <ng-container *ngIf=\"bpsType === 'variation2'\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </ng-container>\r\n</span>\r\n",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return BpsCheckboxComponent_1; }),
                    multi: true
                }
            ],
            host: {
                '(click)': 'hostClick($event)'
            },
            styles: [".ant-checkbox-inner{width:15px!important;height:15px!important;border-radius:3px!important;background-color:#363636!important;border:1px solid #707070!important}.ant-checkbox-inner::after{top:48%!important;left:22%!important}.ant-checkbox{border-radius:3px!important;font-size:12px!important;width:15px!important;height:15px!important}.ant-checkbox:hover .ant-checkbox-inner{border:1px solid #445c67!important}.ant-checkbox.bps-checkbox-variation3:hover .ant-checkbox-inner{border:none!important}.ant-checkbox.bps-checkbox-variation3,.ant-checkbox.bps-checkbox-variation3:hover{width:15px!important;height:15px!important;border:none!important;box-shadow:none!important;transition:.3s}.ant-checkbox-checked .ant-checkbox-inner::after{border-color:#00a2d1!important}.ant-checkbox-checked::after{border:none!important}.ant-checkbox-wrapper.cdk-focused .ant-checkbox-inner{box-shadow:0 0 8px 0 #00a2d1!important;border:1px solid #707070!important}.ant-checkbox-wrapper.cdk-focused .bps-checkbox-variation3 .ant-checkbox-inner{box-shadow:none!important;border:none!important}.bps-checkbox-variation3.ant-checkbox-checked .ant-checkbox-inner::after{border:none!important}.bps-checkbox-variation1,.bps-checkbox-variation1 .ant-checkbox-inner,.bps-checkbox-variation1:hover{width:65px!important;height:40px!important;border-radius:8px!important}.bps-checkbox-variation1 .ant-checkbox-inner{border:1px solid #666;display:table!important}.bps-checkbox-variation3 .ant-checkbox-inner,.bps-checkbox-variation3 .ant-checkbox-inner:hover{border:none!important;display:table!important;background-color:transparent!important}.bps-checkbox-variation1:not(.ant-checkbox-disabled):hover .ant-checkbox-inner{border:2px solid #00a2d1!important;transition:.1s!important}.bps-checkbox-variation1 .ant-checkbox-inner svg,.bps-checkbox-variation3 .ant-checkbox-inner svg{display:table-cell!important;vertical-align:middle!important;text-align:center!important;margin:0 auto!important;height:100%!important}.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner::after,.ant-checkbox-checked.bps-checkbox-variation3 .ant-checkbox-inner::after{content:unset!important}.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner{border:2px solid #00a2d1!important}.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner::after,.ant-checkbox.ant-checkbox-disabled:hover .ant-checkbox-inner{border-color:#474747!important;box-shadow:none!important}.bps-checkbox-variation1.ant-checkbox-disabled .ant-checkbox-inner svg{opacity:.4!important}"]
        }),
        __param(2, Optional())
    ], BpsCheckboxComponent);
    return BpsCheckboxComponent;
}());
export { BpsCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1jaGVja2JveC9icHMtY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUNMLFVBQVUsRUFDVixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsYUFBYSxFQUNiLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUF1Qi9FO0lBMEVFLDhCQUNVLFVBQW1DLEVBQ25DLFFBQW1CLEVBQ1AsMkJBQXdELEVBQ3BFLEdBQXNCLEVBQ3RCLFlBQTBCO1FBSjFCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDUCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3BFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBOUVwQyxrQ0FBa0M7UUFDbEMsYUFBUSxHQUF5QixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztRQUM1QyxrQ0FBa0M7UUFDbEMsY0FBUyxHQUFjLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FB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Q0FBQzs4REFBa0M7SUFDOUI7UUFBL0MsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2dFQUFvQztJQUN6RTtRQUFULE1BQU0sRUFBRTtrRUFBeUQ7SUFDekQ7UUFBUixLQUFLLEVBQUU7MERBQWtCO0lBQ0Q7UUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFOzhEQUFzQjtJQUNyQjtRQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7NkRBQXFCO0lBQ3BCO1FBQXhCLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRTtrRUFBMEI7SUFDekI7UUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFOzREQUFvQjtJQUNuQztRQUFSLEtBQUssRUFBRTt5REFBeUM7SUFidEMsb0JBQW9CO1FBbkJoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMscW1DQUE0QztZQUM1QyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsc0JBQW9CLEVBQXBCLENBQW9CLENBQUM7b0JBQ25ELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osU0FBUyxFQUFFLG1CQUFtQjthQUMvQjs7U0FFRixDQUFDO1FBOEVHLFdBQUEsUUFBUSxFQUFFLENBQUE7T0E3RUYsb0JBQW9CLENBZ0hoQztJQUFELDJCQUFDO0NBQUEsQUFoSEQsSUFnSEM7U0FoSFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBpc0VtcHR5LCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQnBzQ2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgQnBzQ2hlY2tib3hUeXBlID0gJ3ZhcmlhdGlvbjEnIHwgJ3ZhcmlhdGlvbjInIHwgJ3ZhcmlhdGlvbjMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLWNoZWNrYm94XScsXHJcbiAgZXhwb3J0QXM6ICdicHNDaGVja2JveCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJwc0NoZWNrYm94Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJ2hvc3RDbGljaygkZXZlbnQpJ1xyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLWNoZWNrYm94LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4gbnVsbDtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBJbnB1dCgpIGJwc1ZhbHVlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0F1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NoZWNrZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBicHNUeXBlOiBCcHNDaGVja2JveFR5cGUgPSAndmFyaWF0aW9uMic7XHJcblxyXG4gIGhvc3RDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB0aGlzLmlubmVyQ2hlY2tlZENoYW5nZSghdGhpcy5icHNDaGVja2VkKTtcclxuICB9XHJcblxyXG4gIGlubmVyQ2hlY2tlZENoYW5nZShjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYnBzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5icHNDaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmJwc0NoZWNrZWQpO1xyXG4gICAgICB0aGlzLmJwc0NoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmJwc0NoZWNrZWQpO1xyXG4gICAgICBpZiAodGhpcy5icHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmJwc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudC5vbkNoYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5icHNBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzQ2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5icHNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJwc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudDogQnBzQ2hlY2tib3hXcmFwcGVyQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvclxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNoZWNrYm94LXdyYXBwZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmJwc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmJwc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudC5hZGRDaGVja2JveCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmJwc0F1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XHJcbiAgICBpZiAodGhpcy5icHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5icHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQucmVtb3ZlQ2hlY2tib3godGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
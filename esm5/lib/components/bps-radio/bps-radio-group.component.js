import { __decorate, __read, __spread } from "tslib";
import { forwardRef, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, OnChanges, OnDestroy, QueryList, Renderer2, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core';
import { BpsRadioComponent } from './bps-radio.component';
var BpsRadioGroupComponent = /** @class */ (function () {
    function BpsRadioGroupComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.bpsButtonStyle = 'outline';
        this.bpsSize = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    BpsRadioGroupComponent_1 = BpsRadioGroupComponent;
    BpsRadioGroupComponent.prototype.updateChildrenStatus = function () {
        var _this = this;
        if (this.radios) {
            Promise.resolve().then(function () {
                _this.radios.forEach(function (radio) {
                    radio.checked = radio.bpsValue === _this.value;
                    if (isNotNil(_this.bpsDisabled)) {
                        radio.bpsDisabled = _this.bpsDisabled;
                    }
                    if (_this.bpsName) {
                        radio.name = _this.bpsName;
                    }
                    radio.markForCheck();
                });
            });
        }
    };
    BpsRadioGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.radios.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe(function () {
            _this.updateChildrenStatus();
            if (_this.selectSubscription) {
                _this.selectSubscription.unsubscribe();
            }
            _this.selectSubscription = merge.apply(void 0, __spread(_this.radios.map(function (radio) { return radio.select$; }))).pipe(takeUntil(_this.destroy$))
                .subscribe(function (radio) {
                if (_this.value !== radio.bpsValue) {
                    _this.value = radio.bpsValue;
                    _this.updateChildrenStatus();
                    _this.onChange(_this.value);
                }
            });
            if (_this.touchedSubscription) {
                _this.touchedSubscription.unsubscribe();
            }
            _this.touchedSubscription = merge.apply(void 0, __spread(_this.radios.map(function (radio) { return radio.touched$; }))).pipe(takeUntil(_this.destroy$))
                .subscribe(function () {
                Promise.resolve().then(function () { return _this.onTouched(); });
            });
        });
    };
    BpsRadioGroupComponent.prototype.ngOnChanges = function (changes) {
        if (changes.bpsDisabled || changes.bpsName) {
            this.updateChildrenStatus();
        }
    };
    BpsRadioGroupComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /* tslint:disable-next-line:no-any */
    BpsRadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.updateChildrenStatus();
        this.cdr.markForCheck();
    };
    BpsRadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    BpsRadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    BpsRadioGroupComponent.prototype.setDisabledState = function (isDisabled) {
        this.bpsDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    var BpsRadioGroupComponent_1;
    BpsRadioGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        ContentChildren(forwardRef(function () { return BpsRadioComponent; }), { descendants: true })
    ], BpsRadioGroupComponent.prototype, "radios", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsRadioGroupComponent.prototype, "bpsDisabled", void 0);
    __decorate([
        Input()
    ], BpsRadioGroupComponent.prototype, "bpsButtonStyle", void 0);
    __decorate([
        Input()
    ], BpsRadioGroupComponent.prototype, "bpsSize", void 0);
    __decorate([
        Input()
    ], BpsRadioGroupComponent.prototype, "bpsName", void 0);
    BpsRadioGroupComponent = BpsRadioGroupComponent_1 = __decorate([
        Component({
            selector: 'bps-radio-group',
            exportAs: 'bpsRadioGroup',
            preserveWhitespaces: false,
            template: "<ng-content></ng-content>",
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return BpsRadioGroupComponent_1; }),
                    multi: true
                }
            ],
            host: {
                '[class.ant-radio-group-large]': "bpsSize === 'large'",
                '[class.ant-radio-group-small]': "bpsSize === 'small'",
                '[class.ant-radio-group-solid]': "bpsButtonStyle === 'solid'"
            }
        })
    ], BpsRadioGroupComponent);
    return BpsRadioGroupComponent;
}());
export { BpsRadioGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1yYWRpby9icHMtcmFkaW8tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsYUFBYSxFQUNiLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFFM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUF3QjFEO0lBK0JFLGdDQUFvQixHQUFzQixFQUFFLFFBQW1CLEVBQUUsVUFBc0I7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE1QmxDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR2pDLGFBQVEsR0FBd0IsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDM0MsY0FBUyxHQUFlLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBRzFCLG1CQUFjLEdBQXVCLFNBQVMsQ0FBQztRQUMvQyxZQUFPLEdBQWtCLFNBQVMsQ0FBQztRQXFCMUMsUUFBUSxDQUFDLFFBQVEsQ0FB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RUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQztvQkFDckQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQUNELElBQUksRUFBRTtnQkFDSiwrQkFBK0IsRUFBRSxxQkFBcUI7Z0JBQ3RELCtCQUErQixFQUFFLHFCQUFxQjtnQkFDdEQsK0JBQStCLEVBQUUsNEJBQTRCO2FBQzlEO1NBQ0YsQ0FBQztPQUNXLHNCQUFzQixDQWdHbEM7SUFBRCw2QkFBQztDQUFBLEFBaEdELElBZ0dDO1NBaEdZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBCcHNSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vYnBzLXJhZGlvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIE56UmFkaW9CdXR0b25TdHlsZSA9ICdvdXRsaW5lJyB8ICdzb2xpZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1yYWRpby1ncm91cCcsXG4gIGV4cG9ydEFzOiAnYnBzUmFkaW9Hcm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnBzUmFkaW9Hcm91cENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwLWxhcmdlXSc6IGBicHNTaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1zbWFsbF0nOiBgYnBzU2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tZ3JvdXAtc29saWRdJzogYGJwc0J1dHRvblN0eWxlID09PSAnc29saWQnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc1JhZGlvR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHByaXZhdGUgdmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgc2VsZWN0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgdG91Y2hlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBvbkNoYW5nZTogKF86IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBCcHNSYWRpb0NvbXBvbmVudCksIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgcmFkaW9zOiBRdWVyeUxpc3Q8QnBzUmFkaW9Db21wb25lbnQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJwc0J1dHRvblN0eWxlOiBOelJhZGlvQnV0dG9uU3R5bGUgPSAnb3V0bGluZSc7XG4gIEBJbnB1dCgpIGJwc1NpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGJwc05hbWU6IHN0cmluZztcblxuICB1cGRhdGVDaGlsZHJlblN0YXR1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yYWRpb3MpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcbiAgICAgICAgICByYWRpby5jaGVja2VkID0gcmFkaW8uYnBzVmFsdWUgPT09IHRoaXMudmFsdWU7XG4gICAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMuYnBzRGlzYWJsZWQpKSB7XG4gICAgICAgICAgICByYWRpby5icHNEaXNhYmxlZCA9IHRoaXMuYnBzRGlzYWJsZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmJwc05hbWUpIHtcbiAgICAgICAgICAgIHJhZGlvLm5hbWUgPSB0aGlzLmJwc05hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJhZGlvLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1yYWRpby1ncm91cCcpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmFkaW9zLmNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdFN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMucmFkaW9zLm1hcChyYWRpbyA9PiByYWRpby5zZWxlY3QkKSlcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZShyYWRpbyA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gcmFkaW8uYnBzVmFsdWUpIHtcbiAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHJhZGlvLmJwc1ZhbHVlO1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XG4gICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICB0aGlzLnRvdWNoZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvdWNoZWRTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLnJhZGlvcy5tYXAocmFkaW8gPT4gcmFkaW8udG91Y2hlZCQpKVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5icHNEaXNhYmxlZCB8fCBjaGFuZ2VzLmJwc05hbWUpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5icHNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==
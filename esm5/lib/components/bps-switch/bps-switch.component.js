import { __decorate } from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { forwardRef, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, TemplateRef, ViewChild, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, NzConfigService, NzSizeDSType, WithConfig } from 'ng-zorro-antd/core';
var NZ_CONFIG_COMPONENT_NAME = 'switch';
var BpsSwitchComponent = /** @class */ (function () {
    function BpsSwitchComponent(nzConfigService, cdr, focusMonitor) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.checked = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.bpsLoading = false;
        this.bpsDual = false;
        this.bpsDualValues = [];
        this.bpsDualValuesChange = new EventEmitter();
        this.bpsDisabled = false;
        this.bpsControl = false;
    }
    BpsSwitchComponent_1 = BpsSwitchComponent;
    BpsSwitchComponent.prototype.hostClick = function (e) {
        e.preventDefault();
        if (!this.bpsDisabled && !this.bpsLoading && !this.bpsControl) {
            this.updateValue(!this.checked);
        }
    };
    BpsSwitchComponent.prototype.checkNode = function (nodeA, nodeB) {
        if (!this.bpsDisabled) {
            nodeA.checked = true;
            nodeB.checked = false;
            this.bpsDualValuesChange.emit(this.bpsDualValues);
        }
    };
    BpsSwitchComponent.prototype.updateValue = function (value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    };
    BpsSwitchComponent.prototype.onKeyDown = function (e) {
        if (!this.bpsControl && !this.bpsDisabled && !this.bpsLoading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.checked);
                e.preventDefault();
            }
        }
    };
    BpsSwitchComponent.prototype.focus = function () {
        if (this.switchElement) {
            this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
        }
    };
    BpsSwitchComponent.prototype.blur = function () {
        if (this.switchElement) {
            this.switchElement.nativeElement.blur();
        }
    };
    BpsSwitchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.switchElement) {
            this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe(function (focusOrigin) {
                if (!focusOrigin) {
                    // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                    // Angular does not expect events to be raised during change detection, so any state change
                    // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                    // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                    // telling the form control it has been touched until the next tick.
                    Promise.resolve().then(function () { return _this.onTouched(); });
                }
            });
        }
        this.cdr.detectChanges();
    };
    BpsSwitchComponent.prototype.ngOnDestroy = function () {
        if (this.switchElement) {
            this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
        }
    };
    BpsSwitchComponent.prototype.writeValue = function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    BpsSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    BpsSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    BpsSwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.bpsDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    var BpsSwitchComponent_1;
    BpsSwitchComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    __decorate([
        ViewChild('switchElement', { static: true })
    ], BpsSwitchComponent.prototype, "switchElement", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSwitchComponent.prototype, "bpsLoading", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSwitchComponent.prototype, "bpsDual", void 0);
    __decorate([
        Input()
    ], BpsSwitchComponent.prototype, "bpsDualValues", void 0);
    __decorate([
        Output()
    ], BpsSwitchComponent.prototype, "bpsDualValuesChange", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSwitchComponent.prototype, "bpsDisabled", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSwitchComponent.prototype, "bpsControl", void 0);
    __decorate([
        Input()
    ], BpsSwitchComponent.prototype, "bpsCheckedChildren", void 0);
    __decorate([
        Input()
    ], BpsSwitchComponent.prototype, "bpsUnCheckedChildren", void 0);
    __decorate([
        Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default')
    ], BpsSwitchComponent.prototype, "bpsSize", void 0);
    BpsSwitchComponent = BpsSwitchComponent_1 = __decorate([
        Component({
            selector: 'bps-switch',
            exportAs: 'bpsSwitch',
            preserveWhitespaces: false,
            template: "<ng-container *ngIf=\"!bpsDual\">\r\n  <button type=\"button\" #switchElement\r\n          class=\"ant-switch\"\r\n          [disabled]=\"bpsDisabled\"\r\n          [class.ant-switch-checked]=\"checked\"\r\n          [class.ant-switch-loading]=\"bpsLoading\"\r\n          [class.ant-switch-disabled]=\"bpsDisabled\"\r\n          [class.ant-switch-small]=\"bpsSize === 'small'\"\r\n          (keydown)=\"onKeyDown($event)\">\r\n    <i *ngIf=\"bpsLoading\" nz-icon nzType=\"loading\" class=\"ant-switch-loading-icon\"></i>\r\n    <span class=\"ant-switch-inner\">\r\n      <span>\r\n        <ng-container *ngIf=\"checked\">\r\n          <ng-container *nzStringTemplateOutlet=\"bpsCheckedChildren\">{{ bpsCheckedChildren }}</ng-container>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!checked\">\r\n          <ng-container *nzStringTemplateOutlet=\"bpsUnCheckedChildren\">{{ bpsUnCheckedChildren }}</ng-container>\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n  </button>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"bpsDual\">\r\n  <button type=\"button\" #switchElement\r\n          class=\"ant-switch bps-switch\"\r\n          [disabled]=\"bpsDisabled\"\r\n          [class.bps-switch-disabled]=\"bpsDisabled\"\r\n          (keydown)=\"onKeyDown($event)\">\r\n    <ng-container *ngIf=\"bpsDualValues.length > 1\">\r\n      <div class=\"bps-switch-inner\">\r\n        <div class=\"bps-switch-node bps-switch-node-left\"\r\n             (click)=\"checkNode(bpsDualValues[0], bpsDualValues[1])\"\r\n             [class.bps-switch-checked]=\"bpsDualValues[0].checked\">\r\n          {{ bpsDualValues[0].title }}\r\n        </div>\r\n        <div class=\"bps-switch-node bps-switch-node-right\"\r\n             (click)=\"checkNode(bpsDualValues[1], bpsDualValues[0])\"\r\n             [class.bps-switch-checked]=\"bpsDualValues[1].checked\">\r\n          {{ bpsDualValues[1].title }}\r\n        </div>\r\n      </div>  \r\n    </ng-container>\r\n  </button>\r\n</ng-container>\r\n\r\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return BpsSwitchComponent_1; }),
                    multi: true
                }
            ],
            host: {
                '(click)': 'hostClick($event)'
            },
            styles: [".ant-switch::after{background-color:#999!important;width:16px!important;height:16px!important;top:-3px;left:-1px!important}.ant-switch:focus{box-shadow:none!important}.ant-switch{min-width:30px!important;height:12px!important;border-radius:100px!important;border:1px solid #666!important;background-color:#363636!important}.ant-switch-checked::after{left:100%!important;margin-left:1px!important;transform:translateX(-100%);border:1px solid #00a2d1!important;background-color:#00a2d1!important}.ant-switch-checked{border:1px solid #00a2d1!important}.ant-switch-disabled::after{background-color:#474747!important;border:1px solid #474747!important}.ant-switch-disabled{border:1px solid #474747!important}.bps-switch{border:none!important;height:unset!important;border-radius:4px!important}.bps-switch-inner{background-color:#474747!important;border-radius:4px}.ant-switch.bps-switch::after{content:''!important;position:relative!important}.bps-switch-node{border-radius:4px;border:1px solid #474747;padding:0 14px;background-color:#363636;margin:0;display:inline-block;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:center;color:#fff}.bps-switch-node:not(.bps-switch-checked):hover{background-color:#484848}.bps-switch-node-left{border-radius:4px 0 0 4px;border-right:none}.bps-switch-node-right{border-radius:0 4px 4px 0;border-left:none}.bps-switch-checked{border-radius:4px;border:1px solid #00a2d1}.bps-switch-disabled .bps-switch-node{background-color:#363636!important;border-color:#474747!important;color:#666!important;cursor:not-allowed}.bps-switch-disabled .bps-switch-inner{background-color:#363636}", "\n      bps-switch {\n        display: inline-block;\n      }\n    "]
        })
    ], BpsSwitchComponent);
    return BpsSwitchComponent;
}());
export { BpsSwitchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXN3aXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtc3dpdGNoL2Jwcy1zd2l0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlFLE9BQU8sRUFDTCxVQUFVLEVBQ1YsYUFBYSxFQUNiLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBRWpCLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3RixJQUFNLHdCQUF3QixHQUFHLFFBQVEsQ0FBQztBQTRCMUM7SUFnRUUsNEJBQ1MsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDdEIsWUFBMEI7UUFGM0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBbEVwQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBNkIsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDaEQsY0FBUyxHQUFlLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBRVYsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixZQUFPLEdB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QUU7dURBQWlCO0lBQ2hDO1FBQVIsS0FBSyxFQUFFOzZEQUEyRDtJQUN6RDtRQUFULE1BQU0sRUFBRTttRUFBK0Y7SUFDL0U7UUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFOzJEQUFxQjtJQUNwQjtRQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7MERBQW9CO0lBQ25DO1FBQVIsS0FBSyxFQUFFO2tFQUFnRDtJQUMvQztRQUFSLEtBQUssRUFBRTtvRUFBa0Q7SUFDQTtRQUF6RCxLQUFLLEVBQUUsRUFBRSxVQUFVLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDO3VEQUF1QjtJQWJyRSxrQkFBa0I7UUExQjlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIseStEQUEwQztZQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUVyQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQWtCLEVBQWxCLENBQWtCLENBQUM7b0JBQ2pELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osU0FBUyxFQUFFLG1CQUFtQjthQUMvQjt5cERBRUMscUVBSUM7U0FFSixDQUFDO09BQ1csa0JBQWtCLENBNkc5QjtJQUFELHlCQUFDO0NBQUEsQUE3R0QsSUE2R0M7U0E3R1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBFTlRFUiwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFNQQUNFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56Q29uZmlnU2VydmljZSwgTnpTaXplRFNUeXBlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdzd2l0Y2gnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtc3dpdGNoJyxcclxuICBleHBvcnRBczogJ2Jwc1N3aXRjaCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXN3aXRjaC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCcHNTd2l0Y2hDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJyhjbGljayknOiAnaG9zdENsaWNrKCRldmVudCknXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgYnBzLXN3aXRjaCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgY2hlY2tlZCA9IGZhbHNlO1xyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgQFZpZXdDaGlsZCgnc3dpdGNoRWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgc3dpdGNoRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzTG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEdWFsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYnBzRHVhbFZhbHVlczogeyB0aXRsZTogc3RyaW5nOyBjaGVja2VkOiBib29sZWFuIH1bXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBicHNEdWFsVmFsdWVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyB0aXRsZTogc3RyaW5nOyBjaGVja2VkOiBib29sZWFuIH1bXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NvbnRyb2wgPSBmYWxzZTtcclxuICBASW5wdXQoKSBicHNDaGVja2VkQ2hpbGRyZW46IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGJwc1VuQ2hlY2tlZENoaWxkcmVuOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgYnBzU2l6ZTogTnpTaXplRFNUeXBlO1xyXG5cclxuICBob3N0Q2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0aGlzLmJwc0Rpc2FibGVkICYmICF0aGlzLmJwc0xvYWRpbmcgJiYgIXRoaXMuYnBzQ29udHJvbCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmNoZWNrZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tOb2RlKG5vZGVBOiB7IHRpdGxlOiBzdHJpbmc7IGNoZWNrZWQ6IGJvb2xlYW4gfSwgbm9kZUI6IHsgdGl0bGU6IHN0cmluZzsgY2hlY2tlZDogYm9vbGVhbiB9KSB7XHJcbiAgICBpZiAoIXRoaXMuYnBzRGlzYWJsZWQpIHtcclxuICAgICAgbm9kZUEuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIG5vZGVCLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5icHNEdWFsVmFsdWVzQ2hhbmdlLmVtaXQodGhpcy5icHNEdWFsVmFsdWVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jaGVja2VkICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5icHNDb250cm9sICYmICF0aGlzLmJwc0Rpc2FibGVkICYmICF0aGlzLmJwc0xvYWRpbmcpIHtcclxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZmFsc2UpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0cnVlKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBTUEFDRSB8fCBlLmtleUNvZGUgPT09IEVOVEVSKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5jaGVja2VkKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3dpdGNoRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLnN3aXRjaEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgICB9ICBcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zd2l0Y2hFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuc3dpdGNoRWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3JcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN3aXRjaEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLnN3aXRjaEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XHJcbiAgICAgICAgICAvLyBXaGVuIGEgZm9jdXNlZCBlbGVtZW50IGJlY29tZXMgZGlzYWJsZWQsIHRoZSBicm93c2VyICppbW1lZGlhdGVseSogZmlyZXMgYSBibHVyIGV2ZW50LlxyXG4gICAgICAgICAgLy8gQW5ndWxhciBkb2VzIG5vdCBleHBlY3QgZXZlbnRzIHRvIGJlIHJhaXNlZCBkdXJpbmcgY2hhbmdlIGRldGVjdGlvbiwgc28gYW55IHN0YXRlIGNoYW5nZVxyXG4gICAgICAgICAgLy8gKHN1Y2ggYXMgYSBmb3JtIGNvbnRyb2wncyAnbmctdG91Y2hlZCcpIHdpbGwgY2F1c2UgYSBjaGFuZ2VkLWFmdGVyLWNoZWNrZWQgZXJyb3IuXHJcbiAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTc3OTMuIFRvIHdvcmsgYXJvdW5kIHRoaXMsIHdlIGRlZmVyXHJcbiAgICAgICAgICAvLyB0ZWxsaW5nIHRoZSBmb3JtIGNvbnRyb2wgaXQgaGFzIGJlZW4gdG91Y2hlZCB1bnRpbCB0aGUgbmV4dCB0aWNrLlxyXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zd2l0Y2hFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuc3dpdGNoRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
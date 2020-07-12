import { __decorate, __param, __read, __spread } from "tslib";
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { forwardRef, AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, OnDestroy, OnInit, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, EMPTY, Subject } from 'rxjs';
import { flatMap, startWith, takeUntil } from 'rxjs/operators';
import { isNotNil, slideMotion, toBoolean, InputBoolean, NzNoAnimationDirective, NzSizeLDSType } from 'ng-zorro-antd/core';
import { BpsOptionGroupComponent } from './bps-option-group.component';
import { BpsOptionComponent } from './bps-option.component';
import { BpsSelectTopControlComponent } from './bps-select-top-control.component';
import { BpsSelectService } from './bps-select.service';
var BpsSelectComponent = /** @class */ (function () {
    function BpsSelectComponent(renderer, nzSelectService, cdr, platform, elementRef, noAnimation) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.open = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.dropDownPosition = 'bottom';
        this._disabled = false;
        this.isInit = false;
        this.destroy$ = new Subject();
        this.bpsOnSearch = new EventEmitter();
        this.bpsScrollToBottom = new EventEmitter();
        this.bpsOpenChange = new EventEmitter();
        this.bpsBlur = new EventEmitter();
        this.bpsFocus = new EventEmitter();
        this.bpsSize = 'default';
        this.bpsDropdownMatchSelectWidth = true;
        this.bpsAllowClear = false;
        this.bpsShowSearch = false;
        this.bpsLoading = false;
        this.bpsAutoFocus = false;
        this.bpsShowArrow = true;
        this.bpsTokenSeparators = [];
        renderer.addClass(elementRef.nativeElement, 'ant-select');
    }
    BpsSelectComponent_1 = BpsSelectComponent;
    Object.defineProperty(BpsSelectComponent.prototype, "bpsAutoClearSearchValue", {
        set: function (value) {
            this.nzSelectService.autoClearSearchValue = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsMaxMultipleCount", {
        set: function (value) {
            this.nzSelectService.maxMultipleCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsServerSearch", {
        set: function (value) {
            this.nzSelectService.serverSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsMode", {
        set: function (value) {
            this.nzSelectService.mode = value;
            this.nzSelectService.check();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsFilterOption", {
        set: function (value) {
            this.nzSelectService.filterOption = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "compareWith", {
        set: function (value) {
            this.nzSelectService.compareWith = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsOpen", {
        set: function (value) {
            this.open = value;
            this.nzSelectService.setOpenState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsDisabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = toBoolean(value);
            this.nzSelectService.disabled = this._disabled;
            this.nzSelectService.check();
            if (this.bpsDisabled && this.isInit) {
                this.closeDropDown();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsSelectTopControlDOM", {
        get: function () {
            return this.bpsSelectTopControlElement && this.bpsSelectTopControlElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    BpsSelectComponent.prototype.updateAutoFocus = function () {
        if (this.bpsSelectTopControlDOM && this.bpsAutoFocus) {
            this.bpsSelectTopControlDOM.focus();
        }
    };
    BpsSelectComponent.prototype.focus = function () {
        if (this.bpsSelectTopControlDOM) {
            this.bpsSelectTopControlDOM.focus();
        }
    };
    BpsSelectComponent.prototype.blur = function () {
        if (this.bpsSelectTopControlDOM) {
            this.bpsSelectTopControlDOM.blur();
        }
    };
    BpsSelectComponent.prototype.onFocus = function () {
        this.bpsFocus.emit();
    };
    BpsSelectComponent.prototype.onBlur = function () {
        this.bpsBlur.emit();
    };
    BpsSelectComponent.prototype.onKeyDown = function (event) {
        this.nzSelectService.onKeyDown(event);
    };
    BpsSelectComponent.prototype.toggleDropDown = function () {
        if (!this.bpsDisabled) {
            this.nzSelectService.setOpenState(!this.open);
        }
    };
    BpsSelectComponent.prototype.closeDropDown = function () {
        this.nzSelectService.setOpenState(false);
    };
    BpsSelectComponent.prototype.onPositionChange = function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    BpsSelectComponent.prototype.updateCdkConnectedOverlayStatus = function () {
        if (this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        }
    };
    BpsSelectComponent.prototype.updateCdkConnectedOverlayPositions = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        });
    };
    /** update ngModel -> update listOfSelectedValue **/
    // tslint:disable-next-line:no-any
    BpsSelectComponent.prototype.writeValue = function (value) {
        this.value = value;
        var listValue = []; // tslint:disable-line:no-any
        if (isNotNil(value)) {
            if (this.nzSelectService.isMultipleOrTags) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
        this.nzSelectService.updateListOfSelectedValue(listValue, false);
        this.cdr.markForCheck();
    };
    BpsSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    BpsSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    BpsSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.bpsDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    BpsSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzSelectService.animationEvent$
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () { return _this.updateCdkConnectedOverlayPositions(); });
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe(function (data) {
            _this.bpsOnSearch.emit(data);
            _this.updateCdkConnectedOverlayPositions();
        });
        this.nzSelectService.modelChange$.pipe(takeUntil(this.destroy$)).subscribe(function (modelValue) {
            if (_this.value !== modelValue) {
                _this.value = modelValue;
                _this.onChange(_this.value);
            }
        });
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(function (value) {
            if (_this.open !== value) {
                _this.bpsOpenChange.emit(value);
            }
            if (value) {
                _this.focus();
                _this.updateCdkConnectedOverlayStatus();
            }
            else {
                _this.blur();
                _this.onTouched();
            }
            _this.open = value;
            _this.nzSelectService.clearInput();
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.cdr.markForCheck();
        });
    };
    BpsSelectComponent.prototype.ngAfterViewInit = function () {
        this.updateCdkConnectedOverlayStatus();
        this.updateAutoFocus();
        this.isInit = true;
    };
    BpsSelectComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.listOfNzOptionGroupComponent.changes
            .pipe(startWith(true), flatMap(function () {
            return merge.apply(void 0, __spread([_this.listOfNzOptionGroupComponent.changes,
                _this.listOfNzOptionComponent.changes], _this.listOfNzOptionComponent.map(function (option) { return option.changes; }), _this.listOfNzOptionGroupComponent.map(function (group) {
                return group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : EMPTY;
            }))).pipe(startWith(true));
        }))
            .subscribe(function () {
            _this.nzSelectService.updateTemplateOption(_this.listOfNzOptionComponent.toArray(), _this.listOfNzOptionGroupComponent.toArray());
        });
    };
    BpsSelectComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    var BpsSelectComponent_1;
    BpsSelectComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: BpsSelectService },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    __decorate([
        ViewChild(CdkOverlayOrigin, { static: false })
    ], BpsSelectComponent.prototype, "cdkOverlayOrigin", void 0);
    __decorate([
        ViewChild(CdkConnectedOverlay, { static: false })
    ], BpsSelectComponent.prototype, "cdkConnectedOverlay", void 0);
    __decorate([
        ViewChild(BpsSelectTopControlComponent, { static: true })
    ], BpsSelectComponent.prototype, "bpsSelectTopControlComponent", void 0);
    __decorate([
        ViewChild(BpsSelectTopControlComponent, { static: true, read: ElementRef })
    ], BpsSelectComponent.prototype, "bpsSelectTopControlElement", void 0);
    __decorate([
        ContentChildren(BpsOptionComponent)
    ], BpsSelectComponent.prototype, "listOfNzOptionComponent", void 0);
    __decorate([
        ContentChildren(BpsOptionGroupComponent)
    ], BpsSelectComponent.prototype, "listOfNzOptionGroupComponent", void 0);
    __decorate([
        Output()
    ], BpsSelectComponent.prototype, "bpsOnSearch", void 0);
    __decorate([
        Output()
    ], BpsSelectComponent.prototype, "bpsScrollToBottom", void 0);
    __decorate([
        Output()
    ], BpsSelectComponent.prototype, "bpsOpenChange", void 0);
    __decorate([
        Output()
    ], BpsSelectComponent.prototype, "bpsBlur", void 0);
    __decorate([
        Output()
    ], BpsSelectComponent.prototype, "bpsFocus", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsSize", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsDropdownClassName", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsDropdownMatchSelectWidth", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsDropdownStyle", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsNotFoundContent", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSelectComponent.prototype, "bpsAllowClear", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSelectComponent.prototype, "bpsShowSearch", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSelectComponent.prototype, "bpsLoading", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSelectComponent.prototype, "bpsAutoFocus", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsPlaceHolder", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsMaxTagCount", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsDropdownRender", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsCustomTemplate", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsSuffixIcon", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsClearIcon", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsRemoveIcon", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsMenuItemSelectedIcon", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsShowArrow", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsTokenSeparators", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsMaxTagPlaceholder", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsAutoClearSearchValue", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsMaxMultipleCount", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsServerSearch", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsMode", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsFilterOption", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "compareWith", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsOpen", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsDisabled", null);
    BpsSelectComponent = BpsSelectComponent_1 = __decorate([
        Component({
            selector: 'bps-select',
            exportAs: 'bpsSelect',
            preserveWhitespaces: false,
            providers: [
                BpsSelectService,
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return BpsSelectComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            animations: [slideMotion],
            template: "<div cdkOverlayOrigin\n  bps-select-top-control\n  tabindex=\"0\"\n  class=\"ant-select-selection\"\n  [bpsOpen]=\"open\"\n  [@.disabled]=\"noAnimation?.nzNoAnimation\"\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n  [bpsMaxTagPlaceholder]=\"bpsMaxTagPlaceholder\"\n  [bpsPlaceHolder]=\"bpsPlaceHolder\"\n  [bpsAllowClear]=\"bpsAllowClear\"\n  [bpsMaxTagCount]=\"bpsMaxTagCount\"\n  [bpsShowArrow]=\"bpsShowArrow\"\n  [bpsLoading]=\"bpsLoading\"\n  [bpsCustomTemplate]=\"bpsCustomTemplate\"\n  [bpsSuffixIcon]=\"bpsSuffixIcon\"\n  [bpsClearIcon]=\"bpsClearIcon\"\n  [bpsRemoveIcon]=\"bpsRemoveIcon\"\n  [bpsShowSearch]=\"bpsShowSearch\"\n  [bpsTokenSeparators]=\"bpsTokenSeparators\"\n  [class.ant-select-selection--single]=\"nzSelectService.isSingleMode\"\n  [class.ant-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\n  (focus)=\"onFocus()\"\n  (blur)=\"onBlur()\"\n  (keydown)=\"onKeyDown($event)\">\n</div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayMinWidth]=\"bpsDropdownMatchSelectWidth? null : triggerWidth\"\n  [cdkConnectedOverlayWidth]=\"bpsDropdownMatchSelectWidth? triggerWidth - 21 : null\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown();\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"open\">\n  <div\n    class=\"ant-select-dropdown\"\n    [class.ant-select-dropdown--single]=\"nzSelectService.isSingleMode\"\n    [class.ant-select-dropdown--multiple]=\"nzSelectService.isMultipleOrTags\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    [nzClassListAdd]=\"[bpsDropdownClassName]\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [ngStyle]=\"bpsDropdownStyle\">\n    <div bps-option-container\n      style=\"overflow: auto;transform: translateZ(0px);\"\n      (keydown)=\"onKeyDown($event)\"\n      [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n      [bpsNotFoundContent]=\"bpsNotFoundContent\"\n      (bpsScrollToBottom)=\"bpsScrollToBottom.emit()\">\n    </div>\n    <ng-template [ngTemplateOutlet]=\"bpsDropdownRender\"></ng-template>\n  </div>\n</ng-template>\n<!--can not use ViewChild since it will match sub options in option group -->\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
            host: {
                '[class.ant-select-lg]': 'bpsSize==="large"',
                '[class.ant-select-sm]': 'bpsSize==="small"',
                '[class.ant-select-enabled]': '!bpsDisabled',
                '[class.ant-select-no-arrow]': '!bpsShowArrow',
                '[class.ant-select-disabled]': 'bpsDisabled',
                '[class.ant-select-allow-clear]': 'bpsAllowClear',
                '[class.ant-select-open]': 'open',
                '(click)': 'toggleDropDown()'
            },
            styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0!important;box-shadow:none}.ant-select-disabled .ant-select-selection{cursor:url(/assets/bps-icons/sps_inaccessible_icon_grey.svg),auto}", "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
        }),
        __param(5, Host()), __param(5, Optional())
    ], BpsSelectComponent);
    return BpsSelectComponent;
}());
export { BpsSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtc2VsZWN0L2Jwcy1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCxVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixzQkFBc0IsRUFDdEIsYUFBYSxFQUNkLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLDRCQUE0QixFQUFF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Q3JDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN6QixxaEZBQTBDO1lBRTFDLElBQUksRUFBRTtnQkFDSix1QkFBdUIsRUFBRSxtQkFBbUI7Z0JBQzVDLHVCQUF1QixFQUFFLG1CQUFtQjtnQkFDNUMsNEJBQTRCLEVBQUUsY0FBYztnQkFDNUMsNkJBQTZCLEVBQUUsZUFBZTtnQkFDOUMsNkJBQTZCLEVBQUUsYUFBYTtnQkFDNUMsZ0NBQWdDLEVBQUUsZUFBZTtnQkFDakQseUJBQXlCLEVBQUUsTUFBTTtnQkFDakMsU0FBUyxFQUFFLGtCQUFrQjthQUM5QjtzUUFFQywrTEFTQztTQUVKLENBQUM7UUFzS0csV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7T0FyS1Ysa0JBQWtCLENBeVE5QjtJQUFELHlCQUFDO0NBQUEsQUF6UUQsSUF5UUM7U0F6UVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IG1lcmdlLCBFTVBUWSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmxhdE1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIGlzTm90TmlsLFxuICBzbGlkZU1vdGlvbixcbiAgdG9Cb29sZWFuLFxuICBJbnB1dEJvb2xlYW4sXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXG4gIE56U2l6ZUxEU1R5cGVcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgQnBzT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2Jwcy1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEJwc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYnBzLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVEZpbHRlck9wdGlvbiB9IGZyb20gJy4vYnBzLW9wdGlvbi5waXBlJztcbmltcG9ydCB7IEJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2Jwcy1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IEJwc1NlbGVjdFNlcnZpY2UgfSBmcm9tICcuL2Jwcy1zZWxlY3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1zZWxlY3QnLFxuICBleHBvcnRBczogJ2Jwc1NlbGVjdCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICBCcHNTZWxlY3RTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnBzU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icHMtc2VsZWN0LmNvbXBvbmVudC5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnYnBzU2l6ZT09PVwibGFyZ2VcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNtXSc6ICdicHNTaXplPT09XCJzbWFsbFwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nOiAnIWJwc0Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtbm8tYXJyb3ddJzogJyFicHNTaG93QXJyb3cnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kaXNhYmxlZF0nOiAnYnBzRGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnYnBzQWxsb3dDbGVhcicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ29wZW4nLFxuICAgICcoY2xpY2spJzogJ3RvZ2dsZURyb3BEb3duKCknXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnBzU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgb3BlbiA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHZhbHVlOiBhbnkgfCBhbnlbXTtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4sIHsgc3RhdGljOiBmYWxzZSB9KSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiBmYWxzZSB9KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAVmlld0NoaWxkKEJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIGJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ6IEJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoQnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgYnBzU2VsZWN0VG9wQ29udHJvbEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIC8qKiBzaG91bGQgbW92ZSB0byBuei1vcHRpb24tY29udGFpbmVyIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjA4MTAgcmVzb2x2ZWQgKiovXG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzT3B0aW9uQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogUXVlcnlMaXN0PEJwc09wdGlvbkNvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzT3B0aW9uR3JvdXBDb21wb25lbnQpIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IFF1ZXJ5TGlzdDxCcHNPcHRpb25Hcm91cENvbXBvbmVudD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzU2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0ZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBASW5wdXQoKSBicHNTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBicHNEcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBicHNEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xuICBASW5wdXQoKSBicHNEcm9wZG93blN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBASW5wdXQoKSBicHNOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0FsbG93Q2xlYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Nob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0xvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0F1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBicHNQbGFjZUhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBicHNNYXhUYWdDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBicHNEcm9wZG93blJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc0N1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogQnBzT3B0aW9uQ29tcG9uZW50IH0+O1xuICBASW5wdXQoKSBicHNTdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgYnBzQ2xlYXJJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgYnBzUmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc01lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgYnBzU2hvd0Fycm93ID0gdHJ1ZTtcbiAgQElucHV0KCkgYnBzVG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGJwc01heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55W10gfT47XG5cbiAgQElucHV0KClcbiAgc2V0IGJwc0F1dG9DbGVhclNlYXJjaFZhbHVlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGJwc01heE11bHRpcGxlQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm1heE11bHRpcGxlQ291bnQgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBicHNTZXJ2ZXJTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZXJ2ZXJTZWFyY2ggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGJwc01vZGUodmFsdWU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncycpIHtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5tb2RlID0gdmFsdWU7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2soKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBicHNGaWx0ZXJPcHRpb24odmFsdWU6IFRGaWx0ZXJPcHRpb24pIHtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IGNvbXBhcmVXaXRoKHZhbHVlOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbikge1xuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYnBzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMub3BlbiA9IHZhbHVlO1xuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnNldE9wZW5TdGF0ZSh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYnBzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuZGlzYWJsZWQgPSB0aGlzLl9kaXNhYmxlZDtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjaygpO1xuICAgIGlmICh0aGlzLmJwc0Rpc2FibGVkICYmIHRoaXMuaXNJbml0KSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9XG4gIH1cblxuICBnZXQgYnBzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgZ2V0IGJwc1NlbGVjdFRvcENvbnRyb2xET00oKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmJwc1NlbGVjdFRvcENvbnRyb2xFbGVtZW50ICYmIHRoaXMuYnBzU2VsZWN0VG9wQ29udHJvbEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5icHNTZWxlY3RUb3BDb250cm9sRE9NICYmIHRoaXMuYnBzQXV0b0ZvY3VzKSB7XG4gICAgICB0aGlzLmJwc1NlbGVjdFRvcENvbnRyb2xET00uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5icHNTZWxlY3RUb3BDb250cm9sRE9NKSB7XG4gICAgICB0aGlzLmJwc1NlbGVjdFRvcENvbnRyb2xET00uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJwc1NlbGVjdFRvcENvbnRyb2xET00pIHtcbiAgICAgIHRoaXMuYnBzU2VsZWN0VG9wQ29udHJvbERPTS5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmJwc0ZvY3VzLmVtaXQoKTtcbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmJwc0JsdXIuZW1pdCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uub25LZXlEb3duKGV2ZW50KTtcbiAgfVxuXG4gIHRvZ2dsZURyb3BEb3duKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5icHNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKCF0aGlzLm9wZW4pO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gIH1cblxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IEJwc1NlbGVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QnKTtcbiAgfVxuXG4gIC8qKiB1cGRhdGUgbmdNb2RlbCAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZSAqKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkgfCBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBsZXQgbGlzdFZhbHVlOiBhbnlbXSA9IFtdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzKSB7XG4gICAgICAgIGxpc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdFZhbHVlID0gW3ZhbHVlXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0VmFsdWUsIGZhbHNlKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmJwc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmFuaW1hdGlvbkV2ZW50JFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKSk7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmJwc09uU2VhcmNoLmVtaXQoZGF0YSk7XG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcbiAgICB9KTtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5tb2RlbENoYW5nZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtb2RlbFZhbHVlID0+IHtcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBtb2RlbFZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBtb2RlbFZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHRoaXMub3BlbiAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5icHNPcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbiA9IHZhbHVlO1xuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2xlYXJJbnB1dCgpO1xuICAgIH0pO1xuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICBmbGF0TWFwKCgpID0+XG4gICAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcyxcbiAgICAgICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcyxcbiAgICAgICAgICAgIC4uLnRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQubWFwKG9wdGlvbiA9PiBvcHRpb24uY2hhbmdlcyksXG4gICAgICAgICAgICAuLi50aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQubWFwKGdyb3VwID0+XG4gICAgICAgICAgICAgIGdyb3VwLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50ID8gZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcyA6IEVNUFRZXG4gICAgICAgICAgICApXG4gICAgICAgICAgKS5waXBlKHN0YXJ0V2l0aCh0cnVlKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZVRlbXBsYXRlT3B0aW9uKFxuICAgICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpLFxuICAgICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC50b0FycmF5KClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=
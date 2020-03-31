import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { BpsInputDirective } from './bps-input.directive';
var BpsInputGroupComponent = /** @class */ (function () {
    function BpsInputGroupComponent() {
        this._size = 'default';
        this.bpsSearch = false;
        this.bpsCompact = false;
    }
    Object.defineProperty(BpsInputGroupComponent.prototype, "bpsSize", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
            this.updateChildrenInputSize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isLarge", {
        get: function () {
            return this.bpsSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isSmall", {
        get: function () {
            return this.bpsSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isAffix", {
        get: function () {
            return !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isAddOn", {
        get: function () {
            return !!(this.bpsAddOnAfter || this.bpsAddOnBefore || this.bpsAddOnAfterIcon || this.bpsAddOnBeforeIcon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isAffixWrapper", {
        get: function () {
            return this.isAffix && !this.isAddOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isGroup", {
        get: function () {
            return !this.isAffix && !this.isAddOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeGroup", {
        get: function () {
            return this.isGroup && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeGroupWrapper", {
        get: function () {
            return this.isAddOn && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeAffix", {
        get: function () {
            return this.isAffixWrapper && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeSearch", {
        get: function () {
            return this.bpsSearch && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallGroup", {
        get: function () {
            return this.isGroup && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallAffix", {
        get: function () {
            return this.isAffixWrapper && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallGroupWrapper", {
        get: function () {
            return this.isAddOn && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallSearch", {
        get: function () {
            return this.bpsSearch && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    BpsInputGroupComponent.prototype.updateChildrenInputSize = function () {
        var _this = this;
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(function (item) { return (item.bpsSize = _this.bpsSize); });
        }
    };
    BpsInputGroupComponent.prototype.ngAfterContentInit = function () {
        this.updateChildrenInputSize();
    };
    __decorate([
        ContentChildren(BpsInputDirective)
    ], BpsInputGroupComponent.prototype, "listOfNzInputDirective", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsAddOnBeforeIcon", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsAddOnAfterIcon", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsPrefixIcon", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsSuffixIcon", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsAddOnBefore", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsAddOnAfter", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsPrefix", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsSuffix", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsInputGroupComponent.prototype, "bpsSearch", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsInputGroupComponent.prototype, "bpsCompact", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsSize", null);
    BpsInputGroupComponent = __decorate([
        Component({
            selector: 'bps-input-group',
            exportAs: 'bpsInputGroup',
            preserveWhitespaces: false,
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn\">\n  <span class=\"ant-input-group-addon\" *ngIf=\"bpsAddOnBefore || bpsAddOnBeforeIcon\">\n    <i nz-icon [nzType]=\"bpsAddOnBeforeIcon\" *ngIf=\"bpsAddOnBeforeIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsAddOnBefore\">{{ bpsAddOnBefore }}</ng-container>\n  </span>\n  <ng-container *ngIf=\"!isAffix\">\n    <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  </ng-container>\n  <span class=\"ant-input-affix-wrapper\" [class.ant-input-affix-wrapper-sm]=\"isSmall\" [class.ant-input-affix-wrapper-lg]=\"isLarge\" *ngIf=\"isAffix\">\n    <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n  </span>\n  <span class=\"ant-input-group-addon\" *ngIf=\"bpsAddOnAfter || bpsAddOnAfterIcon\">\n    <i nz-icon [nzType]=\"bpsAddOnAfterIcon\" *ngIf=\"bpsAddOnAfterIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsAddOnAfter\">{{ bpsAddOnAfter }}</ng-container>\n  </span>\n</span>\n<ng-container *ngIf=\"isAffix && !isAddOn\">\n  <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n</ng-container>\n<ng-template #affixTemplate>\n  <span class=\"ant-input-prefix\" *ngIf=\"bpsPrefix || bpsPrefixIcon\">\n    <!-- TODO: should have a class to set its color, cc: antd-->\n    <i nz-icon [nzType]=\"bpsPrefixIcon\" *ngIf=\"bpsPrefixIcon\" style=\"color: rgba(0, 0, 0, 0.25)\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsPrefix\">{{ bpsPrefix }}</ng-container>\n  </span>\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  <span class=\"ant-input-suffix\" *ngIf=\"bpsSuffix || bpsSuffixIcon\">\n    <i nz-icon [nzType]=\"bpsSuffixIcon\" *ngIf=\"bpsSuffixIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsSuffix\">{{ bpsSuffix }}</ng-container>\n  </span>\n</ng-template>\n<ng-container *ngIf=\"isGroup\">\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n</ng-container>\n<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n",
            host: {
                '[class.ant-input-group-compact]': 'bpsCompact',
                '[class.ant-input-search-enter-button]': 'bpsSearch',
                '[class.ant-input-search]': 'bpsSearch',
                '[class.ant-input-search-sm]': 'isSmallSearch',
                '[class.ant-input-affix-wrapper]': 'isAffixWrapper',
                '[class.ant-input-group-wrapper]': 'isAddOn',
                '[class.ant-input-group]': 'isGroup',
                '[class.ant-input-group-lg]': 'isLargeGroup',
                '[class.ant-input-group-wrapper-lg]': 'isLargeGroupWrapper',
                '[class.ant-input-affix-wrapper-lg]': 'isLargeAffix',
                '[class.ant-input-search-lg]': 'isLargeSearch',
                '[class.ant-input-group-sm]': 'isSmallGroup',
                '[class.ant-input-affix-wrapper-sm]': 'isSmallAffix',
                '[class.ant-input-group-wrapper-sm]': 'isSmallGroupWrapper'
            }
        })
    ], BpsInputGroupComponent);
    return BpsInputGroupComponent;
}());
export { BpsInputGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWlucHV0LWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1pbnB1dC9icHMtaW5wdXQtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUE4QixNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBMEIxRDtJQUFBO1FBRVUsVUFBSyxHQUFrQixTQUFTLENBQUM7UUFTaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBNEU5QyxDQUFDO0lBMUVVLHNCQUFJLDJDQUFPO2FBS3BCO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFQUSxVQUFZLEtBQW9CO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksMkNBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFPO2FBQVg7WUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUks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USxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsZUFBZTtZQUN6QixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLDIvREFBK0M7WUFDL0MsSUFBSSxFQUFFO2dCQUNKLGlDQUFpQyxFQUFFLFlBQVk7Z0JBQy9DLHVDQUF1QyxFQUFFLFdBQVc7Z0JBQ3BELDBCQUEwQixFQUFFLFdBQVc7Z0JBQ3ZDLDZCQUE2QixFQUFFLGVBQWU7Z0JBQzlDLGlDQUFpQyxFQUFFLGdCQUFnQjtnQkFDbkQsaUNBQWlDLEVBQUUsU0FBUztnQkFDNUMseUJBQXlCLEVBQUUsU0FBUztnQkFDcEMsNEJBQTRCLEVBQUUsY0FBYztnQkFDNUMsb0NBQW9DLEVBQUUscUJBQXFCO2dCQUMzRCxvQ0FBb0MsRUFBRSxjQUFjO2dCQUNwRCw2QkFBNkIsRUFBRSxlQUFlO2dCQUM5Qyw0QkFBNEIsRUFBRSxjQUFjO2dCQUM1QyxvQ0FBb0MsRUFBRSxjQUFjO2dCQUNwRCxvQ0FBb0MsRUFBRSxxQkFBcUI7YUFDNUQ7U0FDRixDQUFDO09BQ1csc0JBQXNCLENBd0ZsQztJQUFELDZCQUFDO0NBQUEsQUF4RkQsSUF3RkM7U0F4Rlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE5nQ2xhc3NUeXBlLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IEJwc0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9icHMtaW5wdXQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLWlucHV0LWdyb3VwJyxcbiAgZXhwb3J0QXM6ICdicHNJbnB1dEdyb3VwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWlucHV0LWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RdJzogJ2Jwc0NvbXBhY3QnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1lbnRlci1idXR0b25dJzogJ2Jwc1NlYXJjaCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoXSc6ICdicHNTZWFyY2gnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbV0nOiAnaXNTbWFsbFNlYXJjaCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcl0nOiAnaXNBZmZpeFdyYXBwZXInLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXJdJzogJ2lzQWRkT24nLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwXSc6ICdpc0dyb3VwJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1sZ10nOiAnaXNMYXJnZUdyb3VwJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLWxnXSc6ICdpc0xhcmdlR3JvdXBXcmFwcGVyJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXSc6ICdpc0xhcmdlQWZmaXgnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1sZ10nOiAnaXNMYXJnZVNlYXJjaCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtc21dJzogJ2lzU21hbGxHcm91cCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV0nOiAnaXNTbWFsbEFmZml4JyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLXNtXSc6ICdpc1NtYWxsR3JvdXBXcmFwcGVyJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc0lucHV0R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihCcHNJbnB1dERpcmVjdGl2ZSkgbGlzdE9mTnpJbnB1dERpcmVjdGl2ZTogUXVlcnlMaXN0PEJwc0lucHV0RGlyZWN0aXZlPjtcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgYnBzQWRkT25CZWZvcmVJY29uOiBOZ0NsYXNzVHlwZTtcbiAgQElucHV0KCkgYnBzQWRkT25BZnRlckljb246IE5nQ2xhc3NUeXBlO1xuICBASW5wdXQoKSBicHNQcmVmaXhJY29uOiBOZ0NsYXNzVHlwZTtcbiAgQElucHV0KCkgYnBzU3VmZml4SWNvbjogTmdDbGFzc1R5cGU7XG4gIEBJbnB1dCgpIGJwc0FkZE9uQmVmb3JlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgYnBzQWRkT25BZnRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc1ByZWZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc1N1ZmZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NvbXBhY3QgPSBmYWxzZTtcblxuICBASW5wdXQoKSBzZXQgYnBzU2l6ZSh2YWx1ZTogTnpTaXplTERTVHlwZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk7XG4gIH1cblxuICBnZXQgYnBzU2l6ZSgpOiBOelNpemVMRFNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmJwc1NpemUgPT09ICdsYXJnZSc7XG4gIH1cblxuICBnZXQgaXNTbWFsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5icHNTaXplID09PSAnc21hbGwnO1xuICB9XG5cbiAgZ2V0IGlzQWZmaXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHRoaXMuYnBzU3VmZml4IHx8IHRoaXMuYnBzUHJlZml4IHx8IHRoaXMuYnBzUHJlZml4SWNvbiB8fCB0aGlzLmJwc1N1ZmZpeEljb24pO1xuICB9XG5cbiAgZ2V0IGlzQWRkT24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHRoaXMuYnBzQWRkT25BZnRlciB8fCB0aGlzLmJwc0FkZE9uQmVmb3JlIHx8IHRoaXMuYnBzQWRkT25BZnRlckljb24gfHwgdGhpcy5icHNBZGRPbkJlZm9yZUljb24pO1xuICB9XG5cbiAgZ2V0IGlzQWZmaXhXcmFwcGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQWZmaXggJiYgIXRoaXMuaXNBZGRPbjtcbiAgfVxuXG4gIGdldCBpc0dyb3VwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0FmZml4ICYmICF0aGlzLmlzQWRkT247XG4gIH1cblxuICBnZXQgaXNMYXJnZUdyb3VwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzR3JvdXAgJiYgdGhpcy5pc0xhcmdlO1xuICB9XG5cbiAgZ2V0IGlzTGFyZ2VHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZGRPbiAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBnZXQgaXNMYXJnZUFmZml4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQWZmaXhXcmFwcGVyICYmIHRoaXMuaXNMYXJnZTtcbiAgfVxuXG4gIGdldCBpc0xhcmdlU2VhcmNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmJwc1NlYXJjaCAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBnZXQgaXNTbWFsbEdyb3VwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzR3JvdXAgJiYgdGhpcy5pc1NtYWxsO1xuICB9XG5cbiAgZ2V0IGlzU21hbGxBZmZpeCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4V3JhcHBlciAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICBnZXQgaXNTbWFsbEdyb3VwV3JhcHBlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FkZE9uICYmIHRoaXMuaXNTbWFsbDtcbiAgfVxuXG4gIGdldCBpc1NtYWxsU2VhcmNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmJwc1NlYXJjaCAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICB1cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuZm9yRWFjaChpdGVtID0+IChpdGVtLmJwc1NpemUgPSB0aGlzLmJwc1NpemUpKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpO1xuICB9XG59XG4iXX0=
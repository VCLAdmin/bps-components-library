import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { BpsInputDirective } from './bps-input.directive';
let BpsInputGroupComponent = class BpsInputGroupComponent {
    constructor() {
        this._size = 'default';
        this.bpsSearch = false;
        this.bpsCompact = false;
    }
    set bpsSize(value) {
        this._size = value;
        this.updateChildrenInputSize();
    }
    get bpsSize() {
        return this._size;
    }
    get isLarge() {
        return this.bpsSize === 'large';
    }
    get isSmall() {
        return this.bpsSize === 'small';
    }
    get isAffix() {
        return !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
    }
    get isAddOn() {
        return !!(this.bpsAddOnAfter || this.bpsAddOnBefore || this.bpsAddOnAfterIcon || this.bpsAddOnBeforeIcon);
    }
    get isAffixWrapper() {
        return this.isAffix && !this.isAddOn;
    }
    get isGroup() {
        return !this.isAffix && !this.isAddOn;
    }
    get isLargeGroup() {
        return this.isGroup && this.isLarge;
    }
    get isLargeGroupWrapper() {
        return this.isAddOn && this.isLarge;
    }
    get isLargeAffix() {
        return this.isAffixWrapper && this.isLarge;
    }
    get isLargeSearch() {
        return this.bpsSearch && this.isLarge;
    }
    get isSmallGroup() {
        return this.isGroup && this.isSmall;
    }
    get isSmallAffix() {
        return this.isAffixWrapper && this.isSmall;
    }
    get isSmallGroupWrapper() {
        return this.isAddOn && this.isSmall;
    }
    get isSmallSearch() {
        return this.bpsSearch && this.isSmall;
    }
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(item => (item.bpsSize = this.bpsSize));
        }
    }
    ngAfterContentInit() {
        this.updateChildrenInputSize();
    }
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
export { BpsInputGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWlucHV0LWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1pbnB1dC9icHMtaW5wdXQtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUE4QixNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBMEIxRCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUFuQztRQUVVLFVBQUssR0FBa0IsU0FBUyxDQUFDO1FBU2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQTRFOUMsQ0FBQztJQTFFVSxJQUFJLE9BQU8sQ0FBQyxLQUFvQjtRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFh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VztZQUNwRCwwQkFBMEIsRUFBRSxXQUFXO1lBQ3ZDLDZCQUE2QixFQUFFLGVBQWU7WUFDOUMsaUNBQWlDLEVBQUUsZ0JBQWdCO1lBQ25ELGlDQUFpQyxFQUFFLFNBQVM7WUFDNUMseUJBQXlCLEVBQUUsU0FBUztZQUNwQyw0QkFBNEIsRUFBRSxjQUFjO1lBQzVDLG9DQUFvQyxFQUFFLHFCQUFxQjtZQUMzRCxvQ0FBb0MsRUFBRSxjQUFjO1lBQ3BELDZCQUE2QixFQUFFLGVBQWU7WUFDOUMsNEJBQTRCLEVBQUUsY0FBYztZQUM1QyxvQ0FBb0MsRUFBRSxjQUFjO1lBQ3BELG9DQUFvQyxFQUFFLHFCQUFxQjtTQUM1RDtLQUNGLENBQUM7R0FDVyxzQkFBc0IsQ0F3RmxDO1NBeEZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBCcHNJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vYnBzLWlucHV0LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1pbnB1dC1ncm91cCcsXG4gIGV4cG9ydEFzOiAnYnBzSW5wdXRHcm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1pbnB1dC1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1jb21wYWN0XSc6ICdicHNDb21wYWN0JyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtZW50ZXItYnV0dG9uXSc6ICdicHNTZWFyY2gnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaF0nOiAnYnBzU2VhcmNoJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtc21dJzogJ2lzU21hbGxTZWFyY2gnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXJdJzogJ2lzQWZmaXhXcmFwcGVyJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyXSc6ICdpc0FkZE9uJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cF0nOiAnaXNHcm91cCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtbGddJzogJ2lzTGFyZ2VHcm91cCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlci1sZ10nOiAnaXNMYXJnZUdyb3VwV3JhcHBlcicsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1sZ10nOiAnaXNMYXJnZUFmZml4JyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtbGddJzogJ2lzTGFyZ2VTZWFyY2gnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXNtXSc6ICdpc1NtYWxsR3JvdXAnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItc21dJzogJ2lzU21hbGxBZmZpeCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlci1zbV0nOiAnaXNTbWFsbEdyb3VwV3JhcHBlcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzSW5wdXREaXJlY3RpdmUpIGxpc3RPZk56SW5wdXREaXJlY3RpdmU6IFF1ZXJ5TGlzdDxCcHNJbnB1dERpcmVjdGl2ZT47XG4gIHByaXZhdGUgX3NpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGJwc0FkZE9uQmVmb3JlSWNvbjogTmdDbGFzc1R5cGU7XG4gIEBJbnB1dCgpIGJwc0FkZE9uQWZ0ZXJJY29uOiBOZ0NsYXNzVHlwZTtcbiAgQElucHV0KCkgYnBzUHJlZml4SWNvbjogTmdDbGFzc1R5cGU7XG4gIEBJbnB1dCgpIGJwc1N1ZmZpeEljb246IE5nQ2xhc3NUeXBlO1xuICBASW5wdXQoKSBicHNBZGRPbkJlZm9yZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc0FkZE9uQWZ0ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBicHNQcmVmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBicHNTdWZmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDb21wYWN0ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2V0IGJwc1NpemUodmFsdWU6IE56U2l6ZUxEU1R5cGUpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpO1xuICB9XG5cbiAgZ2V0IGJwc1NpemUoKTogTnpTaXplTERTVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBnZXQgaXNMYXJnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5icHNTaXplID09PSAnbGFyZ2UnO1xuICB9XG5cbiAgZ2V0IGlzU21hbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYnBzU2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIGdldCBpc0FmZml4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLmJwc1N1ZmZpeCB8fCB0aGlzLmJwc1ByZWZpeCB8fCB0aGlzLmJwc1ByZWZpeEljb24gfHwgdGhpcy5icHNTdWZmaXhJY29uKTtcbiAgfVxuXG4gIGdldCBpc0FkZE9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLmJwc0FkZE9uQWZ0ZXIgfHwgdGhpcy5icHNBZGRPbkJlZm9yZSB8fCB0aGlzLmJwc0FkZE9uQWZ0ZXJJY29uIHx8IHRoaXMuYnBzQWRkT25CZWZvcmVJY29uKTtcbiAgfVxuXG4gIGdldCBpc0FmZml4V3JhcHBlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4ICYmICF0aGlzLmlzQWRkT247XG4gIH1cblxuICBnZXQgaXNHcm91cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNBZmZpeCAmJiAhdGhpcy5pc0FkZE9uO1xuICB9XG5cbiAgZ2V0IGlzTGFyZ2VHcm91cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0dyb3VwICYmIHRoaXMuaXNMYXJnZTtcbiAgfVxuXG4gIGdldCBpc0xhcmdlR3JvdXBXcmFwcGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQWRkT24gJiYgdGhpcy5pc0xhcmdlO1xuICB9XG5cbiAgZ2V0IGlzTGFyZ2VBZmZpeCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4V3JhcHBlciAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBnZXQgaXNMYXJnZVNlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5icHNTZWFyY2ggJiYgdGhpcy5pc0xhcmdlO1xuICB9XG5cbiAgZ2V0IGlzU21hbGxHcm91cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0dyb3VwICYmIHRoaXMuaXNTbWFsbDtcbiAgfVxuXG4gIGdldCBpc1NtYWxsQWZmaXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZmZpeFdyYXBwZXIgJiYgdGhpcy5pc1NtYWxsO1xuICB9XG5cbiAgZ2V0IGlzU21hbGxHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZGRPbiAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICBnZXQgaXNTbWFsbFNlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5icHNTZWFyY2ggJiYgdGhpcy5pc1NtYWxsO1xuICB9XG5cbiAgdXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGlzdE9mTnpJbnB1dERpcmVjdGl2ZSkge1xuICAgICAgdGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlLmZvckVhY2goaXRlbSA9PiAoaXRlbS5icHNTaXplID0gdGhpcy5icHNTaXplKSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcbiAgfVxufVxuIl19
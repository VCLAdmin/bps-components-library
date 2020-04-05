import { __decorate, __param } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, Renderer2, ElementRef, Input, Directive, NgZone, ContentChildren, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef, Pipe, ChangeDetectorRef, EventEmitter, ViewChildren, Output, Host, Optional, forwardRef, ContentChild, NgModule } from '@angular/core';
import { en_US, NgZorroAntdModule, NzNoAnimationModule, NzOverlayModule, NZ_I18N } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { InputBoolean, NzDomEventService, isNotNil, isNil, NzNoAnimationDirective, zoomMotion, toBoolean, slideMotion, warnDeprecation, helpMotion, NzUpdateHostClassService, NzConfigService, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NG_VALUE_ACCESSOR, FormControl, NgModel, FormControlName, FormControlDirective, NgControl, FormsModule } from '@angular/forms';
import { Platform } from '@angular/cdk/platform';
import { Subject, BehaviorSubject, ReplaySubject, combineLatest, merge, fromEvent, EMPTY, Subscription } from 'rxjs';
import { takeUntil, finalize, distinctUntilChanged, map, filter, skip, share, tap, pairwise, startWith, flatMap } from 'rxjs/operators';
import { TAB, SPACE, BACKSPACE, ENTER, DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { MediaMatcher } from '@angular/cdk/layout';

let BpsComponentsLibService = class BpsComponentsLibService {
    constructor() {
    }
};
BpsComponentsLibService.ɵprov = ɵɵdefineInjectable({ factory: function BpsComponentsLibService_Factory() { return new BpsComponentsLibService(); }, token: BpsComponentsLibService, providedIn: "root" });
BpsComponentsLibService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BpsComponentsLibService);

let BpsComponentsLibComponent = class BpsComponentsLibComponent {
    constructor() { }
    ngOnInit() {
    }
};
BpsComponentsLibComponent = __decorate([
    Component({
        selector: 'lib-bps-components-lib',
        template: `
    <p>
      bps-components-lib works!
    </p>
  `
    })
], BpsComponentsLibComponent);

let BpsInputDirective = class BpsInputDirective {
    constructor(renderer, elementRef) {
        this.bpsSize = 'default';
        this.disabled = false;
        this.centered = false;
        this.opened = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
};
BpsInputDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
__decorate([
    Input()
], BpsInputDirective.prototype, "bpsSize", void 0);
__decorate([
    Input(), InputBoolean()
], BpsInputDirective.prototype, "disabled", void 0);
__decorate([
    Input(), InputBoolean()
], BpsInputDirective.prototype, "centered", void 0);
__decorate([
    Input(), InputBoolean()
], BpsInputDirective.prototype, "opened", void 0);
BpsInputDirective = __decorate([
    Directive({
        selector: '[bps-input]',
        exportAs: 'bpsInput',
        host: {
            '[class.ant-input-disabled]': 'disabled',
            '[class.ant-input-lg]': `bpsSize === 'large'`,
            '[class.ant-input-sm]': `bpsSize === 'small'`,
            '[class.bps-input-centered]': `centered`,
            '[class.bps-input-opened]': `opened`
        }
    })
], BpsInputDirective);

function isAutoSizeType(value) {
    return typeof value !== 'string' && typeof value !== 'boolean' && (!!value.maxRows || !!value.minRows);
}
let BpsAutosizeDirective = class BpsAutosizeDirective {
    constructor(elementRef, ngZone, platform, nzDomEventService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    set bpsAutosize(value) {
        if (typeof value === 'string') {
            this.autosize = true;
        }
        else if (isAutoSizeType(value)) {
            this.autosize = value;
            this.minRows = value.minRows;
            this.maxRows = value.maxRows;
            this.setMaxHeight();
            this.setMinHeight();
        }
    }
    get bpsAutosize() {
        return this.autosize;
    }
    resizeToFitContent(force = false) {
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        const textarea = this.el;
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        const placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('cdk-textarea-autosize-measuring');
        textarea.placeholder = '';
        const height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight +
            this.inputGap;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        textarea.classList.remove('cdk-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => {
                const { selectionStart, selectionEnd } = textarea;
                // IE will throw an "Unspecified error" if we try to set the selection range after the
                // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                // between the time we requested the animation frame and when it was executed.
                // Also note that we have to assert that the textarea is focused before we set the
                // selection range. Setting the selection range on a non-focused textarea will cause
                // it to receive focus on IE and Edge.
                if (!this.destroy$.isStopped && document.activeElement === textarea) {
                    textarea.setSelectionRange(selectionStart, selectionEnd);
                }
            }));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    }
    cacheTextareaLineHeight() {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        const textareaClone = this.el.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this.el.parentNode.appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap - 1;
        this.el.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.setMinHeight();
        this.setMaxHeight();
    }
    setMinHeight() {
        const minHeight = this.minRows && this.cachedLineHeight ? `${this.minRows * this.cachedLineHeight + this.inputGap}px` : null;
        if (minHeight) {
            this.el.style.minHeight = minHeight;
        }
    }
    setMaxHeight() {
        const maxHeight = this.maxRows && this.cachedLineHeight ? `${this.maxRows * this.cachedLineHeight + this.inputGap}px` : null;
        if (maxHeight) {
            this.el.style.maxHeight = maxHeight;
        }
    }
    noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    ngAfterViewInit() {
        if (this.bpsAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(() => this.nzDomEventService.unregisterResizeListener()))
                .subscribe(() => this.resizeToFitContent(true));
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngDoCheck() {
        if (this.bpsAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
};
BpsAutosizeDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Platform },
    { type: NzDomEventService }
];
__decorate([
    Input()
], BpsAutosizeDirective.prototype, "bpsAutosize", null);
BpsAutosizeDirective = __decorate([
    Directive({
        selector: 'textarea[bpsAutosize]',
        exportAs: 'bpsAutosize',
        host: {
            // Textarea elements that have the directive applied should have a single row by default.
            // Browsers normally show two rows by default and therefore this limits the minRows binding.
            rows: '1',
            '(input)': 'noopInputHandler()'
        }
    })
], BpsAutosizeDirective);

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

let BpsOptionComponent = class BpsOptionComponent {
    constructor() {
        this.changes = new Subject();
        this.bpsDisabled = false;
        this.bpsHide = false;
        this.bpsCustomContent = false;
    }
    ngOnChanges() {
        this.changes.next();
    }
};
__decorate([
    ViewChild(TemplateRef, { static: false })
], BpsOptionComponent.prototype, "template", void 0);
__decorate([
    Input()
], BpsOptionComponent.prototype, "bpsLabel", void 0);
__decorate([
    Input()
], BpsOptionComponent.prototype, "bpsValue", void 0);
__decorate([
    Input(), InputBoolean()
], BpsOptionComponent.prototype, "bpsDisabled", void 0);
__decorate([
    Input(), InputBoolean()
], BpsOptionComponent.prototype, "bpsHide", void 0);
__decorate([
    Input(), InputBoolean()
], BpsOptionComponent.prototype, "bpsCustomContent", void 0);
BpsOptionComponent = __decorate([
    Component({
        selector: 'bps-option',
        exportAs: 'bpsOption',
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
    })
], BpsOptionComponent);

let BpsFilterOptionPipe = class BpsFilterOptionPipe {
    transform(options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return options.filter(o => filterOption(searchValue, o));
        }
    }
};
BpsFilterOptionPipe = __decorate([
    Pipe({ name: 'bpsFilterOption' })
], BpsFilterOptionPipe);
let BpsFilterGroupOptionPipe = class BpsFilterGroupOptionPipe {
    transform(groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return groups.filter(g => {
                return g.listOfNzOptionComponent.some(o => filterOption(searchValue, o));
            });
        }
    }
};
BpsFilterGroupOptionPipe = __decorate([
    Pipe({ name: 'bpsFilterGroupOption' })
], BpsFilterGroupOptionPipe);
function defaultFilterOption(searchValue, option) {
    if (option && option.bpsLabel) {
        return option.bpsLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}

let BpsSelectService = class BpsSelectService {
    constructor() {
        // tslint:disable-next-line:jsdoc-format
        /** Input params **/
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:jsdoc-format
        /** selectedValueChanged should emit ngModelChange or not **/
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        // tslint:disable-next-line:jsdoc-format
        /** ContentChildren Change **/
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        // tslint:disable-next-line:jsdoc-format
        /** searchValue Change **/
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        // tslint:disable-next-line:jsdoc-format
        /** animation event **/
        this.animationEvent$ = new Subject();
        // tslint:disable-next-line:jsdoc-format
        /** open event **/
        this.open$ = this.openRaw$.pipe(distinctUntilChanged());
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map(data => data.value));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter(item => item.emit), map(data => {
            const selectedList = data.value;
            let modelValue = null; // tslint:disable-line:no-any
            if (this.isSingleMode) {
                if (selectedList.length) {
                    modelValue = selectedList[0];
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        }));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap(value => {
            this.searchValue = value;
            if (value) {
                this.updateActivatedOption(this.listOfFilteredOption[0]);
            }
            this.updateListOfFilteredOption();
        }));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        // tslint:disable-next-line:jsdoc-format
        /** flat ViewChildren **/
        this.listOfTemplateOption = [];
        // tslint:disable-next-line:jsdoc-format
        /** tag option **/
        this.listOfTagOption = [];
        // tslint:disable-next-line:jsdoc-format
        /** tag option concat template option **/
        this.listOfTagAndTemplateOption = [];
        // tslint:disable-next-line:jsdoc-format
        /** ViewChildren **/
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        // tslint:disable-next-line:jsdoc-format
        /** display in top control **/
        this.listOfCachedSelectedOption = [];
        // tslint:disable-next-line:jsdoc-format
        /** selected value or ViewChildren change **/
        this.valueOrOption$ = combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(tap(data => {
            const [listOfSelectedValue, mapOfTemplateOption] = data;
            this.listOfSelectedValue = listOfSelectedValue;
            this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
            this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
            this.listOfTemplateOption = this.listOfNzOptionComponent.concat(this.listOfNzOptionGroupComponent.reduce((pre, cur) => [...pre, ...cur.listOfNzOptionComponent.toArray()], []));
            this.updateListOfTagOption();
            this.updateListOfFilteredOption();
            this.resetActivatedOptionIfNeeded();
            this.updateListOfCachedOption();
        }), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
        // tslint:disable-next-line:no-any
        this.compareWith = (o1, o2) => o1 === o2;
    }
    get isSingleMode() {
        return this.mode === 'default';
    }
    get isTagsMode() {
        return this.mode === 'tags';
    }
    get isMultipleMode() {
        return this.mode === 'multiple';
    }
    get isMultipleOrTags() {
        return this.mode === 'tags' || this.mode === 'multiple';
    }
    clickOption(option) {
        // tslint:disable-next-line:jsdoc-format
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.bpsDisabled) {
            this.updateActivatedOption(option);
            let listOfSelectedValue = [...this.listOfSelectedValue];
            if (this.isMultipleOrTags) {
                const targetValue = listOfSelectedValue.find(o => this.compareWith(o, option.bpsValue));
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    listOfSelectedValue.push(option.bpsValue);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.bpsValue)) {
                listOfSelectedValue = [option.bpsValue];
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if (this.isSingleMode) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    }
    updateListOfCachedOption() {
        if (this.isSingleMode) {
            const selectedOption = this.listOfTemplateOption.find(o => this.compareWith(o.bpsValue, this.listOfSelectedValue[0]));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            const listOfCachedSelectedOption = [];
            this.listOfSelectedValue.forEach(v => {
                const listOfMixedOption = [...this.listOfTagAndTemplateOption, ...this.listOfCachedSelectedOption];
                const option = listOfMixedOption.find(o => this.compareWith(o.bpsValue, v));
                if (option) {
                    listOfCachedSelectedOption.push(option);
                }
            });
            this.listOfCachedSelectedOption = listOfCachedSelectedOption;
        }
    }
    updateListOfTagOption() {
        if (this.isTagsMode) {
            const listOfMissValue = this.listOfSelectedValue.filter(value => !this.listOfTemplateOption.find(o => this.compareWith(o.bpsValue, value)));
            this.listOfTagOption = listOfMissValue.map(value => {
                const cachedOption = this.listOfCachedSelectedOption.find(o => this.compareWith(o.bpsValue, value));
                if (cachedOption) {
                    return cachedOption;
                }
                else {
                    const nzOptionComponent = new BpsOptionComponent();
                    nzOptionComponent.bpsValue = value;
                    nzOptionComponent.bpsLabel = value;
                    return nzOptionComponent;
                }
            });
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption.concat(this.listOfTagOption)];
        }
        else {
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption];
        }
    }
    updateAddTagOption() {
        const isMatch = this.listOfTagAndTemplateOption.find(item => item.bpsLabel === this.searchValue);
        if (this.isTagsMode && this.searchValue && !isMatch) {
            const option = new BpsOptionComponent();
            option.bpsValue = this.searchValue;
            option.bpsLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    }
    updateListOfFilteredOption() {
        this.updateAddTagOption();
        const listOfFilteredOption = new BpsFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? [this.addedTagOption, ...listOfFilteredOption]
            : [...listOfFilteredOption];
        this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
    }
    clearInput() {
        this.clearInput$.next();
    }
    // tslint:disable-next-line:no-any
    updateListOfSelectedValue(value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value, emit });
    }
    updateActivatedOption(option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    }
    tokenSeparate(inputValue, tokenSeparators) {
        // tslint:disable-next-line:jsdoc-format
        /** auto tokenSeparators **/
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            const listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    }
    includesSeparators(str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    }
    splitBySeparators(str, separators) {
        const reg = new RegExp(`[${separators.join()}]`);
        const array = str.split(reg).filter(token => token);
        return Array.from(new Set(array));
    }
    resetActivatedOptionIfNeeded() {
        const resetActivatedOption = () => {
            const activatedOption = this.listOfFilteredOption.find(item => this.compareWith(item.bpsValue, this.listOfSelectedValue[0]));
            this.updateActivatedOption(activatedOption || null);
        };
        if (this.activatedOption) {
            if (
            // tslint:disable-next-line:no-non-null-assertion
            !this.listOfFilteredOption.find(item => this.compareWith(item.bpsValue, this.activatedOption.bpsValue)) ||
                // tslint:disable-next-line:no-non-null-assertion
                !this.listOfSelectedValue.find(item => this.compareWith(item, this.activatedOption.bpsValue))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    }
    updateTemplateOption(listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent, listOfNzOptionGroupComponent });
    }
    updateSearchValue(value) {
        this.searchValueRaw$.next(value);
    }
    updateSelectedValueByLabelList(listOfLabel) {
        const listOfSelectedValue = [...this.listOfSelectedValue];
        const listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter(item => listOfLabel.indexOf(item.bpsLabel) !== -1)
            .map(item => item.bpsValue)
            .filter(item => !isNotNil(this.listOfSelectedValue.find(v => this.compareWith(v, item))));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue], true);
        }
        else {
            const listOfUnMatchOptionValue = listOfLabel.filter(label => this.listOfTagAndTemplateOption.map(item => item.bpsLabel).indexOf(label) === -1);
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue, ...listOfUnMatchOptionValue], true);
        }
    }
    onKeyDown(e) {
        if (this.disabled) {
            return;
        }
        const keyCode = e.keyCode;
        const eventTarget = e.target;
        const listOfFilteredOptionWithoutDisabledOrHidden = this.listOfFilteredOption.filter(item => !item.bpsDisabled && !item.bpsHide);
        const activatedIndex = listOfFilteredOptionWithoutDisabledOrHidden.findIndex(item => item === this.activatedOption);
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                const nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabledOrHidden.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.bpsDisabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    }
    // tslint:disable-next-line:no-any
    removeValueFormSelected(option) {
        if (this.disabled || option.bpsDisabled) {
            return;
        }
        const listOfSelectedValue = this.listOfSelectedValue.filter(item => !this.compareWith(item, option.bpsValue));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    }
    setOpenState(value) {
        this.openRaw$.next(value);
        this.open = value;
    }
    check() {
        this.checkRaw$.next();
    }
};
BpsSelectService = __decorate([
    Injectable()
], BpsSelectService);

let BpsOptionLiComponent = class BpsOptionLiComponent {
    constructor(elementRef, nzSelectService, cdr, renderer) {
        this.elementRef = elementRef;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
    }
    clickOption() {
        this.nzSelectService.clickOption(this.bpsOption);
    }
    ngOnInit() {
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe(list => {
            this.selected = isNotNil(list.find(v => this.nzSelectService.compareWith(v, this.bpsOption.bpsValue)));
            this.cdr.markForCheck();
        });
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(option => {
            if (option) {
                this.active = this.nzSelectService.compareWith(option.bpsValue, this.bpsOption.bpsValue);
            }
            else {
                this.active = false;
            }
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
BpsOptionLiComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: BpsSelectService },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], BpsOptionLiComponent.prototype, "bpsOption", void 0);
__decorate([
    Input()
], BpsOptionLiComponent.prototype, "bpsMenuItemSelectedIcon", void 0);
BpsOptionLiComponent = __decorate([
    Component({
        selector: '[bps-option-li]',
        exportAs: 'bpsOptionLi',
        template: "<ng-container *ngIf=\"!bpsOption.bpsCustomContent; else bpsOption.template\">\n  {{bpsOption.bpsLabel}}\n</ng-container>\n<ng-container *ngIf=\"nzSelectService.isMultipleOrTags\">\n  <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!bpsMenuItemSelectedIcon; else bpsMenuItemSelectedIcon\"></i>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        host: {
            '[class.ant-select-dropdown-menu-item-selected]': 'selected && !bpsOption.bpsDisabled',
            '[class.ant-select-dropdown-menu-item-disabled]': 'bpsOption.bpsDisabled',
            '[class.ant-select-dropdown-menu-item-active]': 'active && !bpsOption.bpsDisabled',
            '[attr.unselectable]': '"unselectable"',
            '[style.user-select]': '"none"',
            '(click)': 'clickOption()',
            '(mousedown)': '$event.preventDefault()'
        }
    })
], BpsOptionLiComponent);

let BpsOptionContainerComponent = class BpsOptionContainerComponent {
    constructor(nzSelectService, cdr, ngZone) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.bpsScrollToBottom = new EventEmitter();
    }
    scrollIntoViewIfNeeded(option) {
        // delay after open
        setTimeout(() => {
            if (this.listOfNzOptionLiComponent && this.listOfNzOptionLiComponent.length && option) {
                const targetOption = this.listOfNzOptionLiComponent.find(o => this.nzSelectService.compareWith(o.bpsOption.bpsValue, option.bpsValue));
                // tslint:disable:no-any
                if (targetOption && targetOption.el && targetOption.el.scrollIntoViewIfNeeded) {
                    targetOption.el.scrollIntoViewIfNeeded(false);
                }
            }
        });
    }
    trackLabel(_index, option) {
        return option.bpsLabel;
    }
    // tslint:disable-next-line:no-any
    trackValue(_index, option) {
        return option.bpsValue;
    }
    ngOnInit() {
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(option => {
            this.scrollIntoViewIfNeeded(option);
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
        this.ngZone.runOutsideAngular(() => {
            const ul = this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(this.destroy$))
                .subscribe(e => {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    this.lastScrollTop = ul.scrollTop;
                    this.ngZone.run(() => {
                        this.bpsScrollToBottom.emit();
                    });
                }
            });
        });
    }
    ngAfterViewInit() {
        this.listOfNzOptionLiComponent.changes
            .pipe(map(list => list.length), pairwise(), filter(([before, after]) => after < before), takeUntil(this.destroy$))
            .subscribe(() => (this.lastScrollTop = 0));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
BpsOptionContainerComponent.ctorParameters = () => [
    { type: BpsSelectService },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
__decorate([
    ViewChildren(BpsOptionLiComponent)
], BpsOptionContainerComponent.prototype, "listOfNzOptionLiComponent", void 0);
__decorate([
    ViewChild('dropdownUl', { static: true })
], BpsOptionContainerComponent.prototype, "dropdownUl", void 0);
__decorate([
    Input()
], BpsOptionContainerComponent.prototype, "bpsNotFoundContent", void 0);
__decorate([
    Input()
], BpsOptionContainerComponent.prototype, "bpsMenuItemSelectedIcon", void 0);
__decorate([
    Output()
], BpsOptionContainerComponent.prototype, "bpsScrollToBottom", void 0);
BpsOptionContainerComponent = __decorate([
    Component({
        selector: '[bps-option-container]',
        exportAs: 'bpsOptionContainer',
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        preserveWhitespaces: false,
        template: "<ul #dropdownUl\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n  role=\"menu\"\n  tabindex=\"0\">\n  <li *ngIf=\"nzSelectService.isShowNotFound\"\n    bps-select-unselectable\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\n    <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"bpsNotFoundContent\"></nz-embed-empty>\n  </li>\n  <li bps-option-li\n    *ngIf=\"nzSelectService.addedTagOption\"\n    [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n    [bpsOption]=\"nzSelectService.addedTagOption\">\n  </li>\n  <ng-container *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | bpsFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\">\n    <li bps-option-li\n      *ngIf=\"!option.bpsHide\"\n      [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n      [bpsOption]=\"option\">\n    </li>\n  </ng-container>\n  <li class=\"ant-select-dropdown-menu-item-group\"\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | bpsFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\n      [attr.title]=\"group.isLabelString ? group.bpsLabel : ''\">\n      <ng-container *nzStringTemplateOutlet=\"group.bpsLabel\"> {{group.bpsLabel}} </ng-container>\n    </div>\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\n      <ng-container *ngFor=\"let option of group.listOfNzOptionComponent | bpsFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\">\n        <li bps-option-li\n          *ngIf=\"!option.bpsHide\"\n          [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n          [bpsOption]=\"option\">\n        </li>\n      </ng-container>\n    </ul>\n  </li>\n  <li bps-option-li\n    *ngFor=\"let option of nzSelectService.listOfTagOption | bpsFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\n    [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n    [bpsOption]=\"option\">\n  </li>\n</ul>\n"
    })
], BpsOptionContainerComponent);

let BpsOptionGroupComponent = class BpsOptionGroupComponent {
    constructor() {
        this.isLabelString = false;
    }
    set bpsLabel(value) {
        this.label = value;
        this.isLabelString = !(this.bpsLabel instanceof TemplateRef);
    }
    get bpsLabel() {
        return this.label;
    }
};
__decorate([
    ContentChildren(BpsOptionComponent)
], BpsOptionGroupComponent.prototype, "listOfNzOptionComponent", void 0);
__decorate([
    Input()
], BpsOptionGroupComponent.prototype, "bpsLabel", null);
BpsOptionGroupComponent = __decorate([
    Component({
        selector: 'bps-option-group',
        exportAs: 'bpsOptionGroup',
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: "<ng-content></ng-content>"
    })
], BpsOptionGroupComponent);

let BpsSelectTopControlComponent = class BpsSelectTopControlComponent {
    constructor(renderer, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.isComposing = false;
        this.destroy$ = new Subject();
        this.bpsShowSearch = false;
        this.bpsOpen = false;
        this.bpsAllowClear = false;
        this.bpsShowArrow = true;
        this.bpsLoading = false;
        this.bpsTokenSeparators = [];
    }
    onClearSelection(e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
    }
    setInputValue(value) {
        /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 **/
        if (this.inputDOM && !value) {
            this.inputDOM.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.bpsTokenSeparators);
    }
    get mirrorDOM() {
        return this.mirrorElement && this.mirrorElement.nativeElement;
    }
    get inputDOM() {
        return this.inputElement && this.inputElement.nativeElement;
    }
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
    }
    get selectedValueStyle() {
        let showSelectedValue = false;
        let opacity = 1;
        if (!this.bpsShowSearch) {
            showSelectedValue = true;
        }
        else {
            if (this.bpsOpen) {
                showSelectedValue = !(this.inputValue || this.isComposing);
                if (showSelectedValue) {
                    opacity = 0.4;
                }
            }
            else {
                showSelectedValue = true;
            }
        }
        return {
            display: showSelectedValue ? 'block' : 'none',
            opacity: `${opacity}`
        };
    }
    // tslint:disable-next-line:no-any
    trackValue(_index, option) {
        return option.bpsValue;
    }
    updateWidth() {
        if (this.mirrorDOM && this.inputDOM && this.inputDOM.value) {
            this.mirrorDOM.innerText = `${this.inputDOM.value}&nbsp;`;
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.renderer.setStyle(this.inputDOM, 'width', `${this.mirrorDOM.clientWidth}px`);
        }
        else if (this.inputDOM) {
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.mirrorDOM.innerText = '';
        }
    }
    removeSelectedValue(option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    }
    animationEnd() {
        this.nzSelectService.animationEvent$.next();
    }
    ngOnInit() {
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(open => {
            if (this.inputElement && open) {
                setTimeout(() => this.inputDOM.focus());
            }
        });
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.setInputValue('');
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
BpsSelectTopControlComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: BpsSelectService },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
__decorate([
    ViewChild('inputElement', { static: false })
], BpsSelectTopControlComponent.prototype, "inputElement", void 0);
__decorate([
    ViewChild('mirrorElement', { static: false })
], BpsSelectTopControlComponent.prototype, "mirrorElement", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsShowSearch", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsPlaceHolder", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsOpen", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsMaxTagCount", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsAllowClear", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsShowArrow", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsLoading", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsCustomTemplate", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsSuffixIcon", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsClearIcon", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsRemoveIcon", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsMaxTagPlaceholder", void 0);
__decorate([
    Input()
], BpsSelectTopControlComponent.prototype, "bpsTokenSeparators", void 0);
BpsSelectTopControlComponent = __decorate([
    Component({
        selector: '[bps-select-top-control]',
        exportAs: 'bpsSelectTopControl',
        preserveWhitespaces: false,
        animations: [zoomMotion],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        template: "<ng-template #inputTemplate>\n  <input #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"nzSelectService.disabled\">\n  <span #mirrorElement class=\"ant-select-search__field__mirror\"></span>\n</ng-template>\n<div class=\"ant-select-selection__rendered\">\n  <div *ngIf=\"bpsPlaceHolder\"\n    bps-select-unselectable\n    [style.display]=\"placeHolderDisplay\"\n    class=\"ant-select-selection__placeholder\">{{ bpsPlaceHolder }}</div>\n  <!--single mode-->\n  <ng-container *ngIf=\"nzSelectService.isSingleMode\">\n    <!--selected label-->\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\n      class=\"ant-select-selection-selected-value\"\n      [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.bpsLabel\"\n      [ngStyle]=\"selectedValueStyle\">\n      <ng-container *nzStringTemplateOutlet=\"bpsCustomTemplate; context: { $implicit: nzSelectService.listOfCachedSelectedOption[0] }\">\n        <ng-container>{{ nzSelectService.listOfCachedSelectedOption[0]?.bpsLabel }}</ng-container>\n      </ng-container>\n    </div>\n    <!--show search-->\n    <div *ngIf=\"bpsShowSearch\"\n      class=\"ant-select-search ant-select-search--inline\" [style.display]=\"bpsOpen ? 'block' : 'none'\">\n      <div class=\"ant-select-search__field__wrap\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </div>\n    </div>\n  </ng-container>\n  <!--multiple or tags mode-->\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\n    <ng-container *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : bpsMaxTagCount;trackBy:trackValue; let index = index\">\n      <li [@zoomMotion]\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [attr.title]=\"option.bpsLabel\"\n        [class.ant-select-selection__choice__disabled]=\"option.bpsDisabled\"\n        (@zoomMotion.done)=\"animationEnd()\"\n        class=\"ant-select-selection__choice\">\n        <ng-container *nzStringTemplateOutlet=\"bpsCustomTemplate; context:{ $implicit: nzSelectService.listOfCachedSelectedOption[index] }\">\n          <div class=\"ant-select-selection__choice__content\">{{ option.bpsLabel }}</div>\n        </ng-container>\n        <span *ngIf=\"!option.bpsDisabled\"\n          class=\"ant-select-selection__choice__remove\"\n          (mousedown)=\"$event.preventDefault()\"\n          (click)=\"removeSelectedValue(option, $event)\">\n          <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!bpsRemoveIcon; else bpsRemoveIcon\"></i>\n        </span>\n      </li>\n    </ng-container>\n    <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > bpsMaxTagCount\"\n      [@zoomMotion]\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      (@zoomMotion.done)=\"animationEnd()\"\n      class=\"ant-select-selection__choice\">\n      <div class=\"ant-select-selection__choice__content\">\n        <ng-container *ngIf=\"bpsMaxTagPlaceholder\">\n          <ng-template\n            [ngTemplateOutlet]=\"bpsMaxTagPlaceholder\"\n            [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: bpsMaxTagCount}\">\n          </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"!bpsMaxTagPlaceholder\">\n          + {{ nzSelectService.listOfCachedSelectedOption.length - bpsMaxTagCount }} ...\n        </ng-container>\n      </div>\n    </li>\n    <li class=\"ant-select-search ant-select-search--inline\">\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n    </li>\n  </ul>\n</div>\n<span *ngIf=\"bpsAllowClear && nzSelectService.listOfSelectedValue.length\"\n  class=\"ant-select-selection__clear\"\n  bps-select-unselectable\n  (mousedown)=\"$event.preventDefault()\"\n  (click)=\"onClearSelection($event)\">\n    <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!bpsClearIcon; else bpsClearIcon\" class=\"ant-select-close-icon\"></i>\n  </span>\n<span class=\"ant-select-arrow\" bps-select-unselectable *ngIf=\"bpsShowArrow\">\n  <i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading; else defaultArrow\"></i>\n  <ng-template #defaultArrow>\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!bpsSuffixIcon; else bpsSuffixIcon\"></i>\n  </ng-template>\n</span>\n"
    }),
    __param(3, Host()), __param(3, Optional())
], BpsSelectTopControlComponent);

var BpsSelectComponent_1;
let BpsSelectComponent = BpsSelectComponent_1 = class BpsSelectComponent {
    constructor(renderer, nzSelectService, cdr, platform, elementRef, noAnimation) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.open = false;
        this.onChange = () => null;
        this.onTouched = () => null;
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
    set bpsAutoClearSearchValue(value) {
        this.nzSelectService.autoClearSearchValue = toBoolean(value);
    }
    set bpsMaxMultipleCount(value) {
        this.nzSelectService.maxMultipleCount = value;
    }
    set bpsServerSearch(value) {
        this.nzSelectService.serverSearch = toBoolean(value);
    }
    set bpsMode(value) {
        this.nzSelectService.mode = value;
        this.nzSelectService.check();
    }
    set bpsFilterOption(value) {
        this.nzSelectService.filterOption = value;
    }
    set compareWith(value) {
        this.nzSelectService.compareWith = value;
    }
    set bpsOpen(value) {
        this.open = value;
        this.nzSelectService.setOpenState(value);
    }
    set bpsDisabled(value) {
        this._disabled = toBoolean(value);
        this.nzSelectService.disabled = this._disabled;
        this.nzSelectService.check();
        if (this.bpsDisabled && this.isInit) {
            this.closeDropDown();
        }
    }
    get bpsDisabled() {
        return this._disabled;
    }
    get bpsSelectTopControlDOM() {
        return this.bpsSelectTopControlElement && this.bpsSelectTopControlElement.nativeElement;
    }
    updateAutoFocus() {
        if (this.bpsSelectTopControlDOM && this.bpsAutoFocus) {
            this.bpsSelectTopControlDOM.focus();
        }
    }
    focus() {
        if (this.bpsSelectTopControlDOM) {
            this.bpsSelectTopControlDOM.focus();
        }
    }
    blur() {
        if (this.bpsSelectTopControlDOM) {
            this.bpsSelectTopControlDOM.blur();
        }
    }
    onFocus() {
        this.bpsFocus.emit();
    }
    onBlur() {
        this.bpsBlur.emit();
    }
    onKeyDown(event) {
        this.nzSelectService.onKeyDown(event);
    }
    toggleDropDown() {
        if (!this.bpsDisabled) {
            this.nzSelectService.setOpenState(!this.open);
        }
    }
    closeDropDown() {
        this.nzSelectService.setOpenState(false);
    }
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    updateCdkConnectedOverlayStatus() {
        if (this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        }
    }
    updateCdkConnectedOverlayPositions() {
        setTimeout(() => {
            if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        });
    }
    /** update ngModel -> update listOfSelectedValue **/
    // tslint:disable-next-line:no-any
    writeValue(value) {
        this.value = value;
        let listValue = []; // tslint:disable-line:no-any
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
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.bpsDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.nzSelectService.animationEvent$
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.updateCdkConnectedOverlayPositions());
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.bpsOnSearch.emit(data);
            this.updateCdkConnectedOverlayPositions();
        });
        this.nzSelectService.modelChange$.pipe(takeUntil(this.destroy$)).subscribe(modelValue => {
            if (this.value !== modelValue) {
                this.value = modelValue;
                this.onChange(this.value);
            }
        });
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            if (this.open !== value) {
                this.bpsOpenChange.emit(value);
            }
            if (value) {
                this.focus();
                this.updateCdkConnectedOverlayStatus();
            }
            else {
                this.blur();
                this.onTouched();
            }
            this.open = value;
            this.nzSelectService.clearInput();
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngAfterViewInit() {
        this.updateCdkConnectedOverlayStatus();
        this.updateAutoFocus();
        this.isInit = true;
    }
    ngAfterContentInit() {
        this.listOfNzOptionGroupComponent.changes
            .pipe(startWith(true), flatMap(() => merge(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes, ...this.listOfNzOptionComponent.map(option => option.changes), ...this.listOfNzOptionGroupComponent.map(group => group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : EMPTY)).pipe(startWith(true))))
            .subscribe(() => {
            this.nzSelectService.updateTemplateOption(this.listOfNzOptionComponent.toArray(), this.listOfNzOptionGroupComponent.toArray());
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
BpsSelectComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: BpsSelectService },
    { type: ChangeDetectorRef },
    { type: Platform },
    { type: ElementRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
                useExisting: forwardRef(() => BpsSelectComponent_1),
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
        styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0!important;box-shadow:none}", `
      .ant-select-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
    }),
    __param(5, Host()), __param(5, Optional())
], BpsSelectComponent);

let BpsSelectUnselectableDirective = class BpsSelectUnselectableDirective {
};
BpsSelectUnselectableDirective = __decorate([
    Directive({
        selector: '[bps-select-unselectable]',
        exportAs: 'bpsSelectUnselectable',
        host: {
            '[attr.unselectable]': '"unselectable"',
            '[style.user-select]': '"none"'
        }
    })
], BpsSelectUnselectableDirective);

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

/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
let BpsFormItemComponent = class BpsFormItemComponent extends NzRowDirective {
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
        super(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService);
        this.cdr = cdr;
        this.bpsFlex = false;
        this.withHelpClass = false;
        this.tipsMode = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }
    updateFlexStyle() {
        if (this.bpsFlex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    setWithHelpViaTips(value) {
        this.tipsMode = true;
        this.withHelpClass = value;
        this.cdr.markForCheck();
    }
    ngAfterContentInit() {
        if (!this.tipsMode) {
            this.listOfNzFormExplainComponent.changes
                .pipe(startWith(true), takeUntil(this.destroy$))
                .subscribe(() => {
                this.withHelpClass = this.listOfNzFormExplainComponent && this.listOfNzFormExplainComponent.length > 0;
                this.cdr.markForCheck();
            });
        }
    }
    ngOnInit() {
        super.ngOnInit();
        this.updateFlexStyle();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.hasOwnProperty('bpsFlex')) {
            this.updateFlexStyle();
        }
    }
};
BpsFormItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: NzDomEventService },
    { type: ChangeDetectorRef }
];
__decorate([
    Input(), InputBoolean()
], BpsFormItemComponent.prototype, "bpsFlex", void 0);
__decorate([
    ContentChildren(BpsFormExplainComponent, { descendants: true })
], BpsFormItemComponent.prototype, "listOfNzFormExplainComponent", void 0);
BpsFormItemComponent = __decorate([
    Component({
        selector: 'bps-form-item',
        exportAs: 'bpsFormItem',
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [NzUpdateHostClassService],
        template: "<ng-content></ng-content>",
        host: {
            '[class.ant-form-item-with-help]': 'withHelpClass'
        },
        styles: [`
      bps-form-item {
        display: block;
      }
    `]
    })
], BpsFormItemComponent);

let BpsFormLabelComponent = class BpsFormLabelComponent extends NzColDirective {
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.cdr = cdr;
        this.bpsRequired = false;
        this.defaultNoColon = false;
        this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
    }
    set bpsNoColon(value) {
        this.noColon = toBoolean(value);
    }
    get bpsNoColon() {
        return !!this.noColon;
    }
    setDefaultNoColon(value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
};
BpsFormLabelComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: BpsFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], BpsFormLabelComponent.prototype, "bpsFor", void 0);
__decorate([
    Input(), InputBoolean()
], BpsFormLabelComponent.prototype, "bpsRequired", void 0);
__decorate([
    Input()
], BpsFormLabelComponent.prototype, "bpsNoColon", null);
BpsFormLabelComponent = __decorate([
    Component({
        selector: 'bps-form-label',
        exportAs: 'bpsFormLabel',
        providers: [NzUpdateHostClassService],
        preserveWhitespaces: false,
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: "<label [attr.for]=\"bpsFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : bpsNoColon\"\r\n  [class.ant-form-item-required]=\"bpsRequired\">\r\n  <ng-content></ng-content>\r\n</label>\r\n"
    }),
    __param(2, Optional()), __param(2, Host()),
    __param(3, Optional()), __param(3, Host())
], BpsFormLabelComponent);

const NZ_CONFIG_COMPONENT_NAME = 'form';
let BpsFormDirective = class BpsFormDirective {
    constructor(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.bpsLayout = 'horizontal';
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`ant-form-${this.bpsLayout}`]: this.bpsLayout
        });
    }
    updateItemsDefaultColon() {
        if (this.bpsFormLabelComponent) {
            this.bpsFormLabelComponent.forEach(item => item.setDefaultNoColon(this.bpsNoColon));
        }
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngOnChanges(changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('bpsNoColon')) {
            this.updateItemsDefaultColon();
        }
    }
    ngAfterContentInit() {
        this.bpsFormLabelComponent.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateItemsDefaultColon();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
BpsFormDirective.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService }
];
__decorate([
    Input()
], BpsFormDirective.prototype, "bpsLayout", void 0);
__decorate([
    Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean()
], BpsFormDirective.prototype, "bpsNoColon", void 0);
__decorate([
    ContentChildren(BpsFormLabelComponent, { descendants: true })
], BpsFormDirective.prototype, "bpsFormLabelComponent", void 0);
BpsFormDirective = __decorate([
    Directive({
        selector: '[bps-form]',
        exportAs: 'bpsForm',
        providers: [NzUpdateHostClassService]
    })
], BpsFormDirective);

let BpsFormControlComponent = class BpsFormControlComponent extends NzColDirective {
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.nzFormItemComponent = nzFormItemComponent;
        this.cdr = cdr;
        this._hasFeedback = false;
        this.validateChanges = Subscription.EMPTY;
        this.status = null;
        this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
    }
    set bpsHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        this.setControlClassMap();
    }
    get bpsHasFeedback() {
        return this._hasFeedback;
    }
    set bpsValidateStatus(value) {
        if (value instanceof FormControl || value instanceof NgModel) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof FormControlName) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setControlClassMap();
        }
    }
    removeSubscribe() {
        this.validateChanges.unsubscribe();
    }
    watchControl() {
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe(() => {
                this.setControlClassMap();
                this.cdr.markForCheck();
            });
        }
    }
    validateControlStatus(status) {
        return (!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status);
    }
    setControlClassMap() {
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.validateString === 'validating' ||
            this.validateString === 'pending' ||
            this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'close-circle-fill';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = 'check-circle-fill';
        }
        else {
            this.status = null;
            this.iconType = '';
        }
        if (this.hasTips) {
            this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
        }
        this.controlClassMap = {
            [`has-warning`]: this.status === 'warning',
            [`is-validating`]: this.status === 'validating',
            [`has-error`]: this.status === 'error',
            [`has-success`]: this.status === 'success',
            [`has-feedback`]: this.bpsHasFeedback && this.status
        };
    }
    get hasTips() {
        return !!(this.bpsSuccessTip || this.bpsWarningTip || this.bpsErrorTip || this.bpsValidatingTip);
    }
    get showSuccessTip() {
        return this.status === 'success' && !!this.bpsSuccessTip;
    }
    get showWarningTip() {
        return this.status === 'warning' && !!this.bpsWarningTip;
    }
    get showErrorTip() {
        return this.status === 'error' && !!this.bpsErrorTip;
    }
    get showValidatingTip() {
        return this.status === 'validating' && !!this.bpsValidatingTip;
    }
    get showInnerTip() {
        return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
    }
    ngOnInit() {
        super.ngOnInit();
        this.setControlClassMap();
    }
    ngOnDestroy() {
        this.removeSubscribe();
        super.ngOnDestroy();
    }
    ngAfterContentInit() {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.bpsValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.bpsValidateStatus = this.defaultValidateControl;
            }
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
};
BpsFormControlComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: BpsFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
__decorate([
    ContentChild(NgControl, { static: false })
], BpsFormControlComponent.prototype, "defaultValidateControl", void 0);
__decorate([
    Input()
], BpsFormControlComponent.prototype, "bpsSuccessTip", void 0);
__decorate([
    Input()
], BpsFormControlComponent.prototype, "bpsWarningTip", void 0);
__decorate([
    Input()
], BpsFormControlComponent.prototype, "bpsErrorTip", void 0);
__decorate([
    Input()
], BpsFormControlComponent.prototype, "bpsValidatingTip", void 0);
__decorate([
    Input()
], BpsFormControlComponent.prototype, "bpsExtra", void 0);
__decorate([
    Input()
], BpsFormControlComponent.prototype, "bpsHasFeedback", null);
__decorate([
    Input()
], BpsFormControlComponent.prototype, "bpsValidateStatus", null);
BpsFormControlComponent = __decorate([
    Component({
        selector: 'bps-form-control',
        exportAs: 'bpsFormControl',
        preserveWhitespaces: false,
        animations: [helpMotion],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [NzUpdateHostClassService],
        template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"bpsHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\r\n    <div @helpMotion>\r\n      <ng-container *ngIf=\"showSuccessTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsSuccessTip;context:{$implicit:validateControl};\">{{ bpsSuccessTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showWarningTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsWarningTip;context:{$implicit:validateControl};\">{{ bpsWarningTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showErrorTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsErrorTip;context:{$implicit:validateControl};\">{{ bpsErrorTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showValidatingTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsValidatingTip;context:{$implicit:validateControl};\">{{ bpsValidatingTip }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"!hasTips\" select=\"bps-form-explain\"></ng-content>\r\n  <ng-content *ngIf=\"!bpsExtra\" select=\"bps-form-extra\"></ng-content>\r\n  <div class=\"ant-form-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n",
        styles: [`
      bps-form-control {
        display: block;
      }
      form .has-feedback .ant-input-suffix i {
        margin-right: 18px;
      }
    `]
    }),
    __param(2, Optional()), __param(2, Host()),
    __param(3, Optional()), __param(3, Host())
], BpsFormControlComponent);

let BpsFormExtraComponent = 
/**
 * @deprecated Use `[bpsExtra]` in `BpsFormControlComponent` instead, will remove in 9.0.0.
 */
class BpsFormExtraComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
        warnDeprecation(`'bps-form-extra' is going to be removed in 9.0.0. Use [bpsExtra] in bps-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
};
BpsFormExtraComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
BpsFormExtraComponent = __decorate([
    Component({
        selector: 'bps-form-extra',
        exportAs: 'bpsFormExtra',
        template: "<ng-content></ng-content>",
        preserveWhitespaces: false,
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [`
      bps-form-extra {
        display: block;
      }
    `]
    })
    /**
     * @deprecated Use `[bpsExtra]` in `BpsFormControlComponent` instead, will remove in 9.0.0.
     */
], BpsFormExtraComponent);

let BpsFormSplitComponent = class BpsFormSplitComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
    }
};
BpsFormSplitComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
BpsFormSplitComponent = __decorate([
    Component({
        selector: 'bps-form-split',
        exportAs: 'bpsFormSplit',
        preserveWhitespaces: false,
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: "<ng-content></ng-content>"
    })
], BpsFormSplitComponent);

let BpsFormTextComponent = class BpsFormTextComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
    }
};
BpsFormTextComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
BpsFormTextComponent = __decorate([
    Component({
        selector: 'bps-form-text',
        exportAs: 'bpsFormText',
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        template: "<ng-content></ng-content>"
    })
], BpsFormTextComponent);

const ɵ0 = en_US;
let BpsComponentsLibModule = class BpsComponentsLibModule {
};
BpsComponentsLibModule = __decorate([
    NgModule({
        declarations: [
            BpsComponentsLibComponent,
            BpsInputGroupComponent,
            BpsInputDirective,
            BpsAutosizeDirective,
            BpsOptionComponent,
            BpsFilterOptionPipe,
            BpsFilterGroupOptionPipe,
            BpsOptionContainerComponent,
            BpsOptionGroupComponent,
            BpsOptionLiComponent,
            BpsSelectComponent,
            BpsSelectTopControlComponent,
            BpsSelectUnselectableDirective,
            BpsFormDirective,
            BpsFormExplainComponent,
            BpsFormControlComponent,
            BpsFormExtraComponent,
            BpsFormItemComponent,
            BpsFormLabelComponent,
            BpsFormSplitComponent,
            BpsFormTextComponent
        ],
        imports: [
            NgZorroAntdModule,
            CommonModule,
            NzAddOnModule,
            NzIconModule,
            OverlayModule,
            NzNoAnimationModule,
            NzOverlayModule,
            NzEmptyModule,
            FormsModule
        ],
        exports: [
            BpsComponentsLibComponent,
            BpsComponentsLibComponent,
            BpsInputGroupComponent,
            BpsInputDirective,
            BpsAutosizeDirective,
            BpsOptionComponent,
            BpsFilterOptionPipe,
            BpsFilterGroupOptionPipe,
            BpsOptionContainerComponent,
            BpsOptionGroupComponent,
            BpsOptionLiComponent,
            BpsSelectComponent,
            BpsSelectTopControlComponent,
            BpsSelectUnselectableDirective,
            BpsFormDirective,
            BpsFormExplainComponent,
            BpsFormControlComponent,
            BpsFormExtraComponent,
            BpsFormItemComponent,
            BpsFormLabelComponent,
            BpsFormSplitComponent,
            BpsFormTextComponent
        ],
        providers: [
            { provide: NZ_I18N, useValue: ɵ0 }
        ],
    })
], BpsComponentsLibModule);

/*
 * Public API Surface of bps-components-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BpsAutosizeDirective, BpsComponentsLibComponent, BpsComponentsLibModule, BpsComponentsLibService, BpsFilterGroupOptionPipe, BpsFilterOptionPipe, BpsFormControlComponent, BpsFormDirective, BpsFormExplainComponent, BpsFormExtraComponent, BpsFormItemComponent, BpsFormLabelComponent, BpsFormSplitComponent, BpsFormTextComponent, BpsInputDirective, BpsInputGroupComponent, BpsOptionComponent, BpsOptionContainerComponent, BpsOptionGroupComponent, BpsOptionLiComponent, BpsSelectComponent, BpsSelectService, BpsSelectTopControlComponent, BpsSelectUnselectableDirective, defaultFilterOption, isAutoSizeType, ɵ0 };
//# sourceMappingURL=bps-components-lib.js.map

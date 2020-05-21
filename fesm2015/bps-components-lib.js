import { __decorate, __param } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, Renderer2, ElementRef, Input, Directive, NgZone, ContentChildren, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef, Pipe, ChangeDetectorRef, EventEmitter, ViewChildren, Output, Host, Optional, forwardRef, ContentChild, Inject, HostBinding, HostListener, ViewContainerRef, ComponentFactoryResolver, NgModule } from '@angular/core';
import { NzTooltipBaseComponentLegacy as NzTooltipBaseComponentLegacy$1, en_US, NgZorroAntdModule, NzNoAnimationModule, NzToolTipModule, NzOverlayModule, NzSpinModule, NzGridModule, NzAvatarModule, NzTableModule, NZ_I18N } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { InputBoolean, NzDomEventService, isNotNil, isNil, NzNoAnimationDirective, zoomMotion, toBoolean, slideMotion, warnDeprecation, helpMotion, NzUpdateHostClassService, NzConfigService, WithConfig, NzWaveDirective, isEmpty, findFirstNotEmptyNode, findLastNotEmptyNode, NZ_WAVE_GLOBAL_CONFIG, collapseMotion, zoomBigMotion, InputNumber, NzAddOnModule, NzWaveModule } from 'ng-zorro-antd/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NG_VALUE_ACCESSOR, FormControl, NgModel, FormControlName, FormControlDirective, NgControl, FormsModule } from '@angular/forms';
import { ContentObserver, ObserversModule } from '@angular/cdk/observers';
import { Platform } from '@angular/cdk/platform';
import { Subject, BehaviorSubject, ReplaySubject, combineLatest, merge, fromEvent, EMPTY, Subscription } from 'rxjs';
import { takeUntil, finalize, distinctUntilChanged, map, filter, skip, share, tap, pairwise, startWith, flatMap } from 'rxjs/operators';
import { TAB, SPACE, BACKSPACE, ENTER, DOWN_ARROW, UP_ARROW, LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { MediaMatcher } from '@angular/cdk/layout';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NzToolTipComponent, NzTooltipBaseComponentLegacy } from 'ng-zorro-antd/tooltip';
import { NzI18nService } from 'ng-zorro-antd/i18n';

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
        this.bpsDisabled = false;
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
__decorate([
    Input(), InputBoolean()
], BpsInputDirective.prototype, "bpsDisabled", void 0);
BpsInputDirective = __decorate([
    Directive({
        selector: '[bps-input]',
        exportAs: 'bpsInput',
        host: {
            '[class.ant-input-disabled]': 'disabled',
            '[class.ant-input-lg]': `bpsSize === 'large'`,
            '[class.ant-input-sm]': `bpsSize === 'small'`,
            '[class.bps-input-centered]': `centered`,
            '[class.bps-input-opened]': `opened`,
            '[class.bps-custom-disabled]': `bpsDisabled`,
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
        template: "<ng-template #inputTemplate>\n  <input #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"nzSelectService.disabled\">\n  <span #mirrorElement class=\"ant-select-search__field__mirror\"></span>\n</ng-template>\n<div class=\"ant-select-selection__rendered\">\n  <div *ngIf=\"bpsPlaceHolder\"\n    bps-select-unselectable\n    [style.display]=\"placeHolderDisplay\"\n    class=\"ant-select-selection__placeholder\">{{ bpsPlaceHolder }}</div>\n  <!--single mode-->\n  <ng-container *ngIf=\"nzSelectService.isSingleMode\">\n    <!--selected label-->\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\n      class=\"ant-select-selection-selected-value\"\n      [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.bpsLabel\"\n      [ngStyle]=\"selectedValueStyle\">\n      <ng-container *nzStringTemplateOutlet=\"bpsCustomTemplate; context: { $implicit: nzSelectService.listOfCachedSelectedOption[0] }\">\n        <ng-container>{{ nzSelectService.listOfCachedSelectedOption[0]?.bpsLabel }}</ng-container>\n      </ng-container>\n    </div>\n    <!--show search-->\n    <div *ngIf=\"bpsShowSearch\"\n      class=\"ant-select-search ant-select-search--inline\" [style.display]=\"bpsOpen ? 'block' : 'none'\">\n      <div class=\"ant-select-search__field__wrap\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </div>\n    </div>\n  </ng-container>\n  <!--multiple or tags mode-->\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\n    <ng-container *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : bpsMaxTagCount;trackBy:trackValue; let index = index\">\n      <li [@zoomMotion]\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [attr.title]=\"option.bpsLabel\"\n        [class.ant-select-selection__choice__disabled]=\"option.bpsDisabled\"\n        (@zoomMotion.done)=\"animationEnd()\"\n        class=\"ant-select-selection__choice\">\n        <ng-container *nzStringTemplateOutlet=\"bpsCustomTemplate; context:{ $implicit: nzSelectService.listOfCachedSelectedOption[index] }\">\n          <div class=\"ant-select-selection__choice__content\">{{ option.bpsLabel }}</div>\n        </ng-container>\n        <span *ngIf=\"!option.bpsDisabled\"\n          class=\"ant-select-selection__choice__remove\"\n          (mousedown)=\"$event.preventDefault()\"\n          (click)=\"removeSelectedValue(option, $event)\">\n          <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!bpsRemoveIcon; else bpsRemoveIcon\"></i>\n        </span>\n      </li>\n    </ng-container>\n    <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > bpsMaxTagCount\"\n      [@zoomMotion]\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      (@zoomMotion.done)=\"animationEnd()\"\n      class=\"ant-select-selection__choice\">\n      <div class=\"ant-select-selection__choice__content\">\n        <ng-container *ngIf=\"bpsMaxTagPlaceholder\">\n          <ng-template\n            [ngTemplateOutlet]=\"bpsMaxTagPlaceholder\"\n            [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: bpsMaxTagCount}\">\n          </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"!bpsMaxTagPlaceholder\">\n          + {{ nzSelectService.listOfCachedSelectedOption.length - bpsMaxTagCount }} ...\n        </ng-container>\n      </div>\n    </li>\n    <li class=\"ant-select-search ant-select-search--inline\">\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n    </li>\n  </ul>\n</div>\n<span *ngIf=\"bpsAllowClear && nzSelectService.listOfSelectedValue.length\"\n  class=\"ant-select-selection__clear\"\n  bps-select-unselectable\n  (mousedown)=\"$event.preventDefault()\"\n  (click)=\"onClearSelection($event)\">\n    <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!bpsClearIcon; else bpsClearIcon\" class=\"ant-select-close-icon\"></i>\n  </span>\n<span class=\"ant-select-arrow\" bps-select-unselectable *ngIf=\"bpsShowArrow\">\n  <i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading; else defaultArrow\"></i>\n  <ng-template #defaultArrow>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.078\" height=\"5.098\" viewBox=\"0 0 8.078 5.098\">\n        <path id=\"prefix__sps_arrowdown_icon_white\" d=\"M-20718.77 13286l2.977 2.977 2.977-2.977\" transform=\"translate(20719.832 -13284.939)\" style=\"fill:none;stroke:#fff;stroke-linecap:round;stroke-width:1.5px\"/>\n    </svg>\n    <!--<i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!bpsSuffixIcon; else bpsSuffixIcon\"></i>-->\n  </ng-template>\n</span>\n"
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

const NZ_CONFIG_COMPONENT_NAME$1 = 'button';
let BpsButtonComponent = class BpsButtonComponent {
    constructor(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.contentObserver = contentObserver;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this.nzConfigService = nzConfigService;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.nzWave = new NzWaveDirective(this.ngZone, this.elementRef, this.waveConfig, this.animationType);
        this.bpsBlock = false;
        this.bpsGhost = false;
        this.bpsSearch = false;
        this.bpsLoading = false;
        this.bpsType = 'default';
        this.bpsShape = null;
        this.el = this.elementRef.nativeElement;
        this.isInDropdown = false;
        this.iconOnly = false;
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME$1)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.setClassMap();
            this.cdr.markForCheck();
        });
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    setClassMap() {
        const prefixCls = 'ant-btn';
        const sizeMap = { large: 'lg', small: 'sm' };
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`${prefixCls}-${this.bpsType}`]: this.bpsType,
            [`${prefixCls}-${this.bpsShape}`]: this.bpsShape,
            [`${prefixCls}-${sizeMap[this.bpsSize]}`]: sizeMap[this.bpsSize],
            [`${prefixCls}-loading`]: this.bpsLoading,
            [`${prefixCls}-icon-only`]: this.iconOnly && !this.bpsSearch && !this.isInDropdown,
            [`${prefixCls}-background-ghost`]: this.bpsGhost,
            [`${prefixCls}-block`]: this.bpsBlock,
            [`ant-input-search-button`]: this.bpsSearch
        });
    }
    updateIconDisplay(value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    }
    checkContent() {
        const hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.bpsLoading);
        if (!this.cdr.destroyed) {
            this.cdr.detectChanges();
        }
    }
    moveIcon() {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            const firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            const lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = firstChildElement;
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    }
    ngAfterContentInit() {
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(() => {
            // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
            Promise.resolve().then(() => this.checkContent());
        });
    }
    ngOnInit() {
        this.setClassMap();
        this.nzWave.ngOnInit();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.nzWave.ngOnDestroy();
    }
    ngOnChanges(changes) {
        if (changes.bpsBlock ||
            changes.bpsGhost ||
            changes.bpsSearch ||
            changes.bpsType ||
            changes.bpsShape ||
            changes.bpsSize ||
            changes.bpsLoading) {
            this.setClassMap();
        }
        if (changes.bpsLoading) {
            this.updateIconDisplay(this.bpsLoading);
        }
        if (changes.bpsType && changes.bpsType.currentValue === 'link') {
            this.nzWave.disable();
        }
        else {
            this.nzWave.enable();
        }
    }
};
BpsButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ContentObserver },
    { type: NzUpdateHostClassService },
    { type: NgZone },
    { type: NzConfigService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
__decorate([
    ViewChild('contentElement', { static: true })
], BpsButtonComponent.prototype, "contentElement", void 0);
__decorate([
    ContentChildren(NzIconDirective, { read: ElementRef })
], BpsButtonComponent.prototype, "listOfIconElement", void 0);
__decorate([
    HostBinding('attr.nz-wave')
], BpsButtonComponent.prototype, "nzWave", void 0);
__decorate([
    Input(), InputBoolean()
], BpsButtonComponent.prototype, "bpsBlock", void 0);
__decorate([
    Input(), InputBoolean()
], BpsButtonComponent.prototype, "bpsGhost", void 0);
__decorate([
    Input(), InputBoolean()
], BpsButtonComponent.prototype, "bpsSearch", void 0);
__decorate([
    Input(), InputBoolean()
], BpsButtonComponent.prototype, "bpsLoading", void 0);
__decorate([
    Input()
], BpsButtonComponent.prototype, "bpsType", void 0);
__decorate([
    Input()
], BpsButtonComponent.prototype, "bpsShape", void 0);
__decorate([
    Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME$1, 'default')
], BpsButtonComponent.prototype, "bpsSize", void 0);
BpsButtonComponent = __decorate([
    Component({
        selector: '[bps-button]',
        exportAs: 'bpsButton',
        providers: [NzUpdateHostClassService],
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        template: "<i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading\"></i>\n<span class=\"bps-custom-content\" #contentElement><ng-content></ng-content></span>\n",
        styles: [".ant-btn-variation-1{height:40px!important;border-radius:8px!important;border:2px solid #00a2d1!important;background-color:transparent!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#00a2d1!important}.ant-btn-variation-1[disabled],.ant-btn-variation-2[disabled],.ant-btn-variation-2[disabled]:hover{border-color:#474747!important;color:#474747!important}.ant-btn-variation-1.active,.ant-btn-variation-1:active{border-color:#445c67!important;color:#445c67!important}.ant-btn-variation-1:focus{box-shadow:0 0 12px 0 #00a2d1!important;color:#00a2d1!important;border:2px solid #00a2d1!important}.ant-btn-variation-2{height:40px!important;border-radius:8px!important;border:2px solid #474747!important;background-color:#363636!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important}.ant-btn-variation-2[disabled]{background-color:transparent!important}.ant-btn-variation-2:hover{border-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-2.active,.ant-btn-variation-2:active{border-color:#445c67!important;color:#fff!important}.ant-btn-variation-2:focus{box-shadow:0 0 12px 0 #00a2d1!important;color:#fff!important;border-color:#474747!important}.ant-btn-variation-3,.ant-btn-variation-4,.ant-btn-variation-5{height:30px!important;border-radius:8px!important;background-color:#00a2d1!important;color:#fff!important;font-size:10px!important;font-weight:700!important;border:none!important;font-stretch:normal!important;font-style:normal!important;line-height:1.2;letter-spacing:.3px!important;text-align:center!important}.ant-btn-variation-4{height:28px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important}.ant-btn-variation-5{height:22px!important;border-radius:11px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important}.ant-btn-variation-6,.ant-btn-variation-7,.ant-btn-variation-8{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:11px!important;background-color:#363636!important;border:none!important}.ant-btn-variation-9,.ant-btn-variation-9:hover{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:8px!important;background-color:#253d47!important;border:none!important}.ant-btn-variation-3[disabled],.ant-btn-variation-3[disabled]:hover,.ant-btn-variation-4[disabled],.ant-btn-variation-4[disabled]:hover,.ant-btn-variation-5[disabled],.ant-btn-variation-5[disabled]:hover,.ant-btn-variation-6[disabled],.ant-btn-variation-6[disabled]:hover,.ant-btn-variation-7[disabled],.ant-btn-variation-7[disabled]:hover,.ant-btn-variation-8[disabled],.ant-btn-variation-8[disabled]:hover,.ant-btn-variation-9[disabled],.ant-btn-variation-9[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-3:hover,.ant-btn-variation-4:hover,.ant-btn-variation-5:hover,.ant-btn-variation-7:hover,.ant-btn-variation-8:hover{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-6:hover{background-color:#bc0000!important;color:#fff!important}.ant-btn-variation-3.active,.ant-btn-variation-3:active,.ant-btn-variation-4.active,.ant-btn-variation-4:active,.ant-btn-variation-5.active,.ant-btn-variation-5:active{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-9.active,.ant-btn-variation-9:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-7.active,.ant-btn-variation-7:active{background-color:#00a2d1!important}.ant-btn-variation-6.active,.ant-btn-variation-6:active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-8.active,.ant-btn-variation-8:active{background-color:#253d47!important;color:#999!important}.ant-btn-variation-3:focus,.ant-btn-variation-4:focus,.ant-btn-variation-5:focus{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-6:focus,.ant-btn-variation-7:focus,.ant-btn-variation-8:focus{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#363636!important;color:#fff!important}.ant-btn-variation-9:focus{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#253d47!important;color:#fff!important}.ant-btn-variation-10,.ant-btn-variation-10:hover,.ant-btn-variation-11,.ant-btn-variation-11:hover,.ant-btn-variation-13,.ant-btn-variation-13:hover{width:30px!important;height:30px!important;border-radius:8px!important;background-color:#363636!important;border:none!important;padding:0!important;color:#fff!important}.ant-btn-variation-13,.ant-btn-variation-13:hover{border-radius:4px!important;width:22px!important;height:22px!important}.ant-btn-variation-13:hover{background-color:#445c67!important}.ant-btn-variation-11,.ant-btn-variation-11:hover{background-color:#253d47!important}.ant-btn-variation-10[disabled],.ant-btn-variation-10[disabled]:hover,.ant-btn-variation-11[disabled],.ant-btn-variation-11[disabled]:hover,.ant-btn-variation-13[disabled],.ant-btn-variation-13[disabled]:hover,.ant-btn-variation-14[disabled],.ant-btn-variation-14[disabled]:hover,.ant-btn-variation-15[disabled],.ant-btn-variation-15[disabled]:hover,.ant-btn-variation-16[disabled],.ant-btn-variation-16[disabled]:hover,.ant-btn-variation-20[disabled],.ant-btn-variation-20[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-10[disabled] svg,.ant-btn-variation-10[disabled]:hover svg,.ant-btn-variation-11[disabled] svg,.ant-btn-variation-11[disabled]:hover svg,.ant-btn-variation-13[disabled] svg,.ant-btn-variation-13[disabled]:hover svg,.ant-btn-variation-14[disabled] svg,.ant-btn-variation-14[disabled]:hover svg,.ant-btn-variation-15[disabled] svg,.ant-btn-variation-15[disabled]:hover svg,.ant-btn-variation-16[disabled] svg,.ant-btn-variation-16[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-10.active,.ant-btn-variation-10:active,.ant-btn-variation-11.active,.ant-btn-variation-11:active,.ant-btn-variation-13.active,.ant-btn-variation-13:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-11:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#253d47!important;color:#fff!important}.bps-custom-content{display:table!important;margin:0 auto!important}.bps-custom-content svg{display:table-cell!important;vertical-align:middle!important}.ant-btn-variation-12,.ant-btn-variation-12:hover{height:40px;width:40px;background-color:#253d47!important;border-radius:12px!important;border:2px solid #00a2d1!important;background-clip:content-box!important;padding:5px!important;color:#fff!important}.ant-btn-variation-12:hover{background-color:#445c67!important}.ant-btn-variation-12[disabled],.ant-btn-variation-12[disabled]:hover{background-color:#363636!important;border-color:#666!important;color:#666!important}.ant-btn-variation-12[disabled] svg,.ant-btn-variation-12[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-12.active,.ant-btn-variation-12:active{background-color:#00a2d1!important}.ant-btn-variation-12:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#253d47!important}.ant-btn-variation-14,.ant-btn-variation-15,.ant-btn-variation-16{width:30px!important;height:30px!important;background-color:#00a2d1!important;border-radius:100px!important;border:none!important;color:#fff!important;padding:0!important}.ant-btn-variation-14:hover{color:#fff!important;background-color:#445c67!important;border:none!important}.ant-btn-variation-15{background-color:#363636!important}.ant-btn-variation-15:hover{color:#fff!important;background-color:#bc0000!important;border:none!important}.ant-btn-variation-16{background-color:#363636!important}.ant-btn-variation-16:hover{background-color:#474747!important}.ant-btn-variation-14.active,.ant-btn-variation-14:active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-16.active,.ant-btn-variation-16:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-15.active,.ant-btn-variation-15:active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-14:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#00a2d1!important}.ant-btn-variation-10:focus,.ant-btn-variation-13:focus,.ant-btn-variation-15:focus,.ant-btn-variation-16:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#363636!important;color:#fff!important}.ant-btn-variation-17,.ant-btn-variation-17:hover{height:32px!important;width:32px!important;font-size:17px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.71!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border:2px solid #fff!important;background-color:#888!important;padding:0!important;border-radius:100px!important}.ant-btn-variation-17:hover{background-color:#666!important;color:#fff!important}.ant-btn-variation-17.active,.ant-btn-variation-17:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-17:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#888!important}.ant-btn-variation-17[disabled],.ant-btn-variation-17[disabled]:hover{border:2px solid #666!important;background-color:#888!important;color:#666!important}.ant-btn-variation-18,.ant-btn-variation-18:hover,.ant-btn-variation-19,.ant-btn-variation-19:hover{background-color:#262626!important;height:30px!important;width:30px!important;padding:0!important;border:none!important;border-radius:100px!important}.ant-btn-variation-19,.ant-btn-variation-19:hover{height:20px!important;width:20px!important;border-radius:4px!important}.ant-btn-variation-18:hover{background-color:#363636!important;color:#fff!important}.ant-btn-variation-18.active,.ant-btn-variation-18:active{background-color:#474747!important;color:#fff!important}.ant-btn-variation-18:focus,.ant-btn-variation-19:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#262626!important}.ant-btn-variation-18[disabled],.ant-btn-variation-18[disabled]:hover,.ant-btn-variation-19[disabled],.ant-btn-variation-19[disabled]:hover{border:none!important;background-color:#262626!important;color:#666!important}.ant-btn-variation-18[disabled] svg,.ant-btn-variation-18[disabled]:hover svg,.ant-btn-variation-19[disabled] svg,.ant-btn-variation-19[disabled]:hover svg,.ant-btn-variation-20[disabled] svg,.ant-btn-variation-20[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-20,.ant-btn-variation-20:hover{width:25px!important;height:30px!important;background-color:#363636!important;border:none!important;border-radius:100px 0 0 100px!important;color:#fff!important}.ant-btn-variation-20:hover{background-color:#474747!important;color:#fff!important}.ant-btn-variation-20.active,.ant-btn-variation-20:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-20:focus{background-color:#363636!important;box-shadow:0 0 8px 0 #00a2d1!important;border:none!important}"]
    }),
    __param(7, Optional()), __param(7, Inject(NZ_WAVE_GLOBAL_CONFIG)),
    __param(8, Optional()), __param(8, Inject(ANIMATION_MODULE_TYPE))
], BpsButtonComponent);

let BpsButtonGroupComponent = class BpsButtonGroupComponent {
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    get bpsSize() {
        return this._size;
    }
    set bpsSize(value) {
        this._size = value;
        this.setClassMap();
    }
    setClassMap() {
        const prefixCls = 'ant-btn-group';
        const classMap = {
            [prefixCls]: true,
            [`ant-dropdown-button`]: this.isInDropdown,
            [`${prefixCls}-lg`]: this.bpsSize === 'large',
            [`${prefixCls}-sm`]: this.bpsSize === 'small'
        };
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    }
    ngOnInit() {
        this.setClassMap();
    }
};
BpsButtonGroupComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef }
];
__decorate([
    Input()
], BpsButtonGroupComponent.prototype, "bpsSize", null);
BpsButtonGroupComponent = __decorate([
    Component({
        selector: 'bps-button-group',
        exportAs: 'bpsButtonGroup',
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        preserveWhitespaces: false,
        providers: [NzUpdateHostClassService],
        template: "<ng-content></ng-content>\n"
    })
], BpsButtonGroupComponent);

var BpsSwitchComponent_1;
const NZ_CONFIG_COMPONENT_NAME$2 = 'switch';
let BpsSwitchComponent = BpsSwitchComponent_1 = class BpsSwitchComponent {
    constructor(nzConfigService, cdr, focusMonitor) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.checked = false;
        this.onChange = () => null;
        this.onTouched = () => null;
        this.bpsLoading = false;
        this.bpsDisabled = false;
        this.bpsControl = false;
    }
    hostClick(e) {
        e.preventDefault();
        if (!this.bpsDisabled && !this.bpsLoading && !this.bpsControl) {
            this.updateValue(!this.checked);
        }
    }
    updateValue(value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    }
    onKeyDown(e) {
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
    }
    focus() {
        this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
    }
    blur() {
        this.switchElement.nativeElement.blur();
    }
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then(() => this.onTouched());
            }
        });
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
    }
    writeValue(value) {
        this.checked = value;
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
};
BpsSwitchComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
__decorate([
    ViewChild('switchElement', { static: true })
], BpsSwitchComponent.prototype, "switchElement", void 0);
__decorate([
    Input(), InputBoolean()
], BpsSwitchComponent.prototype, "bpsLoading", void 0);
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
    Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME$2, 'default')
], BpsSwitchComponent.prototype, "bpsSize", void 0);
BpsSwitchComponent = BpsSwitchComponent_1 = __decorate([
    Component({
        selector: 'bps-switch',
        exportAs: 'bpsSwitch',
        preserveWhitespaces: false,
        template: "<button type=\"button\" #switchElement\r\n  nz-wave\r\n  class=\"ant-switch\"\r\n  [disabled]=\"bpsDisabled\"\r\n  [class.ant-switch-checked]=\"checked\"\r\n  [class.ant-switch-loading]=\"bpsLoading\"\r\n  [class.ant-switch-disabled]=\"bpsDisabled\"\r\n  [class.ant-switch-small]=\"bpsSize === 'small'\"\r\n  [nzWaveExtraNode]=\"true\"\r\n  (keydown)=\"onKeyDown($event)\">\r\n  <i *ngIf=\"bpsLoading\" nz-icon nzType=\"loading\" class=\"ant-switch-loading-icon\"></i>\r\n  <span class=\"ant-switch-inner\">\r\n    <span>\r\n      <ng-container *ngIf=\"checked\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsCheckedChildren\">{{ bpsCheckedChildren }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!checked\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsUnCheckedChildren\">{{ bpsUnCheckedChildren }}</ng-container>\r\n      </ng-container>\r\n    </span>\r\n  </span>\r\n</button>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsSwitchComponent_1),
                multi: true
            }
        ],
        host: {
            '(click)': 'hostClick($event)'
        },
        styles: [".ant-switch::after{background-color:#999!important;width:16px!important;height:16px!important;top:-3px;left:-1px!important}.ant-switch{min-width:30px!important;height:12px!important;border-radius:100px!important;border:1px solid #666!important;background-color:#363636!important}.ant-switch-checked::after{left:100%!important;margin-left:1px!important;transform:translateX(-100%);border:1px solid #00a2d1!important;background-color:#00a2d1!important}.ant-switch-checked{border:1px solid #00a2d1!important}.ant-switch-disabled::after{background-color:#474747!important;border:1px solid #474747!important}.ant-switch-disabled{border:1px solid #474747!important}", `
      bps-switch {
        display: inline-block;
      }
    `]
    })
], BpsSwitchComponent);

var BpsCheckboxGroupComponent_1;
let BpsCheckboxGroupComponent = BpsCheckboxGroupComponent_1 = class BpsCheckboxGroupComponent {
    constructor(elementRef, focusMonitor, cdr, renderer) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.onChange = () => null;
        // tslint:disable-next-line:no-any
        this.onTouched = () => null;
        this.options = [];
        this.bpsDisabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    onOptionChange() {
        this.onChange(this.options);
    }
    trackByOption(_index, option) {
        return option.value;
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
    writeValue(value) {
        this.options = value;
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
};
BpsCheckboxGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
__decorate([
    Input(), InputBoolean()
], BpsCheckboxGroupComponent.prototype, "bpsDisabled", void 0);
BpsCheckboxGroupComponent = BpsCheckboxGroupComponent_1 = __decorate([
    Component({
        selector: 'bps-checkbox-group',
        exportAs: 'bpsCheckboxGroup',
        preserveWhitespaces: false,
        encapsulation: ViewEncapsulation.None,
        template: "<label bps-checkbox\n       class=\"ant-checkbox-group-item\"\n       *ngFor=\"let option of options; trackBy:trackByOption\"\n       [bpsDisabled]=\"option.disabled || bpsDisabled\"\n       [(bpsChecked)]=\"option.checked\"\n       (bpsCheckedChange)=\"onOptionChange()\">\n  <span>{{ option.label }}</span>\n</label>\n",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsCheckboxGroupComponent_1),
                multi: true
            }
        ]
    })
], BpsCheckboxGroupComponent);

let BpsCheckboxWrapperComponent = class BpsCheckboxWrapperComponent {
    constructor(renderer, elementRef) {
        this.bpsOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    outputValue() {
        const checkedList = this.checkboxList.filter(item => item.bpsChecked);
        return checkedList.map(item => item.bpsValue);
    }
    onChange() {
        this.bpsOnChange.emit(this.outputValue());
    }
};
BpsCheckboxWrapperComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
__decorate([
    Output()
], BpsCheckboxWrapperComponent.prototype, "bpsOnChange", void 0);
BpsCheckboxWrapperComponent = __decorate([
    Component({
        selector: 'bps-checkbox-wrapper',
        exportAs: 'bpsCheckboxWrapper',
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        template: "<ng-content></ng-content>"
    })
], BpsCheckboxWrapperComponent);

var BpsCheckboxComponent_1;
let BpsCheckboxComponent = BpsCheckboxComponent_1 = class BpsCheckboxComponent {
    constructor(elementRef, renderer, bpsCheckboxWrapperComponent, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.bpsCheckboxWrapperComponent = bpsCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        // tslint:disable-next-line:no-any
        this.onChange = () => null;
        // tslint:disable-next-line:no-any
        this.onTouched = () => null;
        this.bpsCheckedChange = new EventEmitter();
        this.bpsAutoFocus = false;
        this.bpsDisabled = false;
        this.bpsIndeterminate = false;
        this.bpsChecked = false;
        this.bpsType = 'variation2';
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
    }
    hostClick(e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.bpsChecked);
    }
    innerCheckedChange(checked) {
        if (!this.bpsDisabled) {
            this.bpsChecked = checked;
            this.onChange(this.bpsChecked);
            this.bpsCheckedChange.emit(this.bpsChecked);
            if (this.bpsCheckboxWrapperComponent) {
                this.bpsCheckboxWrapperComponent.onChange();
            }
        }
    }
    updateAutoFocus() {
        if (this.inputElement && this.bpsAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    }
    writeValue(value) {
        this.bpsChecked = value;
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
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    checkContent() {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        }
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
        if (this.bpsCheckboxWrapperComponent) {
            this.bpsCheckboxWrapperComponent.addCheckbox(this);
        }
    }
    ngOnChanges(changes) {
        if (changes.bpsAutoFocus) {
            this.updateAutoFocus();
        }
    }
    ngAfterViewInit() {
        this.updateAutoFocus();
        this.checkContent();
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.bpsCheckboxWrapperComponent) {
            this.bpsCheckboxWrapperComponent.removeCheckbox(this);
        }
    }
};
BpsCheckboxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: BpsCheckboxWrapperComponent, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
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
                useExisting: forwardRef(() => BpsCheckboxComponent_1),
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

var BpsRadioComponent_1;
let BpsRadioComponent = BpsRadioComponent_1 = class BpsRadioComponent {
    /* tslint:disable-next-line:no-any */
    constructor(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.select$ = new Subject();
        this.touched$ = new Subject();
        this.checked = false;
        this.isNgModel = false;
        this.onChange = () => null;
        this.onTouched = () => null;
        this.bpsDisabled = false;
        this.bpsAutoFocus = false;
        this.bpsRadioButtonType = 'variation1';
        this.renderer.addClass(elementRef.nativeElement, 'ant-radio-wrapper');
    }
    updateAutoFocus() {
        if (this.inputElement) {
            if (this.bpsAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    }
    onClick(event) {
        // Prevent label click triggered twice.
        event.stopPropagation();
        event.preventDefault();
        if (!this.bpsDisabled && !this.checked) {
            this.select$.next(this);
            if (this.isNgModel) {
                this.checked = true;
                this.onChange(true);
            }
        }
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    setDisabledState(isDisabled) {
        this.bpsDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.isNgModel = true;
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
                this.touched$.next();
            }
        });
        this.updateAutoFocus();
        this.renderer.addClass(this.elementRef.nativeElement, `bps-radio-button-${this.bpsRadioButtonType}`);
    }
    ngOnChanges(changes) {
        if (changes.bpsAutoFocus) {
            this.updateAutoFocus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
};
BpsRadioComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
__decorate([
    ViewChild('inputElement', { static: false })
], BpsRadioComponent.prototype, "inputElement", void 0);
__decorate([
    Input()
], BpsRadioComponent.prototype, "bpsValue", void 0);
__decorate([
    Input(), InputBoolean()
], BpsRadioComponent.prototype, "bpsDisabled", void 0);
__decorate([
    Input(), InputBoolean()
], BpsRadioComponent.prototype, "bpsAutoFocus", void 0);
__decorate([
    Input()
], BpsRadioComponent.prototype, "bpsRadioButtonType", void 0);
__decorate([
    HostListener('click', ['$event'])
], BpsRadioComponent.prototype, "onClick", null);
BpsRadioComponent = BpsRadioComponent_1 = __decorate([
    Component({
        selector: '[bps-radio]',
        exportAs: 'bpsRadio',
        preserveWhitespaces: false,
        template: "<span class=\"ant-radio\" [class.ant-radio-checked]=\"checked\" [class.ant-radio-disabled]=\"bpsDisabled\">\n  <input #inputElement type=\"radio\" class=\"ant-radio-input\" [disabled]=\"bpsDisabled\" [checked]=\"checked\" [attr.name]=\"name\">\n  <span class=\"ant-radio-inner\"></span>\n</span>\n<span><ng-content></ng-content></span>\n",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsRadioComponent_1),
                multi: true
            }
        ],
        host: {
            '[class.ant-radio-wrapper-checked]': 'checked',
            '[class.ant-radio-wrapper-disabled]': 'bpsDisabled'
        }
    })
], BpsRadioComponent);

var BpsRadioGroupComponent_1;
let BpsRadioGroupComponent = BpsRadioGroupComponent_1 = class BpsRadioGroupComponent {
    constructor(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = () => null;
        this.onTouched = () => null;
        this.bpsButtonStyle = 'outline';
        this.bpsSize = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    updateChildrenStatus() {
        if (this.radios) {
            Promise.resolve().then(() => {
                this.radios.forEach(radio => {
                    radio.checked = radio.bpsValue === this.value;
                    if (isNotNil(this.bpsDisabled)) {
                        radio.bpsDisabled = this.bpsDisabled;
                    }
                    if (this.bpsName) {
                        radio.name = this.bpsName;
                    }
                    radio.markForCheck();
                });
            });
        }
    }
    ngAfterContentInit() {
        this.radios.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateChildrenStatus();
            if (this.selectSubscription) {
                this.selectSubscription.unsubscribe();
            }
            this.selectSubscription = merge(...this.radios.map(radio => radio.select$))
                .pipe(takeUntil(this.destroy$))
                .subscribe(radio => {
                if (this.value !== radio.bpsValue) {
                    this.value = radio.bpsValue;
                    this.updateChildrenStatus();
                    this.onChange(this.value);
                }
            });
            if (this.touchedSubscription) {
                this.touchedSubscription.unsubscribe();
            }
            this.touchedSubscription = merge(...this.radios.map(radio => radio.touched$))
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                Promise.resolve().then(() => this.onTouched());
            });
        });
    }
    ngOnChanges(changes) {
        if (changes.bpsDisabled || changes.bpsName) {
            this.updateChildrenStatus();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /* tslint:disable-next-line:no-any */
    writeValue(value) {
        this.value = value;
        this.updateChildrenStatus();
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
};
BpsRadioGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
__decorate([
    ContentChildren(forwardRef(() => BpsRadioComponent), { descendants: true })
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
                useExisting: forwardRef(() => BpsRadioGroupComponent_1),
                multi: true
            }
        ],
        host: {
            '[class.ant-radio-group-large]': `bpsSize === 'large'`,
            '[class.ant-radio-group-small]': `bpsSize === 'small'`,
            '[class.ant-radio-group-solid]': `bpsButtonStyle === 'solid'`
        }
    })
], BpsRadioGroupComponent);

var BpsRadioButtonComponent_1;
let BpsRadioButtonComponent = BpsRadioButtonComponent_1 = class BpsRadioButtonComponent extends BpsRadioComponent {
    /* tslint:disable-next-line:no-any */
    constructor(elementRef, renderer, cdr, focusMonitor) {
        super(elementRef, renderer, cdr, focusMonitor);
        renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
        renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
    }
};
BpsRadioButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
BpsRadioButtonComponent = BpsRadioButtonComponent_1 = __decorate([
    Component({
        selector: '[bps-radio-button]',
        exportAs: 'bpsRadioButton',
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsRadioComponent),
                multi: true
            },
            {
                provide: BpsRadioComponent,
                useExisting: forwardRef(() => BpsRadioButtonComponent_1)
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

const NZ_CONFIG_COMPONENT_NAME$3 = 'collapse';
let BpsCollapseComponent = class BpsCollapseComponent {
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
        if (this.bpsAccordion && !collapse.bpsActive) {
            this.listOfNzCollapsePanelComponent
                .filter(item => item !== collapse)
                .forEach(item => {
                if (item.bpsActive) {
                    item.bpsActive = false;
                    item.bpsActiveChange.emit(item.bpsActive);
                    item.markForCheck();
                }
            });
        }
        collapse.bpsActive = !collapse.bpsActive;
        collapse.bpsActiveChange.emit(collapse.bpsActive);
    }
};
BpsCollapseComponent.ctorParameters = () => [
    { type: NzConfigService }
];
__decorate([
    Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME$3, false), InputBoolean()
], BpsCollapseComponent.prototype, "bpsAccordion", void 0);
__decorate([
    Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME$3, true), InputBoolean()
], BpsCollapseComponent.prototype, "bpsBordered", void 0);
BpsCollapseComponent = __decorate([
    Component({
        selector: 'bps-collapse',
        exportAs: 'bpsCollapse',
        template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!bpsBordered\">\n  <ng-content></ng-content>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        styles: [`
      bps-collapse {
        display: block;
      }
    `, ".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}"]
    })
], BpsCollapseComponent);

const NZ_CONFIG_COMPONENT_NAME$4 = 'collapsePanel';
let BpsCollapsePanelComponent = class BpsCollapsePanelComponent {
    constructor(nzConfigService, cdr, bpsCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.bpsCollapseComponent = bpsCollapseComponent;
        this.bpsActive = false;
        this.bpsDisabled = false;
        this.bpsValid = null;
        this.bpsActiveChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    clickHeader() {
        if (!this.bpsDisabled) {
            this.bpsCollapseComponent.click(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.bpsCollapseComponent.addPanel(this);
    }
    ngOnDestroy() {
        this.bpsCollapseComponent.removePanel(this);
    }
};
BpsCollapsePanelComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: BpsCollapseComponent, decorators: [{ type: Host }] },
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(), InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsActive", void 0);
__decorate([
    Input(), InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsDisabled", void 0);
__decorate([
    Input()
], BpsCollapsePanelComponent.prototype, "bpsValid", void 0);
__decorate([
    Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME$4, true), InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsShowArrow", void 0);
__decorate([
    Input()
], BpsCollapsePanelComponent.prototype, "bpsExtra", void 0);
__decorate([
    Input()
], BpsCollapsePanelComponent.prototype, "bpsHeader", void 0);
__decorate([
    Input()
], BpsCollapsePanelComponent.prototype, "bpsExpandedIcon", void 0);
__decorate([
    Output()
], BpsCollapsePanelComponent.prototype, "bpsActiveChange", void 0);
BpsCollapsePanelComponent = __decorate([
    Component({
        selector: 'bps-collapse-panel',
        exportAs: 'bpsCollapsePanel',
        template: "<div role=\"tab\" [attr.aria-expanded]=\"bpsActive\" class=\"ant-collapse-header\" (click)=\"clickHeader()\">\r\n  <ng-container *ngIf=\"bpsShowArrow\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExpandedIcon\">\r\n      <div class=\"ant-collapse-arrow bps-status-indicator\"\r\n           [class.bps-collapse-panel-invalid]=\"bpsValid !== null && !bpsValid\"\r\n           [class.bps-collapse-panel-valid]=\"bpsValid\"></div>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_enabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-d1 {\r\n              fill: #666\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_disabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_enabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#fff\" />\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_disabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#666\" />\r\n      </svg>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\"\r\n  [class.ant-collapse-content-active]=\"bpsActive\"\r\n  [@collapseMotion]=\"bpsActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        animations: [collapseMotion],
        host: {
            '[class.ant-collapse-no-arrow]': '!bpsShowArrow',
            '[class.ant-collapse-item-active]': 'bpsActive',
            '[class.ant-collapse-item-disabled]': 'bpsDisabled'
        },
        styles: [`
      bps-collapse-panel {
        display: block;
      }
    `, ".ant-collapse>.ant-collapse-item{border-bottom:unset!important;background-color:transparent!important;margin-bottom:unset!important;border-radius:unset!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header{padding:0 15px!important;color:#fff!important;line-height:20px!important;font-size:12px!important;background-color:#363636!important;border-radius:10px!important;margin-bottom:10px!important}.ant-collapse-content{color:#fff!important;font-size:12px!important;background-color:transparent!important;border-top:unset!important}.ant-collapse-content>.ant-collapse-content-box{padding:0 15px 8px!important}.ant-collapse-item:last-child>.ant-collapse-content,.ant-collapse>.ant-collapse-item:last-child,.ant-collapse>.ant-collapse-item:last-child>.ant-collapse-header{border-radius:10px!important}.ant-collapse-arrow.bps-status-indicator{width:4px!important;height:4px!important;background-color:#666!important;border-radius:100px!important;right:45px!important;left:unset!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-valid{background-color:#00a2d1!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-invalid{background-color:#f18700!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow:not(.bps-status-indicator){right:15px!important;left:unset!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:hover{background-color:#474747!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:focus{box-shadow:0 0 8px 0 #00a2d1!important}.ant-collapse>.ant-collapse-item.ant-collapse-item-disabled>.ant-collapse-header{color:#666!important}"]
    }),
    __param(2, Host())
], BpsCollapsePanelComponent);

var BpsPopoverComponent_1;
let BpsPopoverComponent = BpsPopoverComponent_1 = class BpsPopoverComponent extends NzToolTipComponent {
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this._prefix = 'ant-popover-placement';
        this.bpsPopoverType = 'variation_1';
    }
};
BpsPopoverComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
__decorate([
    Input()
], BpsPopoverComponent.prototype, "bpsPopoverType", void 0);
__decorate([
    Input()
], BpsPopoverComponent.prototype, "bpsTitle", void 0);
__decorate([
    ContentChild('neverUsedTemplate', { static: true })
], BpsPopoverComponent.prototype, "bpsTitleTemplate", void 0);
__decorate([
    Input()
], BpsPopoverComponent.prototype, "bpsContent", void 0);
__decorate([
    ContentChild('nzTemplate', { static: true })
], BpsPopoverComponent.prototype, "bpsContentTemplate", void 0);
BpsPopoverComponent = BpsPopoverComponent_1 = __decorate([
    Component({
        selector: 'bps-popover',
        exportAs: 'bpsPopoverComponent',
        animations: [zoomBigMotion],
        template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"_visible\">\n  <div class=\"ant-popover\"\n    [ngClass]=\"_classMap\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@zoomBigMotion]=\"'active'\">\n    <div class=\"ant-popover-content\">\n      <div class=\"ant-popover-arrow bps-popover-arrow-{{bpsPopoverType}}\"></div>\n      <div class=\"ant-popover-inner bps-popover-inner-{{bpsPopoverType}}\" role=\"tooltip\">\n        <div>\n          <div class=\"ant-popover-title\" *ngIf=\"title\">\n            <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n          </div>\n          <div class=\"ant-popover-inner-content bps-popover-inner-content-{{bpsPopoverType}}\">\n            <ng-container *nzStringTemplateOutlet=\"content\">{{ content }}</ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [
            {
                provide: NzTooltipBaseComponentLegacy,
                useExisting: BpsPopoverComponent_1
            }
        ],
        preserveWhitespaces: false,
        styles: [`
      .ant-popover {
        position: relative;
      }
    `, ".ant-popover-placement-right .ant-popover-arrow{border-left:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow{border-right:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow{border-right:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow{border-left:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.ant-popover-arrow{border-style:unset!important}.ant-popover-inner{box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important;border:1px solid #00a2d1!important;background-color:#262626!important;border-radius:8px!important}.ant-popover-inner-content{font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff;padding:15px!important}.bps-popover-inner-content-variation_1{max-width:325px;width:325px;height:415px;max-height:415px}.bps-popover-content-title{font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.31;letter-spacing:normal;text-align:left;color:#00a2d1;margin-bottom:10px}.bps-popover-content-subtitle{font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.36;letter-spacing:normal;text-align:left;color:#fff;margin-bottom:15px}.bps-popover-inner-content-variation_2{max-width:595px;width:595px;height:415px;max-height:415px}.bps-popover-inner-content-variation_3{max-width:325px;width:325px;height:315px;max-height:315px}.bps-popover-inner-content-variation_4{max-width:215px;width:215px;height:170px;max-height:170px}.bps-popover-inner-content-variation_5{max-width:230px;width:230px;height:160px;max-height:160px}.bps-popover-inner-content-variation_6{max-width:245px;width:245px;height:55px;max-height:55px}.bps-popover-inner-content-variation_7a,.bps-popover-inner-content-variation_7b{max-width:455px;width:455px;height:75px;max-height:75px}.bps-popover-inner-variation_7a{border:1px solid #7bc053!important}.ant-popover-placement-right .ant-popover-arrow.bps-popover-arrow-variation_7a{border-left:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow.bps-popover-arrow-variation_7a{border-right:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow.bps-popover-arrow-variation_7a{border-right:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow.bps-popover-arrow-variation_7a{border-left:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.bps-popover-custom-content-icon{width:45px;position:relative;float:left;top:50%;transform:translateY(-50%);padding-left:8px}.bps-popover-custom-content{width:370px;position:relative;float:right;top:50%;transform:translateY(-50%);padding-right:10px}"]
    }),
    __param(1, Host()), __param(1, Optional())
], BpsPopoverComponent);

class NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, 
    /**
     * @deprecated 9.0.0. This will always be `null`.
     */
    _tooltip, noAnimation) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this._tooltip = _tooltip;
        this.noAnimation = noAnimation;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        this.nzTrigger = 'hover';
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipPlacement`.
         */
        this.nzPlacement = 'top';
        this.needProxyProperties = [
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'noAnimation'
        ];
        this.nzVisibleChange = new EventEmitter();
        this.isTooltipComponentVisible = false;
        /**
         * @deprecated 9.0.0. Tooltips would always be dynamic in 9.0.0.
         */
        this.isDynamicTooltip = false;
        this.triggerUnlisteners = [];
        this.$destroy = new Subject();
    }
    /**
     * This true title that would be used in other parts on this component.
     */
    get title() {
        return this.specificTitle || this.directiveNameTitle || this.nzTitle;
    }
    get content() {
        return this.specificContent || this.directiveNameContent || this.nzContent;
    }
    get placement() {
        return this.specificPlacement || this.nzPlacement;
    }
    get type() {
        return this.popoverType;
    }
    get trigger() {
        return this.specificTrigger || this.nzTrigger;
    }
    ngOnChanges(changes) {
        const { nzTrigger, specificTrigger } = changes;
        const trigger = specificTrigger || nzTrigger;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.tooltip && this.isDynamicTooltip) {
            this.updateChangedProperties(changes);
        }
        // TODO: enable these warning in 9.0.0.
        // if (changes.nzTitle) {
        //   warnDeprecation(
        //     `'nzTitle' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipTitle' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
        // if (changes.nzContent) {
        //   warnDeprecation(
        //     `'nzContent' of 'nz-popover' is deprecated and will be removed in 10.0.0. Please use 'nzPopoverContent' instead.`
        //   );
        // }
        // if (changes.nzPlacement) {
        //   warnDeprecation(
        //     `'nzPlacement' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipContent' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
        // if (changes.nzTrigger) {
        //   warnDeprecation(
        //     `'nzTrigger' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipTrigger' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
    }
    ngOnInit() {
        if (!this._tooltip) {
            this.createDynamicTooltipComponent();
        }
        else {
            warnDeprecation(`'<nz-tooltip></nz-tooltip>', '<nz-popover></nz-popover>' and '<nz-popconfirm></nz-popconfirm>' is deprecated and will be removed in 9.0.0. Refer: https://ng.ant.design/components/tooltip/zh .`);
            this.tooltip = this._tooltip;
            this.tooltip.setOverlayOrigin(this);
        }
        this.tooltip.nzVisibleChange
            .pipe(distinctUntilChanged(), takeUntil(this.$destroy))
            .subscribe((visible) => {
            this.isTooltipComponentVisible = visible;
            this.nzVisibleChange.emit(visible);
        });
    }
    ngAfterViewInit() {
        this.registerTriggers();
    }
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
        if (this.tooltipRef) {
            this.tooltipRef.destroy();
        }
    }
    show() {
        this.tooltip.show();
    }
    hide() {
        this.tooltip.hide();
    }
    /**
     * Force the component to update its position.
     */
    updatePosition() {
        if (this.tooltip && this.isDynamicTooltip) {
            this.tooltip.updatePosition();
        }
    }
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    createDynamicTooltipComponent() {
        this.isDynamicTooltip = true;
        this.tooltipRef = this.hostView.createComponent(this.componentFactory);
        this.tooltip = this.tooltipRef.instance;
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.tooltipRef.location.nativeElement); // Remove the component's DOM because it should be in the overlay container.
        // If the tooltip component is dynamically created, we should set its origin before updating properties to
        // the component.
        this.tooltip.setOverlayOrigin(this);
        // Update all properties to the component.
        this.updateChangedProperties(this.needProxyProperties);
    }
    registerTriggers() {
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        const el = this.elementRef.nativeElement;
        const trigger = this.isDynamicTooltip ? this.trigger : this.tooltip.nzTrigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            let overlayElement;
            this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseenter', () => {
                this.delayEnterLeave(true, true, this.tooltip.nzMouseEnterDelay);
            }));
            this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseleave', () => {
                this.delayEnterLeave(true, false, this.tooltip.nzMouseLeaveDelay);
                if (this.tooltip.overlay.overlayRef && !overlayElement) {
                    overlayElement = this.tooltip.overlay.overlayRef.overlayElement;
                    this.triggerUnlisteners.push(this.renderer.listen(overlayElement, 'mouseenter', () => {
                        this.delayEnterLeave(false, true);
                    }));
                    this.triggerUnlisteners.push(this.renderer.listen(overlayElement, 'mouseleave', () => {
                        this.delayEnterLeave(false, false);
                    }));
                }
            }));
        }
        else if (trigger === 'focus') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'focus', () => this.show()));
            this.triggerUnlisteners.push(this.renderer.listen(el, 'blur', () => this.hide()));
        }
        else if (trigger === 'click') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'click', e => {
                e.preventDefault();
                this.show();
            }));
        } // Else do nothing because user wants to control the visibility programmatically.
    }
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     */
    updateChangedProperties(propertiesOrChanges) {
        const isArray = Array.isArray(propertiesOrChanges);
        const keys_ = isArray ? propertiesOrChanges : Object.keys(propertiesOrChanges);
        // tslint:disable-next-line no-any
        keys_.forEach((property) => {
            if (this.needProxyProperties.indexOf(property) !== -1) {
                // @ts-ignore
                this.updateComponentValue(property, this[property]);
            }
        });
        if (isArray) {
            this.updateComponentValue('nzTitle', this.title);
            this.updateComponentValue('nzContent', this.content);
            this.updateComponentValue('nzPlacement', this.placement);
            this.updateComponentValue('nzTrigger', this.trigger);
            this.updateComponentValue('bpsPopoverType', this.type);
        }
        else {
            const c = propertiesOrChanges;
            if (c.specificTitle || c.directiveNameTitle || c.nzTitle) {
                this.updateComponentValue('nzTitle', this.title);
            }
            if (c.specificContent || c.directiveNameContent || c.nzContent) {
                this.updateComponentValue('nzContent', this.content);
            }
            if (c.specificTrigger || c.nzTrigger) {
                this.updateComponentValue('nzTrigger', this.trigger);
            }
            if (c.specificPlacement || c.nzPlacement) {
                this.updateComponentValue('nzPlacement', this.placement);
            }
        }
        this.tooltip.updateByDirective();
    }
    // tslint:disable-next-line no-any
    updateComponentValue(key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.tooltip[key] = value;
        }
    }
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout(() => {
                this.delayTimer = undefined;
                isEnter ? this.show() : this.hide();
            }, delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    }
    removeTriggerListeners() {
        this.triggerUnlisteners.forEach(cancel => cancel());
        this.triggerUnlisteners.length = 0;
    }
    clearTogglingTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    }
}
__decorate([
    Input()
], NzTooltipBaseDirective.prototype, "nzTitle", void 0);
__decorate([
    Input()
], NzTooltipBaseDirective.prototype, "nzContent", void 0);
__decorate([
    Input()
], NzTooltipBaseDirective.prototype, "nzTrigger", void 0);
__decorate([
    Input()
], NzTooltipBaseDirective.prototype, "nzPlacement", void 0);
__decorate([
    Input()
], NzTooltipBaseDirective.prototype, "nzMouseEnterDelay", void 0);
__decorate([
    Input()
], NzTooltipBaseDirective.prototype, "nzMouseLeaveDelay", void 0);
__decorate([
    Input()
], NzTooltipBaseDirective.prototype, "nzOverlayClassName", void 0);
__decorate([
    Input()
], NzTooltipBaseDirective.prototype, "nzOverlayStyle", void 0);
__decorate([
    Input()
], NzTooltipBaseDirective.prototype, "nzVisible", void 0);
__decorate([
    Output()
], NzTooltipBaseDirective.prototype, "nzVisibleChange", void 0);

let BpsPopoverDirective = class BpsPopoverDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        super(elementRef, hostView, resolver, renderer, tooltip, noAnimation);
        this.noAnimation = noAnimation;
        this.popoverType = 'variation_1';
        this.componentFactory = this.resolver.resolveComponentFactory(BpsPopoverComponent);
    }
};
BpsPopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: BpsPopoverComponent, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
__decorate([
    Input('bpsPopoverTitle')
], BpsPopoverDirective.prototype, "specificTitle", void 0);
__decorate([
    Input('bpsPopoverContent')
], BpsPopoverDirective.prototype, "specificContent", void 0);
__decorate([
    Input('bps-popover')
], BpsPopoverDirective.prototype, "directiveNameTitle", void 0);
__decorate([
    Input('bpsPopoverTrigger')
], BpsPopoverDirective.prototype, "specificTrigger", void 0);
__decorate([
    Input('bpsPopoverPlacement')
], BpsPopoverDirective.prototype, "specificPlacement", void 0);
__decorate([
    Input('bpsPopoverType')
], BpsPopoverDirective.prototype, "popoverType", void 0);
BpsPopoverDirective = __decorate([
    Directive({
        selector: '[bps-popover]',
        exportAs: 'bpsPopover',
        host: {
            '[class.ant-popover-open]': 'isTooltipComponentVisible'
        }
    }),
    __param(4, Optional()),
    __param(5, Host()), __param(5, Optional())
], BpsPopoverDirective);

var BpsToolTipComponent_1;
let BpsToolTipComponent = BpsToolTipComponent_1 = class BpsToolTipComponent extends NzTooltipBaseComponentLegacy$1 {
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
                provide: NzTooltipBaseComponentLegacy$1,
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

let BpsTooltipDirective = class BpsTooltipDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
        super(elementRef, hostView, resolver, renderer, _tooltip, noAnimation);
        this.popoverType = 'variation_8a';
        this.componentFactory = this.resolver.resolveComponentFactory(BpsToolTipComponent);
    }
};
BpsTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzTooltipBaseComponentLegacy$1, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
__decorate([
    Input('bpsTooltipTitle')
], BpsTooltipDirective.prototype, "specificTitle", void 0);
__decorate([
    Input('bps-tooltip')
], BpsTooltipDirective.prototype, "directiveNameTitle", void 0);
__decorate([
    Input('bpsTooltipTrigger')
], BpsTooltipDirective.prototype, "specificTrigger", void 0);
__decorate([
    Input('bpsTooltipPlacement')
], BpsTooltipDirective.prototype, "specificPlacement", void 0);
__decorate([
    Input('bpsTooltipType')
], BpsTooltipDirective.prototype, "popoverType", void 0);
BpsTooltipDirective = __decorate([
    Directive({
        selector: '[bps-tooltip]',
        exportAs: 'bpsTooltip',
        host: {
            '[class.ant-tooltip-open]': 'isTooltipComponentVisible'
        }
    }),
    __param(4, Optional()),
    __param(5, Host()), __param(5, Optional())
], BpsTooltipDirective);

let BpsListComponent = class BpsListComponent {
    constructor(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.bpsBordered = false;
        this.bpsDisabled = false;
        this.bpsListType = 'variation1';
        this.bpsItemLayout = 'horizontal';
        this.bpsLoading = false;
        this.bpsSize = 'default';
        this.bpsSplit = true;
        // #endregion
        // #region styles
        this.prefixCls = 'ant-list';
        // #endregion
        this.itemLayoutNotifySource = new BehaviorSubject(this.bpsItemLayout);
    }
    _setClassMap() {
        const classMap = {
            ['bps-cmacs-custom-scrollbar']: true,
            [this.prefixCls]: true,
            [`bps-list-type-${this.bpsListType}`]: true,
            [`${this.prefixCls}-vertical`]: this.bpsItemLayout === 'vertical',
            [`${this.prefixCls}-lg`]: this.bpsSize === 'large',
            [`${this.prefixCls}-sm`]: this.bpsSize === 'small',
            [`${this.prefixCls}-split`]: this.bpsSplit,
            [`${this.prefixCls}-bordered`]: this.bpsBordered,
            [`${this.prefixCls}-loading`]: this.bpsLoading,
            [`${this.prefixCls}-grid`]: this.bpsGrid,
            [`${this.prefixCls}-something-after-last-item`]: !!(this.bpsLoadMore || this.bpsPagination || this.bpsFooter)
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    get itemLayoutNotify$() {
        return this.itemLayoutNotifySource.asObservable();
    }
    ngOnInit() {
        this._setClassMap();
    }
    ngOnChanges(changes) {
        this._setClassMap();
        if (changes.bpsItemLayout) {
            this.itemLayoutNotifySource.next(this.bpsItemLayout);
        }
    }
    ngOnDestroy() {
        this.itemLayoutNotifySource.unsubscribe();
    }
};
BpsListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
__decorate([
    Input()
], BpsListComponent.prototype, "bpsDataSource", void 0);
__decorate([
    Input(), InputBoolean()
], BpsListComponent.prototype, "bpsBordered", void 0);
__decorate([
    Input(), InputBoolean()
], BpsListComponent.prototype, "bpsDisabled", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsGrid", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsListType", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsHeader", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsFooter", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsItemLayout", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsRenderItem", void 0);
__decorate([
    Input(), InputBoolean()
], BpsListComponent.prototype, "bpsLoading", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsLoadMore", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsPagination", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsSize", void 0);
__decorate([
    Input(), InputBoolean()
], BpsListComponent.prototype, "bpsSplit", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsNoResult", void 0);
BpsListComponent = __decorate([
    Component({
        selector: 'bps-list, [bps-list]',
        exportAs: 'bpsList',
        template: "<ng-container *ngIf=\"!bpsDisabled\">\r\n  <ng-template #itemsTpl>\r\n    <div class=\"ant-list-items\" *ngIf=\"bpsDataSource.length > 0\">\r\n      <ng-container *ngFor=\"let item of bpsDataSource; let index = index\">\r\n        <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n      </ng-container>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf=\"bpsHeader\" class=\"ant-list-header\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  </div>\r\n  <nz-spin [nzSpinning]=\"bpsLoading\">\r\n    <ng-container *ngIf=\"bpsDataSource\">\r\n      <div *ngIf=\"bpsLoading && bpsDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n      <div *ngIf=\"bpsGrid; else itemsTpl\" nz-row [nzGutter]=\"bpsGrid.gutter\">\r\n        <div nz-col [nzSpan]=\"bpsGrid.span\" [nzXs]=\"bpsGrid.xs\" [nzSm]=\"bpsGrid.sm\" [nzMd]=\"bpsGrid.md\" [nzLg]=\"bpsGrid.lg\" [nzXl]=\"bpsGrid.xl\"\r\n             [nzXXl]=\"bpsGrid.xxl\" *ngFor=\"let item of bpsDataSource; let index = index\">\r\n          <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!bpsLoading && bpsDataSource.length === 0\" class=\"ant-list-empty-text\">\r\n        <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"bpsNoResult\"></nz-embed-empty>\r\n      </div>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </nz-spin>\r\n  <div *ngIf=\"bpsFooter\" class=\"ant-list-footer\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsFooter\">{{ bpsFooter }}</ng-container>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"bpsLoadMore\"></ng-template>\r\n  <div *ngIf=\"bpsPagination\" class=\"ant-list-pagination\">\r\n    <ng-template [ngTemplateOutlet]=\"bpsPagination\"></ng-template>\r\n  </div>\r\n</ng-container>\r\n",
        providers: [NzUpdateHostClassService],
        preserveWhitespaces: false,
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [`
      bps-list,
      bps-list nz-spin {
        display: block;
      }
    `, ".ant-list-bordered{width:217px!important;max-width:217px!important;height:80px!important;max-height:80px!important;overflow-y:scroll!important;overflow-x:hidden!important;padding:5px!important;border-radius:4px!important;border:1px solid #474747!important}.ant-list-bordered .ant-list-item{width:200px!important;height:20px!important;border-radius:10px!important;font-size:11px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;margin-bottom:2px!important;padding:0 8px 2px 9px!important}.ant-list-bordered .ant-list-item:hover{cursor:pointer}.ant-list-bordered.bps-list-type-variation1 .ant-list-item{background-color:#005068!important}.ant-list-bordered.bps-list-type-variation2 .ant-list-item{background-color:#00a2d1!important}.ant-list-bordered.bps-list-type-variation3 .ant-list-item{background-color:#005681!important}.ant-list-bordered.bps-list-type-variation4 .ant-list-item{background-color:#06809f!important}.ant-list-bordered.bps-list-type-variation5 .ant-list-item{background-color:#445c67!important}.ant-list-bordered.bps-list-type-variation6 .ant-list-item{background-color:#778d98!important}.ant-list-split .ant-list-item{border-bottom:unset}.bps-delete-list-icon{position:relative;float:right;top:50%;transform:translateY(-50%)}.bps-list-item-content{position:relative;float:left;top:50%;width:calc(100% - 8px);max-width:calc(100% - 8px);overflow:hidden;text-overflow:ellipsis;transform:translateY(-50%);white-space:nowrap;padding-right:5px;margin-top:-4px}.ant-list-bordered .ant-list-item.bps-delete-icon-hovered{background-color:#bc0000!important}"]
    })
], BpsListComponent);

let BpsListItemMetaComponent = class BpsListItemMetaComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    set bpsAvatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = '';
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
    }
};
BpsListItemMetaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], BpsListItemMetaComponent.prototype, "bpsAvatar", null);
__decorate([
    Input()
], BpsListItemMetaComponent.prototype, "bpsTitle", void 0);
__decorate([
    Input()
], BpsListItemMetaComponent.prototype, "bpsDescription", void 0);
BpsListItemMetaComponent = __decorate([
    Component({
        selector: 'bps-list-item-meta, [bps-list-item-meta]',
        exportAs: 'bpsListItemMeta',
        template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\n  </ng-container>\n</div>\n<div *ngIf=\"bpsTitle || bpsDescription\" class=\"ant-list-item-meta-content\">\n  <h4 *ngIf=\"bpsTitle\" class=\"ant-list-item-meta-title\">\n    <ng-container *nzStringTemplateOutlet=\"bpsTitle\">{{ bpsTitle }}</ng-container>\n  </h4>\n  <div *ngIf=\"bpsDescription\" class=\"ant-list-item-meta-description\">\n    <ng-container *nzStringTemplateOutlet=\"bpsDescription\">{{ bpsDescription }}</ng-container>\n  </div>\n</div>\n",
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
    })
], BpsListItemMetaComponent);

let BpsListItemComponent = class BpsListItemComponent {
    constructor(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this._onDeleteHover = false;
        this.bpsActions = [];
        this.bpsNoFlex = false;
        this.bpsDelete = false;
        this.ondelete = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    get isVerticalAndExtra() {
        return this.itemLayout === 'vertical' && !!this.bpsExtra;
    }
    onDelete() {
        this.ondelete.emit();
    }
    ngAfterViewInit() {
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(val => {
            this.itemLayout = val;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    }
};
BpsListItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: BpsListComponent },
    { type: ChangeDetectorRef }
];
__decorate([
    ContentChildren(BpsListItemMetaComponent)
], BpsListItemComponent.prototype, "metas", void 0);
__decorate([
    Input()
], BpsListItemComponent.prototype, "bpsActions", void 0);
__decorate([
    Input()
], BpsListItemComponent.prototype, "bpsContent", void 0);
__decorate([
    Input()
], BpsListItemComponent.prototype, "bpsExtra", void 0);
__decorate([
    Input(), InputBoolean(), HostBinding('class.ant-list-item-no-flex')
], BpsListItemComponent.prototype, "bpsNoFlex", void 0);
__decorate([
    Input(), InputBoolean()
], BpsListItemComponent.prototype, "bpsDelete", void 0);
__decorate([
    Output()
], BpsListItemComponent.prototype, "ondelete", void 0);
BpsListItemComponent = __decorate([
    Component({
        selector: 'bps-list-item, [bps-list-item]',
        exportAs: 'bpsListItem',
        template: "<ng-template #actionsTpl>\n  <ul *ngIf=\"bpsActions?.length > 0\" class=\"ant-list-item-action\">\n    <li *ngFor=\"let i of bpsActions; let last=last;\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #contentTpl>\n  <div class=\"bps-list-item-content\">\r\n    <ng-content></ng-content>\r\n  </div>\n  <ng-container *ngIf=\"bpsDelete\">\r\n    <div class=\"bps-delete-list-icon\"\r\n         (click)=\"onDelete()\"\r\n         (mouseenter)=\"_onDeleteHover = true;\"\r\n         (mouseleave)=\"_onDeleteHover = false;\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.609\" height=\"10.609\" viewBox=\"0 0 10.609 10.609\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_x_icon_deleteglass_white\" transform=\"rotate(45 799.93 -996.928)\">\r\n          <rect id=\"prefix__Rectangle_1881\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1881\" rx=\"1\" transform=\"translate(945.732 267.142)\" />\r\n          <rect id=\"prefix__Rectangle_1882\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1882\" rx=\"1\" transform=\"rotate(-90 607.436 -332.794)\" />\r\n        </g>\r\n      </svg>\r\n    </div>\r\n  </ng-container>\n  <ng-container *ngIf=\"bpsContent\">\n    <ng-container *nzStringTemplateOutlet=\"bpsContent\">{{ bpsContent }}</ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #simpleTpl>\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n</ng-template>\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\n  <div class=\"ant-list-item-main\">\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n  </div>\n  <div class=\"ant-list-item-extra\">\n    <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\n  </div>\n</ng-container>\n",
        preserveWhitespaces: false,
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            '[class.bps-delete-icon-hovered]': '_onDeleteHover'
        }
    })
], BpsListItemComponent);

var CeldType;
(function (CeldType) {
    CeldType[CeldType["Default"] = 0] = "Default";
    CeldType[CeldType["TemplateRef"] = 1] = "TemplateRef";
})(CeldType || (CeldType = {}));

let BpsTableComponent = 
// tslint:disable-next-line no-any
class BpsTableComponent {
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.locale = {}; // tslint:disable-line:no-any
        this.destroy$ = new Subject();
        this.checkboxCache = [];
        this._data = [];
        this.editId = null;
        this.frontPagination = true;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.showPagination = true;
        this.paginationPosition = 'bottom';
        this.bordered = false;
        this.widthConfig = [];
        this.loading = false;
        this.loadingDelay = 0;
        this.scroll = { x: null, y: null };
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.showQuickJumper = false;
        this.showSizeChanger = false;
        this.hideOnSinglePage = false;
        this.simple = false;
        this.virtualItemSize = 0;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.inlineEdit = false;
        this.pageIndexChange = new EventEmitter();
        this.currentPageDataChange = new EventEmitter();
        this.queryParamsChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.onclickRow = new EventEmitter();
        this.selectionChange = new EventEmitter();
        /* Thead API */
        this.singleSort = false;
        this.sortChange = new EventEmitter();
        this.configChange = new EventEmitter();
        this.onedit = new EventEmitter();
        this.clicks = 0;
    }
    /* Table API */
    // tslint:disable-next-line: no-input-rename
    set data(data) {
        this._data = data;
        this.updateCheckboxCache();
    }
    handleClick(e) {
        if (this.editId && this.inputElement && this.inputElement.nativeElement !== e.target) {
            this.emitOnEditEvent();
            this.editId = null;
        }
    }
    emitOnEditEvent() {
        let editedEl = this._data.filter(el => el[this.config.fieldId] === this.editId);
        if (editedEl.length) {
            this.onedit.emit(editedEl);
        }
    }
    endEditMode($event, index, data = null) {
        if ($event.key === ('Enter' || 'enter')) {
            this.emitOnEditEvent();
            this.editId = null;
        }
    }
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    emitBpsEvent($event, type) {
        switch (type) {
            case 'pageIndex':
                this.pageIndexChange.emit($event);
                break;
            case 'currentPageData':
                this.currentPageDataChange.emit($event);
                break;
            case 'queryParams':
                this.queryParamsChange.emit($event);
                break;
            case 'pageSize':
                this.pageSizeChange.emit($event);
                break;
            case 'sort':
                this.sortChange.emit($event);
                break;
        }
    }
    getFields() {
        return this.config ? this.config.fields.filter(item => item.hidden === undefined || !item.hidden) : [];
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    ngOnChanges(changes) {
        if (changes.data && this.config) {
            this.updateCheckboxCache();
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    isCeldTypeTemplateRef(field) {
        return field.celdType === CeldType.TemplateRef;
    }
    isCeldTypeDefault(field) {
        return field.celdType === CeldType.Default;
    }
    getTDClassMap(field, data, fi = 9999) {
        return Object.assign(Object.assign({}, field.ngClass), { ['bps-td-disabled']: data.disabled, ['bps-td-no-padding']: data[this.config.fieldId] === this.editId, ['bps-fst-column']: !fi });
    }
    isRowSelected(data) {
        if (this.config) {
            const dataSelected = this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]);
            return dataSelected.indexOf(data[this.config.fieldId]) !== -1;
        }
        return false;
    }
    updateCheckboxCache() {
        this.checkboxCache.length = 0;
        this._data.forEach(item => {
            this.checkboxCache.push({
                selected: item.selected ? item.selected : false,
                data: Object.assign({}, item)
            });
        });
    }
    clickRow(event, data) {
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.selectRow(data);
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            this.clicks = 0;
        }, 300);
    }
    startEdit(data, event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.inlineEdit && !data.disabled) {
            this.editId = data[this.config.fieldId];
        }
    }
    selectRow(data) {
        if (!data.disabled) {
            this.onclickRow.emit(data);
            this.checkboxCache.forEach(item => {
                if (item.data[this.config.fieldId] === data[this.config.fieldId]) {
                    item.selected = !item.selected;
                    this.selectionChange.emit(item);
                }
                else {
                    item.selected = false;
                }
            });
        }
    }
};
BpsTableComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
__decorate([
    Input()
], BpsTableComponent.prototype, "data", null);
__decorate([
    Input(), InputBoolean()
], BpsTableComponent.prototype, "frontPagination", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "total", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "pageIndex", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "pageSize", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableComponent.prototype, "showPagination", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "paginationPosition", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableComponent.prototype, "bordered", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "widthConfig", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableComponent.prototype, "loading", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "loadingDelay", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "loadingIndicator", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "scroll", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "title", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "footer", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "noResult", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "pageSizeOptions", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableComponent.prototype, "showQuickJumper", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableComponent.prototype, "showSizeChanger", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "showTotal", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableComponent.prototype, "hideOnSinglePage", void 0);
__decorate([
    Input(), ViewChild('renderItemTemplate')
], BpsTableComponent.prototype, "itemRender", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableComponent.prototype, "simple", void 0);
__decorate([
    Input(), InputNumber()
], BpsTableComponent.prototype, "virtualItemSize", void 0);
__decorate([
    Input(), InputNumber()
], BpsTableComponent.prototype, "virtualMaxBufferPx", void 0);
__decorate([
    Input(), InputNumber()
], BpsTableComponent.prototype, "virtualMinBufferPx", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "virtualForTrackBy", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableComponent.prototype, "inlineEdit", void 0);
__decorate([
    Output()
], BpsTableComponent.prototype, "pageIndexChange", void 0);
__decorate([
    Output()
], BpsTableComponent.prototype, "currentPageDataChange", void 0);
__decorate([
    Output()
], BpsTableComponent.prototype, "queryParamsChange", void 0);
__decorate([
    Output()
], BpsTableComponent.prototype, "pageSizeChange", void 0);
__decorate([
    Output()
], BpsTableComponent.prototype, "onclickRow", void 0);
__decorate([
    Output()
], BpsTableComponent.prototype, "selectionChange", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "singleSort", void 0);
__decorate([
    Output()
], BpsTableComponent.prototype, "sortChange", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "config", void 0);
__decorate([
    Output()
], BpsTableComponent.prototype, "configChange", void 0);
__decorate([
    Input()
], BpsTableComponent.prototype, "gridID", void 0);
__decorate([
    Output()
], BpsTableComponent.prototype, "onedit", void 0);
__decorate([
    ViewChild(BpsInputDirective, { static: false, read: ElementRef })
], BpsTableComponent.prototype, "inputElement", void 0);
__decorate([
    HostListener('window:mouseup', ['$event'])
], BpsTableComponent.prototype, "handleClick", null);
BpsTableComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'bps-table',
        exportAs: 'bpsTable',
        template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent\r\n            class=\"bps-table\"\r\n            [nzData]=\"_data\"\r\n            [nzFrontPagination]=\"frontPagination\"\r\n            [nzTotal]=\"total\"\r\n            [nzPageIndex]=\"pageIndex\"\r\n            [nzPageSize]=\"pageSize\"\r\n            [nzShowPagination]=\"showPagination\"\r\n            [nzPaginationPosition]=\"paginationPosition\"\r\n            [nzBordered]=\"bordered\"\r\n            [nzWidthConfig]=\"widthConfig\"\r\n            [nzLoading]=\"loading\"\r\n            [nzLoadingIndicator]=\"loadingIndicator\"\r\n            [nzLoadingDelay]=\"loadingDelay\"\r\n            [nzScroll]=\"scroll\"\r\n            [nzTitle]=\"title\"\r\n            [nzFooter]=\"footer\"\r\n            [nzNoResult]=\"noResult\"\r\n            [nzPageSizeOptions]=\"pageSizeOptions\"\r\n            [nzShowQuickJumper]=\"showQuickJumper\"\r\n            [nzShowSizeChanger]=\"showSizeChanger\"\r\n            [nzShowTotal]=\"showTotal\"\r\n            [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n            [nzItemRender]=\"itemRender\"\r\n            [nzSimple]=\"simple\"\r\n            [nzVirtualItemSize]=\"virtualItemSize\"\r\n            [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n            [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n            [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n            (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n            (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n            (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n            (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n    <thead (nzSortChange)=\"emitBpsEvent($event, 'sort')\"\r\n           [nzSingleSort]=\"singleSort\">\r\n      <tr>\r\n        <th *ngFor=\"let field of getFields()\"\r\n            [ngClass]=\"field.ngClass\"\r\n            [nzWidth]=\"field.width\">\r\n          <ng-container *ngIf=\"field.template; else cellValue\">\r\n            <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n          </ng-container>\r\n          <ng-template #cellValue>{{field.display}}</ng-template>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let data of gridComponent.data; index as i\"\r\n          [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n          (click)=\"clickRow($event, data)\"\r\n          [class.bps-table-pair-row]=\"!(i % 2)\">\r\n       \r\n        <td *ngFor=\"let field of getFields(); index as fi\"\r\n            [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n            <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngIf=\"data[field.property]\">\r\n                <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field)\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                <div (dblclick)=\"startEdit(data, $event)\">\r\n                  {{ data[field.property] }}\r\n                </div>\r\n              </ng-container>\r\n              <ng-template #editTpl>\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-template>\r\n              \r\n            </ng-container>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n",
        styles: ["::ng-deep .bps-table .ant-table-tbody>tr>td,::ng-deep .bps-table .ant-table-thead>tr>th{padding:unset;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}::ng-deep .bps-table .ant-table-tbody>tr>td{padding:5px;border-bottom:none!important;border-right:1px solid #363636!important}::ng-deep .bps-table .ant-table-tbody>tr>td.bps-td-disabled{color:#666!important}::ng-deep .bps-table .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table .ant-table-tbody>tr>td:last-child{border-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th{padding:9px;border-bottom:none!important;border-top:1px solid #363636!important;border-radius:0!important}::ng-deep .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td{background:#313b3f!important}::ng-deep .bps-table .ant-table-tbody>tr.bps-table-pair-row>td{background-color:#313131!important}::ng-deep .bps-table .ant-table-body{background-color:#363636!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}::ng-deep .bps-table .ant-table-header.ant-table-hide-scrollbar{margin-bottom:-14px!important;background-color:#262626!important}::ng-deep .bps-table .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#445c67!important}.bps-fst-column{padding-left:20px!important}.bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important}.bps-td-no-padding{padding:0!important}"]
    })
    // tslint:disable-next-line no-any
], BpsTableComponent);

const ɵ0 = en_US;
let BpsComponentsLibModule = class BpsComponentsLibModule {
};
BpsComponentsLibModule = __decorate([
    NgModule({
        declarations: [
            BpsTableComponent,
            BpsListComponent,
            BpsListItemComponent,
            BpsListItemMetaComponent,
            BpsTooltipDirective,
            BpsToolTipComponent,
            BpsPopoverDirective,
            BpsPopoverComponent,
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
            BpsFormTextComponent,
            BpsButtonComponent,
            BpsButtonGroupComponent,
            BpsSwitchComponent,
            BpsCheckboxGroupComponent,
            BpsCheckboxWrapperComponent,
            BpsCheckboxComponent,
            BpsRadioComponent,
            BpsRadioGroupComponent,
            BpsRadioButtonComponent,
            BpsCollapseComponent,
            BpsCollapsePanelComponent
        ],
        imports: [
            NgZorroAntdModule,
            CommonModule,
            NzAddOnModule,
            NzIconModule,
            OverlayModule,
            NzNoAnimationModule,
            NzToolTipModule,
            NzOverlayModule,
            NzEmptyModule,
            FormsModule,
            ObserversModule,
            NzWaveModule,
            NzSpinModule,
            NzGridModule,
            NzAvatarModule,
            NzTableModule
        ],
        exports: [
            BpsTableComponent,
            BpsListComponent,
            BpsListItemComponent,
            BpsListItemMetaComponent,
            BpsPopoverDirective,
            BpsPopoverComponent,
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
            BpsFormTextComponent,
            BpsButtonComponent,
            BpsButtonGroupComponent,
            BpsSwitchComponent,
            BpsCheckboxGroupComponent,
            BpsCheckboxWrapperComponent,
            BpsCheckboxComponent,
            BpsRadioComponent,
            BpsRadioGroupComponent,
            BpsRadioButtonComponent,
            BpsCollapseComponent,
            BpsCollapsePanelComponent,
            BpsTooltipDirective,
            BpsToolTipComponent,
        ],
        providers: [
            { provide: NZ_I18N, useValue: ɵ0 }
        ],
        entryComponents: [
            BpsPopoverComponent,
            BpsToolTipComponent
        ]
    })
], BpsComponentsLibModule);

/*
 * Public API Surface of bps-components-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BpsAutosizeDirective, BpsButtonComponent, BpsButtonGroupComponent, BpsCheckboxComponent, BpsCheckboxGroupComponent, BpsCheckboxWrapperComponent, BpsCollapseComponent, BpsCollapsePanelComponent, BpsComponentsLibComponent, BpsComponentsLibModule, BpsComponentsLibService, BpsFilterGroupOptionPipe, BpsFilterOptionPipe, BpsFormControlComponent, BpsFormDirective, BpsFormExplainComponent, BpsFormExtraComponent, BpsFormItemComponent, BpsFormLabelComponent, BpsFormSplitComponent, BpsFormTextComponent, BpsInputDirective, BpsInputGroupComponent, BpsListComponent, BpsListItemComponent, BpsListItemMetaComponent, BpsOptionComponent, BpsOptionContainerComponent, BpsOptionGroupComponent, BpsOptionLiComponent, BpsPopoverComponent, BpsPopoverDirective, BpsRadioButtonComponent, BpsRadioComponent, BpsRadioGroupComponent, BpsSelectComponent, BpsSelectService, BpsSelectTopControlComponent, BpsSelectUnselectableDirective, BpsSwitchComponent, BpsTableComponent, BpsToolTipComponent, BpsTooltipDirective, defaultFilterOption, isAutoSizeType, ɵ0, NzTooltipBaseDirective as ɵa };
//# sourceMappingURL=bps-components-lib.js.map

import { __decorate, __param } from "tslib";
import { ContentObserver } from '@angular/cdk/observers';
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Inject, Input, NgZone, OnChanges, OnDestroy, OnInit, Optional, QueryList, Renderer2, SimpleChanges, ViewChild, ViewEncapsulation, ViewRef, HostListener, Output, EventEmitter } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { findFirstNotEmptyNode, findLastNotEmptyNode, isEmpty, InputBoolean, NzConfigService, NzSizeLDSType, NzSizeMap, NzUpdateHostClassService, NzWaveConfig, NzWaveDirective, NZ_WAVE_GLOBAL_CONFIG, WithConfig } from 'ng-zorro-antd/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { BpsInputDirective } from '../bps-input/bps-input.directive';
var NZ_CONFIG_COMPONENT_NAME = 'button';
var BpsButtonComponent = /** @class */ (function () {
    function BpsButtonComponent(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
        var _this = this;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.contentObserver = contentObserver;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this.nzConfigService = nzConfigService;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.isSelected = false;
        this.isSelectedChange = new EventEmitter();
        this.showEditionMode = false;
        /*@HostBinding('attr.nz-wave') nzWave = new NzWaveDirective(
          this.ngZone,
          this.elementRef,
          this.waveConfig,
          this.animationType
        );*/
        this.bpsBlock = false;
        this.bpsGhost = false;
        this.bpsSearch = false;
        this.bpsComputed = false;
        this.bpsLoading = false;
        this.bpsEditionEnabled = true;
        this.bpsType = 'default';
        this.bpsValue = '';
        this.bpsComputedTooltipType = 'variation_11';
        this.bpsComputedTooltipPlacement = 'top';
        this.bpsComputedTooltipTitle = null;
        this.bpsValueChange = new EventEmitter();
        this.bpsShape = null;
        this.el = this.elementRef.nativeElement;
        this.isInDropdown = false;
        this.iconOnly = false;
        this.destroy$ = new Subject();
        this.clicks = 0;
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () {
            _this.setClassMap();
            _this.cdr.markForCheck();
        });
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    BpsButtonComponent.prototype.setClassMap = function () {
        var _a;
        var prefixCls = 'ant-btn';
        var sizeMap = { large: 'lg', small: 'sm' };
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a[prefixCls + "-" + this.bpsType] = this.bpsType,
            _a[prefixCls + "-" + this.bpsShape] = this.bpsShape,
            _a[prefixCls + "-" + sizeMap[this.bpsSize]] = sizeMap[this.bpsSize],
            _a[prefixCls + "-loading"] = this.bpsLoading,
            _a[prefixCls + "-icon-only"] = this.iconOnly && !this.bpsSearch && !this.isInDropdown,
            _a[prefixCls + "-background-ghost"] = this.bpsGhost,
            _a[prefixCls + "-block"] = this.bpsBlock,
            _a["ant-input-search-button"] = this.bpsSearch,
            _a));
    };
    BpsButtonComponent.prototype.updateIconDisplay = function (value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    };
    BpsButtonComponent.prototype.checkContent = function () {
        var hasIcon = this.listOfIconElement && this.listOfIconElement.length;
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
    };
    BpsButtonComponent.prototype.moveIcon = function () {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            var firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            var lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = firstChildElement;
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    };
    BpsButtonComponent.prototype.preventDefault = function ($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    };
    BpsButtonComponent.prototype.handleClick = function (e) {
        if (this.bpsType !== 'editable') {
            return;
        }
        if (this.showEditionMode && this.inputElement && this.inputElement.nativeElement !== e.target) {
            this.showEditionMode = false;
            this.bpsValueChange.emit(this.bpsValue);
        }
    };
    BpsButtonComponent.prototype.endEditMode = function ($event) {
        this.preventDefault($event);
        if ($event.key === ('Enter' || 'enter')) {
            this.showEditionMode = false;
            this.bpsValueChange.emit(this.bpsValue);
        }
    };
    BpsButtonComponent.prototype.onClick = function (event) {
        var _this = this;
        if (this.bpsType !== 'editable') {
            return;
        }
        this.clicks++;
        setTimeout(function () {
            if (_this.clicks === 1) {
                _this.isSelected = !_this.isSelected;
                _this.isSelectedChange.emit(_this.isSelected);
            }
            _this.clicks = 0;
        }, 300);
    };
    BpsButtonComponent.prototype.startEditionMode = function ($event) {
        $event.stopImmediatePropagation();
        $event.stopPropagation();
        if (!this.bpsEditionEnabled)
            return;
        this.showEditionMode = true;
        this.cdr.detectChanges();
        this.inputElement.nativeElement.focus();
        this.inputElement.nativeElement.select();
    };
    BpsButtonComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this.contentElement) {
            return;
        }
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(function () {
            // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
            Promise.resolve().then(function () { return _this.checkContent(); });
        });
    };
    BpsButtonComponent.prototype.ngOnInit = function () {
        this.setClassMap();
        //this.nzWave.ngOnInit();
    };
    BpsButtonComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        //this.nzWave.ngOnDestroy();
    };
    BpsButtonComponent.prototype.ngOnChanges = function (changes) {
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
        /*if (changes.bpsType && changes.bpsType.currentValue === 'link') {
          this.nzWave.disable();
        } else {
          this.nzWave.enable();
        }*/
    };
    BpsButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ContentObserver },
        { type: NzUpdateHostClassService },
        { type: NgZone },
        { type: NzConfigService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    __decorate([
        Input(), InputBoolean()
    ], BpsButtonComponent.prototype, "isSelected", void 0);
    __decorate([
        Output()
    ], BpsButtonComponent.prototype, "isSelectedChange", void 0);
    __decorate([
        ViewChild('contentElement', { static: true })
    ], BpsButtonComponent.prototype, "contentElement", void 0);
    __decorate([
        ContentChildren(NzIconDirective, { read: ElementRef })
    ], BpsButtonComponent.prototype, "listOfIconElement", void 0);
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
    ], BpsButtonComponent.prototype, "bpsComputed", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsButtonComponent.prototype, "bpsLoading", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsButtonComponent.prototype, "bpsEditionEnabled", void 0);
    __decorate([
        Input()
    ], BpsButtonComponent.prototype, "bpsType", void 0);
    __decorate([
        Input()
    ], BpsButtonComponent.prototype, "bpsValue", void 0);
    __decorate([
        Input()
    ], BpsButtonComponent.prototype, "bpsComputedTooltipType", void 0);
    __decorate([
        Input()
    ], BpsButtonComponent.prototype, "bpsComputedTooltipPlacement", void 0);
    __decorate([
        Input()
    ], BpsButtonComponent.prototype, "bpsComputedTooltipTitle", void 0);
    __decorate([
        Output()
    ], BpsButtonComponent.prototype, "bpsValueChange", void 0);
    __decorate([
        Input()
    ], BpsButtonComponent.prototype, "bpsShape", void 0);
    __decorate([
        Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default')
    ], BpsButtonComponent.prototype, "bpsSize", void 0);
    __decorate([
        ViewChild(BpsInputDirective, { static: true, read: ElementRef })
    ], BpsButtonComponent.prototype, "inputElement", void 0);
    __decorate([
        HostListener('window:mouseup', ['$event'])
    ], BpsButtonComponent.prototype, "handleClick", null);
    __decorate([
        HostListener('click', ['$event'])
    ], BpsButtonComponent.prototype, "onClick", null);
    BpsButtonComponent = __decorate([
        Component({
            selector: '[bps-button]',
            exportAs: 'bpsButton',
            providers: [NzUpdateHostClassService],
            preserveWhitespaces: false,
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            template: "<i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading\"></i>\n<span *ngIf=\"bpsType !== 'editable'\" class=\"bps-custom-content\" #contentElement><ng-content></ng-content></span>\n\n<span *ngIf=\"bpsType === 'editable' && !showEditionMode\" class=\"bps-custom-content\" #contentElement>{{bpsValue}}</span>\n<input #inputElement bps-input\n       autofocus\n       (focus)=\"$event.target.select()\"\n       [class.bps-invisible]=\"!showEditionMode\"\n       (click)=\"preventDefault($event)\"\n       (dblclick)=\"preventDefault($event)\"\n       (keyup)=\"endEditMode($event)\"\n       class=\"bps-button-editable-input\"\n       [(ngModel)]=\"bpsValue\"\n/>\n\n<div class=\"bps-editable-btn-edit-icon-wrapper\"\r\n      [class.bps-editable-btn-edit-icon-wrapper-disabled]=\"!bpsEditionEnabled\"\r\n      (click)=\"startEditionMode($event)\"\r\n      *ngIf=\"bpsType === 'editable' && !showEditionMode\">\r\n  <div class=\"bps-editable-btn-edit-icon\"></div>\r\n</div>\n\n<div  class=\"bps-computed-icon\"\n      bps-tooltip\r\n      [bpsTooltipType]=\"bpsComputedTooltipType\"\r\n      [bpsTooltipTitle]=\"bpsComputedTooltipTitle ? bpsComputedTooltipTitle : bpsComputed ? 'Computed' : 'Not Computed'\"\r\n      [bpsTooltipPlacement]=\"bpsComputedTooltipPlacement\"\n      *ngIf=\"bpsType === 'editable'\">\n  <img *ngIf=\"bpsComputed\"     \n       src=\"/assets/bps-icons/sps_green_dot_icon_computed.svg\" />\n  <img *ngIf=\"!bpsComputed\"\n       src=\"/assets/bps-icons/sps_grey_dot_icon_notcomputed.svg\" />\n</div>\n",
            host: {
                '[class.bps-button-editable-selected]': 'isSelected',
                '[class.bps-button-editable-onedition]': 'showEditionMode'
            },
            styles: [".ant-btn-variation-1{height:40px!important;border-radius:8px!important;border:2px solid #00a2d1!important;background-color:transparent!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#00a2d1!important}.bps-editable-btn-edit-icon-wrapper-disabled{cursor:initial!important}.ant-btn-variation-1[disabled],.ant-btn-variation-2[disabled],.ant-btn-variation-2[disabled]:hover{border-color:#474747!important;color:#474747!important}.ant-btn-variation-1.active,.ant-btn-variation-1:focus{border-color:#445c67!important;color:#445c67!important}.ant-btn-variation-1:active{color:#00a2d1!important;border:2px solid #00a2d1!important}.ant-btn-variation-2{height:40px!important;border-radius:8px!important;border:2px solid #474747!important;background-color:#363636!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important}.ant-btn-variation-2[disabled]{background-color:transparent!important}.ant-btn-variation-2:hover{border-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-2.active,.ant-btn-variation-2:focus{border-color:#445c67!important;color:#fff!important}.ant-btn-variation-2:active{color:#fff!important;border-color:#474747!important}.ant-btn-variation-3,.ant-btn-variation-4,.ant-btn-variation-5{height:30px!important;border-radius:8px!important;background-color:#00a2d1!important;color:#fff!important;font-size:10px!important;font-weight:700!important;border:none!important;font-stretch:normal!important;font-style:normal!important;line-height:1.2;letter-spacing:.3px!important;text-align:center!important}.ant-btn-variation-4{height:28px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important}.ant-btn-variation-5{height:22px!important;border-radius:11px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important}.ant-btn-editable,.ant-btn-variation-6,.ant-btn-variation-7,.ant-btn-variation-8{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:11px!important;background-color:#363636!important;border:none!important}.ant-btn-editable{width:100%;text-align:left!important;font-size:12px!important;height:20px!important;border:1px solid #363636!important}.ant-btn-editable .bps-custom-content{position:relative;top:1px;max-width:calc(100% - 25px);white-space:nowrap;overflow:hidden;display:inline-block!important;text-overflow:ellipsis;margin:unset!important}.ant-btn-editable.bps-button-editable-selected .bps-custom-content{max-width:calc(100% - 35px)}.bps-computed-icon{position:relative;float:right;margin-right:5px!important;top:-1px}.ant-btn-variation-9,.ant-btn-variation-9:hover{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:8px!important;background-color:#253d47!important;border:none!important}.ant-btn-editable[disabled],.ant-btn-editable[disabled]:hover,.ant-btn-variation-3[disabled],.ant-btn-variation-3[disabled]:hover,.ant-btn-variation-4[disabled],.ant-btn-variation-4[disabled]:hover,.ant-btn-variation-5[disabled],.ant-btn-variation-5[disabled]:hover,.ant-btn-variation-6[disabled],.ant-btn-variation-6[disabled]:hover,.ant-btn-variation-7[disabled],.ant-btn-variation-7[disabled]:hover,.ant-btn-variation-8[disabled],.ant-btn-variation-8[disabled]:hover,.ant-btn-variation-9[disabled],.ant-btn-variation-9[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-editable[disabled],.ant-btn-editable[disabled]:hover{border:1px solid #363636!important}.ant-btn-variation-3:hover,.ant-btn-variation-4:hover,.ant-btn-variation-5:hover,.ant-btn-variation-7:hover,.ant-btn-variation-8:hover{background-color:#445c67!important;color:#fff!important}.ant-btn-editable:not(.bps-button-editable-onedition):hover{background-color:#474747!important;border:1px solid #262626}.ant-btn-editable[disabled]:hover{background-color:#363636!important;border:1px solid #363636!important}.ant-btn-variation-6:hover{background-color:#bc0000!important;color:#fff!important}.ant-btn-variation-3.active,.ant-btn-variation-3:focus,.ant-btn-variation-4.active,.ant-btn-variation-4:focus,.ant-btn-variation-5.active,.ant-btn-variation-5:focus{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-9.active,.ant-btn-variation-9:focus{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-7.active,.ant-btn-variation-7:focus{background-color:#363636!important}.ant-btn-variation-7:active{background-color:#00a2d1!important}.ant-btn-variation-6.active,.ant-btn-variation-6:focus{background-color:maroon!important;color:#fff!important}.ant-btn-variation-8.active,.ant-btn-variation-8:focus{background-color:#253d47!important;color:#999!important}.ant-btn-variation-3:active,.ant-btn-variation-4:active,.ant-btn-variation-5:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-6:active,.ant-btn-variation-8:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-9:active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-10,.ant-btn-variation-10:hover,.ant-btn-variation-11,.ant-btn-variation-11:hover,.ant-btn-variation-13,.ant-btn-variation-13:hover{width:30px!important;height:30px!important;border-radius:8px!important;background-color:#363636!important;border:none!important;padding:0!important;color:#fff!important}.ant-btn-variation-13,.ant-btn-variation-13:hover{border-radius:4px!important;width:22px!important;height:22px!important}.ant-btn-variation-13:hover{background-color:#445c67!important}.ant-btn-variation-11,.ant-btn-variation-11:hover{background-color:#253d47!important}.ant-btn-variation-10[disabled],.ant-btn-variation-10[disabled]:hover,.ant-btn-variation-11[disabled],.ant-btn-variation-11[disabled]:hover,.ant-btn-variation-13[disabled],.ant-btn-variation-13[disabled]:hover,.ant-btn-variation-14[disabled],.ant-btn-variation-14[disabled]:hover,.ant-btn-variation-15[disabled],.ant-btn-variation-15[disabled]:hover,.ant-btn-variation-16[disabled],.ant-btn-variation-16[disabled]:hover,.ant-btn-variation-20[disabled],.ant-btn-variation-20[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-10[disabled] svg,.ant-btn-variation-10[disabled]:hover svg,.ant-btn-variation-11[disabled] svg,.ant-btn-variation-11[disabled]:hover svg,.ant-btn-variation-13[disabled] svg,.ant-btn-variation-13[disabled]:hover svg,.ant-btn-variation-14[disabled] svg,.ant-btn-variation-14[disabled]:hover svg,.ant-btn-variation-15[disabled] svg,.ant-btn-variation-15[disabled]:hover svg,.ant-btn-variation-16[disabled] svg,.ant-btn-variation-16[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-10.active,.ant-btn-variation-10:focus,.ant-btn-variation-11:active,.ant-btn-variation-13.active,.ant-btn-variation-13:focus{background-color:#00a2d1!important;color:#fff!important}.bps-custom-content{display:table!important;margin:0 auto!important}.bps-custom-content svg{display:table-cell!important;vertical-align:middle!important}.ant-btn-variation-12,.ant-btn-variation-12:hover{height:40px;width:40px;background-color:#253d47!important;border-radius:12px!important;border:2px solid #00a2d1!important;background-clip:content-box!important;padding:5px!important;color:#fff!important}.ant-btn-variation-12:hover{background-color:#445c67!important}.ant-btn-variation-12[disabled],.ant-btn-variation-12[disabled]:hover{background-color:#363636!important;border-color:#666!important;color:#666!important}.ant-btn-variation-12[disabled] svg,.ant-btn-variation-12[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-12.active,.ant-btn-variation-12:focus{background-color:#00a2d1!important}.ant-btn-variation-12:active{background-color:#253d47!important}.ant-btn-variation-14,.ant-btn-variation-15,.ant-btn-variation-16{width:30px!important;height:30px!important;background-color:#00a2d1!important;border-radius:100px!important;border:none!important;color:#fff!important;padding:0!important}.ant-btn-variation-14:hover{color:#fff!important;background-color:#445c67!important;border:none!important}.ant-btn-variation-15{background-color:#363636!important}.ant-btn-variation-15:hover{color:#fff!important;background-color:#bc0000!important;border:none!important}.ant-btn-variation-16{background-color:#363636!important}.ant-btn-variation-16:hover{background-color:#474747!important}.ant-btn-variation-14.active,.ant-btn-variation-14:focus{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-16.active,.ant-btn-variation-16:focus{background-color:#363636!important;color:#fff!important}.ant-btn-variation-15.active,.ant-btn-variation-15:focus{background-color:maroon!important;color:#fff!important}.ant-btn-variation-14:active{background-color:#00a2d1!important}.ant-btn-variation-10:active,.ant-btn-variation-13:active,.ant-btn-variation-15:active,.ant-btn-variation-16:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-17,.ant-btn-variation-17:hover{height:32px!important;width:32px!important;font-size:17px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.71!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border:2px solid #fff!important;background-color:#888!important;padding:0!important;border-radius:100px!important}.ant-btn-variation-17:hover{background-color:#666!important;color:#fff!important}.ant-btn-variation-17.active,.ant-btn-variation-17:focus{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-17:active{background-color:#888!important}.ant-btn-variation-17[disabled],.ant-btn-variation-17[disabled]:hover{border:2px solid #666!important;background-color:#888!important;color:#666!important}.ant-btn-variation-18,.ant-btn-variation-18:hover,.ant-btn-variation-19,.ant-btn-variation-19:hover{background-color:#262626!important;height:30px!important;width:30px!important;padding:0!important;border:none!important;border-radius:100px!important}.ant-btn-variation-19,.ant-btn-variation-19:hover{height:20px!important;width:20px!important;border-radius:4px!important}.ant-btn-variation-18:hover{background-color:#363636!important;color:#fff!important}.ant-btn-variation-18.active,.ant-btn-variation-18:focus{background-color:#474747!important;color:#fff!important}.ant-btn-variation-18:active,.ant-btn-variation-19:active{background-color:#262626!important}.ant-btn-variation-18[disabled],.ant-btn-variation-18[disabled]:hover,.ant-btn-variation-19[disabled],.ant-btn-variation-19[disabled]:hover{border:none!important;background-color:#262626!important;color:#666!important}.ant-btn-variation-18[disabled] svg,.ant-btn-variation-18[disabled]:hover svg,.ant-btn-variation-19[disabled] svg,.ant-btn-variation-19[disabled]:hover svg,.ant-btn-variation-20[disabled] svg,.ant-btn-variation-20[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-20,.ant-btn-variation-20:hover{width:25px!important;height:30px!important;background-color:#363636!important;border:none!important;border-radius:100px 0 0 100px!important;color:#fff!important}.ant-btn-variation-20:hover{background-color:#474747!important;color:#fff!important}.ant-btn-variation-20.active,.ant-btn-variation-20:focus{background-color:#363636!important;color:#fff!important}.ant-btn-variation-20:active{background-color:#363636!important;border:none!important}.bps-button-editable-selected,.bps-button-editable-selected:hover{border:1px solid #00a2d1!important}.bps-button-editable-input{max-width:calc(100% - 25px)!important;display:inline-block;background-color:transparent!important;position:relative;top:-2px;border:none!important;padding:0!important;font-size:12px!important;border-radius:unset!important;overflow:hidden;line-height:1.36!important;margin:unset}.bps-invisible{display:none}.bps-editable-btn-edit-icon-wrapper{position:absolute!important;top:1px;right:33px;transform:scale(.85)}.bps-editable-btn-edit-icon::after{content:''}.bps-button-editable-selected .bps-editable-btn-edit-icon::after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}.bps-button-editable-selected .bps-editable-btn-edit-icon-wrapper:not(.bps-editable-btn-edit-icon-wrapper-disabled):hover .bps-editable-btn-edit-icon::after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)}.ant-btn.disabled,.ant-btn[disabled]{cursor:initial!important}"]
        }),
        __param(7, Optional()), __param(7, Inject(NZ_WAVE_GLOBAL_CONFIG)),
        __param(8, Optional()), __param(8, Inject(ANIMATION_MODULE_TYPE))
    ], BpsButtonComponent);
    return BpsButtonComponent;
}());
export { BpsButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtYnV0dG9uL2Jwcy1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFDVCxhQUFhLEVBQ2IsU0FBUyxFQUNULGlCQUFpQixFQUNqQixPQUFPLEVBQ1AsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFN0UsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsT0FBTyxFQUNQLFlBQVksRUFDWixlQUFlLEVBQ2YsYUFBYSxFQUNiLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsWUFBWSxFQUNaLGVBQWUsRUFDZixxQkFBcUIsRUFDckIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU9yRSxJQUFNLHdCQUF3QixH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Q0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ3pDLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO09BeEpqQyxrQkFBa0IsQ0FvTjlCO0lBQUQseUJBQUM7Q0FBQSxBQXBORCxJQW9OQztTQXBOWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgVmlld1JlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBTklNQVRJT05fTU9EVUxFX1RZUEUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBmaW5kRmlyc3ROb3RFbXB0eU5vZGUsXHJcbiAgZmluZExhc3ROb3RFbXB0eU5vZGUsXHJcbiAgaXNFbXB0eSxcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56U2l6ZUxEU1R5cGUsXHJcbiAgTnpTaXplTWFwLFxyXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICBOeldhdmVDb25maWcsXHJcbiAgTnpXYXZlRGlyZWN0aXZlLFxyXG4gIE5aX1dBVkVfR0xPQkFMX0NPTkZJRyxcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQnBzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuLi9icHMtaW5wdXQvYnBzLWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgdHlwZSBOekJ1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnIHwgJ2xpbmsnIHwgJ3ZhcmlhdGlvbi0xJyB8ICd2YXJpYXRpb24tMicgfCAndmFyaWF0aW9uLTMnXHJcbiAgfCAndmFyaWF0aW9uLTQnIHwgJ3ZhcmlhdGlvbi01JyB8ICd2YXJpYXRpb24tNicgfCAndmFyaWF0aW9uLTcnIHwgJ3ZhcmlhdGlvbi04JyB8ICd2YXJpYXRpb24tOScgfCAndmFyaWF0aW9uLTEwJyB8ICd2YXJpYXRpb24tMTEnXHJcbiAgfCAndmFyaWF0aW9uLTEyJyAgfCAndmFyaWF0aW9uLTEzJyB8ICd2YXJpYXRpb24tMTQnIHwgJ3ZhcmlhdGlvbi0xNScgfCAndmFyaWF0aW9uLTE2JyB8ICd2YXJpYXRpb24tMTcnIHwgJ3ZhcmlhdGlvbi0xOCcgfCAndmFyaWF0aW9uLTE5JyB8ICd2YXJpYXRpb24tMjAnIHwgJ2VkaXRhYmxlJztcclxuZXhwb3J0IHR5cGUgTnpCdXR0b25TaGFwZSA9ICdjaXJjbGUnIHwgJ3JvdW5kJyB8IG51bGw7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYnV0dG9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwcy1idXR0b25dJyxcclxuICBleHBvcnRBczogJ2Jwc0J1dHRvbicsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtYnV0dG9uLmNvbXBvbmVudC5jc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmJwcy1idXR0b24tZWRpdGFibGUtc2VsZWN0ZWRdJzogJ2lzU2VsZWN0ZWQnLFxyXG4gICAgJ1tjbGFzcy5icHMtYnV0dG9uLWVkaXRhYmxlLW9uZWRpdGlvbl0nOiAnc2hvd0VkaXRpb25Nb2RlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGlzU2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgc2hvd0VkaXRpb25Nb2RlID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekljb25EaXJlY3RpdmUsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBsaXN0T2ZJY29uRWxlbWVudDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG4gIC8qQEhvc3RCaW5kaW5nKCdhdHRyLm56LXdhdmUnKSBueldhdmUgPSBuZXcgTnpXYXZlRGlyZWN0aXZlKFxyXG4gICAgdGhpcy5uZ1pvbmUsXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYsXHJcbiAgICB0aGlzLndhdmVDb25maWcsXHJcbiAgICB0aGlzLmFuaW1hdGlvblR5cGVcclxuICApOyovXHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNCbG9jazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNHaG9zdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ29tcHV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNFZGl0aW9uRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgYnBzVHlwZTogTnpCdXR0b25UeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGJwc1ZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBicHNDb21wdXRlZFRvb2x0aXBUeXBlOiBzdHJpbmcgPSAndmFyaWF0aW9uXzExJztcclxuICBASW5wdXQoKSBicHNDb21wdXRlZFRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIGJwc0NvbXB1dGVkVG9vbHRpcFRpdGxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBAT3V0cHV0KCkgYnBzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgYnBzU2hhcGU6IE56QnV0dG9uU2hhcGUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBicHNTaXplOiBOelNpemVMRFNUeXBlO1xyXG4gIEBWaWV3Q2hpbGQoQnBzSW5wdXREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgaXNJbkRyb3Bkb3duID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpY29uRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBpY29uT25seSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSAqL1xyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ2FudC1idG4nO1xyXG4gICAgY29uc3Qgc2l6ZU1hcDogTnpTaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCB7XHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LSR7dGhpcy5icHNUeXBlfWBdOiB0aGlzLmJwc1R5cGUsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LSR7dGhpcy5icHNTaGFwZX1gXTogdGhpcy5icHNTaGFwZSxcclxuICAgICAgW2Ake3ByZWZpeENsc30tJHtzaXplTWFwW3RoaXMuYnBzU2l6ZV19YF06IHNpemVNYXBbdGhpcy5icHNTaXplXSxcclxuICAgICAgW2Ake3ByZWZpeENsc30tbG9hZGluZ2BdOiB0aGlzLmJwc0xvYWRpbmcsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWljb24tb25seWBdOiB0aGlzLmljb25Pbmx5ICYmICF0aGlzLmJwc1NlYXJjaCAmJiAhdGhpcy5pc0luRHJvcGRvd24sXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWJhY2tncm91bmQtZ2hvc3RgXTogdGhpcy5icHNHaG9zdCxcclxuICAgICAgW2Ake3ByZWZpeENsc30tYmxvY2tgXTogdGhpcy5icHNCbG9jayxcclxuICAgICAgW2BhbnQtaW5wdXQtc2VhcmNoLWJ1dHRvbmBdOiB0aGlzLmJwc1NlYXJjaFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJY29uRGlzcGxheSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaWNvbkVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmljb25FbGVtZW50LCAnZGlzcGxheScsIHZhbHVlID8gJ25vbmUnIDogJ2lubGluZS1ibG9jaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGg7XHJcbiAgICBpZiAoaGFzSWNvbikge1xyXG4gICAgICB0aGlzLm1vdmVJY29uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjUzMCAqKi9cclxuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgdGhpcy5pY29uT25seSA9ICEhaGFzSWNvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgICB0aGlzLmljb25Pbmx5ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUljb25EaXNwbGF5KHRoaXMuYnBzTG9hZGluZyk7XHJcbiAgICBpZiAoISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZUljb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZJY29uRWxlbWVudCAmJiB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBmaXJzdENoaWxkRWxlbWVudCA9IGZpbmRGaXJzdE5vdEVtcHR5Tm9kZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBsYXN0Q2hpbGRFbGVtZW50ID0gZmluZExhc3ROb3RFbXB0eU5vZGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgaWYgKGZpcnN0Q2hpbGRFbGVtZW50ICYmIGZpcnN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50LmZpcnN0Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCBmaXJzdENoaWxkRWxlbWVudCwgdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmljb25FbGVtZW50ID0gZmlyc3RDaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFzdENoaWxkRWxlbWVudCAmJiBsYXN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxhc3QubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCwgbGFzdENoaWxkRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZlbnREZWZhdWx0KCRldmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bW91c2V1cCcsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzVHlwZSAhPT0gJ2VkaXRhYmxlJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd0VkaXRpb25Nb2RlICYmIHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMuc2hvd0VkaXRpb25Nb2RlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnBzVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmJwc1ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgkZXZlbnQpO1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgIHRoaXMuc2hvd0VkaXRpb25Nb2RlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnBzVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmJwc1ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsaWNrcyA9IDA7XHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmJwc1R5cGUgIT09ICdlZGl0YWJsZScpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbGlja3MrKztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSAhdGhpcy5pc1NlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuaXNTZWxlY3RlZCk7XHJcbiAgICAgIH0gXHJcbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXRpb25Nb2RlKCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy5icHNFZGl0aW9uRW5hYmxlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5zaG93RWRpdGlvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjb250ZW50T2JzZXJ2ZXI6IENvbnRlbnRPYnNlcnZlcixcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9XQVZFX0dMT0JBTF9DT05GSUcpIHByaXZhdGUgd2F2ZUNvbmZpZzogTnpXYXZlQ29uZmlnLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHByaXZhdGUgYW5pbWF0aW9uVHlwZTogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1idG4nKTtcclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jb250ZW50RWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRlbnRPYnNlcnZlclxyXG4gICAgICAub2JzZXJ2ZSh0aGlzLmNvbnRlbnRFbGVtZW50KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzMwNzlcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2hlY2tDb250ZW50KCkpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgLy90aGlzLm56V2F2ZS5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIC8vdGhpcy5ueldhdmUubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgY2hhbmdlcy5icHNCbG9jayB8fFxyXG4gICAgICBjaGFuZ2VzLmJwc0dob3N0IHx8XHJcbiAgICAgIGNoYW5nZXMuYnBzU2VhcmNoIHx8XHJcbiAgICAgIGNoYW5nZXMuYnBzVHlwZSB8fFxyXG4gICAgICBjaGFuZ2VzLmJwc1NoYXBlIHx8XHJcbiAgICAgIGNoYW5nZXMuYnBzU2l6ZSB8fFxyXG4gICAgICBjaGFuZ2VzLmJwc0xvYWRpbmdcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5icHNMb2FkaW5nKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodGhpcy5icHNMb2FkaW5nKTtcclxuICAgIH1cclxuICAgIC8qaWYgKGNoYW5nZXMuYnBzVHlwZSAmJiBjaGFuZ2VzLmJwc1R5cGUuY3VycmVudFZhbHVlID09PSAnbGluaycpIHtcclxuICAgICAgdGhpcy5ueldhdmUuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ueldhdmUuZW5hYmxlKCk7XHJcbiAgICB9Ki9cclxuICB9XHJcbn1cclxuIl19
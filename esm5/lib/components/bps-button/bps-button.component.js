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
        this.bpsType = 'default';
        this.bpsValue = '';
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
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            _this.clicks = 0;
        }, 300);
    };
    BpsButtonComponent.prototype.onDblClick = function (event) {
        if (this.bpsType !== 'editable') {
            return;
        }
        event.preventDefault();
        event.stopImmediatePropagation();
        this.showEditionMode = true;
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
        Input()
    ], BpsButtonComponent.prototype, "bpsType", void 0);
    __decorate([
        Input()
    ], BpsButtonComponent.prototype, "bpsValue", void 0);
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
    __decorate([
        HostListener('dblclick', ['$event'])
    ], BpsButtonComponent.prototype, "onDblClick", null);
    BpsButtonComponent = __decorate([
        Component({
            selector: '[bps-button]',
            exportAs: 'bpsButton',
            providers: [NzUpdateHostClassService],
            preserveWhitespaces: false,
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            template: "<i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading\"></i>\n<span *ngIf=\"bpsType !== 'editable'\" class=\"bps-custom-content\" #contentElement><ng-content></ng-content></span>\n\n<span *ngIf=\"bpsType === 'editable' && !showEditionMode\" class=\"bps-custom-content\" #contentElement>{{bpsValue}}</span>\n<input #inputElement bps-input\n       autofocus\n       (focus)=\"$event.target.select()\"\n       [class.bps-invisible]=\"!showEditionMode\"\n       (click)=\"preventDefault($event)\"\n       (dblclick)=\"preventDefault($event)\"\n       (keyup)=\"endEditMode($event)\"\n       class=\"bps-button-editable-input\"\n       [(ngModel)]=\"bpsValue\"\n/>\n\n<span class=\"bps-computed-icon\" *ngIf=\"bpsType === 'editable'\">\n  <img *ngIf=\"bpsComputed\" src=\"/assets/bps-icons/sps_green_dot_icon_computed.svg\" />\n  <img *ngIf=\"!bpsComputed\" src=\"/assets/bps-icons/sps_grey_dot_icon_notcomputed.svg\" />\n</span>\n",
            host: {
                '[class.bps-button-editable-selected]': 'isSelected',
                '[class.bps-button-editable-onedition]': 'showEditionMode'
            },
            styles: [".ant-btn-variation-1{height:40px!important;border-radius:8px!important;border:2px solid #00a2d1!important;background-color:transparent!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#00a2d1!important}.ant-btn-variation-1[disabled],.ant-btn-variation-2[disabled],.ant-btn-variation-2[disabled]:hover{border-color:#474747!important;color:#474747!important}.ant-btn-variation-1.active,.ant-btn-variation-1:focus{border-color:#445c67!important;color:#445c67!important}.ant-btn-variation-1:active{box-shadow:0 0 12px 0 #00a2d1!important;color:#00a2d1!important;border:2px solid #00a2d1!important}.ant-btn-variation-2{height:40px!important;border-radius:8px!important;border:2px solid #474747!important;background-color:#363636!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important}.ant-btn-variation-2[disabled]{background-color:transparent!important}.ant-btn-variation-2:hover{border-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-2.active,.ant-btn-variation-2:focus{border-color:#445c67!important;color:#fff!important}.ant-btn-variation-2:active{box-shadow:0 0 12px 0 #00a2d1!important;color:#fff!important;border-color:#474747!important}.ant-btn-variation-3,.ant-btn-variation-4,.ant-btn-variation-5{height:30px!important;border-radius:8px!important;background-color:#00a2d1!important;color:#fff!important;font-size:10px!important;font-weight:700!important;border:none!important;font-stretch:normal!important;font-style:normal!important;line-height:1.2;letter-spacing:.3px!important;text-align:center!important}.ant-btn-variation-4{height:28px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important}.ant-btn-variation-5{height:22px!important;border-radius:11px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important}.ant-btn-editable,.ant-btn-variation-6,.ant-btn-variation-7,.ant-btn-variation-8{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:11px!important;background-color:#363636!important;border:none!important}.ant-btn-editable{width:100%;text-align:left!important;font-size:12px!important;height:20px!important;border:1px solid #363636!important}.ant-btn-editable .bps-custom-content{position:relative;top:1px;max-width:calc(100% - 25px);white-space:nowrap;overflow:hidden;display:inline-block!important;text-overflow:ellipsis;margin:unset!important}.bps-computed-icon{position:relative;float:right;margin-right:5px!important;top:-1px}.ant-btn-variation-9,.ant-btn-variation-9:hover{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:8px!important;background-color:#253d47!important;border:none!important}.ant-btn-editable[disabled],.ant-btn-editable[disabled]:hover,.ant-btn-variation-3[disabled],.ant-btn-variation-3[disabled]:hover,.ant-btn-variation-4[disabled],.ant-btn-variation-4[disabled]:hover,.ant-btn-variation-5[disabled],.ant-btn-variation-5[disabled]:hover,.ant-btn-variation-6[disabled],.ant-btn-variation-6[disabled]:hover,.ant-btn-variation-7[disabled],.ant-btn-variation-7[disabled]:hover,.ant-btn-variation-8[disabled],.ant-btn-variation-8[disabled]:hover,.ant-btn-variation-9[disabled],.ant-btn-variation-9[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-3:hover,.ant-btn-variation-4:hover,.ant-btn-variation-5:hover,.ant-btn-variation-7:hover,.ant-btn-variation-8:hover{background-color:#445c67!important;color:#fff!important}.ant-btn-editable:not(.bps-button-editable-onedition):hover{background-color:#474747!important}.ant-btn-editable[disabled]:hover{background-color:#363636!important}.ant-btn-variation-6:hover{background-color:#bc0000!important;color:#fff!important}.ant-btn-variation-3.active,.ant-btn-variation-3:focus,.ant-btn-variation-4.active,.ant-btn-variation-4:focus,.ant-btn-variation-5.active,.ant-btn-variation-5:focus{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-9.active,.ant-btn-variation-9:focus{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-7.active,.ant-btn-variation-7:focus{background-color:#363636!important}.ant-btn-variation-7:active{background-color:#00a2d1!important}.ant-btn-variation-6.active,.ant-btn-variation-6:focus{background-color:maroon!important;color:#fff!important}.ant-btn-variation-8.active,.ant-btn-variation-8:focus{background-color:#253d47!important;color:#999!important}.ant-btn-variation-3:active,.ant-btn-variation-4:active,.ant-btn-variation-5:active{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-6:active,.ant-btn-variation-8:active{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#363636!important;color:#fff!important}.ant-btn-variation-9:active{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#253d47!important;color:#fff!important}.ant-btn-variation-10,.ant-btn-variation-10:hover,.ant-btn-variation-11,.ant-btn-variation-11:hover,.ant-btn-variation-13,.ant-btn-variation-13:hover{width:30px!important;height:30px!important;border-radius:8px!important;background-color:#363636!important;border:none!important;padding:0!important;color:#fff!important}.ant-btn-variation-13,.ant-btn-variation-13:hover{border-radius:4px!important;width:22px!important;height:22px!important}.ant-btn-variation-13:hover{background-color:#445c67!important}.ant-btn-variation-11,.ant-btn-variation-11:hover{background-color:#253d47!important}.ant-btn-variation-10[disabled],.ant-btn-variation-10[disabled]:hover,.ant-btn-variation-11[disabled],.ant-btn-variation-11[disabled]:hover,.ant-btn-variation-13[disabled],.ant-btn-variation-13[disabled]:hover,.ant-btn-variation-14[disabled],.ant-btn-variation-14[disabled]:hover,.ant-btn-variation-15[disabled],.ant-btn-variation-15[disabled]:hover,.ant-btn-variation-16[disabled],.ant-btn-variation-16[disabled]:hover,.ant-btn-variation-20[disabled],.ant-btn-variation-20[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-10[disabled] svg,.ant-btn-variation-10[disabled]:hover svg,.ant-btn-variation-11[disabled] svg,.ant-btn-variation-11[disabled]:hover svg,.ant-btn-variation-13[disabled] svg,.ant-btn-variation-13[disabled]:hover svg,.ant-btn-variation-14[disabled] svg,.ant-btn-variation-14[disabled]:hover svg,.ant-btn-variation-15[disabled] svg,.ant-btn-variation-15[disabled]:hover svg,.ant-btn-variation-16[disabled] svg,.ant-btn-variation-16[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-10.active,.ant-btn-variation-10:focus,.ant-btn-variation-11:active,.ant-btn-variation-13.active,.ant-btn-variation-13:focus{background-color:#00a2d1!important;color:#fff!important}.bps-custom-content{display:table!important;margin:0 auto!important}.bps-custom-content svg{display:table-cell!important;vertical-align:middle!important}.ant-btn-variation-12,.ant-btn-variation-12:hover{height:40px;width:40px;background-color:#253d47!important;border-radius:12px!important;border:2px solid #00a2d1!important;background-clip:content-box!important;padding:5px!important;color:#fff!important}.ant-btn-variation-12:hover{background-color:#445c67!important}.ant-btn-variation-12[disabled],.ant-btn-variation-12[disabled]:hover{background-color:#363636!important;border-color:#666!important;color:#666!important}.ant-btn-variation-12[disabled] svg,.ant-btn-variation-12[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-12.active,.ant-btn-variation-12:focus{background-color:#00a2d1!important}.ant-btn-variation-12:active{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#253d47!important}.ant-btn-variation-14,.ant-btn-variation-15,.ant-btn-variation-16{width:30px!important;height:30px!important;background-color:#00a2d1!important;border-radius:100px!important;border:none!important;color:#fff!important;padding:0!important}.ant-btn-variation-14:hover{color:#fff!important;background-color:#445c67!important;border:none!important}.ant-btn-variation-15{background-color:#363636!important}.ant-btn-variation-15:hover{color:#fff!important;background-color:#bc0000!important;border:none!important}.ant-btn-variation-16{background-color:#363636!important}.ant-btn-variation-16:hover{background-color:#474747!important}.ant-btn-variation-14.active,.ant-btn-variation-14:focus{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-16.active,.ant-btn-variation-16:focus{background-color:#363636!important;color:#fff!important}.ant-btn-variation-15.active,.ant-btn-variation-15:focus{background-color:maroon!important;color:#fff!important}.ant-btn-variation-14:active{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#00a2d1!important}.ant-btn-variation-10:active,.ant-btn-variation-13:active,.ant-btn-variation-15:active,.ant-btn-variation-16:active{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#363636!important;color:#fff!important}.ant-btn-variation-17,.ant-btn-variation-17:hover{height:32px!important;width:32px!important;font-size:17px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.71!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border:2px solid #fff!important;background-color:#888!important;padding:0!important;border-radius:100px!important}.ant-btn-variation-17:hover{background-color:#666!important;color:#fff!important}.ant-btn-variation-17.active,.ant-btn-variation-17:focus{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-17:active{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#888!important}.ant-btn-variation-17[disabled],.ant-btn-variation-17[disabled]:hover{border:2px solid #666!important;background-color:#888!important;color:#666!important}.ant-btn-variation-18,.ant-btn-variation-18:hover,.ant-btn-variation-19,.ant-btn-variation-19:hover{background-color:#262626!important;height:30px!important;width:30px!important;padding:0!important;border:none!important;border-radius:100px!important}.ant-btn-variation-19,.ant-btn-variation-19:hover{height:20px!important;width:20px!important;border-radius:4px!important}.ant-btn-variation-18:hover{background-color:#363636!important;color:#fff!important}.ant-btn-variation-18.active,.ant-btn-variation-18:focus{background-color:#474747!important;color:#fff!important}.ant-btn-variation-18:active,.ant-btn-variation-19:active{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#262626!important}.ant-btn-variation-18[disabled],.ant-btn-variation-18[disabled]:hover,.ant-btn-variation-19[disabled],.ant-btn-variation-19[disabled]:hover{border:none!important;background-color:#262626!important;color:#666!important}.ant-btn-variation-18[disabled] svg,.ant-btn-variation-18[disabled]:hover svg,.ant-btn-variation-19[disabled] svg,.ant-btn-variation-19[disabled]:hover svg,.ant-btn-variation-20[disabled] svg,.ant-btn-variation-20[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-20,.ant-btn-variation-20:hover{width:25px!important;height:30px!important;background-color:#363636!important;border:none!important;border-radius:100px 0 0 100px!important;color:#fff!important}.ant-btn-variation-20:hover{background-color:#474747!important;color:#fff!important}.ant-btn-variation-20.active,.ant-btn-variation-20:focus{background-color:#363636!important;color:#fff!important}.ant-btn-variation-20:active{background-color:#363636!important;box-shadow:0 0 8px 0 #00a2d1!important;border:none!important}.bps-button-editable-selected{border:1px solid #00a2d1!important}.bps-button-editable-input{max-width:calc(100% - 25px)!important;display:inline-block;background-color:transparent!important;position:relative;top:-2px;border:none!important;padding:0!important;font-size:12px!important;border-radius:unset!important;overflow:hidden;line-height:1.36!important;margin:unset}.bps-invisible{display:none}"]
        }),
        __param(7, Optional()), __param(7, Inject(NZ_WAVE_GLOBAL_CONFIG)),
        __param(8, Optional()), __param(8, Inject(ANIMATION_MODULE_TYPE))
    ], BpsButtonComponent);
    return BpsButtonComponent;
}());
export { BpsButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtYnV0dG9uL2Jwcy1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFDVCxhQUFhLEVBQ2IsU0FBUyxFQUNULGlCQUFpQixFQUNqQixPQUFPLEVBQ1AsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFN0UsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsT0FBTyxFQUNQLFlBQVksRUFDWixlQUFlLEVBQ2YsYUFBYSxFQUNiLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsWUFBWSxFQUNaLGVBQWUsRUFDZixxQkFBcUIsRUFDckIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU9yRSxJQUFNLHdCQUF3QixH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QUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQzs0REFBMEI7SUFzRTNGO1FBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7eURBVTFDO0lBWUQ7UUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7cURBY2pDO0lBR0Q7UUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7d0RBVXBDO0lBM0lVLGtCQUFrQjtRQWQ5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLHE2QkFBMEM7WUFFMUMsSUFBSSxFQUFFO2dCQUNKLHNDQUFzQyxFQUFFLFlBQVk7Z0JBQ3BELHVDQUF1QyxFQUFFLGlCQUFpQjthQUMzRDs7U0FDRixDQUFDO1FBc0pHLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ3pDLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO09BdEpqQyxrQkFBa0IsQ0FrTjlCO0lBQUQseUJBQUM7Q0FBQSxBQWxORCxJQWtOQztTQWxOWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgVmlld1JlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFOSU1BVElPTl9NT0RVTEVfVFlQRSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7XG4gIGZpbmRGaXJzdE5vdEVtcHR5Tm9kZSxcbiAgZmluZExhc3ROb3RFbXB0eU5vZGUsXG4gIGlzRW1wdHksXG4gIElucHV0Qm9vbGVhbixcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOelNpemVMRFNUeXBlLFxuICBOelNpemVNYXAsXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgTnpXYXZlQ29uZmlnLFxuICBOeldhdmVEaXJlY3RpdmUsXG4gIE5aX1dBVkVfR0xPQkFMX0NPTkZJRyxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQnBzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuLi9icHMtaW5wdXQvYnBzLWlucHV0LmRpcmVjdGl2ZSc7XHJcblxuZXhwb3J0IHR5cGUgTnpCdXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ2Rhc2hlZCcgfCAnZGFuZ2VyJyB8ICdkZWZhdWx0JyB8ICdsaW5rJyB8ICd2YXJpYXRpb24tMScgfCAndmFyaWF0aW9uLTInIHwgJ3ZhcmlhdGlvbi0zJ1xuICB8ICd2YXJpYXRpb24tNCcgfCAndmFyaWF0aW9uLTUnIHwgJ3ZhcmlhdGlvbi02JyB8ICd2YXJpYXRpb24tNycgfCAndmFyaWF0aW9uLTgnIHwgJ3ZhcmlhdGlvbi05JyB8ICd2YXJpYXRpb24tMTAnIHwgJ3ZhcmlhdGlvbi0xMSdcbiAgfCAndmFyaWF0aW9uLTEyJyAgfCAndmFyaWF0aW9uLTEzJyB8ICd2YXJpYXRpb24tMTQnIHwgJ3ZhcmlhdGlvbi0xNScgfCAndmFyaWF0aW9uLTE2JyB8ICd2YXJpYXRpb24tMTcnIHwgJ3ZhcmlhdGlvbi0xOCcgfCAndmFyaWF0aW9uLTE5JyB8ICd2YXJpYXRpb24tMjAnIHwgJ2VkaXRhYmxlJztcbmV4cG9ydCB0eXBlIE56QnV0dG9uU2hhcGUgPSAnY2lyY2xlJyB8ICdyb3VuZCcgfCBudWxsO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2Jwcy1idXR0b25dJyxcbiAgZXhwb3J0QXM6ICdicHNCdXR0b24nLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLWJ1dHRvbi5jb21wb25lbnQuY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmJwcy1idXR0b24tZWRpdGFibGUtc2VsZWN0ZWRdJzogJ2lzU2VsZWN0ZWQnLFxuICAgICdbY2xhc3MuYnBzLWJ1dHRvbi1lZGl0YWJsZS1vbmVkaXRpb25dJzogJ3Nob3dFZGl0aW9uTW9kZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgaXNTZWxlY3RlZCA9IGZhbHNlO1xuICBzaG93RWRpdGlvbk1vZGUgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKE56SWNvbkRpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pIGxpc3RPZkljb25FbGVtZW50OiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIC8qQEhvc3RCaW5kaW5nKCdhdHRyLm56LXdhdmUnKSBueldhdmUgPSBuZXcgTnpXYXZlRGlyZWN0aXZlKFxuICAgIHRoaXMubmdab25lLFxuICAgIHRoaXMuZWxlbWVudFJlZixcbiAgICB0aGlzLndhdmVDb25maWcsXG4gICAgdGhpcy5hbmltYXRpb25UeXBlXG4gICk7Ki9cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQmxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0dob3N0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NvbXB1dGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJwc1R5cGU6IE56QnV0dG9uVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgYnBzVmFsdWU6IHN0cmluZyA9ICcnO1xuICBAT3V0cHV0KCkgYnBzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIGJwc1NoYXBlOiBOekJ1dHRvblNoYXBlID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIGJwc1NpemU6IE56U2l6ZUxEU1R5cGU7XG4gIEBWaWV3Q2hpbGQoQnBzSW5wdXREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICByZWFkb25seSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgaXNJbkRyb3Bkb3duID0gZmFsc2U7XG4gIHByaXZhdGUgaWNvbkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGljb25Pbmx5ID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5ICovXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHByZWZpeENscyA9ICdhbnQtYnRuJztcbiAgICBjb25zdCBzaXplTWFwOiBOelNpemVNYXAgPSB7IGxhcmdlOiAnbGcnLCBzbWFsbDogJ3NtJyB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCB7XG4gICAgICBbYCR7cHJlZml4Q2xzfS0ke3RoaXMuYnBzVHlwZX1gXTogdGhpcy5icHNUeXBlLFxuICAgICAgW2Ake3ByZWZpeENsc30tJHt0aGlzLmJwc1NoYXBlfWBdOiB0aGlzLmJwc1NoYXBlLFxuICAgICAgW2Ake3ByZWZpeENsc30tJHtzaXplTWFwW3RoaXMuYnBzU2l6ZV19YF06IHNpemVNYXBbdGhpcy5icHNTaXplXSxcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWxvYWRpbmdgXTogdGhpcy5icHNMb2FkaW5nLFxuICAgICAgW2Ake3ByZWZpeENsc30taWNvbi1vbmx5YF06IHRoaXMuaWNvbk9ubHkgJiYgIXRoaXMuYnBzU2VhcmNoICYmICF0aGlzLmlzSW5Ecm9wZG93bixcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWJhY2tncm91bmQtZ2hvc3RgXTogdGhpcy5icHNHaG9zdCxcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWJsb2NrYF06IHRoaXMuYnBzQmxvY2ssXG4gICAgICBbYGFudC1pbnB1dC1zZWFyY2gtYnV0dG9uYF06IHRoaXMuYnBzU2VhcmNoXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVJY29uRGlzcGxheSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmljb25FbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaWNvbkVsZW1lbnQsICdkaXNwbGF5JywgdmFsdWUgPyAnbm9uZScgOiAnaW5saW5lLWJsb2NrJyk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGhhc0ljb24gPSB0aGlzLmxpc3RPZkljb25FbGVtZW50ICYmIHRoaXMubGlzdE9mSWNvbkVsZW1lbnQubGVuZ3RoO1xuICAgIGlmIChoYXNJY29uKSB7XG4gICAgICB0aGlzLm1vdmVJY29uKCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjUzMCAqKi9cbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgdGhpcy5pY29uT25seSA9ICEhaGFzSWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgICB0aGlzLmljb25Pbmx5ID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZUljb25EaXNwbGF5KHRoaXMuYnBzTG9hZGluZyk7XG4gICAgaWYgKCEodGhpcy5jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZUljb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGRFbGVtZW50ID0gZmluZEZpcnN0Tm90RW1wdHlOb2RlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICBjb25zdCBsYXN0Q2hpbGRFbGVtZW50ID0gZmluZExhc3ROb3RFbXB0eU5vZGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGlmIChmaXJzdENoaWxkRWxlbWVudCAmJiBmaXJzdENoaWxkRWxlbWVudCA9PT0gdGhpcy5saXN0T2ZJY29uRWxlbWVudC5maXJzdC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIGZpcnN0Q2hpbGRFbGVtZW50LCB0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmljb25FbGVtZW50ID0gZmlyc3RDaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB9IGVsc2UgaWYgKGxhc3RDaGlsZEVsZW1lbnQgJiYgbGFzdENoaWxkRWxlbWVudCA9PT0gdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sYXN0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLCBsYXN0Q2hpbGRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdCgkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93Om1vdXNldXAnLCBbJyRldmVudCddKVxyXG4gIGhhbmRsZUNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJwc1R5cGUgIT09ICdlZGl0YWJsZScpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNob3dFZGl0aW9uTW9kZSAmJiB0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkge1xyXG4gICAgICB0aGlzLnNob3dFZGl0aW9uTW9kZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJwc1ZhbHVlQ2hhbmdlLmVtaXQodGhpcy5icHNWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxuXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgkZXZlbnQpO1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgIHRoaXMuc2hvd0VkaXRpb25Nb2RlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnBzVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmJwc1ZhbHVlKTtcclxuICAgIH1cclxuICB9XG5cbiAgY2xpY2tzID0gMDtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5icHNUeXBlICE9PSAnZWRpdGFibGUnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY2xpY2tzKys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gIXRoaXMuaXNTZWxlY3RlZDtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcbiAgb25EYmxDbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuYnBzVHlwZSAhPT0gJ2VkaXRhYmxlJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnNob3dFZGl0aW9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xyXG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNvbnRlbnRPYnNlcnZlcjogQ29udGVudE9ic2VydmVyLFxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9XQVZFX0dMT0JBTF9DT05GSUcpIHByaXZhdGUgd2F2ZUNvbmZpZzogTnpXYXZlQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwcml2YXRlIGFuaW1hdGlvblR5cGU6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1idG4nKTtcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbnRlbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm47XHJcbiAgICB9XG4gICAgdGhpcy5jb250ZW50T2JzZXJ2ZXJcbiAgICAgIC5vYnNlcnZlKHRoaXMuY29udGVudEVsZW1lbnQpXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMzA3OVxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2hlY2tDb250ZW50KCkpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgLy90aGlzLm56V2F2ZS5uZ09uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIC8vdGhpcy5ueldhdmUubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLmJwc0Jsb2NrIHx8XG4gICAgICBjaGFuZ2VzLmJwc0dob3N0IHx8XG4gICAgICBjaGFuZ2VzLmJwc1NlYXJjaCB8fFxuICAgICAgY2hhbmdlcy5icHNUeXBlIHx8XG4gICAgICBjaGFuZ2VzLmJwc1NoYXBlIHx8XG4gICAgICBjaGFuZ2VzLmJwc1NpemUgfHxcbiAgICAgIGNoYW5nZXMuYnBzTG9hZGluZ1xuICAgICkge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5icHNMb2FkaW5nKSB7XG4gICAgICB0aGlzLnVwZGF0ZUljb25EaXNwbGF5KHRoaXMuYnBzTG9hZGluZyk7XG4gICAgfVxuICAgIC8qaWYgKGNoYW5nZXMuYnBzVHlwZSAmJiBjaGFuZ2VzLmJwc1R5cGUuY3VycmVudFZhbHVlID09PSAnbGluaycpIHtcbiAgICAgIHRoaXMubnpXYXZlLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ueldhdmUuZW5hYmxlKCk7XG4gICAgfSovXG4gIH1cbn1cbiJdfQ==
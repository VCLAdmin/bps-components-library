import { __decorate, __param } from "tslib";
import { ContentObserver } from '@angular/cdk/observers';
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Inject, Input, NgZone, OnChanges, OnDestroy, OnInit, Optional, QueryList, Renderer2, SimpleChanges, ViewChild, ViewEncapsulation, ViewRef, HostListener, Output, EventEmitter } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { findFirstNotEmptyNode, findLastNotEmptyNode, isEmpty, InputBoolean, NzConfigService, NzSizeLDSType, NzSizeMap, NzUpdateHostClassService, NzWaveConfig, NzWaveDirective, NZ_WAVE_GLOBAL_CONFIG, WithConfig } from 'ng-zorro-antd/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { BpsInputDirective } from '../bps-input/bps-input.directive';
const NZ_CONFIG_COMPONENT_NAME = 'button';
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
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    handleClick(e) {
        if (this.bpsType !== 'editable') {
            return;
        }
        if (this.showEditionMode && this.inputElement && this.inputElement.nativeElement !== e.target) {
            this.showEditionMode = false;
            this.bpsValueChange.emit(this.bpsValue);
        }
    }
    endEditMode($event) {
        this.preventDefault($event);
        if ($event.key === ('Enter' || 'enter')) {
            this.showEditionMode = false;
            this.bpsValueChange.emit(this.bpsValue);
        }
    }
    onClick(event) {
        if (this.bpsType !== 'editable') {
            return;
        }
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.isSelected = !this.isSelected;
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            this.clicks = 0;
        }, 300);
    }
    onDblClick(event) {
        if (this.bpsType !== 'editable') {
            return;
        }
        event.preventDefault();
        event.stopImmediatePropagation();
        this.showEditionMode = true;
        this.inputElement.nativeElement.focus();
        this.inputElement.nativeElement.select();
    }
    ngAfterContentInit() {
        if (!this.contentElement) {
            return;
        }
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
        //this.nzWave.ngOnInit();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        //this.nzWave.ngOnDestroy();
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
        /*if (changes.bpsType && changes.bpsType.currentValue === 'link') {
          this.nzWave.disable();
        } else {
          this.nzWave.enable();
        }*/
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
export { BpsButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtYnV0dG9uL2Jwcy1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFDVCxhQUFhLEVBQ2IsU0FBUyxFQUNULGlCQUFpQixFQUNqQixPQUFPLEVBQ1AsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFN0UsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsT0FBTyxFQUNQLFlBQVksRUFDWixlQUFlLEVBQ2YsYUFBYSxFQUNiLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsWUFBWSxFQUNaLGVBQWUsRUFDZixxQkFBcUIsRUFDckIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU9yRSxNQUFNLHdCQUF3QixH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LEVBQUUsU0FBUyxDQUFDO21EQUF3QjtBQUNmO0lBQWpFLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO3dEQUEwQjtBQXNFM0Y7SUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztxREFVMUM7QUFZRDtJQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpREFjakM7QUFHRDtJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvREFVcEM7QUEzSVUsa0JBQWtCO0lBZDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ3JDLG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMscTZCQUEwQztRQUUxQyxJQUFJLEVBQUU7WUFDSixzQ0FBc0MsRUFBRSxZQUFZO1lBQ3BELHVDQUF1QyxFQUFFLGlCQUFpQjtTQUMzRDs7S0FDRixDQUFDO0lBc0pHLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQ3pDLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0dBdEpqQyxrQkFBa0IsQ0FrTjlCO1NBbE5ZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBWaWV3UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuaW1wb3J0IHtcbiAgZmluZEZpcnN0Tm90RW1wdHlOb2RlLFxuICBmaW5kTGFzdE5vdEVtcHR5Tm9kZSxcbiAgaXNFbXB0eSxcbiAgSW5wdXRCb29sZWFuLFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56U2l6ZUxEU1R5cGUsXG4gIE56U2l6ZU1hcCxcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICBOeldhdmVDb25maWcsXG4gIE56V2F2ZURpcmVjdGl2ZSxcbiAgTlpfV0FWRV9HTE9CQUxfQ09ORklHLFxuICBXaXRoQ29uZmlnXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekljb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCcHNJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4uL2Jwcy1pbnB1dC9icHMtaW5wdXQuZGlyZWN0aXZlJztcclxuXG5leHBvcnQgdHlwZSBOekJ1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnIHwgJ2xpbmsnIHwgJ3ZhcmlhdGlvbi0xJyB8ICd2YXJpYXRpb24tMicgfCAndmFyaWF0aW9uLTMnXG4gIHwgJ3ZhcmlhdGlvbi00JyB8ICd2YXJpYXRpb24tNScgfCAndmFyaWF0aW9uLTYnIHwgJ3ZhcmlhdGlvbi03JyB8ICd2YXJpYXRpb24tOCcgfCAndmFyaWF0aW9uLTknIHwgJ3ZhcmlhdGlvbi0xMCcgfCAndmFyaWF0aW9uLTExJ1xuICB8ICd2YXJpYXRpb24tMTInICB8ICd2YXJpYXRpb24tMTMnIHwgJ3ZhcmlhdGlvbi0xNCcgfCAndmFyaWF0aW9uLTE1JyB8ICd2YXJpYXRpb24tMTYnIHwgJ3ZhcmlhdGlvbi0xNycgfCAndmFyaWF0aW9uLTE4JyB8ICd2YXJpYXRpb24tMTknIHwgJ3ZhcmlhdGlvbi0yMCcgfCAnZWRpdGFibGUnO1xuZXhwb3J0IHR5cGUgTnpCdXR0b25TaGFwZSA9ICdjaXJjbGUnIHwgJ3JvdW5kJyB8IG51bGw7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdidXR0b24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYnBzLWJ1dHRvbl0nLFxuICBleHBvcnRBczogJ2Jwc0J1dHRvbicsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icHMtYnV0dG9uLmNvbXBvbmVudC5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYnBzLWJ1dHRvbi1lZGl0YWJsZS1zZWxlY3RlZF0nOiAnaXNTZWxlY3RlZCcsXG4gICAgJ1tjbGFzcy5icHMtYnV0dG9uLWVkaXRhYmxlLW9uZWRpdGlvbl0nOiAnc2hvd0VkaXRpb25Nb2RlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBpc1NlbGVjdGVkID0gZmFsc2U7XG4gIHNob3dFZGl0aW9uTW9kZSA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpJY29uRGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgbGlzdE9mSWNvbkVsZW1lbnQ6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgLypASG9zdEJpbmRpbmcoJ2F0dHIubnotd2F2ZScpIG56V2F2ZSA9IG5ldyBOeldhdmVEaXJlY3RpdmUoXG4gICAgdGhpcy5uZ1pvbmUsXG4gICAgdGhpcy5lbGVtZW50UmVmLFxuICAgIHRoaXMud2F2ZUNvbmZpZyxcbiAgICB0aGlzLmFuaW1hdGlvblR5cGVcbiAgKTsqL1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNCbG9jazogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzR2hvc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ29tcHV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYnBzVHlwZTogTnpCdXR0b25UeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBicHNWYWx1ZTogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKSBicHNWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgYnBzU2hhcGU6IE56QnV0dG9uU2hhcGUgPSBudWxsO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgYnBzU2l6ZTogTnpTaXplTERTVHlwZTtcbiAgQFZpZXdDaGlsZChCcHNJbnB1dERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBpc0luRHJvcGRvd24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBpY29uRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgaWNvbk9ubHkgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkgKi9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ2FudC1idG4nO1xuICAgIGNvbnN0IHNpemVNYXA6IE56U2l6ZU1hcCA9IHsgbGFyZ2U6ICdsZycsIHNtYWxsOiAnc20nIH07XG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIHtcbiAgICAgIFtgJHtwcmVmaXhDbHN9LSR7dGhpcy5icHNUeXBlfWBdOiB0aGlzLmJwc1R5cGUsXG4gICAgICBbYCR7cHJlZml4Q2xzfS0ke3RoaXMuYnBzU2hhcGV9YF06IHRoaXMuYnBzU2hhcGUsXG4gICAgICBbYCR7cHJlZml4Q2xzfS0ke3NpemVNYXBbdGhpcy5icHNTaXplXX1gXTogc2l6ZU1hcFt0aGlzLmJwc1NpemVdLFxuICAgICAgW2Ake3ByZWZpeENsc30tbG9hZGluZ2BdOiB0aGlzLmJwc0xvYWRpbmcsXG4gICAgICBbYCR7cHJlZml4Q2xzfS1pY29uLW9ubHlgXTogdGhpcy5pY29uT25seSAmJiAhdGhpcy5icHNTZWFyY2ggJiYgIXRoaXMuaXNJbkRyb3Bkb3duLFxuICAgICAgW2Ake3ByZWZpeENsc30tYmFja2dyb3VuZC1naG9zdGBdOiB0aGlzLmJwc0dob3N0LFxuICAgICAgW2Ake3ByZWZpeENsc30tYmxvY2tgXTogdGhpcy5icHNCbG9jayxcbiAgICAgIFtgYW50LWlucHV0LXNlYXJjaC1idXR0b25gXTogdGhpcy5icHNTZWFyY2hcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUljb25EaXNwbGF5KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaWNvbkVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pY29uRWxlbWVudCwgJ2Rpc3BsYXknLCB2YWx1ZSA/ICdub25lJyA6ICdpbmxpbmUtYmxvY2snKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGg7XG4gICAgaWYgKGhhc0ljb24pIHtcbiAgICAgIHRoaXMubW92ZUljb24oKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEyNTMwICoqL1xuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB0aGlzLmljb25Pbmx5ID0gISFoYXNJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICAgIHRoaXMuaWNvbk9ubHkgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodGhpcy5icHNMb2FkaW5nKTtcbiAgICBpZiAoISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBtb3ZlSWNvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZJY29uRWxlbWVudCAmJiB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxlbmd0aCkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZEVsZW1lbnQgPSBmaW5kRmlyc3ROb3RFbXB0eU5vZGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGNvbnN0IGxhc3RDaGlsZEVsZW1lbnQgPSBmaW5kTGFzdE5vdEVtcHR5Tm9kZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgaWYgKGZpcnN0Q2hpbGRFbGVtZW50ICYmIGZpcnN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50LmZpcnN0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5lbCwgZmlyc3RDaGlsZEVsZW1lbnQsIHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuaWNvbkVsZW1lbnQgPSBmaXJzdENoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIH0gZWxzZSBpZiAobGFzdENoaWxkRWxlbWVudCAmJiBsYXN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxhc3QubmF0aXZlRWxlbWVudCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwsIGxhc3RDaGlsZEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0KCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bW91c2V1cCcsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzVHlwZSAhPT0gJ2VkaXRhYmxlJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd0VkaXRpb25Nb2RlICYmIHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMuc2hvd0VkaXRpb25Nb2RlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnBzVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmJwc1ZhbHVlKTtcclxuICAgIH1cclxuICB9XG5cbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KCRldmVudCk7XHJcbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gKCdFbnRlcicgfHwgJ2VudGVyJykpIHtcclxuICAgICAgdGhpcy5zaG93RWRpdGlvbk1vZGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5icHNWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuYnBzVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cblxuICBjbGlja3MgPSAwO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmJwc1R5cGUgIT09ICdlZGl0YWJsZScpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbGlja3MrKztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSAhdGhpcy5pc1NlbGVjdGVkO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKVxuICBvbkRibENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5icHNUeXBlICE9PSAnZWRpdGFibGUnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuc2hvd0VkaXRpb25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY29udGVudE9ic2VydmVyOiBDb250ZW50T2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX1dBVkVfR0xPQkFMX0NPTkZJRykgcHJpdmF0ZSB3YXZlQ29uZmlnOiBOeldhdmVDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHByaXZhdGUgYW5pbWF0aW9uVHlwZTogc3RyaW5nXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJ0bicpO1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY29udGVudEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcclxuICAgIH1cbiAgICB0aGlzLmNvbnRlbnRPYnNlcnZlclxuICAgICAgLm9ic2VydmUodGhpcy5jb250ZW50RWxlbWVudClcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8zMDc5XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jaGVja0NvbnRlbnQoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICAvL3RoaXMubnpXYXZlLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgLy90aGlzLm56V2F2ZS5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIGNoYW5nZXMuYnBzQmxvY2sgfHxcbiAgICAgIGNoYW5nZXMuYnBzR2hvc3QgfHxcbiAgICAgIGNoYW5nZXMuYnBzU2VhcmNoIHx8XG4gICAgICBjaGFuZ2VzLmJwc1R5cGUgfHxcbiAgICAgIGNoYW5nZXMuYnBzU2hhcGUgfHxcbiAgICAgIGNoYW5nZXMuYnBzU2l6ZSB8fFxuICAgICAgY2hhbmdlcy5icHNMb2FkaW5nXG4gICAgKSB7XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmJwc0xvYWRpbmcpIHtcbiAgICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodGhpcy5icHNMb2FkaW5nKTtcbiAgICB9XG4gICAgLyppZiAoY2hhbmdlcy5icHNUeXBlICYmIGNoYW5nZXMuYnBzVHlwZS5jdXJyZW50VmFsdWUgPT09ICdsaW5rJykge1xuICAgICAgdGhpcy5ueldhdmUuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56V2F2ZS5lbmFibGUoKTtcbiAgICB9Ki9cbiAgfVxufVxuIl19
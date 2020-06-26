import { __decorate, __param, __read, __spread } from "tslib";
import { hasModifierKey, ESCAPE } from '@angular/cdk/keycodes';
import { ConnectedPosition, ConnectionPositionPair, FlexibleConnectedPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Host, Input, OnChanges, OnDestroy, Optional, Output, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { DEFAULT_DROPDOWN_POSITIONS, InputBoolean, POSITION_MAP } from 'ng-zorro-antd/core';
import { combineLatest, fromEvent, merge, EMPTY, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mapTo, takeUntil, tap } from 'rxjs/operators';
import { BpsButtonComponent } from '../bps-button/bps-button.component';
import { BpsButtonGroupComponent } from '../bps-button/bps-button-group.component';
var BpsDropDownDirective = /** @class */ (function () {
    function BpsDropDownDirective(elementRef, renderer, overlay, platform, bpsButtonComponent, bpsButtonGroupComponent, viewContainerRef) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.overlay = overlay;
        this.platform = platform;
        this.bpsButtonComponent = bpsButtonComponent;
        this.bpsButtonGroupComponent = bpsButtonGroupComponent;
        this.viewContainerRef = viewContainerRef;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.triggerWidth = 0;
        this.el = this.elementRef.nativeElement;
        this.dropdownOpen = false;
        this.positions = __spread(DEFAULT_DROPDOWN_POSITIONS);
        this.positionSubscription = Subscription.EMPTY;
        this.overlaySubscription = Subscription.EMPTY;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap(function (e) { return e.stopPropagation(); }), mapTo(true));
        this.bpsTrigger = 'hover';
        this.bpsBackdrop = true;
        this.bpsClickHide = true;
        this.bpsDisabled = false;
        this.bpsVisible = false;
        this.bpsTableFilter = false;
        this.bpsOverlayClassName = '';
        this.bpsOverlayStyle = {};
        this.bpsPlacement = 'bottomLeft';
        this.bpsVisibleChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-dropdown-trigger');
        if (this.bpsButtonComponent) {
            this.bpsButtonComponent.isInDropdown = true;
        }
        if (this.bpsButtonGroupComponent) {
            this.bpsButtonGroupComponent.isInDropdown = true;
        }
    }
    BpsDropDownDirective.prototype.setDisabled = function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el, 'disabled', '');
            if (this.bpsVisible) {
                this.bpsVisible = false;
                this.bpsVisibleChange.emit(this.bpsVisible);
                this.updateOverlayByVisible();
            }
        }
        else {
            this.renderer.removeAttribute(this.el, 'disabled');
        }
    };
    BpsDropDownDirective.prototype.getOverlayConfig = function () {
        return new OverlayConfig({
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.el)
                .withLockedPosition(),
            minWidth: this.triggerWidth,
            hasBackdrop: this.bpsTrigger === 'click',
            backdropClass: this.bpsBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    };
    BpsDropDownDirective.prototype.createOverlay = function () {
        if (!this.overlayRef) {
            var config = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(config);
            this.subscribeOverlayEvent(this.overlayRef);
            this.subscribeToPositions(config.positionStrategy);
            return this.overlayRef;
        }
        else {
            var overlayConfig = this.overlayRef.getConfig();
            this.updateOverlayConfig(overlayConfig);
            return this.overlayRef;
        }
    };
    BpsDropDownDirective.prototype.updateOverlayConfig = function (overlayConfig) {
        overlayConfig.minWidth = this.triggerWidth;
        overlayConfig.hasBackdrop = this.bpsTrigger === 'click';
        return overlayConfig;
    };
    BpsDropDownDirective.prototype.dispose = function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.positionSubscription.unsubscribe();
            this.overlaySubscription.unsubscribe();
        }
    };
    BpsDropDownDirective.prototype.subscribeToPositions = function (position) {
        var _this = this;
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.pipe(takeUntil(this.destroy$)).subscribe(function (change) {
            _this.bpsOverlayClassName = '';
            _this.bpsDropdownMenu.setValue('bpsOverlayClassName', _this.bpsOverlayClassName);
            if (_this.bpsPlacement === 'bottomRight' && change.connectionPair.originY === 'top') {
                _this.bpsOverlayClassName = 'bps-forced-updated-position';
                _this.bpsDropdownMenu.setValue('bpsOverlayClassName', _this.bpsOverlayClassName);
            }
            if (_this.bpsPlacement === 'rightTop' && (change.connectionPair.overlayX === 'end' || change.connectionPair.originY === 'bottom')) {
                _this.bpsOverlayClassName = 'bps-forced-updated-position';
                _this.bpsDropdownMenu.setValue('bpsOverlayClassName', _this.bpsOverlayClassName);
            }
            _this.bpsDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
        });
    };
    BpsDropDownDirective.prototype.subscribeOverlayEvent = function (overlayRef) {
        var _this = this;
        this.overlaySubscription.unsubscribe();
        this.overlaySubscription = merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter(function (e) { return e.keyCode === ESCAPE && !hasModifierKey(e); })))
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () {
            _this.bpsDropdownMenu.setVisibleStateWhen(false);
        });
    };
    BpsDropDownDirective.prototype.getPortal = function () {
        if (!this.portal || this.portal.templateRef !== this.bpsDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.bpsDropdownMenu.templateRef, this.viewContainerRef);
        }
        return this.portal;
    };
    BpsDropDownDirective.prototype.openMenu = function () {
        if (!this.dropdownOpen) {
            var overlayRef = this.createOverlay();
            var overlayConfig = overlayRef.getConfig();
            this.bpsDropdownMenu.setValue('open', true);
            this.setPosition(overlayConfig.positionStrategy);
            overlayRef.attach(this.getPortal());
            this.dropdownOpen = true;
        }
    };
    BpsDropDownDirective.prototype.closeMenu = function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.dropdownOpen = false;
            this.bpsDropdownMenu.setValue('open', false);
        }
    };
    BpsDropDownDirective.prototype.setPosition = function (positionStrategy) {
        this.positionStrategy = positionStrategy;
        positionStrategy.withPositions(__spread(this.positions));
    };
    BpsDropDownDirective.prototype.updatePositionStrategy = function (positions) {
        if (this.positionStrategy) {
            this.positionStrategy.withPositions(positions);
        }
    };
    BpsDropDownDirective.prototype.setTriggerWidth = function () {
        if (this.platform.isBrowser) {
            var element = this.bpsMatchWidthElement ? this.bpsMatchWidthElement.nativeElement : this.el;
            this.triggerWidth = element.getBoundingClientRect().width;
        }
    };
    BpsDropDownDirective.prototype.initActionSubscribe = function () {
        var _this = this;
        var hostVisible$ = this.bpsTrigger === 'hover' ? this.hover$ : this.$click;
        var dropdownMenuVisible$ = this.bpsDropdownMenu.visible$;
        var menuClickVisible$ = this.bpsClickHide
            ? this.bpsDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false))
            : EMPTY;
        var supVisible$ = merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
        var subVisible$ = this.bpsDropdownMenu.nzMenuDropdownService.menuOpen$;
        combineLatest([supVisible$, subVisible$])
            .pipe(map(function (_a) {
            var _b = __read(_a, 2), supVisible = _b[0], subVisible = _b[1];
            return supVisible || subVisible;
        }), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe(function (visible) {
            if (!_this.bpsDisabled && _this.bpsVisible !== visible) {
                _this.bpsVisible = visible;
                _this.updateOverlayByVisible();
                _this.bpsVisibleChange.emit(_this.bpsVisible);
                _this.setTriggerWidth();
                _this.bpsDropdownMenu.setValue('triggerWidth', _this.triggerWidth);
            }
        });
    };
    BpsDropDownDirective.prototype.updateOverlayByVisible = function () {
        if (this.bpsVisible) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    };
    BpsDropDownDirective.prototype.updateDisabledState = function () {
        this.setDisabled(this.bpsDisabled);
    };
    BpsDropDownDirective.prototype.regeneratePosition = function (placement, positions) {
        return __spread([POSITION_MAP[placement]], positions);
    };
    BpsDropDownDirective.prototype.ngAfterViewInit = function () {
        if (this.bpsDropdownMenu) {
            this.setTriggerWidth();
            this.initActionSubscribe();
            this.updateDisabledState();
        }
    };
    BpsDropDownDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.dispose();
    };
    BpsDropDownDirective.prototype.ngOnChanges = function (changes) {
        var bpsVisible = changes.bpsVisible, bpsTrigger = changes.bpsTrigger, bpsPlacement = changes.bpsPlacement, bpsDisabled = changes.bpsDisabled, bpsOverlayClassName = changes.bpsOverlayClassName, bpsOverlayStyle = changes.bpsOverlayStyle, bpsTableFilter = changes.bpsTableFilter;
        if (this.bpsDropdownMenu) {
            if (bpsVisible) {
                this.updateOverlayByVisible();
                this.bpsDropdownMenu.visible$.next(this.bpsVisible);
            }
            if (bpsTrigger) {
                this.bpsDropdownMenu.setValue('bpsTrigger', this.bpsTrigger);
            }
            if (bpsTableFilter) {
                this.bpsDropdownMenu.setValue('bpsTableFilter', this.bpsTableFilter);
            }
            if (bpsOverlayClassName) {
                this.bpsDropdownMenu.setValue('bpsOverlayClassName', this.bpsOverlayClassName);
            }
            if (bpsOverlayStyle) {
                this.bpsDropdownMenu.setValue('bpsOverlayStyle', this.bpsOverlayStyle);
            }
            if (bpsPlacement) {
                this.bpsDropdownMenu.setValue('bpsPlacement', this.bpsPlacement);
                this.bpsDropdownMenu.setValue('dropDownPosition', this.bpsDropdownMenu.bpsPlacement.indexOf('top') !== -1 ? 'top' : 'bottom');
                this.positions = this.regeneratePosition(this.bpsPlacement, this.positions);
                this.updatePositionStrategy(this.positions);
            }
        }
        if (bpsDisabled) {
            this.updateDisabledState();
        }
    };
    BpsDropDownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: Overlay },
        { type: Platform },
        { type: BpsButtonComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: BpsButtonGroupComponent, decorators: [{ type: Optional }] },
        { type: ViewContainerRef }
    ]; };
    __decorate([
        Input()
    ], BpsDropDownDirective.prototype, "bpsDropdownMenu", void 0);
    __decorate([
        Input()
    ], BpsDropDownDirective.prototype, "bpsTrigger", void 0);
    __decorate([
        Input()
    ], BpsDropDownDirective.prototype, "bpsMatchWidthElement", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsDropDownDirective.prototype, "bpsBackdrop", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsDropDownDirective.prototype, "bpsClickHide", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsDropDownDirective.prototype, "bpsDisabled", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsDropDownDirective.prototype, "bpsVisible", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsDropDownDirective.prototype, "bpsTableFilter", void 0);
    __decorate([
        Input()
    ], BpsDropDownDirective.prototype, "bpsOverlayClassName", void 0);
    __decorate([
        Input()
    ], BpsDropDownDirective.prototype, "bpsOverlayStyle", void 0);
    __decorate([
        Input()
    ], BpsDropDownDirective.prototype, "bpsPlacement", void 0);
    __decorate([
        Output()
    ], BpsDropDownDirective.prototype, "bpsVisibleChange", void 0);
    BpsDropDownDirective = __decorate([
        Directive({
            selector: '[bps-dropdown]',
            exportAs: 'bpsDropdown'
        }),
        __param(4, Optional()), __param(4, Host()),
        __param(5, Optional())
    ], BpsDropDownDirective);
    return BpsDropDownDirective;
}());
export { BpsDropDownDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWRyb3Bkb3duLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1kcm9wZG93bi9icHMtZHJvcGRvd24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGlDQUFpQyxFQUNqQyxPQUFPLEVBQ1AsYUFBYSxFQUNiLFVBQVUsRUFDWCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsYUFBYSxFQUNiLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFP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LEVBQUU7OERBQXFCO0lBQ3BCO1FBQXhCLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRTs2REFBcUI7SUFDcEI7UUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFOzREQUFvQjtJQUNuQjtRQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7Z0VBQXdCO0lBQ3ZDO1FBQVIsS0FBSyxFQUFFO3FFQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTtpRUFBaUQ7SUFDaEQ7UUFBUixLQUFLLEVBQUU7OERBQThDO0lBQzVDO1FBQVQsTUFBTSxFQUFFO2tFQUF1RTtJQTlCckUsb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQztRQWlORyxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxJQUFJLEVBQUUsQ0FBQTtRQUNsQixXQUFBLFFBQVEsRUFBRSxDQUFBO09Bak5GLG9CQUFvQixDQW9SaEM7SUFBRCwyQkFBQztDQUFBLEFBcFJELElBb1JDO1NBcFJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc01vZGlmaWVyS2V5LCBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIENvbm5lY3RlZFBvc2l0aW9uLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLCBJbnB1dEJvb2xlYW4sIFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCwgbWVyZ2UsIEVNUFRZLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIG1hcFRvLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQnBzRHJvcGRvd25NZW51Q29tcG9uZW50LCBOelBsYWNlbWVudFR5cGUgfSBmcm9tICcuL2Jwcy1kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJwc0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcHNCdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLWRyb3Bkb3duXScsXHJcbiAgZXhwb3J0QXM6ICdicHNEcm9wZG93bidcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0Ryb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDtcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHRyaWdnZXJXaWR0aCA9IDA7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIGRyb3Bkb3duT3BlbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xyXG4gIHByaXZhdGUgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlNdO1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSBvdmVybGF5U3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHJlYWRvbmx5IGhvdmVyJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IG1lcmdlKFxyXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwsICdtb3VzZWVudGVyJykucGlwZShtYXBUbyh0cnVlKSksXHJcbiAgICBmcm9tRXZlbnQodGhpcy5lbCwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKGZhbHNlKSlcclxuICApO1xyXG4gIHJlYWRvbmx5ICRjbGljazogT2JzZXJ2YWJsZTxib29sZWFuPiA9IGZyb21FdmVudCh0aGlzLmVsLCAnY2xpY2snKS5waXBlKFxyXG4gICAgdGFwKGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSksXHJcbiAgICBtYXBUbyh0cnVlKVxyXG4gICk7XHJcbiAgQElucHV0KCkgYnBzRHJvcGRvd25NZW51OiBCcHNEcm9wZG93bk1lbnVDb21wb25lbnQ7XHJcbiAgQElucHV0KCkgYnBzVHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgpIGJwc01hdGNoV2lkdGhFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNCYWNrZHJvcCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NsaWNrSGlkZSA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Zpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzVGFibGVGaWx0ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBicHNPdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgYnBzT3ZlcmxheVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgQElucHV0KCkgYnBzUGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc1Zpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICAgIGlmICh0aGlzLmJwc1Zpc2libGUpIHtcclxuICAgICAgICB0aGlzLmJwc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJwc1Zpc2libGVDaGFuZ2UuZW1pdCh0aGlzLmJwc1Zpc2libGUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLCAnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheVxyXG4gICAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5lbClcclxuICAgICAgICAud2l0aExvY2tlZFBvc2l0aW9uKCksXHJcbiAgICAgIG1pbldpZHRoOiB0aGlzLnRyaWdnZXJXaWR0aCxcclxuICAgICAgaGFzQmFja2Ryb3A6IHRoaXMuYnBzVHJpZ2dlciA9PT0gJ2NsaWNrJyxcclxuICAgICAgYmFja2Ryb3BDbGFzczogdGhpcy5icHNCYWNrZHJvcCA/IHVuZGVmaW5lZCA6ICduei1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoKTogT3ZlcmxheVJlZiB7XHJcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldE92ZXJsYXlDb25maWcoKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG4gICAgICB0aGlzLnN1YnNjcmliZU92ZXJsYXlFdmVudCh0aGlzLm92ZXJsYXlSZWYpO1xyXG4gICAgICB0aGlzLnN1YnNjcmliZVRvUG9zaXRpb25zKGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk7XHJcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlDb25maWcob3ZlcmxheUNvbmZpZyk7XHJcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPdmVybGF5Q29uZmlnKG92ZXJsYXlDb25maWc6IE92ZXJsYXlDb25maWcpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIG92ZXJsYXlDb25maWcubWluV2lkdGggPSB0aGlzLnRyaWdnZXJXaWR0aDtcclxuICAgIG92ZXJsYXlDb25maWcuaGFzQmFja2Ryb3AgPSB0aGlzLmJwc1RyaWdnZXIgPT09ICdjbGljayc7XHJcbiAgICByZXR1cm4gb3ZlcmxheUNvbmZpZztcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XHJcbiAgICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5vdmVybGF5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZVRvUG9zaXRpb25zKHBvc2l0aW9uOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24gPSBwb3NpdGlvbi5wb3NpdGlvbkNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xyXG4gICAgICB0aGlzLmJwc092ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Jwc092ZXJsYXlDbGFzc05hbWUnLCB0aGlzLmJwc092ZXJsYXlDbGFzc05hbWUpO1xyXG4gICAgICBpZiAodGhpcy5icHNQbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCcgJiYgY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgPT09ICd0b3AnKSB7XHJcbiAgICAgICAgdGhpcy5icHNPdmVybGF5Q2xhc3NOYW1lID0gJ2Jwcy1mb3JjZWQtdXBkYXRlZC1wb3NpdGlvbic7XHJcbiAgICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Jwc092ZXJsYXlDbGFzc05hbWUnLCB0aGlzLmJwc092ZXJsYXlDbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmJwc1BsYWNlbWVudCA9PT0gJ3JpZ2h0VG9wJyAmJiAoY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlYID09PSAnZW5kJyB8fCBjaGFuZ2UuY29ubmVjdGlvblBhaXIub3JpZ2luWSA9PT0gJ2JvdHRvbScpKSB7XHJcbiAgICAgICAgdGhpcy5icHNPdmVybGF5Q2xhc3NOYW1lID0gJ2Jwcy1mb3JjZWQtdXBkYXRlZC1wb3NpdGlvbic7XHJcbiAgICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Jwc092ZXJsYXlDbGFzc05hbWUnLCB0aGlzLmJwc092ZXJsYXlDbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCdkcm9wRG93blBvc2l0aW9uJywgY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlFdmVudChvdmVybGF5UmVmOiBPdmVybGF5UmVmKTogdm9pZCB7XHJcbiAgICB0aGlzLm92ZXJsYXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMub3ZlcmxheVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxyXG4gICAgICBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKSxcclxuICAgICAgb3ZlcmxheVJlZi5kZXRhY2htZW50cygpLFxyXG4gICAgICBvdmVybGF5UmVmLmtleWRvd25FdmVudHMoKS5waXBlKGZpbHRlcihlID0+IGUua2V5Q29kZSA9PT0gRVNDQVBFICYmICFoYXNNb2RpZmllcktleShlKSkpXHJcbiAgICApXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmlzaWJsZVN0YXRlV2hlbihmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQb3J0YWwoKTogVGVtcGxhdGVQb3J0YWwge1xyXG4gICAgaWYgKCF0aGlzLnBvcnRhbCB8fCB0aGlzLnBvcnRhbC50ZW1wbGF0ZVJlZiAhPT0gdGhpcy5icHNEcm9wZG93bk1lbnUudGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5icHNEcm9wZG93bk1lbnUudGVtcGxhdGVSZWYsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5wb3J0YWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5NZW51KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRyb3Bkb3duT3Blbikge1xyXG4gICAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KCk7XHJcbiAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBvdmVybGF5UmVmLmdldENvbmZpZygpO1xyXG4gICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgnb3BlbicsIHRydWUpO1xyXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKG92ZXJsYXlDb25maWcucG9zaXRpb25TdHJhdGVneSBhcyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpO1xyXG4gICAgICBvdmVybGF5UmVmLmF0dGFjaCh0aGlzLmdldFBvcnRhbCgpKTtcclxuICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZU1lbnUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ29wZW4nLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFBvc2l0aW9uKHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gcG9zaXRpb25TdHJhdGVneTtcclxuICAgIHBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhbLi4udGhpcy5wb3NpdGlvbnNdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUG9zaXRpb25TdHJhdGVneShwb3NpdGlvbnM6IENvbm5lY3RlZFBvc2l0aW9uW10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBvc2l0aW9uU3RyYXRlZ3kpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VHJpZ2dlcldpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmJwc01hdGNoV2lkdGhFbGVtZW50ID8gdGhpcy5icHNNYXRjaFdpZHRoRWxlbWVudC5uYXRpdmVFbGVtZW50IDogdGhpcy5lbDtcclxuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdEFjdGlvblN1YnNjcmliZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGhvc3RWaXNpYmxlJCA9IHRoaXMuYnBzVHJpZ2dlciA9PT0gJ2hvdmVyJyA/IHRoaXMuaG92ZXIkIDogdGhpcy4kY2xpY2s7XHJcbiAgICBjb25zdCBkcm9wZG93bk1lbnVWaXNpYmxlJCA9IHRoaXMuYnBzRHJvcGRvd25NZW51LnZpc2libGUkO1xyXG4gICAgY29uc3QgbWVudUNsaWNrVmlzaWJsZSQgPSB0aGlzLmJwc0NsaWNrSGlkZVxyXG4gICAgICA/IHRoaXMuYnBzRHJvcGRvd25NZW51Lm56TWVudURyb3Bkb3duU2VydmljZS5tZW51SXRlbUNsaWNrJC5waXBlKG1hcFRvKGZhbHNlKSlcclxuICAgICAgOiBFTVBUWTtcclxuICAgIGNvbnN0IHN1cFZpc2libGUkID0gbWVyZ2UoZHJvcGRvd25NZW51VmlzaWJsZSQsIGhvc3RWaXNpYmxlJCwgbWVudUNsaWNrVmlzaWJsZSQpO1xyXG4gICAgY29uc3Qgc3ViVmlzaWJsZSQgPSB0aGlzLmJwc0Ryb3Bkb3duTWVudS5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudU9wZW4kO1xyXG4gICAgY29tYmluZUxhdGVzdChbc3VwVmlzaWJsZSQsIHN1YlZpc2libGUkXSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChbc3VwVmlzaWJsZSwgc3ViVmlzaWJsZV0pID0+IHN1cFZpc2libGUgfHwgc3ViVmlzaWJsZSksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJwc0Rpc2FibGVkICYmIHRoaXMuYnBzVmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5icHNWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xyXG4gICAgICAgICAgdGhpcy5icHNWaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy5icHNWaXNpYmxlKTtcclxuICAgICAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XHJcbiAgICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgndHJpZ2dlcldpZHRoJywgdGhpcy50cmlnZ2VyV2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzVmlzaWJsZSkge1xyXG4gICAgICB0aGlzLm9wZW5NZW51KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0RGlzYWJsZWQodGhpcy5icHNEaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICByZWdlbmVyYXRlUG9zaXRpb24ocGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUsIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdKTogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdIHtcclxuICAgIHJldHVybiBbUE9TSVRJT05fTUFQW3BsYWNlbWVudF0sIC4uLnBvc2l0aW9uc107XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgYnBzQnV0dG9uQ29tcG9uZW50OiBCcHNCdXR0b25Db21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJwc0J1dHRvbkdyb3VwQ29tcG9uZW50OiBCcHNCdXR0b25Hcm91cENvbXBvbmVudCxcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWRyb3Bkb3duLXRyaWdnZXInKTtcclxuICAgIGlmICh0aGlzLmJwc0J1dHRvbkNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmJwc0J1dHRvbkNvbXBvbmVudC5pc0luRHJvcGRvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYnBzQnV0dG9uR3JvdXBDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5icHNCdXR0b25Hcm91cENvbXBvbmVudC5pc0luRHJvcGRvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzRHJvcGRvd25NZW51KSB7XHJcbiAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XHJcbiAgICAgIHRoaXMuaW5pdEFjdGlvblN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgYnBzVmlzaWJsZSxcclxuICAgICAgYnBzVHJpZ2dlcixcclxuICAgICAgYnBzUGxhY2VtZW50LFxyXG4gICAgICBicHNEaXNhYmxlZCxcclxuICAgICAgYnBzT3ZlcmxheUNsYXNzTmFtZSxcclxuICAgICAgYnBzT3ZlcmxheVN0eWxlLFxyXG4gICAgICBicHNUYWJsZUZpbHRlclxyXG4gICAgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAodGhpcy5icHNEcm9wZG93bk1lbnUpIHtcclxuICAgICAgaWYgKGJwc1Zpc2libGUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlCeVZpc2libGUoKTtcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS52aXNpYmxlJC5uZXh0KHRoaXMuYnBzVmlzaWJsZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJwc1RyaWdnZXIpIHtcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgnYnBzVHJpZ2dlcicsIHRoaXMuYnBzVHJpZ2dlcik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJwc1RhYmxlRmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Jwc1RhYmxlRmlsdGVyJywgdGhpcy5icHNUYWJsZUZpbHRlcik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJwc092ZXJsYXlDbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgnYnBzT3ZlcmxheUNsYXNzTmFtZScsIHRoaXMuYnBzT3ZlcmxheUNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJwc092ZXJsYXlTdHlsZSkge1xyXG4gICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCdicHNPdmVybGF5U3R5bGUnLCB0aGlzLmJwc092ZXJsYXlTdHlsZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJwc1BsYWNlbWVudCkge1xyXG4gICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCdicHNQbGFjZW1lbnQnLCB0aGlzLmJwc1BsYWNlbWVudCk7XHJcbiAgICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoXHJcbiAgICAgICAgICAnZHJvcERvd25Qb3NpdGlvbicsXHJcbiAgICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5icHNQbGFjZW1lbnQuaW5kZXhPZigndG9wJykgIT09IC0xID8gJ3RvcCcgOiAnYm90dG9tJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSB0aGlzLnJlZ2VuZXJhdGVQb3NpdGlvbih0aGlzLmJwc1BsYWNlbWVudCwgdGhpcy5wb3NpdGlvbnMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLnBvc2l0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChicHNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
import { __decorate, __param, __read, __spread } from "tslib";
import { hasModifierKey, ESCAPE } from '@angular/cdk/keycodes';
import { ConnectedPosition, ConnectionPositionPair, FlexibleConnectedPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Host, Input, OnChanges, OnDestroy, Optional, Output, Renderer2, SimpleChanges, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
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
        this.bpsForcedUpdatedPosition = new EventEmitter();
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
            var forcedUpdatedPosition = false;
            _this.bpsOverlayClassName = '';
            _this.bpsDropdownMenu.setValue('bpsOverlayClassName', _this.bpsOverlayClassName);
            if (_this.bpsPlacement === 'bottomRight' && change.connectionPair.originY === 'top') {
                _this.bpsOverlayClassName = 'bps-forced-updated-position';
                forcedUpdatedPosition = true;
                _this.bpsDropdownMenu.setValue('bpsOverlayClassName', _this.bpsOverlayClassName);
            }
            if (_this.bpsPlacement === 'rightTop' && (change.connectionPair.overlayX === 'end' || change.connectionPair.originY === 'bottom')) {
                _this.bpsOverlayClassName = 'bps-forced-updated-position';
                forcedUpdatedPosition = true;
                _this.bpsDropdownMenu.setValue('bpsOverlayClassName', _this.bpsOverlayClassName);
            }
            _this.bpsForcedUpdatedPosition.emit(forcedUpdatedPosition);
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
    __decorate([
        Output()
    ], BpsDropDownDirective.prototype, "bpsForcedUpdatedPosition", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWRyb3Bkb3duLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1kcm9wZG93bi9icHMtZHJvcGRvd24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGlDQUFpQyxFQUNqQyxPQUFPLEVBQ1AsYUFBYSxFQUNiLFVBQVUsRUFDWCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsYUFBYSxFQUNiLGdCQUFnQixFQUVoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakcsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFNbkY7SUFnTkUsOEJBQ1MsVUFBc0IsRUFDckIsUUFBbUIsRUFDbkIsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDRSxrQkFBc0MsRUFDOUMsdUJBQWdELEVBQzVELGdCQUFrQztRQU5uQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0UsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUM5Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQzVELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFyTnBDLGVBQVUsR0FBc0IsSUFBSSxDQUFDO1FBQ3JDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsY0FBUyxZQUFpQywwQkFBMEIsRUFBRTtRQUN0RSx5QkFBb0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQzFDLHdCQUFtQixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDeEMsV0FBTSxHQUF3QixLQUFLLENBQzFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDbEQsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNwRCxDQUFDO1FBQ08sV0FBTSxHQUF3QixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3JFLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxFQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQ1osQ0FBQztRQUVPLGVBQVUsR0FBc0IsT0FBTyxDQUFDO1FBRXhCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLG9CQUFlLEdBQThCLEVBQUUsQ0FBQztRQUNoRCxpQkFBWSxHQUFvQixZQUFZLENBQUM7UUFDbkMscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0QsNkJBQXdCLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUEwTHRGLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBL0xELDBDQUFXLEdBQVgsVUFBWSxRQUFpQjtRQUMzQixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUMvQjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVPLCtDQUFnQixHQUF4QjtRQUNFLE9BQU8sSUFBSSxhQUFhLENBQUM7WUFDdkIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU87aUJBQzNCLFFBQVEsRUFBRTtpQkFDVixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2lCQUM1QixrQkFBa0IsRUFBRTtZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDM0IsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEtBQUssT0FBTztZQUN4QyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7WUFDL0UsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO1NBQzNELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyw0Q0FBYSxHQUFyQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLGdCQUFxRCxDQUFDLENBQUM7WUFDeEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsa0RBQW1CLEdBQW5CLFVBQW9CLGFBQTRCO1FBQzlDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEtBQUssT0FBTyxDQUFDO1FBQ3hELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQ0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFTyxtREFBb0IsR0FBNUIsVUFBNkIsUUFBMkM7UUFBeEUsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbEcsSUFBSSxxQkFBcUIsR0FBRyxLQUFLLENBQUM7WUFDbEMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxLQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUMvRSxJQUFJLEtBQUksQ0FBQyxZQUFZLEtBQUssYUFBYSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDbEYsS0FBSSxDQUFDLG1CQUFtQixHQUFHLDZCQUE2QixDQUFDO2dCQUN6RCxxQkFBcUIsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQ2hGO1lBQ0QsSUFBSSxLQUFJLENBQUMsWUFBWSxLQUFLLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxLQUFLLEtBQUssSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsRUFBRTtnQkFDaEksS0FBSSxDQUFDLG1CQUFtQixHQUFHLDZCQUE2QixDQUFDO2dCQUN6RCxxQkFBcUIsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQ2hGO1lBQ0QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzFELEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sb0RBQXFCLEdBQTdCLFVBQThCLFVBQXNCO1FBQXBELGlCQVdDO1FBVkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQzlCLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFDMUIsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUN4QixVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUMsQ0FDekY7YUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUM7WUFDVCxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHdDQUFTLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7WUFDaEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMzRjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRU8sdUNBQVEsR0FBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEMsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxnQkFBcUQsQ0FBQyxDQUFDO1lBQ3RGLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRU8sd0NBQVMsR0FBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRU8sMENBQVcsR0FBbkIsVUFBb0IsZ0JBQW1EO1FBQ3JFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxnQkFBZ0IsQ0FBQyxhQUFhLFVBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFTyxxREFBc0IsR0FBOUIsVUFBK0IsU0FBOEI7UUFDM0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFTyw4Q0FBZSxHQUF2QjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlGLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQztJQUVELGtEQUFtQixHQUFuQjtRQUFBLGlCQXdCQztRQXZCQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3RSxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVk7WUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNWLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNqRixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQztRQUN6RSxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDdEMsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLEVBQXdCO2dCQUF4QixrQkFBd0IsRUFBdkIsa0JBQVUsRUFBRSxrQkFBVTtZQUFNLE9BQUEsVUFBVSxJQUFJLFVBQVU7UUFBeEIsQ0FBd0IsQ0FBQyxFQUMzRCxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQ2hCLG9CQUFvQixFQUFFLEVBQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNoQixJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsSUFBSSxLQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sRUFBRTtnQkFDcEQsS0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUM5QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDNUMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN2QixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscURBQXNCLEdBQXRCO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVELGtEQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxpREFBa0IsR0FBbEIsVUFBbUIsU0FBMEIsRUFBRSxTQUFtQztRQUNoRixpQkFBUSxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUssU0FBUyxFQUFFO0lBQ2pELENBQUM7SUFvQkQsOENBQWUsR0FBZjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUU5QixJQUFBLCtCQUFVLEVBQ1YsK0JBQVUsRUFDVixtQ0FBWSxFQUNaLGlDQUFXLEVBQ1gsaURBQW1CLEVBQ25CLHlDQUFlLEVBQ2YsdUNBQWMsQ0FDSjtRQUNaLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNyRDtZQUNELElBQUksVUFBVSxFQUFFO2dCQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDOUQ7WUFDRCxJQUFJLGNBQWMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3RFO1lBQ0QsSUFBSSxtQkFBbUIsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDaEY7WUFDRCxJQUFJLGVBQWUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3hFO1lBQ0QsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUMzQixrQkFBa0IsRUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FDM0UsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM3QztTQUNGO1FBQ0QsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7O2dCQXZFb0IsVUFBVTtnQkFDWCxTQUFTO2dCQUNWLE9BQU87Z0JBQ04sUUFBUTtnQkFDc0Isa0JBQWtCLHVCQUFqRSxRQUFRLFlBQUksSUFBSTtnQkFDNEIsdUJBQXVCLHVCQUFuRSxRQUFRO2dCQUNpQixnQkFBZ0I7O0lBcE1uQztRQUFSLEtBQUssRUFBRTtpRUFBMkM7SUFDMUM7UUFBUixLQUFLLEVBQUU7NERBQXlDO0lBQ3hDO1FBQVIsS0FBSyxFQUFFO3NFQUFrQztJQUNqQjtRQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7NkRBQW9CO0lBQ25CO1FBQXhCLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRTs4REFBcUI7SUFDcEI7UUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFOzZEQUFxQjtJQUNwQjtRQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7NERBQW9CO0lBQ25CO1FBQXhCLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRTtnRUFBd0I7SUFDdkM7UUFBUixLQUFLLEVBQUU7cUVBQTBCO0lBQ3pCO1FBQVIsS0FBSyxFQUFFO2lFQUFpRDtJQUNoRDtRQUFSLEtBQUssRUFBRTs4REFBOEM7SUFDNUM7UUFBVCxNQUFNLEVBQUU7a0VBQXVFO0lBQ3RFO1FBQVQsTUFBTSxFQUFFOzBFQUErRTtJQS9CN0Usb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQztRQXNORyxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxJQUFJLEVBQUUsQ0FBQTtRQUNsQixXQUFBLFFBQVEsRUFBRSxDQUFBO09BdE5GLG9CQUFvQixDQXlSaEM7SUFBRCwyQkFBQztDQUFBLEFBelJELElBeVJDO1NBelJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc01vZGlmaWVyS2V5LCBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIENvbm5lY3RlZFBvc2l0aW9uLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLCBJbnB1dEJvb2xlYW4sIFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCwgbWVyZ2UsIEVNUFRZLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIG1hcFRvLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQnBzRHJvcGRvd25NZW51Q29tcG9uZW50LCBOelBsYWNlbWVudFR5cGUgfSBmcm9tICcuL2Jwcy1kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJwc0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcHNCdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLWRyb3Bkb3duXScsXHJcbiAgZXhwb3J0QXM6ICdicHNEcm9wZG93bidcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0Ryb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDtcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHRyaWdnZXJXaWR0aCA9IDA7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIGRyb3Bkb3duT3BlbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xyXG4gIHByaXZhdGUgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlNdO1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSBvdmVybGF5U3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHJlYWRvbmx5IGhvdmVyJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IG1lcmdlKFxyXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwsICdtb3VzZWVudGVyJykucGlwZShtYXBUbyh0cnVlKSksXHJcbiAgICBmcm9tRXZlbnQodGhpcy5lbCwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKGZhbHNlKSlcclxuICApO1xyXG4gIHJlYWRvbmx5ICRjbGljazogT2JzZXJ2YWJsZTxib29sZWFuPiA9IGZyb21FdmVudCh0aGlzLmVsLCAnY2xpY2snKS5waXBlKFxyXG4gICAgdGFwKGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSksXHJcbiAgICBtYXBUbyh0cnVlKVxyXG4gICk7XHJcbiAgQElucHV0KCkgYnBzRHJvcGRvd25NZW51OiBCcHNEcm9wZG93bk1lbnVDb21wb25lbnQ7XHJcbiAgQElucHV0KCkgYnBzVHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgpIGJwc01hdGNoV2lkdGhFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNCYWNrZHJvcCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NsaWNrSGlkZSA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Zpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzVGFibGVGaWx0ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBicHNPdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgYnBzT3ZlcmxheVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgQElucHV0KCkgYnBzUGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc1Zpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzRm9yY2VkVXBkYXRlZFBvc2l0aW9uOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHNldERpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgICBpZiAodGhpcy5icHNWaXNpYmxlKSB7XHJcbiAgICAgICAgdGhpcy5icHNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5icHNWaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy5icHNWaXNpYmxlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlCeVZpc2libGUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbCwgJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXlcclxuICAgICAgICAucG9zaXRpb24oKVxyXG4gICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZWwpXHJcbiAgICAgICAgLndpdGhMb2NrZWRQb3NpdGlvbigpLFxyXG4gICAgICBtaW5XaWR0aDogdGhpcy50cmlnZ2VyV2lkdGgsXHJcbiAgICAgIGhhc0JhY2tkcm9wOiB0aGlzLmJwc1RyaWdnZXIgPT09ICdjbGljaycsXHJcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IHRoaXMuYnBzQmFja2Ryb3AgPyB1bmRlZmluZWQgOiAnbnotb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCcsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xyXG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnKTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVPdmVybGF5RXZlbnQodGhpcy5vdmVybGF5UmVmKTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVUb1Bvc2l0aW9ucyhjb25maWcucG9zaXRpb25TdHJhdGVneSBhcyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpO1xyXG4gICAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKTtcclxuICAgICAgdGhpcy51cGRhdGVPdmVybGF5Q29uZmlnKG92ZXJsYXlDb25maWcpO1xyXG4gICAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlT3ZlcmxheUNvbmZpZyhvdmVybGF5Q29uZmlnOiBPdmVybGF5Q29uZmlnKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICBvdmVybGF5Q29uZmlnLm1pbldpZHRoID0gdGhpcy50cmlnZ2VyV2lkdGg7XHJcbiAgICBvdmVybGF5Q29uZmlnLmhhc0JhY2tkcm9wID0gdGhpcy5icHNUcmlnZ2VyID09PSAnY2xpY2snO1xyXG4gICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xyXG4gICAgICB0aGlzLnBvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1Bvc2l0aW9ucyhwb3NpdGlvbjogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnBvc2l0aW9uU3Vic2NyaXB0aW9uID0gcG9zaXRpb24ucG9zaXRpb25DaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoY2hhbmdlID0+IHtcclxuICAgICAgbGV0IGZvcmNlZFVwZGF0ZWRQb3NpdGlvbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJwc092ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Jwc092ZXJsYXlDbGFzc05hbWUnLCB0aGlzLmJwc092ZXJsYXlDbGFzc05hbWUpO1xyXG4gICAgICBpZiAodGhpcy5icHNQbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCcgJiYgY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgPT09ICd0b3AnKSB7XHJcbiAgICAgICAgdGhpcy5icHNPdmVybGF5Q2xhc3NOYW1lID0gJ2Jwcy1mb3JjZWQtdXBkYXRlZC1wb3NpdGlvbic7XHJcbiAgICAgICAgZm9yY2VkVXBkYXRlZFBvc2l0aW9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgnYnBzT3ZlcmxheUNsYXNzTmFtZScsIHRoaXMuYnBzT3ZlcmxheUNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuYnBzUGxhY2VtZW50ID09PSAncmlnaHRUb3AnICYmIChjaGFuZ2UuY29ubmVjdGlvblBhaXIub3ZlcmxheVggPT09ICdlbmQnIHx8IGNoYW5nZS5jb25uZWN0aW9uUGFpci5vcmlnaW5ZID09PSAnYm90dG9tJykpIHtcclxuICAgICAgICB0aGlzLmJwc092ZXJsYXlDbGFzc05hbWUgPSAnYnBzLWZvcmNlZC11cGRhdGVkLXBvc2l0aW9uJztcclxuICAgICAgICBmb3JjZWRVcGRhdGVkUG9zaXRpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCdicHNPdmVybGF5Q2xhc3NOYW1lJywgdGhpcy5icHNPdmVybGF5Q2xhc3NOYW1lKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJwc0ZvcmNlZFVwZGF0ZWRQb3NpdGlvbi5lbWl0KGZvcmNlZFVwZGF0ZWRQb3NpdGlvbik7XHJcbiAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCdkcm9wRG93blBvc2l0aW9uJywgY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkpOyAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUV2ZW50KG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5vdmVybGF5U3Vic2NyaXB0aW9uID0gbWVyZ2UoXHJcbiAgICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLFxyXG4gICAgICBvdmVybGF5UmVmLmRldGFjaG1lbnRzKCksXHJcbiAgICAgIG92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGUgPT4gZS5rZXlDb2RlID09PSBFU0NBUEUgJiYgIWhhc01vZGlmaWVyS2V5KGUpKSlcclxuICAgIClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWaXNpYmxlU3RhdGVXaGVuKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBvcnRhbCgpOiBUZW1wbGF0ZVBvcnRhbCB7XHJcbiAgICBpZiAoIXRoaXMucG9ydGFsIHx8IHRoaXMucG9ydGFsLnRlbXBsYXRlUmVmICE9PSB0aGlzLmJwc0Ryb3Bkb3duTWVudS50ZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmJwc0Ryb3Bkb3duTWVudS50ZW1wbGF0ZVJlZiwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnBvcnRhbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3Blbk1lbnUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZHJvcGRvd25PcGVuKSB7XHJcbiAgICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoKTtcclxuICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XHJcbiAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCdvcGVuJywgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ob3ZlcmxheUNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk7XHJcbiAgICAgIG92ZXJsYXlSZWYuYXR0YWNoKHRoaXMuZ2V0UG9ydGFsKCkpO1xyXG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3NlTWVudSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgnb3BlbicsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UG9zaXRpb24ocG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSBwb3NpdGlvblN0cmF0ZWd5O1xyXG4gICAgcG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsuLi50aGlzLnBvc2l0aW9uc10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHBvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucG9zaXRpb25TdHJhdGVneSkge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYnBzTWF0Y2hXaWR0aEVsZW1lbnQgPyB0aGlzLmJwc01hdGNoV2lkdGhFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsO1xyXG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0QWN0aW9uU3Vic2NyaWJlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaG9zdFZpc2libGUkID0gdGhpcy5icHNUcmlnZ2VyID09PSAnaG92ZXInID8gdGhpcy5ob3ZlciQgOiB0aGlzLiRjbGljaztcclxuICAgIGNvbnN0IGRyb3Bkb3duTWVudVZpc2libGUkID0gdGhpcy5icHNEcm9wZG93bk1lbnUudmlzaWJsZSQ7XHJcbiAgICBjb25zdCBtZW51Q2xpY2tWaXNpYmxlJCA9IHRoaXMuYnBzQ2xpY2tIaWRlXHJcbiAgICAgID8gdGhpcy5icHNEcm9wZG93bk1lbnUubnpNZW51RHJvcGRvd25TZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnBpcGUobWFwVG8oZmFsc2UpKVxyXG4gICAgICA6IEVNUFRZO1xyXG4gICAgY29uc3Qgc3VwVmlzaWJsZSQgPSBtZXJnZShkcm9wZG93bk1lbnVWaXNpYmxlJCwgaG9zdFZpc2libGUkLCBtZW51Q2xpY2tWaXNpYmxlJCk7XHJcbiAgICBjb25zdCBzdWJWaXNpYmxlJCA9IHRoaXMuYnBzRHJvcGRvd25NZW51Lm56TWVudURyb3Bkb3duU2VydmljZS5tZW51T3BlbiQ7XHJcbiAgICBjb21iaW5lTGF0ZXN0KFtzdXBWaXNpYmxlJCwgc3ViVmlzaWJsZSRdKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKFtzdXBWaXNpYmxlLCBzdWJWaXNpYmxlXSkgPT4gc3VwVmlzaWJsZSB8fCBzdWJWaXNpYmxlKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoNTApLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuYnBzRGlzYWJsZWQgJiYgdGhpcy5icHNWaXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLmJwc1Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk7XHJcbiAgICAgICAgICB0aGlzLmJwc1Zpc2libGVDaGFuZ2UuZW1pdCh0aGlzLmJwc1Zpc2libGUpO1xyXG4gICAgICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCd0cmlnZ2VyV2lkdGgnLCB0aGlzLnRyaWdnZXJXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU92ZXJsYXlCeVZpc2libGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMub3Blbk1lbnUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNhYmxlZFN0YXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXREaXNhYmxlZCh0aGlzLmJwc0Rpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIHJlZ2VuZXJhdGVQb3NpdGlvbihwbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSwgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10pOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10ge1xyXG4gICAgcmV0dXJuIFtQT1NJVElPTl9NQVBbcGxhY2VtZW50XSwgLi4ucG9zaXRpb25zXTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBicHNCdXR0b25Db21wb25lbnQ6IEJwc0J1dHRvbkNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYnBzQnV0dG9uR3JvdXBDb21wb25lbnQ6IEJwc0J1dHRvbkdyb3VwQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZHJvcGRvd24tdHJpZ2dlcicpO1xyXG4gICAgaWYgKHRoaXMuYnBzQnV0dG9uQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuYnBzQnV0dG9uQ29tcG9uZW50LmlzSW5Ecm9wZG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5icHNCdXR0b25Hcm91cENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmJwc0J1dHRvbkdyb3VwQ29tcG9uZW50LmlzSW5Ecm9wZG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNEcm9wZG93bk1lbnUpIHtcclxuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgICAgdGhpcy5pbml0QWN0aW9uU3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBicHNWaXNpYmxlLFxyXG4gICAgICBicHNUcmlnZ2VyLFxyXG4gICAgICBicHNQbGFjZW1lbnQsXHJcbiAgICAgIGJwc0Rpc2FibGVkLFxyXG4gICAgICBicHNPdmVybGF5Q2xhc3NOYW1lLFxyXG4gICAgICBicHNPdmVybGF5U3R5bGUsXHJcbiAgICAgIGJwc1RhYmxlRmlsdGVyXHJcbiAgICB9ID0gY2hhbmdlcztcclxuICAgIGlmICh0aGlzLmJwc0Ryb3Bkb3duTWVudSkge1xyXG4gICAgICBpZiAoYnBzVmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xyXG4gICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnZpc2libGUkLm5leHQodGhpcy5icHNWaXNpYmxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnBzVHJpZ2dlcikge1xyXG4gICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCdicHNUcmlnZ2VyJywgdGhpcy5icHNUcmlnZ2VyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnBzVGFibGVGaWx0ZXIpIHtcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgnYnBzVGFibGVGaWx0ZXInLCB0aGlzLmJwc1RhYmxlRmlsdGVyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnBzT3ZlcmxheUNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCdicHNPdmVybGF5Q2xhc3NOYW1lJywgdGhpcy5icHNPdmVybGF5Q2xhc3NOYW1lKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnBzT3ZlcmxheVN0eWxlKSB7XHJcbiAgICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Jwc092ZXJsYXlTdHlsZScsIHRoaXMuYnBzT3ZlcmxheVN0eWxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnBzUGxhY2VtZW50KSB7XHJcbiAgICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Jwc1BsYWNlbWVudCcsIHRoaXMuYnBzUGxhY2VtZW50KTtcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZShcclxuICAgICAgICAgICdkcm9wRG93blBvc2l0aW9uJyxcclxuICAgICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LmJwc1BsYWNlbWVudC5pbmRleE9mKCd0b3AnKSAhPT0gLTEgPyAndG9wJyA6ICdib3R0b20nXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IHRoaXMucmVnZW5lcmF0ZVBvc2l0aW9uKHRoaXMuYnBzUGxhY2VtZW50LCB0aGlzLnBvc2l0aW9ucyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMucG9zaXRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGJwc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
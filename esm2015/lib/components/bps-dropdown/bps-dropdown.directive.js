import { __decorate, __param } from "tslib";
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
let BpsDropDownDirective = class BpsDropDownDirective {
    constructor(elementRef, renderer, overlay, platform, bpsButtonComponent, bpsButtonGroupComponent, viewContainerRef) {
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
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.positionSubscription = Subscription.EMPTY;
        this.overlaySubscription = Subscription.EMPTY;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap(e => e.stopPropagation()), mapTo(true));
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
    setDisabled(disabled) {
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
    }
    getOverlayConfig() {
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
    }
    createOverlay() {
        if (!this.overlayRef) {
            const config = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(config);
            this.subscribeOverlayEvent(this.overlayRef);
            this.subscribeToPositions(config.positionStrategy);
            return this.overlayRef;
        }
        else {
            const overlayConfig = this.overlayRef.getConfig();
            this.updateOverlayConfig(overlayConfig);
            return this.overlayRef;
        }
    }
    updateOverlayConfig(overlayConfig) {
        overlayConfig.minWidth = this.triggerWidth;
        overlayConfig.hasBackdrop = this.bpsTrigger === 'click';
        return overlayConfig;
    }
    dispose() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.positionSubscription.unsubscribe();
            this.overlaySubscription.unsubscribe();
        }
    }
    subscribeToPositions(position) {
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.pipe(takeUntil(this.destroy$)).subscribe(change => {
            this.bpsOverlayClassName = '';
            this.bpsDropdownMenu.setValue('bpsOverlayClassName', this.bpsOverlayClassName);
            if (this.bpsPlacement === 'bottomRight' && change.connectionPair.originY === 'top') {
                this.bpsOverlayClassName = 'bps-forced-updated-position';
                this.bpsDropdownMenu.setValue('bpsOverlayClassName', this.bpsOverlayClassName);
            }
            if (this.bpsPlacement === 'rightTop' && (change.connectionPair.overlayX === 'end' || change.connectionPair.originY === 'bottom')) {
                this.bpsOverlayClassName = 'bps-forced-updated-position';
                this.bpsDropdownMenu.setValue('bpsOverlayClassName', this.bpsOverlayClassName);
            }
            this.bpsDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
        });
    }
    subscribeOverlayEvent(overlayRef) {
        this.overlaySubscription.unsubscribe();
        this.overlaySubscription = merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter(e => e.keyCode === ESCAPE && !hasModifierKey(e))))
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.bpsDropdownMenu.setVisibleStateWhen(false);
        });
    }
    getPortal() {
        if (!this.portal || this.portal.templateRef !== this.bpsDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.bpsDropdownMenu.templateRef, this.viewContainerRef);
        }
        return this.portal;
    }
    openMenu() {
        if (!this.dropdownOpen) {
            const overlayRef = this.createOverlay();
            const overlayConfig = overlayRef.getConfig();
            this.bpsDropdownMenu.setValue('open', true);
            this.setPosition(overlayConfig.positionStrategy);
            overlayRef.attach(this.getPortal());
            this.dropdownOpen = true;
        }
    }
    closeMenu() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.dropdownOpen = false;
            this.bpsDropdownMenu.setValue('open', false);
        }
    }
    setPosition(positionStrategy) {
        this.positionStrategy = positionStrategy;
        positionStrategy.withPositions([...this.positions]);
    }
    updatePositionStrategy(positions) {
        if (this.positionStrategy) {
            this.positionStrategy.withPositions(positions);
        }
    }
    setTriggerWidth() {
        if (this.platform.isBrowser) {
            const element = this.bpsMatchWidthElement ? this.bpsMatchWidthElement.nativeElement : this.el;
            this.triggerWidth = element.getBoundingClientRect().width;
        }
    }
    initActionSubscribe() {
        const hostVisible$ = this.bpsTrigger === 'hover' ? this.hover$ : this.$click;
        const dropdownMenuVisible$ = this.bpsDropdownMenu.visible$;
        const menuClickVisible$ = this.bpsClickHide
            ? this.bpsDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false))
            : EMPTY;
        const supVisible$ = merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
        const subVisible$ = this.bpsDropdownMenu.nzMenuDropdownService.menuOpen$;
        combineLatest([supVisible$, subVisible$])
            .pipe(map(([supVisible, subVisible]) => supVisible || subVisible), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe(visible => {
            if (!this.bpsDisabled && this.bpsVisible !== visible) {
                this.bpsVisible = visible;
                this.updateOverlayByVisible();
                this.bpsVisibleChange.emit(this.bpsVisible);
                this.setTriggerWidth();
                this.bpsDropdownMenu.setValue('triggerWidth', this.triggerWidth);
            }
        });
    }
    updateOverlayByVisible() {
        if (this.bpsVisible) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    }
    updateDisabledState() {
        this.setDisabled(this.bpsDisabled);
    }
    regeneratePosition(placement, positions) {
        return [POSITION_MAP[placement], ...positions];
    }
    ngAfterViewInit() {
        if (this.bpsDropdownMenu) {
            this.setTriggerWidth();
            this.initActionSubscribe();
            this.updateDisabledState();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.dispose();
    }
    ngOnChanges(changes) {
        const { bpsVisible, bpsTrigger, bpsPlacement, bpsDisabled, bpsOverlayClassName, bpsOverlayStyle, bpsTableFilter } = changes;
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
    }
};
BpsDropDownDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Overlay },
    { type: Platform },
    { type: BpsButtonComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: BpsButtonGroupComponent, decorators: [{ type: Optional }] },
    { type: ViewContainerRef }
];
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
export { BpsDropDownDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWRyb3Bkb3duLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1kcm9wZG93bi9icHMtZHJvcGRvd24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGlDQUFpQyxFQUNqQyxPQUFPLEVBQ1AsYUFBYSxFQUNiLFVBQVUsRUFDWCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsYUFBYSxFQUNiLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFP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QjtBQUNuQjtJQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7NERBQXdCO0FBQ3ZDO0lBQVIsS0FBSyxFQUFFO2lFQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTs2REFBaUQ7QUFDaEQ7SUFBUixLQUFLLEVBQUU7MERBQThDO0FBQzVDO0lBQVQsTUFBTSxFQUFFOzhEQUF1RTtBQTlCckUsb0JBQW9CO0lBSmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLGFBQWE7S0FDeEIsQ0FBQztJQWlORyxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxJQUFJLEVBQUUsQ0FBQTtJQUNsQixXQUFBLFFBQVEsRUFBRSxDQUFBO0dBak5GLG9CQUFvQixDQW9SaEM7U0FwUlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzTW9kaWZpZXJLZXksIEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29ubmVjdGVkUG9zaXRpb24sXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgT3ZlcmxheSxcclxuICBPdmVybGF5Q29uZmlnLFxyXG4gIE92ZXJsYXlSZWZcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMsIElucHV0Qm9vbGVhbiwgUE9TSVRJT05fTUFQIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBtZXJnZSwgRU1QVFksIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgbWFwVG8sIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBCcHNEcm9wZG93bk1lbnVDb21wb25lbnQsIE56UGxhY2VtZW50VHlwZSB9IGZyb20gJy4vYnBzLWRyb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnBzQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYnBzLWJ1dHRvbi9icHMtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJwc0J1dHRvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vYnBzLWJ1dHRvbi9icHMtYnV0dG9uLWdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ticHMtZHJvcGRvd25dJyxcclxuICBleHBvcnRBczogJ2Jwc0Ryb3Bkb3duJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzRHJvcERvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsO1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgdHJpZ2dlcldpZHRoID0gMDtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgZHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XHJcbiAgcHJpdmF0ZSBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU107XHJcbiAgcHJpdmF0ZSBwb3NpdGlvblN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIG92ZXJsYXlTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcmVhZG9ubHkgaG92ZXIkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gbWVyZ2UoXHJcbiAgICBmcm9tRXZlbnQodGhpcy5lbCwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKHRydWUpKSxcclxuICAgIGZyb21FdmVudCh0aGlzLmVsLCAnbW91c2VsZWF2ZScpLnBpcGUobWFwVG8oZmFsc2UpKVxyXG4gICk7XHJcbiAgcmVhZG9ubHkgJGNsaWNrOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gZnJvbUV2ZW50KHRoaXMuZWwsICdjbGljaycpLnBpcGUoXHJcbiAgICB0YXAoZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKSxcclxuICAgIG1hcFRvKHRydWUpXHJcbiAgKTtcclxuICBASW5wdXQoKSBicHNEcm9wZG93bk1lbnU6IEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudDtcclxuICBASW5wdXQoKSBicHNUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XHJcbiAgQElucHV0KCkgYnBzTWF0Y2hXaWR0aEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0JhY2tkcm9wID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ2xpY2tIaWRlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzVmlzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNUYWJsZUZpbHRlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJwc092ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBicHNPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBASW5wdXQoKSBicHNQbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzVmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBzZXREaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdkaXNhYmxlZCcsICcnKTtcclxuICAgICAgaWYgKHRoaXMuYnBzVmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMuYnBzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnBzVmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMuYnBzVmlzaWJsZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwsICdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5vdmVybGF5XHJcbiAgICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmVsKVxyXG4gICAgICAgIC53aXRoTG9ja2VkUG9zaXRpb24oKSxcclxuICAgICAgbWluV2lkdGg6IHRoaXMudHJpZ2dlcldpZHRoLFxyXG4gICAgICBoYXNCYWNrZHJvcDogdGhpcy5icHNUcmlnZ2VyID09PSAnY2xpY2snLFxyXG4gICAgICBiYWNrZHJvcENsYXNzOiB0aGlzLmJwc0JhY2tkcm9wID8gdW5kZWZpbmVkIDogJ256LW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcclxuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlT3ZlcmxheUV2ZW50KHRoaXMub3ZlcmxheVJlZik7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Qb3NpdGlvbnMoY29uZmlnLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTtcclxuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUNvbmZpZyhvdmVybGF5Q29uZmlnKTtcclxuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZU92ZXJsYXlDb25maWcob3ZlcmxheUNvbmZpZzogT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgb3ZlcmxheUNvbmZpZy5taW5XaWR0aCA9IHRoaXMudHJpZ2dlcldpZHRoO1xyXG4gICAgb3ZlcmxheUNvbmZpZy5oYXNCYWNrZHJvcCA9IHRoaXMuYnBzVHJpZ2dlciA9PT0gJ2NsaWNrJztcclxuICAgIHJldHVybiBvdmVybGF5Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9Qb3NpdGlvbnMocG9zaXRpb246IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbiA9IHBvc2l0aW9uLnBvc2l0aW9uQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XHJcbiAgICAgIHRoaXMuYnBzT3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgnYnBzT3ZlcmxheUNsYXNzTmFtZScsIHRoaXMuYnBzT3ZlcmxheUNsYXNzTmFtZSk7XHJcbiAgICAgIGlmICh0aGlzLmJwc1BsYWNlbWVudCA9PT0gJ2JvdHRvbVJpZ2h0JyAmJiBjaGFuZ2UuY29ubmVjdGlvblBhaXIub3JpZ2luWSA9PT0gJ3RvcCcpIHtcclxuICAgICAgICB0aGlzLmJwc092ZXJsYXlDbGFzc05hbWUgPSAnYnBzLWZvcmNlZC11cGRhdGVkLXBvc2l0aW9uJztcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgnYnBzT3ZlcmxheUNsYXNzTmFtZScsIHRoaXMuYnBzT3ZlcmxheUNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuYnBzUGxhY2VtZW50ID09PSAncmlnaHRUb3AnICYmIChjaGFuZ2UuY29ubmVjdGlvblBhaXIub3ZlcmxheVggPT09ICdlbmQnIHx8IGNoYW5nZS5jb25uZWN0aW9uUGFpci5vcmlnaW5ZID09PSAnYm90dG9tJykpIHtcclxuICAgICAgICB0aGlzLmJwc092ZXJsYXlDbGFzc05hbWUgPSAnYnBzLWZvcmNlZC11cGRhdGVkLXBvc2l0aW9uJztcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgnYnBzT3ZlcmxheUNsYXNzTmFtZScsIHRoaXMuYnBzT3ZlcmxheUNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Ryb3BEb3duUG9zaXRpb24nLCBjaGFuZ2UuY29ubmVjdGlvblBhaXIub3JpZ2luWSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUV2ZW50KG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5vdmVybGF5U3Vic2NyaXB0aW9uID0gbWVyZ2UoXHJcbiAgICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLFxyXG4gICAgICBvdmVybGF5UmVmLmRldGFjaG1lbnRzKCksXHJcbiAgICAgIG92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGUgPT4gZS5rZXlDb2RlID09PSBFU0NBUEUgJiYgIWhhc01vZGlmaWVyS2V5KGUpKSlcclxuICAgIClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWaXNpYmxlU3RhdGVXaGVuKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBvcnRhbCgpOiBUZW1wbGF0ZVBvcnRhbCB7XHJcbiAgICBpZiAoIXRoaXMucG9ydGFsIHx8IHRoaXMucG9ydGFsLnRlbXBsYXRlUmVmICE9PSB0aGlzLmJwc0Ryb3Bkb3duTWVudS50ZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmJwc0Ryb3Bkb3duTWVudS50ZW1wbGF0ZVJlZiwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnBvcnRhbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3Blbk1lbnUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZHJvcGRvd25PcGVuKSB7XHJcbiAgICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoKTtcclxuICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XHJcbiAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCdvcGVuJywgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ob3ZlcmxheUNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk7XHJcbiAgICAgIG92ZXJsYXlSZWYuYXR0YWNoKHRoaXMuZ2V0UG9ydGFsKCkpO1xyXG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3NlTWVudSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgnb3BlbicsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UG9zaXRpb24ocG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSBwb3NpdGlvblN0cmF0ZWd5O1xyXG4gICAgcG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsuLi50aGlzLnBvc2l0aW9uc10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHBvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucG9zaXRpb25TdHJhdGVneSkge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYnBzTWF0Y2hXaWR0aEVsZW1lbnQgPyB0aGlzLmJwc01hdGNoV2lkdGhFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsO1xyXG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0QWN0aW9uU3Vic2NyaWJlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaG9zdFZpc2libGUkID0gdGhpcy5icHNUcmlnZ2VyID09PSAnaG92ZXInID8gdGhpcy5ob3ZlciQgOiB0aGlzLiRjbGljaztcclxuICAgIGNvbnN0IGRyb3Bkb3duTWVudVZpc2libGUkID0gdGhpcy5icHNEcm9wZG93bk1lbnUudmlzaWJsZSQ7XHJcbiAgICBjb25zdCBtZW51Q2xpY2tWaXNpYmxlJCA9IHRoaXMuYnBzQ2xpY2tIaWRlXHJcbiAgICAgID8gdGhpcy5icHNEcm9wZG93bk1lbnUubnpNZW51RHJvcGRvd25TZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnBpcGUobWFwVG8oZmFsc2UpKVxyXG4gICAgICA6IEVNUFRZO1xyXG4gICAgY29uc3Qgc3VwVmlzaWJsZSQgPSBtZXJnZShkcm9wZG93bk1lbnVWaXNpYmxlJCwgaG9zdFZpc2libGUkLCBtZW51Q2xpY2tWaXNpYmxlJCk7XHJcbiAgICBjb25zdCBzdWJWaXNpYmxlJCA9IHRoaXMuYnBzRHJvcGRvd25NZW51Lm56TWVudURyb3Bkb3duU2VydmljZS5tZW51T3BlbiQ7XHJcbiAgICBjb21iaW5lTGF0ZXN0KFtzdXBWaXNpYmxlJCwgc3ViVmlzaWJsZSRdKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKFtzdXBWaXNpYmxlLCBzdWJWaXNpYmxlXSkgPT4gc3VwVmlzaWJsZSB8fCBzdWJWaXNpYmxlKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoNTApLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuYnBzRGlzYWJsZWQgJiYgdGhpcy5icHNWaXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLmJwc1Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk7XHJcbiAgICAgICAgICB0aGlzLmJwc1Zpc2libGVDaGFuZ2UuZW1pdCh0aGlzLmJwc1Zpc2libGUpO1xyXG4gICAgICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCd0cmlnZ2VyV2lkdGgnLCB0aGlzLnRyaWdnZXJXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU92ZXJsYXlCeVZpc2libGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMub3Blbk1lbnUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNhYmxlZFN0YXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXREaXNhYmxlZCh0aGlzLmJwc0Rpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIHJlZ2VuZXJhdGVQb3NpdGlvbihwbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSwgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10pOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10ge1xyXG4gICAgcmV0dXJuIFtQT1NJVElPTl9NQVBbcGxhY2VtZW50XSwgLi4ucG9zaXRpb25zXTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBicHNCdXR0b25Db21wb25lbnQ6IEJwc0J1dHRvbkNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYnBzQnV0dG9uR3JvdXBDb21wb25lbnQ6IEJwc0J1dHRvbkdyb3VwQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZHJvcGRvd24tdHJpZ2dlcicpO1xyXG4gICAgaWYgKHRoaXMuYnBzQnV0dG9uQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuYnBzQnV0dG9uQ29tcG9uZW50LmlzSW5Ecm9wZG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5icHNCdXR0b25Hcm91cENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmJwc0J1dHRvbkdyb3VwQ29tcG9uZW50LmlzSW5Ecm9wZG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNEcm9wZG93bk1lbnUpIHtcclxuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgICAgdGhpcy5pbml0QWN0aW9uU3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBicHNWaXNpYmxlLFxyXG4gICAgICBicHNUcmlnZ2VyLFxyXG4gICAgICBicHNQbGFjZW1lbnQsXHJcbiAgICAgIGJwc0Rpc2FibGVkLFxyXG4gICAgICBicHNPdmVybGF5Q2xhc3NOYW1lLFxyXG4gICAgICBicHNPdmVybGF5U3R5bGUsXHJcbiAgICAgIGJwc1RhYmxlRmlsdGVyXHJcbiAgICB9ID0gY2hhbmdlcztcclxuICAgIGlmICh0aGlzLmJwc0Ryb3Bkb3duTWVudSkge1xyXG4gICAgICBpZiAoYnBzVmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xyXG4gICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnZpc2libGUkLm5leHQodGhpcy5icHNWaXNpYmxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnBzVHJpZ2dlcikge1xyXG4gICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCdicHNUcmlnZ2VyJywgdGhpcy5icHNUcmlnZ2VyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnBzVGFibGVGaWx0ZXIpIHtcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZSgnYnBzVGFibGVGaWx0ZXInLCB0aGlzLmJwc1RhYmxlRmlsdGVyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnBzT3ZlcmxheUNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKCdicHNPdmVybGF5Q2xhc3NOYW1lJywgdGhpcy5icHNPdmVybGF5Q2xhc3NOYW1lKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnBzT3ZlcmxheVN0eWxlKSB7XHJcbiAgICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Jwc092ZXJsYXlTdHlsZScsIHRoaXMuYnBzT3ZlcmxheVN0eWxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnBzUGxhY2VtZW50KSB7XHJcbiAgICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Jwc1BsYWNlbWVudCcsIHRoaXMuYnBzUGxhY2VtZW50KTtcclxuICAgICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZShcclxuICAgICAgICAgICdkcm9wRG93blBvc2l0aW9uJyxcclxuICAgICAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LmJwc1BsYWNlbWVudC5pbmRleE9mKCd0b3AnKSAhPT0gLTEgPyAndG9wJyA6ICdib3R0b20nXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IHRoaXMucmVnZW5lcmF0ZVBvc2l0aW9uKHRoaXMuYnBzUGxhY2VtZW50LCB0aGlzLnBvc2l0aW9ucyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMucG9zaXRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGJwc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
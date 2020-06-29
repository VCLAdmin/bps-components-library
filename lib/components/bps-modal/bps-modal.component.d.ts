import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayKeyboardDispatcher, OverlayRef } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzConfigService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { BpsModalFooterDirective } from './bps-modal-footer.directive';
import { BpsModalRef } from './bps-modal-ref.class';
import { ModalOptions, ModalButtonOptions, ModalType, OnClickCallback } from './bps-modal.type';
import { BpsModalControlService } from './bps-modal-control.service';
import { BpsModalConfig } from './bps-modal-config';
export declare const MODAL_ANIMATE_DURATION = 200;
export declare const WRAP_CLASS_NAME = "ant-modal-wrap";
export declare class BpsModalComponent<T = any, R = any> extends BpsModalRef<T, R> implements OnInit, OnChanges, AfterViewInit, OnDestroy, ModalOptions<T> {
    nzConfigService: NzConfigService;
    private overlay;
    private overlayKeyboardDispatcher;
    private i18n;
    private cfr;
    private elementRef;
    private viewContainer;
    private modalControl;
    private focusTrapFactory;
    private cdr;
    private bpsModalGlobalConfig;
    private document;
    bpsVisible: boolean;
    bpsClosable: boolean;
    bpsOkLoading: boolean;
    bpsOkDisabled: boolean;
    bpsCancelDisabled: boolean;
    bpsCancelLoading: boolean;
    bpsKeyboard: boolean;
    bpsNoAnimation: boolean;
    bpsModalDisabled: boolean;
    bpsMask: boolean;
    bpsMaskClosable: boolean;
    bpsContent: string | TemplateRef<{}> | Type<T>;
    bpsComponentParams: T;
    bpsFooter: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null;
    bpsGetContainer: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    bpsZIndex: number;
    bpsWidth: number | string;
    bpsWrapClassName: string;
    bpsClassName: string;
    bpsStyle: object;
    bpsTitle: string | TemplateRef<{}>;
    bpsCloseIcon: string | TemplateRef<void>;
    bpsMaskStyle: object;
    bpsBodyStyle: object;
    bpsOkText: string | null;
    bpsCancelText: string | null;
    bpsOkType: string;
    bpsIconType: string;
    bpsModalType: ModalType;
    readonly bpsOnOk: EventEmitter<T> | OnClickCallback<T>;
    readonly bpsOnCancel: EventEmitter<T> | OnClickCallback<T>;
    readonly bpsAfterOpen: EventEmitter<void>;
    readonly bpsAfterClose: EventEmitter<R>;
    readonly bpsVisibleChange: EventEmitter<boolean>;
    modalContainer: ElementRef;
    bodyContainer: ViewContainerRef;
    autoFocusButtonOk: ElementRef;
    set modalFooter(value: BpsModalFooterDirective);
    get afterOpen(): Observable<void>;
    get afterClose(): Observable<R>;
    get cancelText(): string;
    get okText(): string;
    get hidden(): boolean;
    /**
     * @description
     * The calculated highest weight of mask value
     *
     * Weight of different mask input:
     * component default value < global configuration < component input value
     */
    get mask(): boolean;
    /**
     * @description
     * The calculated highest weight of maskClosable value
     *
     * Weight of different maskClosable input:
     * component default value < global configuration < component input value
     */
    get maskClosable(): boolean;
    locale: {
        okText?: string;
        cancelText?: string;
    };
    maskAnimationClassMap: object | null;
    modalAnimationClassMap: object | null;
    transformOrigin: string;
    private contentComponentRef;
    private animationState;
    private container;
    private unsubscribe$;
    private previouslyFocusedElement;
    private focusTrap;
    private scrollStrategy;
    private overlayRef;
    private dialogMouseDown;
    private timeoutId;
    [key: string]: any;
    constructor(nzConfigService: NzConfigService, overlay: Overlay, overlayKeyboardDispatcher: OverlayKeyboardDispatcher, i18n: NzI18nService, cfr: ComponentFactoryResolver, elementRef: ElementRef, viewContainer: ViewContainerRef, modalControl: BpsModalControlService, focusTrapFactory: FocusTrapFactory, cdr: ChangeDetectorRef, bpsModalGlobalConfig: BpsModalConfig, document: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setFooterWithTemplate(templateRef: TemplateRef<{}>): void;
    setOverlayRef(overlayRef: OverlayRef): void;
    keydownListener(event: KeyboardEvent): void;
    open(): void;
    close(result?: R): void;
    destroy(result?: R): void;
    triggerOk(): void;
    triggerCancel(): void;
    getInstance(): BpsModalComponent;
    getContentComponentRef(): ComponentRef<T>;
    getContentComponent(): T;
    getElement(): HTMLElement;
    onMaskDialogDown(): void;
    onDialogUp(): void;
    onClickMask($event: MouseEvent): void;
    isModalType(type: ModalType): boolean;
    onClickCloseBtn(): void;
    onClickOkCancel(type: 'ok' | 'cancel'): void;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    isComponent(value: {}): boolean;
    isModalButtons(value: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null): boolean;
    private handleVisibleStateChange;
    getButtonCallableProp(options: ModalButtonOptions<T>, prop: string): {};
    onButtonClick(button: ModalButtonOptions<T>): void;
    private changeVisibleFromInside;
    private changeAnimationState;
    private animateTo;
    private formatModalButtons;
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    private createDynamicComponent;
    private updateTransformOrigin;
    private savePreviouslyFocusedElement;
    private trapFocus;
    private restoreFocus;
}

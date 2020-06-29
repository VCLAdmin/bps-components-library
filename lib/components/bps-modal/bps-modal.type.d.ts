import { OverlayRef } from '@angular/cdk/overlay';
import { EventEmitter, TemplateRef, Type } from '@angular/core';
export declare type OnClickCallback<T> = (instance: T) => (false | void | {}) | Promise<false | void | {}>;
export declare type ModalType = 'default' | 'confirm';
export declare type ConfirmType = 'confirm' | 'info' | 'success' | 'error' | 'warning';
export interface ModalOptions<T = any, R = any> {
    bpsModalType?: ModalType;
    bpsVisible?: boolean;
    bpsZIndex?: number;
    bpsWidth?: number | string;
    bpsWrapClassName?: string;
    bpsClassName?: string;
    bpsStyle?: object;
    bpsIconType?: string;
    bpsTitle?: string | TemplateRef<{}>;
    bpsCloseIcon?: string | TemplateRef<void>;
    bpsContent?: string | TemplateRef<{}> | Type<T>;
    bpsComponentParams?: Partial<T>;
    bpsClosable?: boolean;
    bpsKeyboard?: boolean;
    bpsMask?: boolean;
    bpsMaskClosable?: boolean;
    bpsMaskStyle?: object;
    bpsBodyStyle?: object;
    bpsFooter?: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null;
    bpsGetContainer?: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    bpsAfterOpen?: EventEmitter<void>;
    bpsAfterClose?: EventEmitter<R>;
    bpsOkText?: string | null;
    bpsOkType?: string;
    bpsOkLoading?: boolean;
    bpsOkDisabled?: boolean;
    bpsCancelDisabled?: boolean;
    bpsOnOk?: EventEmitter<T> | OnClickCallback<T>;
    bpsCancelText?: string | null;
    bpsCancelLoading?: boolean;
    bpsNoAnimation?: boolean;
    bpsOnCancel?: EventEmitter<T> | OnClickCallback<T>;
}
export interface ModalOptionsForService<T = any> extends ModalOptions<T> {
    bpsOnOk?: OnClickCallback<T>;
    bpsOnCancel?: OnClickCallback<T>;
}
export interface ModalButtonOptions<T = any> {
    label: string;
    type?: string;
    shape?: string;
    ghost?: boolean;
    size?: string;
    autoLoading?: boolean;
    show?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    loading?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    disabled?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    onClick?(this: ModalButtonOptions<T>, contentComponentInstance?: T): (void | {}) | Promise<void | {}>;
    [key: string]: any;
}

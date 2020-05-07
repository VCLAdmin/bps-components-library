import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
export declare class BpsListItemMetaComponent {
    elementRef: ElementRef;
    private renderer;
    avatarStr: string;
    avatarTpl: TemplateRef<void>;
    set bpsAvatar(value: string | TemplateRef<void>);
    bpsTitle: string | TemplateRef<void>;
    bpsDescription: string | TemplateRef<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}

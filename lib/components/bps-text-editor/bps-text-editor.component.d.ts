import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
export declare class BpsTextEditorComponent implements OnInit, OnChanges {
    showEditor: boolean;
    lazyLoaded: boolean;
    oninit: EventEmitter<any>;
    onchange: EventEmitter<any>;
    onblur: EventEmitter<any>;
    onkeyup: EventEmitter<any>;
    disabled: boolean;
    height: string;
    editorID: string;
    statusbar: boolean;
    resize: boolean;
    toolbarmobile: string[];
    toolbar: string;
    tinyMceSettings: any;
    constructor();
    ngOnInit(): void;
    initTinyMCE(): void;
    disableEditor(): void;
    enableEditor(): void;
    ngOnChanges(changes: SimpleChanges): void;
}

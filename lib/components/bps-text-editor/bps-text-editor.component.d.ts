import { OnInit, EventEmitter } from '@angular/core';
export declare class BpsTextEditorComponent implements OnInit {
    showEditor: boolean;
    oninit: EventEmitter<any>;
    onchange: EventEmitter<any>;
    onblur: EventEmitter<any>;
    onkeyup: EventEmitter<any>;
    disabled: boolean;
    height: string;
    statusbar: boolean;
    resize: boolean;
    toolbarmobile: string[];
    toolbar: string;
    tinyMceSettings: any;
    constructor();
    ngOnInit(): void;
}

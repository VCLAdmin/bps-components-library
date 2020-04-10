import { ElementRef, OnInit } from '@angular/core';
import { NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
export declare class BpsButtonGroupComponent implements OnInit {
    private nzUpdateHostClassService;
    private elementRef;
    private _size;
    isInDropdown: boolean;
    get bpsSize(): NzSizeLDSType;
    set bpsSize(value: NzSizeLDSType);
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef);
    setClassMap(): void;
    ngOnInit(): void;
}

import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { NzConfigService, NzFormatBeforeDropEvent, NzFormatEmitEvent, NzNoAnimationDirective, NzTreeBase, NzTreeBaseService, NzTreeNode } from 'ng-zorro-antd/core';
import { NzTreeService } from 'ng-zorro-antd';
export declare function NzTreeServiceFactory(higherOrderService: NzTreeBaseService, treeService: NzTreeService): NzTreeBaseService;
export declare class BpsTreeComponent extends NzTreeBase implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
    nzConfigService: NzConfigService;
    private cdr;
    noAnimation?: NzNoAnimationDirective;
    bpsShowIcon: boolean;
    bpsShowExpand: boolean;
    bpsShowLine: boolean;
    bpsExpandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    bpsCheckable: boolean;
    bpsAsyncData: boolean;
    bpsDraggable: boolean;
    bpsHideUnMatched: boolean;
    bpsSelectMode: boolean;
    bpsCheckStrictly: boolean;
    bpsBlockNode: boolean;
    bpsExpandAll: boolean;
    bpsCustomTree: boolean;
    bpsTreeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    bpsTreeTemplateChild: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    get treeTemplate(): TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    /**
     * @deprecated 9.0.0 use `bpsExpandAll` instead.
     */
    set bpsDefaultExpandAll(value: boolean);
    get bpsDefaultExpandAll(): boolean;
    private _bpsDefaultExpandAll;
    bpsBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    bpsMultiple: boolean;
    set bpsData(value: any[]);
    /**
     * @deprecated 9.0.0 - use `bpsExpandedKeys` instead.
     */
    set bpsDefaultExpandedKeys(value: string[]);
    /**
     * @deprecated 9.0.0 - use `bpsSelectedKeys` instead.
     */
    set bpsDefaultSelectedKeys(value: string[]);
    /**
     * @deprecated 9.0.0 - use `bpsCheckedKeys` instead.
     */
    set bpsDefaultCheckedKeys(value: string[]);
    set bpsExpandedKeys(value: string[]);
    set bpsSelectedKeys(value: string[]);
    set bpsCheckedKeys(value: string[]);
    set bpsSearchValue(value: string);
    get bpsSearchValue(): string;
    /**
     * To render nodes if root is changed.
     */
    get bpsNodes(): NzTreeNode[];
    readonly bpsExpandedKeysChange: EventEmitter<string[]>;
    readonly bpsSelectedKeysChange: EventEmitter<string[]>;
    readonly bpsCheckedKeysChange: EventEmitter<string[]>;
    readonly bpsSearchValueChange: EventEmitter<NzFormatEmitEvent>;
    /**
     * @deprecated use `nzSearchValueChange` instead.
     */
    readonly bpsOnSearchNode: EventEmitter<NzFormatEmitEvent>;
    readonly bpsClick: EventEmitter<NzFormatEmitEvent>;
    readonly bpsDblClick: EventEmitter<NzFormatEmitEvent>;
    readonly bpsContextMenu: EventEmitter<NzFormatEmitEvent>;
    readonly bpsCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    readonly bpsExpandChange: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragStart: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragEnter: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragOver: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragLeave: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDrop: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragEnd: EventEmitter<NzFormatEmitEvent>;
    _searchValue: string;
    bpsDefaultSubject: ReplaySubject<{
        type: string;
        keys: string[];
    }>;
    destroy$: Subject<unknown>;
    prefixCls: string;
    classMap: {};
    onChange: (value: NzTreeNode[]) => void;
    onTouched: () => void;
    setClassMap(): void;
    writeValue(value: NzTreeNode[]): void;
    registerOnChange(fn: (_: NzTreeNode[]) => void): void;
    registerOnTouched(fn: () => void): void;
    initNzData(value: any[]): void;
    constructor(nzTreeService: NzTreeBaseService, nzConfigService: NzConfigService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
}

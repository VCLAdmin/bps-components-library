import { __decorate, __extends, __param } from "tslib";
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Input, OnChanges, OnDestroy, OnInit, Optional, Output, SimpleChange, SkipSelf, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, warnDeprecation, InputBoolean, NzConfigService, NzFormatBeforeDropEvent, NzFormatEmitEvent, NzNoAnimationDirective, NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken, NzTreeNode, WithConfig } from 'ng-zorro-antd/core';
import { NzTreeService } from 'ng-zorro-antd';
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
var NZ_CONFIG_COMPONENT_NAME = 'tree';
var BpsTreeComponent = /** @class */ (function (_super) {
    __extends(BpsTreeComponent, _super);
    function BpsTreeComponent(nzTreeService, nzConfigService, cdr, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.nzConfigService = nzConfigService;
        _this.cdr = cdr;
        _this.noAnimation = noAnimation;
        _this.bpsShowExpand = true;
        _this.bpsShowLine = false;
        _this.bpsCheckable = false;
        _this.bpsAsyncData = false;
        _this.bpsDraggable = false;
        _this.bpsSelectMode = false;
        _this.bpsCheckStrictly = false;
        _this.bpsExpandAll = false;
        _this.bpsCustomTree = true;
        _this._bpsDefaultExpandAll = false;
        _this.bpsMultiple = false;
        _this.bpsExpandedKeysChange = new EventEmitter();
        _this.bpsSelectedKeysChange = new EventEmitter();
        _this.bpsCheckedKeysChange = new EventEmitter();
        _this.bpsSearchValueChange = new EventEmitter();
        /**
         * @deprecated use `nzSearchValueChange` instead.
         */
        _this.bpsOnSearchNode = new EventEmitter();
        _this.bpsClick = new EventEmitter();
        _this.bpsDblClick = new EventEmitter();
        _this.bpsContextMenu = new EventEmitter();
        _this.bpsCheckBoxChange = new EventEmitter();
        _this.bpsExpandChange = new EventEmitter();
        _this.bpsOnDragStart = new EventEmitter();
        _this.bpsOnDragEnter = new EventEmitter();
        _this.bpsOnDragOver = new EventEmitter();
        _this.bpsOnDragLeave = new EventEmitter();
        _this.bpsOnDrop = new EventEmitter();
        _this.bpsOnDragEnd = new EventEmitter();
        _this.bpsDefaultSubject = new ReplaySubject(6);
        _this.destroy$ = new Subject();
        _this.prefixCls = 'ant-tree';
        _this.classMap = {};
        _this.onChange = function () { return null; };
        _this.onTouched = function () { return null; };
        return _this;
    }
    BpsTreeComponent_1 = BpsTreeComponent;
    Object.defineProperty(BpsTreeComponent.prototype, "treeTemplate", {
        get: function () {
            return this.bpsTreeTemplate || this.bpsTreeTemplateChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsTreeComponent.prototype, "bpsDefaultExpandAll", {
        get: function () {
            return this._bpsDefaultExpandAll;
        },
        /**
         * @deprecated 9.0.0 use `bpsExpandAll` instead.
         */
        set: function (value) {
            warnDeprecation("'bpsDefaultExpandAll' would be removed in 9.0.0. Please use 'bpsExpandAll' instead.");
            this.bpsExpandAll = value;
            this._bpsDefaultExpandAll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsTreeComponent.prototype, "bpsData", {
        set: function (value) {
            this.initNzData(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsTreeComponent.prototype, "bpsDefaultExpandedKeys", {
        /**
         * @deprecated 9.0.0 - use `bpsExpandedKeys` instead.
         */
        set: function (value) {
            warnDeprecation("'bpsDefaultExpandedKeys' would be removed in 9.0.0. Please use 'bpsExpandedKeys' instead.");
            this.bpsDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsTreeComponent.prototype, "bpsDefaultSelectedKeys", {
        /**
         * @deprecated 9.0.0 - use `bpsSelectedKeys` instead.
         */
        set: function (value) {
            warnDeprecation("'bpsDefaultSelectedKeys' would be removed in 9.0.0. Please use 'bpsSelectedKeys' instead.");
            this.bpsDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsTreeComponent.prototype, "bpsDefaultCheckedKeys", {
        /**
         * @deprecated 9.0.0 - use `bpsCheckedKeys` instead.
         */
        set: function (value) {
            warnDeprecation("'bpsDefaultCheckedKeys' would be removed in 9.0.0. Please use 'bpsCheckedKeys' instead.");
            this.bpsDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsTreeComponent.prototype, "bpsExpandedKeys", {
        set: function (value) {
            this.bpsDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsTreeComponent.prototype, "bpsSelectedKeys", {
        set: function (value) {
            this.bpsDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsTreeComponent.prototype, "bpsCheckedKeys", {
        set: function (value) {
            this.bpsDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsTreeComponent.prototype, "bpsSearchValue", {
        get: function () {
            return this._searchValue;
        },
        set: function (value) {
            this._searchValue = value;
            this.nzTreeService.searchExpand(value);
            if (isNotNil(value)) {
                this.bpsSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
                /**
                 * @deprecated 9.0.0 - use `nzOnSearchNode` instead.
                 * Hide warning, need remove next version
                 */
                this.bpsOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsTreeComponent.prototype, "bpsNodes", {
        /**
         * To render nodes if root is changed.
         */
        get: function () {
            return this.nzTreeService.rootNodes;
        },
        enumerable: true,
        configurable: true
    });
    BpsTreeComponent.prototype.setClassMap = function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a['bps-tree'] = true,
            _a[this.prefixCls + '-show-line'] = this.bpsShowLine,
            _a[this.prefixCls + "-icon-hide"] = !this.bpsShowIcon,
            _a[this.prefixCls + "-block-node"] = this.bpsBlockNode,
            _a['draggable-tree'] = this.bpsDraggable,
            _a['ant-select-tree'] = this.bpsSelectMode,
            _a);
    };
    BpsTreeComponent.prototype.writeValue = function (value) {
        this.initNzData(value);
    };
    BpsTreeComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    BpsTreeComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    BpsTreeComponent.prototype.initNzData = function (value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.bpsCheckStrictly;
            this.nzTreeService.isMultiple = this.bpsMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    };
    BpsTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setClassMap();
        this.bpsDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe(function (data) {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    _this.nzTreeService.calcExpandedKeys(data.keys, _this.bpsNodes);
                    _this.bpsExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    _this.nzTreeService.calcSelectedKeys(data.keys, _this.bpsNodes, _this.bpsMultiple);
                    _this.bpsSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    _this.nzTreeService.calcCheckedKeys(data.keys, _this.bpsNodes, _this.bpsCheckStrictly);
                    _this.bpsCheckedKeysChange.emit(data.keys);
                    break;
            }
            _this.cdr.markForCheck();
        });
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (data) {
            switch (data.eventName) {
                case 'expand':
                    if (_this.bpsCustomTree) {
                        var keys = data.keys;
                        data.keys = [keys[keys.length - 1]];
                        _this.nzTreeService.calcExpandedKeys(data.keys, _this.bpsNodes);
                    }
                    _this.bpsExpandChange.emit(data);
                    break;
                case 'click':
                    _this.bpsClick.emit(data);
                    break;
                case 'check':
                    _this.bpsCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    _this.bpsDblClick.emit(data);
                    break;
                case 'contextmenu':
                    _this.bpsContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    _this.bpsOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    _this.bpsOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    _this.bpsOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    _this.bpsOnDragLeave.emit(data);
                    break;
                case 'drop':
                    _this.bpsOnDrop.emit(data);
                    break;
                case 'dragend':
                    _this.bpsOnDragEnd.emit(data);
                    break;
            }
        });
    };
    BpsTreeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.bpsCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.bpsCheckStrictly;
        }
        if (changes.bpsMultiple) {
            this.nzTreeService.isMultiple = this.bpsMultiple;
        }
    };
    BpsTreeComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    var BpsTreeComponent_1;
    BpsTreeComponent.ctorParameters = function () { return [
        { type: NzTreeBaseService },
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    __decorate([
        Input(), InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false)
    ], BpsTreeComponent.prototype, "bpsShowIcon", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTreeComponent.prototype, "bpsShowExpand", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTreeComponent.prototype, "bpsShowLine", void 0);
    __decorate([
        Input()
    ], BpsTreeComponent.prototype, "bpsExpandedIcon", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTreeComponent.prototype, "bpsCheckable", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTreeComponent.prototype, "bpsAsyncData", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTreeComponent.prototype, "bpsDraggable", void 0);
    __decorate([
        Input(), InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false)
    ], BpsTreeComponent.prototype, "bpsHideUnMatched", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTreeComponent.prototype, "bpsSelectMode", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTreeComponent.prototype, "bpsCheckStrictly", void 0);
    __decorate([
        Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean()
    ], BpsTreeComponent.prototype, "bpsBlockNode", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTreeComponent.prototype, "bpsExpandAll", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTreeComponent.prototype, "bpsCustomTree", void 0);
    __decorate([
        Input()
    ], BpsTreeComponent.prototype, "bpsTreeTemplate", void 0);
    __decorate([
        ContentChild('bpsTreeTemplate', { static: true })
    ], BpsTreeComponent.prototype, "bpsTreeTemplateChild", void 0);
    __decorate([
        Input(),
        InputBoolean()
    ], BpsTreeComponent.prototype, "bpsDefaultExpandAll", null);
    __decorate([
        Input()
    ], BpsTreeComponent.prototype, "bpsBeforeDrop", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTreeComponent.prototype, "bpsMultiple", void 0);
    __decorate([
        Input()
    ], BpsTreeComponent.prototype, "bpsData", null);
    __decorate([
        Input()
    ], BpsTreeComponent.prototype, "bpsDefaultExpandedKeys", null);
    __decorate([
        Input()
    ], BpsTreeComponent.prototype, "bpsDefaultSelectedKeys", null);
    __decorate([
        Input()
    ], BpsTreeComponent.prototype, "bpsDefaultCheckedKeys", null);
    __decorate([
        Input()
    ], BpsTreeComponent.prototype, "bpsExpandedKeys", null);
    __decorate([
        Input()
    ], BpsTreeComponent.prototype, "bpsSelectedKeys", null);
    __decorate([
        Input()
    ], BpsTreeComponent.prototype, "bpsCheckedKeys", null);
    __decorate([
        Input()
    ], BpsTreeComponent.prototype, "bpsSearchValue", null);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsExpandedKeysChange", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsSelectedKeysChange", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsCheckedKeysChange", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsSearchValueChange", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsOnSearchNode", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsClick", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsDblClick", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsContextMenu", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsCheckBoxChange", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsExpandChange", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsOnDragStart", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsOnDragEnter", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsOnDragOver", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsOnDragLeave", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsOnDrop", void 0);
    __decorate([
        Output()
    ], BpsTreeComponent.prototype, "bpsOnDragEnd", void 0);
    BpsTreeComponent = BpsTreeComponent_1 = __decorate([
        Component({
            selector: 'bps-tree',
            exportAs: 'bpsTree',
            template: "<ul\n  role=\"tree\"\n  unselectable=\"on\"\n  [ngClass]=\"classMap\">\n  <ng-container *ngFor=\"let node of bpsNodes\">\n    <bps-tree-node\n      [bpsTreeNode]=\"node\"\n      [bpsSelectMode]=\"bpsSelectMode\"\n      [bpsShowLine]=\"bpsShowLine\"\n      [bpsExpandedIcon]=\"bpsExpandedIcon\"\n      [bpsDraggable]=\"bpsDraggable\"\n      [bpsCheckable]=\"bpsCheckable\"\n      [bpsShowExpand]=\"bpsShowExpand\"\n      [bpsAsyncData]=\"bpsAsyncData\"\n      [bpsSearchValue]=\"bpsSearchValue\"\n      [bpsHideUnMatched]=\"bpsHideUnMatched\"\n      [bpsBeforeDrop]=\"bpsBeforeDrop\"\n      [bpsExpandAll]=\"bpsExpandAll\"\n      [bpsShowIcon]=\"bpsShowIcon\"\n      [bpsTreeTemplate]=\"treeTemplate\"\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [bpsNoAnimation]=\"noAnimation?.nzNoAnimation\">\n    </bps-tree-node>\n  </ng-container>\n</ul>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [
                NzTreeService,
                {
                    provide: NzTreeBaseService,
                    useFactory: NzTreeServiceFactory,
                    deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
                },
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return BpsTreeComponent_1; }),
                    multi: true
                }
            ],
            styles: ["::ng-deep .ant-tree.bps-tree li ul{padding:0!important}::ng-deep .ant-tree.ant-tree-block-node li .ant-tree-node-content-wrapper{width:100%!important}::ng-deep .bps-tree-leaf,::ng-deep .bps-tree-parent{height:70px!important;max-height:70px!important;overflow:hidden!important;background-color:#363636!important;border:1px solid #363636!important;border-radius:5px!important;color:#fff!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.27!important;letter-spacing:normal!important;text-align:left!important;margin-bottom:5px!important}::ng-deep .bps-tree-leaf{height:35px!important;max-height:35px!important;padding:10px 20px!important}::ng-deep .bps-tree-leaf:hover,::ng-deep .bps-tree-parent:hover{border:1px solid #445c67!important}::ng-deep .bps-tree-leaf.ant-tree-node-selected,::ng-deep .bps-tree-leaf.ant-tree-node-selected:hover,::ng-deep .bps-tree-parent.ant-tree-node-selected,::ng-deep .bps-tree-parent.ant-tree-node-selected:hover{border:1px solid #00a2d1!important}::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf,::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf:hover,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent:hover{border:1px solid #363636!important}::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper,::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper span{color:#666!important}::ng-deep .ant-tree li{padding:0!important}"]
        }),
        __param(3, Host()), __param(3, Optional())
    ], BpsTreeComponent);
    return BpsTreeComponent;
}(NzTreeBase));
export { BpsTreeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLXRyZWUvYnBzLXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFlBQVksRUFDWixRQUFRLEVBQ1IsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUNMLFFBQVEsRUFDUixlQUFlLEVBQ2YsWUFBWSxFQUNaLGVBQWUsRUFDZix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLDZCQUE2QixFQUM3QixVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLGtCQUFxQyxFQUNyQyxXQUEwQjtJQUUxQixPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0FBQy9ELENBQUM7QUFFRCxJQUFNLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztBQXNCeEM7SUFBc0Msb0NBQVU7SUF1TDlDLDBCQUNF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QUU7NERBQWlFO0lBQ2hFO1FBQVQsTUFBTSxFQUFFOytEQUFvRTtJQUNuRTtRQUFULE1BQU0sRUFBRTs2REFBa0U7SUFFakU7UUFBVCxNQUFNLEVBQUU7NERBQWlFO0lBQ2hFO1FBQVQsTUFBTSxFQUFFOzREQUFpRTtJQUNoRTtRQUFULE1BQU0sRUFBRTsyREFBZ0U7SUFDL0Q7UUFBVCxNQUFNLEVBQUU7NERBQWlFO0lBQ2hFO1FBQVQsTUFBTSxFQUFFO3VEQUE0RDtJQUMzRDtRQUFULE1BQU0sRUFBRTswREFBK0Q7SUEzSTdELGdCQUFnQjtRQXBCNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIscTJCQUF3QztZQUN4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxTQUFTLEVBQUU7Z0JBQ1QsYUFBYTtnQkFDYjtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixVQUFVLEVBQUUsb0JBQW9CO29CQUNoQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSw2QkFBNkIsQ0FBQyxFQUFFLGFBQWEsQ0FBQztpQkFDdkY7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWdCLEVBQWhCLENBQWdCLENBQUM7b0JBQy9DLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7O1NBRUYsQ0FBQztRQTRMRyxXQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTtPQTNMVixnQkFBZ0IsQ0FtUjVCO0lBQUQsdUJBQUM7Q0FBQSxBQW5SRCxDQUFzQyxVQUFVLEdBbVIvQztTQW5SWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNraXBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzTm90TmlsLFxyXG4gIHdhcm5EZXByZWNhdGlvbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LFxyXG4gIE56Rm9ybWF0RW1pdEV2ZW50LFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpUcmVlQmFzZSxcclxuICBOelRyZWVCYXNlU2VydmljZSxcclxuICBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICBOelRyZWVOb2RlLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRyZWVTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTnpUcmVlU2VydmljZUZhY3RvcnkoXHJcbiAgaGlnaGVyT3JkZXJTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICB0cmVlU2VydmljZTogTnpUcmVlU2VydmljZVxyXG4pOiBOelRyZWVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGhpZ2hlck9yZGVyU2VydmljZSA/IGhpZ2hlck9yZGVyU2VydmljZSA6IHRyZWVTZXJ2aWNlO1xyXG59XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndHJlZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy10cmVlJyxcclxuICBleHBvcnRBczogJ2Jwc1RyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtdHJlZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOelRyZWVTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICAgICAgdXNlRmFjdG9yeTogTnpUcmVlU2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbl0sIE56VHJlZVNlcnZpY2VdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnBzVHJlZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtdHJlZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1RyZWVDb21wb25lbnQgZXh0ZW5kcyBOelRyZWVCYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBicHNTaG93SWNvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2hvd0V4cGFuZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Nob3dMaW5lID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYnBzRXhwYW5kZWRJY29uOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ2hlY2thYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0FzeW5jRGF0YSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEcmFnZ2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIGJwc0hpZGVVbk1hdGNoZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1NlbGVjdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ2hlY2tTdHJpY3RseSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBicHNCbG9ja05vZGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0V4cGFuZEFsbCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ3VzdG9tVHJlZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIGJwc1RyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQENvbnRlbnRDaGlsZCgnYnBzVHJlZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgYnBzVHJlZVRlbXBsYXRlQ2hpbGQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIGdldCB0cmVlVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYnBzVHJlZVRlbXBsYXRlIHx8IHRoaXMuYnBzVHJlZVRlbXBsYXRlQ2hpbGQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCB1c2UgYGJwc0V4cGFuZEFsbGAgaW5zdGVhZC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBicHNEZWZhdWx0RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdicHNEZWZhdWx0RXhwYW5kQWxsJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdicHNFeHBhbmRBbGwnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLmJwc0V4cGFuZEFsbCA9IHZhbHVlO1xyXG4gICAgdGhpcy5fYnBzRGVmYXVsdEV4cGFuZEFsbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJwc0RlZmF1bHRFeHBhbmRBbGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYnBzRGVmYXVsdEV4cGFuZEFsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Jwc0RlZmF1bHRFeHBhbmRBbGwgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgYnBzQmVmb3JlRHJvcDogKGNvbmZpcm06IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzTXVsdGlwbGUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IGJwc0RhdGEodmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLmluaXROekRhdGEodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYGJwc0V4cGFuZGVkS2V5c2AgaW5zdGVhZC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNEZWZhdWx0RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnYnBzRGVmYXVsdEV4cGFuZGVkS2V5cycgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnYnBzRXhwYW5kZWRLZXlzJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5icHNEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgYnBzU2VsZWN0ZWRLZXlzYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0RlZmF1bHRTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdicHNEZWZhdWx0U2VsZWN0ZWRLZXlzJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdicHNTZWxlY3RlZEtleXMnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLmJwc0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBicHNDaGVja2VkS2V5c2AgaW5zdGVhZC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNEZWZhdWx0Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdicHNEZWZhdWx0Q2hlY2tlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2Jwc0NoZWNrZWRLZXlzJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5icHNEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0V4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuYnBzRGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzU2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5icHNEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuYnBzRGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNlYXJjaEV4cGFuZCh2YWx1ZSk7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuYnBzU2VhcmNoVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuek9uU2VhcmNoTm9kZWAgaW5zdGVhZC5cclxuICAgICAgICogSGlkZSB3YXJuaW5nLCBuZWVkIHJlbW92ZSBuZXh0IHZlcnNpb25cclxuICAgICAgICovXHJcbiAgICAgIHRoaXMuYnBzT25TZWFyY2hOb2RlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYnBzU2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvIHJlbmRlciBub2RlcyBpZiByb290IGlzIGNoYW5nZWQuXHJcbiAgICovXHJcbiAgZ2V0IGJwc05vZGVzKCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcztcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNFeHBhbmRlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNTZWxlY3RlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNDaGVja2VkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNTZWFyY2hWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgbnpTZWFyY2hWYWx1ZUNoYW5nZWAgaW5zdGVhZC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzT25TZWFyY2hOb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzRGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNDb250ZXh0TWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0NoZWNrQm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzRXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzT25EcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPbkRyYWdPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzT25EcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPbkRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPbkRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG5cclxuICBfc2VhcmNoVmFsdWU6IHN0cmluZztcclxuICBicHNEZWZhdWx0U3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9Pig2KTtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJlZml4Q2xzID0gJ2FudC10cmVlJztcclxuICBjbGFzc01hcCA9IHt9O1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBOelRyZWVOb2RlW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgWydicHMtdHJlZSddOiB0cnVlLFxyXG4gICAgICBbdGhpcy5wcmVmaXhDbHMgKyAnLXNob3ctbGluZSddOiB0aGlzLmJwc1Nob3dMaW5lLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb24taGlkZWBdOiAhdGhpcy5icHNTaG93SWNvbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ibG9jay1ub2RlYF06IHRoaXMuYnBzQmxvY2tOb2RlLFxyXG4gICAgICBbJ2RyYWdnYWJsZS10cmVlJ106IHRoaXMuYnBzRHJhZ2dhYmxlLFxyXG4gICAgICBbJ2FudC1zZWxlY3QtdHJlZSddOiB0aGlzLmJwc1NlbGVjdE1vZGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogTnpUcmVlTm9kZVtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBpbml0TnpEYXRhKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLmJwc0NoZWNrU3RyaWN0bHk7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc011bHRpcGxlID0gdGhpcy5icHNNdWx0aXBsZTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKHRoaXMuY29lcmNlVHJlZU5vZGVzKHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelRyZWVTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5icHNEZWZhdWx0U3ViamVjdC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkYXRhOiB7IHR5cGU6IHN0cmluZzsga2V5czogc3RyaW5nW10gfSkgPT4ge1xyXG4gICAgICBpZiAoIWRhdGEgfHwgIWRhdGEua2V5cykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ256RXhwYW5kZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjRXhwYW5kZWRLZXlzKGRhdGEua2V5cywgdGhpcy5icHNOb2Rlcyk7XHJcbiAgICAgICAgICB0aGlzLmJwc0V4cGFuZGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduelNlbGVjdGVkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyhkYXRhLmtleXMsIHRoaXMuYnBzTm9kZXMsIHRoaXMuYnBzTXVsdGlwbGUpO1xyXG4gICAgICAgICAgdGhpcy5icHNTZWxlY3RlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbnpDaGVja2VkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKGRhdGEua2V5cywgdGhpcy5icHNOb2RlcywgdGhpcy5icHNDaGVja1N0cmljdGx5KTtcclxuICAgICAgICAgIHRoaXMuYnBzQ2hlY2tlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZVxyXG4gICAgICAuZXZlbnRUcmlnZ2VyQ2hhbmdlZCgpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICBjYXNlICdleHBhbmQnOlxyXG4gICAgICAgICAgICBpZiAodGhpcy5icHNDdXN0b21UcmVlKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IGRhdGEua2V5cztcclxuICAgICAgICAgICAgICBkYXRhLmtleXMgPSBba2V5c1trZXlzLmxlbmd0aCAtIDFdXTtcclxuICAgICAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0V4cGFuZGVkS2V5cyhkYXRhLmtleXMsIHRoaXMuYnBzTm9kZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYnBzRXhwYW5kQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICAgICAgICB0aGlzLmJwc0NsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2hlY2snOlxyXG4gICAgICAgICAgICB0aGlzLmJwc0NoZWNrQm94Q2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZGJsY2xpY2snOlxyXG4gICAgICAgICAgICB0aGlzLmJwc0RibENsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY29udGV4dG1lbnUnOlxyXG4gICAgICAgICAgICB0aGlzLmJwc0NvbnRleHRNZW51LmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgLy8gZHJhZyBkcm9wXHJcbiAgICAgICAgICBjYXNlICdkcmFnc3RhcnQnOlxyXG4gICAgICAgICAgICB0aGlzLmJwc09uRHJhZ1N0YXJ0LmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcclxuICAgICAgICAgICAgdGhpcy5icHNPbkRyYWdFbnRlci5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcclxuICAgICAgICAgICAgdGhpcy5icHNPbkRyYWdPdmVyLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2xlYXZlJzpcclxuICAgICAgICAgICAgdGhpcy5icHNPbkRyYWdMZWF2ZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2Ryb3AnOlxyXG4gICAgICAgICAgICB0aGlzLmJwc09uRHJvcC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdlbmQnOlxyXG4gICAgICAgICAgICB0aGlzLmJwc09uRHJhZ0VuZC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuYnBzQ2hlY2tTdHJpY3RseSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5ID0gdGhpcy5icHNDaGVja1N0cmljdGx5O1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuYnBzTXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLmJwc011bHRpcGxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19
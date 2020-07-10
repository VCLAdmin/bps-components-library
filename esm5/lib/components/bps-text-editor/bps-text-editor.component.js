import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
var BpsTextEditorComponent = /** @class */ (function () {
    function BpsTextEditorComponent() {
        this.showEditor = false;
        this.lazyLoaded = false;
        this.oninit = new EventEmitter();
        this.onchange = new EventEmitter();
        this.onblur = new EventEmitter();
        this.onkeyup = new EventEmitter();
        this.disabled = false;
        this.height = '250px';
        this.editorID = 'myEditor';
        this.statusbar = false;
        this.resize = false;
        // tslint:disable-next-line: max-line-length
        this.toolbarmobile = ['bold', 'italic', 'underline', 'strikethrough', 'alignleft', 'aligncenter', 'alignright', 'alignjustify', 'bullist', 'numlist', 'forecolor'];
        this.toolbar = 'bold italic underline forecolor | strikethrough backcolor | alignleft aligncenter alignright alignjustify | bullist numlist image';
    }
    BpsTextEditorComponent.prototype.ngOnInit = function () {
        if (!this.lazyLoaded) {
            this.initTinyMCE();
        }
    };
    BpsTextEditorComponent.prototype.initTinyMCE = function () {
        var _this = this;
        if (this.tinyMceSettings === undefined) {
            this.tinyMceSettings = {
                mobile: {
                    theme: 'mobile',
                    plugins: ['image table textcolor lists advlist'],
                    toolbar: this.toolbarmobile
                },
                menubar: false,
                content_css: '/assets/tiny.css',
                image_title: true,
                toolbar_location: 'bottom',
                resize: this.resize,
                automatic_uploads: true,
                height: this.height,
                statusbar: this.statusbar,
                file_picker_types: 'image',
                images_upload_url: '#',
                setup: function (editor) {
                    editor.on('init', function (obj) {
                        if (_this.disabled) {
                            _this.disableEditor();
                        }
                        _this.oninit.emit(obj);
                    });
                    editor.on('blur', function (obj) {
                        _this.onblur.emit(obj);
                    });
                    editor.on('keyup', function (obj) {
                        _this.onkeyup.emit(obj);
                    });
                    editor.on('Change', function (obj) {
                        _this.onchange.emit(obj);
                    });
                },
                color_map: [
                    "e94c0a", "Orange",
                    "00a2d1", "Blue",
                    "7bc053", "Green",
                    "d80f0f", "Red",
                    "e9d90a", "Yellow",
                    "ffffff", "White"
                ],
                plugins: ['image table textcolor lists advlist'],
                toolbar: this.toolbar
            };
        }
        setTimeout(function () {
            _this.showEditor = true;
        }, 100);
    };
    BpsTextEditorComponent.prototype.disableEditor = function () {
        tinymce.get(this.editorID).mode.set('readonly');
    };
    BpsTextEditorComponent.prototype.enableEditor = function () {
        tinymce.get(this.editorID).mode.set('design');
    };
    BpsTextEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.disabled !== null && changes.disabled !== undefined && tinymce.get(this.editorID)) {
            if (changes.disabled) {
                this.disableEditor();
            }
            else {
                this.enableEditor();
            }
        }
        if (changes.lazyLoaded !== null && changes.lazyLoaded !== undefined) {
            if (!this.lazyLoaded) {
                this.initTinyMCE();
            }
            else if (tinymce.get(this.editorID)) {
                this.showEditor = false;
                tinymce.get(this.editorID).remove();
            }
        }
    };
    __decorate([
        Input(), InputBoolean()
    ], BpsTextEditorComponent.prototype, "lazyLoaded", void 0);
    __decorate([
        Output()
    ], BpsTextEditorComponent.prototype, "oninit", void 0);
    __decorate([
        Output()
    ], BpsTextEditorComponent.prototype, "onchange", void 0);
    __decorate([
        Output()
    ], BpsTextEditorComponent.prototype, "onblur", void 0);
    __decorate([
        Output()
    ], BpsTextEditorComponent.prototype, "onkeyup", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTextEditorComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], BpsTextEditorComponent.prototype, "height", void 0);
    __decorate([
        Input()
    ], BpsTextEditorComponent.prototype, "editorID", void 0);
    __decorate([
        Input()
    ], BpsTextEditorComponent.prototype, "statusbar", void 0);
    __decorate([
        Input()
    ], BpsTextEditorComponent.prototype, "resize", void 0);
    __decorate([
        Input()
    ], BpsTextEditorComponent.prototype, "toolbarmobile", void 0);
    __decorate([
        Input()
    ], BpsTextEditorComponent.prototype, "toolbar", void 0);
    __decorate([
        Input()
    ], BpsTextEditorComponent.prototype, "tinyMceSettings", void 0);
    BpsTextEditorComponent = __decorate([
        Component({
            exportAs: 'bpsTextEditor',
            selector: 'bps-text-editor',
            template: "<editor [class.bps-editor-disabled]=\"disabled\"\n        [id]=\"editorID\"\n        *ngIf=\"showEditor\"\n        [init]=\"tinyMceSettings\"\n        class=\"bps-editor\"\n        [disabled]=\"disabled\"></editor>\n",
            encapsulation: ViewEncapsulation.None,
            styles: [".tox-tinymce{border:none!important;border-radius:4px!important}.tox .tox-edit-area__iframe{background-color:#313131!important}.mce-content-body{color:#fff}.tox .tox-toolbar__primary{background-color:#313131!important}.tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-right:1px solid #fff!important}.tox .tox-tbtn svg{fill:#fff!important;transform:scale(.74)!important}.tox .tox-split-button__chevron svg{fill:#fff!important}.tox .tox-tbtn:hover svg{fill:#00a2d1!important}.tox .tox-split-button:hover{box-shadow:none!important}.tox-tinymce:not(.tox-tinymce-inline) .tox-editor-header:not(:first-child) .tox-toolbar-overlord:first-child .tox-toolbar__primary{border-top:none!important;background:#313131!important;padding-bottom:10px}.tox .tox-tbtn{height:34px!important;width:25px!important;margin:0!important;top:-3px;position:relative}.tox .tox-split-button{height:34px!important;position:relative!important;top:-3px!important;padding:3px 0!important}.tox .tox-split-button--enabled,.tox .tox-split-button:focus,.tox .tox-split-button:hover,.tox .tox-tbtn--enabled,.tox .tox-tbtn--enabled:hover,.tox .tox-tbtn:hover{background:#262626!important}.tox .tox-split-button__chevron{width:16px!important}.tox .tox-tbtn:active{background:#262626!important}.tox .tox-tbtn:focus{background:#313131!important}.tox .tox-toolbar__group{margin:0!important;height:30px!important}.tox-sidebar-wrap{color:#fff}.tox.tox-tinymce-aux .tox-toolbar__overflow{background-color:#363636!important;border:none!important;border-radius:4px!important;padding-top:7px!important;margin-bottom:6px!important}.tox .tox-toolbar__overflow{background:unset!important;height:39px!important}.tox .tox-menu{border:none!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important;background-color:#262626!important;margin-bottom:10px!important}.tox .tox-collection__item-checkmark svg,.tox .tox-collection__item-icon svg{fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled),.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-checkmark svg,.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-icon svg{background-color:#262626!important;fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item:hover,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-checkmark svg,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-icon svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled{background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-checkmark svg,.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-icon svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-button{background-color:#00a2d1!important;border-color:#00a2d1!important}.tox .tox-button:hover:not(:disabled){background-color:#1c6ca1!important;border-color:#1c6ca1!important}.tox .tox-button--naked:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-button--naked:not(:disabled){background-color:transparent!important;border-color:transparent!important}.tox .tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg{fill:#fff!important}.tox .tox-dialog__header{background-color:#313131!important;border-bottom:none!important;color:#fff!important}.tox .tox-dialog__body{background-color:#313131!important}.tox .tox-dialog__body-nav-item{color:#fff!important}.tox .tox-label,.tox .tox-toolbar-label{color:#fff!important;margin-bottom:4px!important}.tox .tox-textarea,.tox .tox-textfield,.tox .tox-toolbar-textfield{background-color:#262626!important;border-color:#262626!important;border-radius:6px!important;color:#fff!important;font-size:12px!important;min-height:24px!important;padding:2px 4.75px!important}.tox .tox-dialog__title{font-size:16px!important}.tox .tox-dropzone{background:#363636!important;border:2px dashed #262626!important}.tox .tox-dropzone p{color:#999!important}.tox .tox-button--secondary{background-color:#313131!important;border-color:#313131!important;border-radius:4px!important;color:#fff!important}.tox .tox-button--secondary:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important;color:#fff!important}.tox .tox-button--naked:active:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-dialog__footer{background-color:#313131!important;border-top:1px solid #363636!important}.tox .tox-dialog__body-nav-item--active{border-bottom:2px solid #207ab7!important;color:#207ab7!important}.tox .tox-tbtn--disabled,.tox .tox-tbtn--disabled:hover,.tox .tox-tbtn:disabled,.tox .tox-tbtn:disabled:hover{background-color:#313131!important}.tox .tox-tbtn--disabled svg,.tox .tox-tbtn--disabled:hover svg,.tox .tox-tbtn:disabled svg,.tox .tox-tbtn:disabled:hover svg{fill:#666!important}.bps-editor-disabled .tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-color:#666!important}[title=\"Align center\"],[title=\"Align left\"],[title=\"Align right\"],[title=Justify]{top:-1px!important}"]
        })
    ], BpsTextEditorComponent);
    return BpsTextEditorComponent;
}());
export { BpsTextEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy10ZXh0LWVkaXRvci9icHMtdGV4dC1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzdDO0lBa0JFO1FBaEJBLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDTSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFDakIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsNENBQTRDO1FBQ25DLGtCQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUosWUFBTyxHQUFHLG1JQUFtSSxDQUFDO0lBR3ZJLENBQUM7SUFFakIseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BC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M0Isb09BQStDO1lBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO09BQ1csc0JBQXNCLENBMEdsQztJQUFELDZCQUFDO0NBQUEsQUExR0QsSUEwR0M7U0ExR1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxuZGVjbGFyZSB2YXIgdGlueW1jZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdicHNUZXh0RWRpdG9yJyxcbiAgc2VsZWN0b3I6ICdicHMtdGV4dC1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCcHNUZXh0RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHNob3dFZGl0b3IgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGF6eUxvYWRlZCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbmluaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ua2V5dXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGVpZ2h0ID0gJzI1MHB4JztcclxuICBASW5wdXQoKSBlZGl0b3JJRCA9ICdteUVkaXRvcic7XHJcbiAgQElucHV0KCkgc3RhdHVzYmFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVzaXplID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICBASW5wdXQoKSB0b29sYmFybW9iaWxlID0gWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtldGhyb3VnaCcsICdhbGlnbmxlZnQnLCAnYWxpZ25jZW50ZXInLCAnYWxpZ25yaWdodCcsICdhbGlnbmp1c3RpZnknLCAnYnVsbGlzdCcsICdudW1saXN0JywgJ2ZvcmVjb2xvciddO1xyXG4gIEBJbnB1dCgpIHRvb2xiYXIgPSAnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIGZvcmVjb2xvciB8IHN0cmlrZXRocm91Z2ggYmFja2NvbG9yIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IGltYWdlJztcclxuICBASW5wdXQoKSB0aW55TWNlU2V0dGluZ3MhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLmxhenlMb2FkZWQpIHtcclxuICAgICAgdGhpcy5pbml0VGlueU1DRSgpO1xyXG4gICAgfVxyXG4gIH1cblxuICBpbml0VGlueU1DRSgpIHtcbiAgICBpZiAodGhpcy50aW55TWNlU2V0dGluZ3MgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRpbnlNY2VTZXR0aW5ncyA9IHtcclxuICAgICAgICBtb2JpbGU6IHtcclxuICAgICAgICAgIHRoZW1lOiAnbW9iaWxlJyxcclxuICAgICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUgdGV4dGNvbG9yIGxpc3RzIGFkdmxpc3QnXSxcclxuICAgICAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcm1vYmlsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudWJhcjogZmFsc2UsXHJcbiAgICAgICAgY29udGVudF9jc3M6ICcvYXNzZXRzL3RpbnkuY3NzJyxcclxuICAgICAgICBpbWFnZV90aXRsZTogdHJ1ZSxcclxuICAgICAgICB0b29sYmFyX2xvY2F0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICByZXNpemU6IHRoaXMucmVzaXplLFxyXG4gICAgICAgIGF1dG9tYXRpY191cGxvYWRzOiB0cnVlLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgc3RhdHVzYmFyOiB0aGlzLnN0YXR1c2JhcixcclxuICAgICAgICBmaWxlX3BpY2tlcl90eXBlczogJ2ltYWdlJyxcclxuICAgICAgICBpbWFnZXNfdXBsb2FkX3VybDogJyMnLFxyXG4gICAgICAgIHNldHVwOiAoZWRpdG9yOiBhbnkpID0+IHtcclxuICAgICAgICAgIGVkaXRvci5vbignaW5pdCcsIChvYmopID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVFZGl0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uaW5pdC5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbignYmx1cicsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmJsdXIuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2tleXVwJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ua2V5dXAuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ0NoYW5nZScsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmNoYW5nZS5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yX21hcDogW1xyXG4gICAgICAgICAgXCJlOTRjMGFcIiwgXCJPcmFuZ2VcIixcclxuICAgICAgICAgIFwiMDBhMmQxXCIsIFwiQmx1ZVwiLFxyXG4gICAgICAgICAgXCI3YmMwNTNcIiwgXCJHcmVlblwiLFxyXG4gICAgICAgICAgXCJkODBmMGZcIiwgXCJSZWRcIixcclxuICAgICAgICAgIFwiZTlkOTBhXCIsIFwiWWVsbG93XCIsXHJcbiAgICAgICAgICBcImZmZmZmZlwiLCBcIldoaXRlXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUgdGV4dGNvbG9yIGxpc3RzIGFkdmxpc3QnXSxcclxuICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXJcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93RWRpdG9yID0gdHJ1ZTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxuXG4gIGRpc2FibGVFZGl0b3IoKSB7XG4gICAgdGlueW1jZS5nZXQodGhpcy5lZGl0b3JJRCkubW9kZS5zZXQoJ3JlYWRvbmx5Jyk7XHJcbiAgfVxuXG4gIGVuYWJsZUVkaXRvcigpIHtcbiAgICB0aW55bWNlLmdldCh0aGlzLmVkaXRvcklEKS5tb2RlLnNldCgnZGVzaWduJyk7XHJcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCAhPT0gbnVsbCAmJiBjaGFuZ2VzLmRpc2FibGVkICE9PSB1bmRlZmluZWQgJiYgdGlueW1jZS5nZXQodGhpcy5lZGl0b3JJRCkpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVFZGl0b3IoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUVkaXRvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubGF6eUxvYWRlZCAhPT0gbnVsbCAmJiBjaGFuZ2VzLmxhenlMb2FkZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoIXRoaXMubGF6eUxvYWRlZCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFRpbnlNQ0UoKTtcclxuICAgICAgfSBlbHNlIGlmICh0aW55bWNlLmdldCh0aGlzLmVkaXRvcklEKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0VkaXRvciA9IGZhbHNlO1xyXG4gICAgICAgIHRpbnltY2UuZ2V0KHRoaXMuZWRpdG9ySUQpLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxuXG59XG4iXX0=
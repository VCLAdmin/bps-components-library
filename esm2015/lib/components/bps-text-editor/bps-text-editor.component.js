import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
let BpsTextEditorComponent = class BpsTextEditorComponent {
    constructor() {
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
    ngOnInit() {
        if (!this.lazyLoaded) {
            this.initTinyMCE();
        }
    }
    initTinyMCE() {
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
                setup: (editor) => {
                    editor.on('init', (obj) => {
                        if (this.disabled) {
                            this.disableEditor();
                        }
                        this.oninit.emit(obj);
                    });
                    editor.on('blur', (obj) => {
                        this.onblur.emit(obj);
                    });
                    editor.on('keyup', (obj) => {
                        this.onkeyup.emit(obj);
                    });
                    editor.on('Change', (obj) => {
                        this.onchange.emit(obj);
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
        setTimeout(() => {
            this.showEditor = true;
        }, 100);
    }
    disableEditor() {
        tinymce.get(this.editorID).mode.set('readonly');
    }
    enableEditor() {
        tinymce.get(this.editorID).mode.set('design');
    }
    ngOnChanges(changes) {
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
export { BpsTextEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy10ZXh0LWVkaXRvci9icHMtdGV4dC1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzdDLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBa0JqQztRQWhCQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ00sZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLDRDQUE0QztRQUNuQyxrQkFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlKLFlBQU8sR0FBRyxtSUFBbUksQ0FBQztJQUd2SSxDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMs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QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLG9PQUErQztRQUUvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztHQUNXLHNCQUFzQixDQTBHbEM7U0ExR1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxuZGVjbGFyZSB2YXIgdGlueW1jZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdicHNUZXh0RWRpdG9yJyxcbiAgc2VsZWN0b3I6ICdicHMtdGV4dC1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCcHNUZXh0RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHNob3dFZGl0b3IgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGF6eUxvYWRlZCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbmluaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ua2V5dXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGVpZ2h0ID0gJzI1MHB4JztcclxuICBASW5wdXQoKSBlZGl0b3JJRCA9ICdteUVkaXRvcic7XHJcbiAgQElucHV0KCkgc3RhdHVzYmFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVzaXplID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICBASW5wdXQoKSB0b29sYmFybW9iaWxlID0gWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtldGhyb3VnaCcsICdhbGlnbmxlZnQnLCAnYWxpZ25jZW50ZXInLCAnYWxpZ25yaWdodCcsICdhbGlnbmp1c3RpZnknLCAnYnVsbGlzdCcsICdudW1saXN0JywgJ2ZvcmVjb2xvciddO1xyXG4gIEBJbnB1dCgpIHRvb2xiYXIgPSAnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIGZvcmVjb2xvciB8IHN0cmlrZXRocm91Z2ggYmFja2NvbG9yIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IGltYWdlJztcclxuICBASW5wdXQoKSB0aW55TWNlU2V0dGluZ3MhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLmxhenlMb2FkZWQpIHtcclxuICAgICAgdGhpcy5pbml0VGlueU1DRSgpO1xyXG4gICAgfVxyXG4gIH1cblxuICBpbml0VGlueU1DRSgpIHtcbiAgICBpZiAodGhpcy50aW55TWNlU2V0dGluZ3MgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRpbnlNY2VTZXR0aW5ncyA9IHtcclxuICAgICAgICBtb2JpbGU6IHtcclxuICAgICAgICAgIHRoZW1lOiAnbW9iaWxlJyxcclxuICAgICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUgdGV4dGNvbG9yIGxpc3RzIGFkdmxpc3QnXSxcclxuICAgICAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcm1vYmlsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudWJhcjogZmFsc2UsXHJcbiAgICAgICAgY29udGVudF9jc3M6ICcvYXNzZXRzL3RpbnkuY3NzJyxcclxuICAgICAgICBpbWFnZV90aXRsZTogdHJ1ZSxcclxuICAgICAgICB0b29sYmFyX2xvY2F0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICByZXNpemU6IHRoaXMucmVzaXplLFxyXG4gICAgICAgIGF1dG9tYXRpY191cGxvYWRzOiB0cnVlLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgc3RhdHVzYmFyOiB0aGlzLnN0YXR1c2JhcixcclxuICAgICAgICBmaWxlX3BpY2tlcl90eXBlczogJ2ltYWdlJyxcclxuICAgICAgICBpbWFnZXNfdXBsb2FkX3VybDogJyMnLFxyXG4gICAgICAgIHNldHVwOiAoZWRpdG9yOiBhbnkpID0+IHtcclxuICAgICAgICAgIGVkaXRvci5vbignaW5pdCcsIChvYmopID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVFZGl0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uaW5pdC5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbignYmx1cicsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmJsdXIuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2tleXVwJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ua2V5dXAuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ0NoYW5nZScsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmNoYW5nZS5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yX21hcDogW1xyXG4gICAgICAgICAgXCJlOTRjMGFcIiwgXCJPcmFuZ2VcIixcclxuICAgICAgICAgIFwiMDBhMmQxXCIsIFwiQmx1ZVwiLFxyXG4gICAgICAgICAgXCI3YmMwNTNcIiwgXCJHcmVlblwiLFxyXG4gICAgICAgICAgXCJkODBmMGZcIiwgXCJSZWRcIixcclxuICAgICAgICAgIFwiZTlkOTBhXCIsIFwiWWVsbG93XCIsXHJcbiAgICAgICAgICBcImZmZmZmZlwiLCBcIldoaXRlXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUgdGV4dGNvbG9yIGxpc3RzIGFkdmxpc3QnXSxcclxuICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXJcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93RWRpdG9yID0gdHJ1ZTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxuXG4gIGRpc2FibGVFZGl0b3IoKSB7XG4gICAgdGlueW1jZS5nZXQodGhpcy5lZGl0b3JJRCkubW9kZS5zZXQoJ3JlYWRvbmx5Jyk7XHJcbiAgfVxuXG4gIGVuYWJsZUVkaXRvcigpIHtcbiAgICB0aW55bWNlLmdldCh0aGlzLmVkaXRvcklEKS5tb2RlLnNldCgnZGVzaWduJyk7XHJcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCAhPT0gbnVsbCAmJiBjaGFuZ2VzLmRpc2FibGVkICE9PSB1bmRlZmluZWQgJiYgdGlueW1jZS5nZXQodGhpcy5lZGl0b3JJRCkpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVFZGl0b3IoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUVkaXRvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubGF6eUxvYWRlZCAhPT0gbnVsbCAmJiBjaGFuZ2VzLmxhenlMb2FkZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoIXRoaXMubGF6eUxvYWRlZCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFRpbnlNQ0UoKTtcclxuICAgICAgfSBlbHNlIGlmICh0aW55bWNlLmdldCh0aGlzLmVkaXRvcklEKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0VkaXRvciA9IGZhbHNlO1xyXG4gICAgICAgIHRpbnltY2UuZ2V0KHRoaXMuZWRpdG9ySUQpLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxuXG59XG4iXX0=
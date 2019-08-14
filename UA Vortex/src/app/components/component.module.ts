import { PdfviewComponent } from './pdfview/pdfview.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { WebviewComponent } from "./webview/webview.component";
import { PDFViewNg } from 'nativescript-pdfview-ng';
import { registerElement } from 'nativescript-angular';
registerElement('PDFViewNg', () => PDFViewNg);

@NgModule({
    imports: [
        NativeScriptCommonModule,
    ],
    exports: [
        WebviewComponent,
        SpinnerComponent,
        PdfviewComponent
    ],
    declarations: [
        WebviewComponent,
        SpinnerComponent,
        PdfviewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ComponentModule { }

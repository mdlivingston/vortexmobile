import { DataService } from './services/data.service';
import { ComponentModule } from './components/component.module';
import { WebviewComponent } from './components/webview/webview.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptAnimationsModule } from 'nativescript-angular/animations';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptAnimationsModule,
        ComponentModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [DataService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

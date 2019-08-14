import { PrepareComponent } from './prepare.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PrepareRoutingModule } from "./prepare-routing.module";

import { NativeScriptMaterialButtonModule } from "nativescript-material-button/angular";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        PrepareRoutingModule,
        NativeScriptMaterialButtonModule
    ],
    declarations: [
        PrepareComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PrepareModule { }

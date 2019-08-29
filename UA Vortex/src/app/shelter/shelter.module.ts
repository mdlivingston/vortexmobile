import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ShelterComponent } from './shelter.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ShelterRoutingModule } from './shelter-routing.module';

@NgModule({
    declarations:
        [
            ShelterComponent,

        ],
    imports: [NativeScriptCommonModule, ShelterRoutingModule],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ShelterModule { }

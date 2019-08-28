import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ShelterComponent } from './shelter.component';
import { NgModule } from '@angular/core';
import { ShelterRoutingModule } from './shelter-routing.module';

@NgModule({
    declarations:
        [
            ShelterComponent,

        ],
    imports: [NativeScriptCommonModule, ShelterRoutingModule]
})
export class ShelterModule { }

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page, isIOS } from 'tns-core-modules/ui/page/page';
import * as utils from "tns-core-modules/utils/utils";
import { DataService } from '../services/data.service';
import * as email from "nativescript-email";
import { AnimationCurve } from 'tns-core-modules/ui/enums/enums';
import { TextView } from "tns-core-modules/ui/text-view/text-view";
@Component({
    selector: 'ns-informed',
    templateUrl: './informed.component.html',
    styleUrls: ['./informed.component.css']
})
export class InformedComponent implements OnInit {
    @ViewChild("email", { static: false }) email: ElementRef;
    composeOptions: email.ComposeOptions;
    contactInfo = '';
    message = '';
    constructor(
        private page: Page,
        public routerExtensions: RouterExtensions,
        private dataService: DataService) {
        this.page.actionBarHidden = false;
        this.composeOptions = {
            subject: "Weather Radio Inquiry",
            body: '',
            to: ['laura.myers@ua.edu'],
            cc: ['jrreed2@ua.edu'],
        }
    }
    ngOnInit() {
        const safeAreaInsets = this.dataService.getSafeAreaInsets();
        if (safeAreaInsets) {
            this.page.marginBottom = -1 * safeAreaInsets.bottom;
        }
    }
    closeEmail() {
        this.email.nativeElement.animate({
            //opacity: 0,
            //backgroundColor: new Color("Blue"),
            translate: { x: 0, y: -1000 },
            //scale: { x: 2, y: 2 },
            //rotate: 100,
            duration: 1000,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        })

    }
    openEmail() {
        this.email.nativeElement.animate({
            //opacity: 0,
            //backgroundColor: new Color("Blue"),
            translate: { x: 0, y: 0 },
            //scale: { x: 2, y: 2 },
            //rotate: 100,
            duration: 500,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        })




    }
    sendEmail() {
        email.available().then((avail: boolean) => {
            console.log("Email available? " + avail);
            if (avail) {
                email.compose(this.composeOptions).then(result => {
                    console.log(result)
                })
            }
        })
    }

}

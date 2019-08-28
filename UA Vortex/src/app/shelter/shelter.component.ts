import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular';
import * as utils from "tns-core-modules/utils/utils";
@Component({
    selector: 'ns-shelter',
    templateUrl: './shelter.component.html',
    styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {

    constructor(
        private page: Page,
        public routerExtensions: RouterExtensions,
        private dataService: DataService) {
        this.page.actionBarHidden = false;
    }

    ngOnInit() {
        const safeAreaInsets = this.dataService.getSafeAreaInsets();
        if (safeAreaInsets) {
            this.page.marginBottom = -1 * safeAreaInsets.bottom;
        }
    }
    goToLink(link) {

        if (link == 'tips') {
            utils.openUrl("https://tuscaloosacountyema.org/taking-shelter/");
        }
        if (link == 'tuscaloosa') {
            utils.openUrl("https://tuscaloosacountyema.org/public-shelters/");
        }
    }
}

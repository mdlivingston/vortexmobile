import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page, isIOS } from 'tns-core-modules/ui/page/page';
import * as utils from "tns-core-modules/utils/utils";
import { DataService } from '~/app/services/data.service';

@Component({
    selector: 'ns-mobile-apps',
    templateUrl: './mobile-apps.component.html',
    styleUrls: ['./mobile-apps.component.css']
})
export class MobileAppsComponent implements OnInit {

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
        if (isIOS) {
            if (link == 'uasafety') {
                utils.openUrl("https://apps.apple.com/us/app/ua-safety/id1198780581");
            }
            if (link == 'algo') {
                utils.openUrl("https://apps.apple.com/us/app/algo-traffic-by-aldot-alea/id1141136558");
            }
            if (link == 'tsco') {
                utils.openUrl("https://apps.apple.com/us/app/tuscaloosa-county-sheriff/id905485668");
            }
        } else {
            if (link == 'uasafety') {
                utils.openUrl("https://play.google.com/store/apps/details?id=edu.ua.caps.uasafety");
            }
            if (link == 'algo') {
                utils.openUrl("https://play.google.com/store/apps/details?id=edu.ua.caps.algoTraffic&hl=en_US");
            }
            if (link == 'tsco') {
                utils.openUrl("https://play.google.com/store/apps/details?id=edu.ua.caps.tcsopublic&hl=en_US");
            }
        }
    }

}

import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page, isIOS } from 'tns-core-modules/ui/page/page';
import * as utils from "tns-core-modules/utils/utils";
@Component({
    selector: 'ns-informed',
    templateUrl: './informed.component.html',
    styleUrls: ['./informed.component.css']
})
export class InformedComponent implements OnInit {

    constructor(
        private page: Page,
        public routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = false;
    }
    ngOnInit() {
    }
    goToLink(link) {
        if (isIOS) {
            if (link == 'uasafety') {
                utils.openUrl("https://apps.apple.com/us/app/ua-safety/id1198780581");
            }
            if (link == 'algo') {
                utils.openUrl("https://apps.apple.com/us/app/algo-traffic-by-aldot-alea/id1141136558");
            }
        } else {
            if (link == 'uasafety') {
                utils.openUrl("https://play.google.com/store/apps/details?id=edu.ua.caps.uasafety");
            }
            if (link == 'algo') {
                utils.openUrl("https://play.google.com/store/apps/details?id=edu.ua.caps.algoTraffic&hl=en_US");
            }

        }

        if (link == 'weather') {
            utils.openUrl("https://tuscaloosacountyema.org/weather/weather-information-links/");
        }
        if (link == 'radio') {
            utils.openUrl("https://www.weather.gov/bmx/nwr_overview");
        }
    }
}

import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page, isIOS } from 'tns-core-modules/ui/page/page';
import * as utils from "tns-core-modules/utils/utils";
import { DataService } from '~/app/services/data.service';

@Component({
    selector: 'ns-web-links',
    templateUrl: './web-links.component.html',
    styleUrls: ['./web-links.component.css']
})
export class WebLinksComponent implements OnInit {
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

        if (link == 'weather') {
            utils.openUrl("https://tuscaloosacountyema.org/weather/weather-information-links/");
        }
        if (link == 'radio') {
            utils.openUrl("https://www.weather.gov/bmx/nwr_overview");
        }
        if (link == 'trends') {
            utils.openUrl("https://tuscaloosacountyema.org/weather/local-weather-trends/");
        }
        if (link == 'tusc') {
            utils.openUrl("https://member.everbridge.net/index/453003085615671#/login");
        }
    }
}

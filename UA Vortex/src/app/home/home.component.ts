import { DataService } from './../services/data.service';
import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import * as application from "tns-core-modules/application";

export function getSafeAreaInsets(): undefined | {
    top: number,
    left: number,
    bottom: number,
    right: number
} {
    if (application.ios && application.ios.window.safeAreaInsets) {
        return application.ios.window.safeAreaInsets;
    } else {
        return undefined;
    }
}


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    constructor(private page: Page,
        private dataService: DataService) {
        // Use the component constructor to inject providers.
        this.page.actionBarHidden = false;

    }

    ngOnInit(): void {

        const safeAreaInsets = getSafeAreaInsets();

        if (safeAreaInsets) {
            this.page.marginBottom = -1 * safeAreaInsets.bottom;
        }


    }
}

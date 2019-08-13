import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    constructor(private page: Page, ) {
        // Use the component constructor to inject providers.
        this.page.actionBarHidden = false;

    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}

import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

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

}

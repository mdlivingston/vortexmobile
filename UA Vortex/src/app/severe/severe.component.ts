import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ns-severe',
    templateUrl: './severe.component.html',
    styleUrls: ['./severe.component.css']
})
export class SevereComponent implements OnInit {

    constructor(public routerExtensions: RouterExtensions) { }

    ngOnInit() {
    }

}

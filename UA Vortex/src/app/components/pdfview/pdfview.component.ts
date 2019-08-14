import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: 'ns-pdfview',
    templateUrl: './pdfview.component.html',
    styleUrls: ['./pdfview.component.css']
})
export class PdfviewComponent implements OnInit {
    constructor(
        public routerExtensions: RouterExtensions,
        public dataService: DataService) { }

    ngOnInit() {
    }

    goBack() {
        this.dataService.pdfURL = '';
        this.routerExtensions.back();
    }

}

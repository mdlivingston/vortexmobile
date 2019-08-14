import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    pdfURL = '';
    pdfTitle = '';
    spinnerInit = true;
    constructor() { }
}

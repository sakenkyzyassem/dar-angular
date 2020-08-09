import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Favicon } from '../shared/types';

@Component ({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls:['./logo.component.scss']
})

export class LogoComponent implements OnInit {

    constructor(@Inject(DOCUMENT) private _document: HTMLDocument) {}

    @Input()
    favicons: Favicon[] = []

    ngOnInit(): void{
        let favicon = '';

        if( favicon === '') {
            this._document.getElementById("favicon").setAttribute("href", "assets/logos/app.svg");
            this._document.getElementById('favicon').setAttribute('type', 'image/svg+xml');
        }
        else{
            this._document.getElementById('favicon').setAttribute('href', favicon);
        }

    }

}
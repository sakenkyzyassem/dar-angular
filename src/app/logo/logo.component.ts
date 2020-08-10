import { Component, OnInit, Input, Inject } from '@angular/core';
import { Favicon } from '../shared/types';

@Component ({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls:['./logo.component.scss']
})

export class LogoComponent implements OnInit {

    constructor() {}

    @Input()
    favicon: Favicon = {
        url: '',
        title: ''
    }

    ngOnInit(): void{}

}
import { Component, OnInit } from '@angular/core';
import { NavItem } from '../shared/types';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit{
    constructor() { }

    ngOnInit(): void {}

    navItemsFromApp: NavItem[] = [
        {
          title: 'Users',
          enabled: true,
          url: '/users'
        },
        {
          title: 'Videos',
          enabled: false,
          url: '/videos'
        },
        {
          title: 'Rooms',
          enabled: true,
          url: '/room'
        }
      ]
}
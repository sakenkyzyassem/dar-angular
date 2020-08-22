import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/types';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

    user: User;

    constructor(
        private router: ActivatedRoute,) {}

    ngOnInit(): void {
        this.router.data
        .subscribe( ({user}) => {
            this.user = user;
        })
    }

}
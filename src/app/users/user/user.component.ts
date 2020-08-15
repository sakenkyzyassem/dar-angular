import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/types';
import { UserService } from '../services/user.service';
import { mergeMap } from 'rxjs/operators';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

    user: User;

    constructor(
        private router: ActivatedRoute,
        private userService: UserService) {}

    ngOnInit(): void {
        this.router.params
            .pipe(
                mergeMap(param => this.userService.getUser(param.id))
            )
            .subscribe(user => {
                this.user = user;
            });
    }

}
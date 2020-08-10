import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/shared/types';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

    users: User[] = [];
    
    constructor(
        private httpClient: HttpClient,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.httpClient
            .get<User[]>('https://jsonplaceholder.typicode.com/users') // isObservable
            .pipe(
                catchError((err) => {
                    console.log("Error trying get Users", err);
                    return of([]);
                })
            )
            .subscribe(data => {
                console.log(data);
                this.users = data;
            })
    }

    navigateToUser( id: number ){
        this.router.navigate(['users', id]);
    }
}
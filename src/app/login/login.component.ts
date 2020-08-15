import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    login: string;
    password: string;

    constructor( private router: Router) { }

    ngOnInit() { }

    SubmitLogin() {
        console.log(this.login+" "+this.password);
        this.router.navigate(['/']);
    }
}
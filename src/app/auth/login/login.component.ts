import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    errorMessage: string;

    form: FormGroup;

    constructor( 
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        })
    }

    submitLogin() {
        this.errorMessage = '';

        if(this.form.invalid){
            return;
        }
        
        this.authService.login(this.form.value['username'], this.form.get('password').value)
            .pipe(
                catchError( (err: HttpErrorResponse) => {
                    this.errorMessage = err.error ? err.error.message : err.message;
                    this.form.reset();
                    return EMPTY;
                })
            )
            .subscribe( res => {
                console.log('AUTH', res);
                this.authService.setLoggedIn(res);
                this.router.navigate(['/']);
            })
    }
}
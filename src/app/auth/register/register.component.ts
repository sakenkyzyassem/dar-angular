import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

    form: FormGroup;
    errorMessage: string;

    constructor( 
        private router: Router,
        private authService: AuthService,
    ) { }

    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        })
    }

    submitRegister() {
        this.errorMessage = '';

        if( this.form.invalid ){
            return;
        }

        this.authService.register(this.form.get('username').value, this.form.get('password').value)
            .pipe(
                catchError( (err: HttpErrorResponse) => {
                    this.errorMessage = err.error ? err.error.message : err.message;
                    this.form.reset();
                    return EMPTY;
                })
            )
            .subscribe(res => {
                console.log('RESITRATION', res);
                this.router.navigate(['/auth/login']);
            })
    }
}
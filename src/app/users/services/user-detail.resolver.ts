import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/types';
import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserDetailResolver implements Resolve<User> {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this.userService.getUser(+route.paramMap.get('id'))
        .pipe(
            catchError( (err: HttpErrorResponse) => {
                if(err.status === 404){
                    this.router.navigate(['404']);
                }
                return of(null);
            })
        )
    }
}

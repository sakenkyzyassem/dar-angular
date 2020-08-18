import { Component, OnInit, Input } from '@angular/core';
import { NavItem, Favicon } from '../shared/types';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo: Favicon = {
    url: '../../assets/favicon.ico',
    title: 'Assem'
  }
  isLoggedIn: boolean;

  @Input()
  navItems: NavItem[] = [];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$
      .subscribe(res => {
        this.isLoggedIn = res;
      }) 
  }

  logoutClick() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);  
  }

}

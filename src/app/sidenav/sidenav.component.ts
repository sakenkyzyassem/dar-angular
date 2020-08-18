import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../shared/types';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$
      .subscribe( res => {
        this.isLoggedIn = res;
      })
  }

  @Input()
  navItems: NavItem[] = []


  logoutClick() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}

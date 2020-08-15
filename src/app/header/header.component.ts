import { Component, OnInit, Input } from '@angular/core';
import { NavItem, Favicon } from '../shared/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLoginButton = true;
  logo: Favicon = {
    url: '../../assets/favicon.ico',
    title: 'Assem'
  }

  @Input()
  navItems: NavItem[] = [];

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.showLoginButton = false;
    this.router.navigate(['login']);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NavItem, Favicon } from '../shared/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLoginButton = true;

  @Input()
  navItems: NavItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  logo: Favicon = {
    url: '../../assets/favicon.ico',
    title: 'Assem'
  }

  onLoginClick() {
    alert('Login clicked');
    this.showLoginButton = false;
  }

}

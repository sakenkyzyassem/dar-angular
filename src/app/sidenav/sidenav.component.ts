import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../shared/types';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  navItems: NavItem[] = []

  onLogin() {
    alert('Login');
  }
}

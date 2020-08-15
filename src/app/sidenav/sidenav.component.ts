import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../shared/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  @Input()
  navItems: NavItem[] = []

  onLogin() {
    this.router.navigate(['login']);
  }
}

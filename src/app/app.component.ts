import { Component } from '@angular/core';
import { NavItem } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dar';

  navItemsFromApp: NavItem[] = [
    {
      title: 'Users',
      enabled: true,
      url: '/users',
      favicon: 'src/assets/logos/users.svg'
    },
    {
      title: 'Videos',
      enabled: false,
      url: '/videos',
      favicon: 'src/assets/logos/videos.svg'
    },
    {
      title: 'Rooms',
      enabled: true,
      url: '',
      favicon: 'src/assets/logos/rooms.svg'
    }
  ]

}

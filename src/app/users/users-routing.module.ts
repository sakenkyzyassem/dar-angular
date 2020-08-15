import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

const routes: Route[] = [
    {
        path: ':id',
        component: UserComponent
    },  
    {
        path: '',
        component: UsersComponent
    },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class UsersRoutingModule {}
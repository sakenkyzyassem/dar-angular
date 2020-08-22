import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailResolver } from './services/user-detail.resolver';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Route[] = [
    {
        path: ':id',
        component: UserComponent,
        resolve: {
          user: UserDetailResolver,
        }
    },  
    {
        path: 'form/:id',
        component: UserFormComponent,
        resolve: {
          user: UserDetailResolver,
        }
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
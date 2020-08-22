import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './services/user.service';
import { UserDetailResolver } from './services/user-detail.resolver';
import { UserFormComponent } from './user-form/user-form.component'

@NgModule({
    declarations: [
        UsersComponent,
        UserComponent,
        UserFormComponent,
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        UserService,
        UserDetailResolver,
    ]
})

export class UsersModule {}
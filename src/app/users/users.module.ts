import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        UsersComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        UserService
    ]
})

export class UsersModule {}
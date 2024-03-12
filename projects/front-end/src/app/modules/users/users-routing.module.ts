import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import {CreateUserComponent} from "./ui/create-user/create-user.component";
import {EditUserComponent} from "./ui/edit-user/edit-user.component";
import {ListUsersComponent} from "./ui/list-users/list-users.component";

const routes: Routes = [
  { path: '', component: UsersComponent },
  {path:'create',component:CreateUserComponent},
  {path:'edit',component:EditUserComponent},
  {path:'list',component:ListUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

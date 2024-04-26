import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import {CreateUserComponent} from "./ui/create-user/create-user.component";
import {EditUserComponent} from "./ui/edit-user/edit-user.component";
import {ListUsersComponent} from "./ui/list-users/list-users.component";
import { FormComponent } from './ui/create-user/form.component';
import { DetailsUserComponent } from './ui/details-user/details-user.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  {path:'create',component:CreateUserComponent},
  {path:'edit',component:EditUserComponent},
  {path:'list',component:ListUsersComponent},
  {path: 'form',component:FormComponent},
  {path:"details",component:DetailsUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

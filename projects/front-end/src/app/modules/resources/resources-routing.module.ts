import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import {CreateUserComponent} from "../users/ui/create-user/create-user.component";
import {EditUserComponent} from "../users/ui/edit-user/edit-user.component";
import {ListUsersComponent} from "../users/ui/list-users/list-users.component";
import {CreateResourceComponent} from "./ui/create-resource/create-resource.component";
import {EditResourceComponent} from "./ui/edit-resource/edit-resource.component";
import {ListResourcesComponent} from "./ui/list-resources/list-resources.component";

const routes: Routes = [
  { path: '', component: ResourcesComponent },
  {path:'create',component:CreateResourceComponent},
  {path:'edit',component:EditResourceComponent},
  {path:'list',component:ListResourcesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }

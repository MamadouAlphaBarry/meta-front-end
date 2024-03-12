import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs.component';
import {CreateUserComponent} from "../users/ui/create-user/create-user.component";
import {EditUserComponent} from "../users/ui/edit-user/edit-user.component";
import {ListUsersComponent} from "../users/ui/list-users/list-users.component";
import {CreateJobComponent} from "./ui/create-job/create-job.component";
import {EditJobComponent} from "./ui/edit-job/edit-job.component";
import {ListJobComponent} from "./ui/list-job/list-job.component";

const routes: Routes = [
  { path: '', component: JobsComponent },
  {path:'create',component:CreateJobComponent},
  {path:'edit',component:EditJobComponent},
  {path:'list',component:ListJobComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }

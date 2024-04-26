import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportingComponent } from './reporting.component';
import {CreateUserComponent} from "../users/ui/create-user/create-user.component";
import {EditUserComponent} from "../users/ui/edit-user/edit-user.component";
import {ListUsersComponent} from "../users/ui/list-users/list-users.component";
import {CreateReportsComponent} from "./ui/create-reports/create-reports.component";
import {EditReportComponent} from "./ui/edit-report/edit-report.component";
import {ListReportsComponent} from "./ui/list-reports/list-reports.component";
import { AbsenceRequestComponent } from './ui/absence-request/absence-request.component';
import { AbsenceRequestListComponent } from './ui/absence-request-list/absence-request-list.component';

const routes: Routes = [
  { path: '', component: ReportingComponent },
  {path:'create',component:CreateReportsComponent},
  {path:'edit',component:EditReportComponent},
  {path:'list',component:ListReportsComponent},
  {path:'request/new', component:AbsenceRequestComponent},
  {path:'request/list',component:AbsenceRequestListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }

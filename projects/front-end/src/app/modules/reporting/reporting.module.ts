import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportingComponent } from './reporting.component';
import { EditReportComponent } from './ui/edit-report/edit-report.component';
import { EcreateReportComponent } from './ui/ecreate-report/ecreate-report.component';
import { ListReportsComponent } from './ui/list-reports/list-reports.component';
import { CreateReportsComponent } from './ui/create-reports/create-reports.component';
import { AbsenceRequestComponent } from './ui/absence-request/absence-request.component';
import { AbsenceRequestListComponent } from './ui/absence-request-list/absence-request-list.component';


@NgModule({
  declarations: [
    ReportingComponent,
    EditReportComponent,
    EcreateReportComponent,
    ListReportsComponent,
    CreateReportsComponent,
    AbsenceRequestComponent,
    AbsenceRequestListComponent
  ],
  imports: [
    CommonModule,
    ReportingRoutingModule
  ]
})
export class ReportingModule { }

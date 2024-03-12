import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportingComponent } from './reporting.component';
import { EditReportComponent } from './ui/edit-report/edit-report.component';
import { EcreateReportComponent } from './ui/ecreate-report/ecreate-report.component';
import { ListReportsComponent } from './ui/list-reports/list-reports.component';
import { CreateReportsComponent } from './ui/create-reports/create-reports.component';


@NgModule({
  declarations: [
    ReportingComponent,
    EditReportComponent,
    EcreateReportComponent,
    ListReportsComponent,
    CreateReportsComponent
  ],
  imports: [
    CommonModule,
    ReportingRoutingModule
  ]
})
export class ReportingModule { }

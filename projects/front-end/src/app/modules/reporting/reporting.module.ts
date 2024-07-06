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

import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {TimeEntryFormComponent} from "./services/time-entry-form";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";


@NgModule({
  declarations: [
    ReportingComponent,
    EditReportComponent,
    EcreateReportComponent,
    ListReportsComponent,
    CreateReportsComponent,
    AbsenceRequestComponent,
    AbsenceRequestListComponent,
    TimeEntryFormComponent

  ],
  imports: [
    CommonModule,
    ReportingRoutingModule,
    MatCard,
    MatDatepicker,
    FormsModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatButton,
    MatHeaderRow,
    MatRow,
    MatFormField,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatInput,
    MatNativeDateModule,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatLabel,
    MatCardHeader,
    MatCardContent,
    MatCardFooter
  ],

})
export class ReportingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { CreateJobComponent } from './ui/create-job/create-job.component';
import { EditJobComponent } from './ui/edit-job/edit-job.component';
import { ListJobComponent } from './ui/list-job/list-job.component';
import { JobService } from './services/jobs.service';
//import { ReactiveFormsModule } from '@angular/forms';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton, MatButtonModule} from "@angular/material/button";
//import {MatRadioModule} from "@angular/material/radio";
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
//import { MatInputModule } from '@angular/material/input';
//import { MatButtonModule } from '@angular/material/button';
//import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
//import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    JobsComponent,
    CreateJobComponent,
    EditJobComponent,
    ListJobComponent,

  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatDivider,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    MatCheckbox,
    MatButton,
    MatError,

  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  ReactiveFormsModule,
    MatTableModule, MatPaginatorModule, MatSortModule

  ],
  providers:[JobService]
})
export class JobsModule {

}

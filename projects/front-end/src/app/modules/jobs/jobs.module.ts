import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { CreateJobComponent } from './ui/create-job/create-job.component';
import { EditJobComponent } from './ui/edit-job/edit-job.component';
import { ListJobComponent } from './ui/list-job/list-job.component';



@NgModule({
  declarations: [
    JobsComponent,
    CreateJobComponent,
    EditJobComponent,
    ListJobComponent,

  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }

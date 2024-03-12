import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { ListResourcesComponent } from './ui/list-resources/list-resources.component';
import { EditResourceComponent } from './ui/edit-resource/edit-resource.component';
import { CreateResourceComponent } from './ui/create-resource/create-resource.component';


@NgModule({
  declarations: [
    ResourcesComponent,
    ListResourcesComponent,
    EditResourceComponent,
    CreateResourceComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }

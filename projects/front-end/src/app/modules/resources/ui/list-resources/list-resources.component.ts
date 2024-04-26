import { Component } from '@angular/core';
import { ResourceResponseDto } from '../../models/ResourceResponseDto';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';

@Component({
  selector: 'app-list-resources',
  templateUrl: './list-resources.component.html',
  styleUrls: ['./list-resources.component.css']
})
export class ListResourcesComponent {
  resources:ResourceResponseDto[]=[];
  constructor(private crudService:CrudServiceService){}
}

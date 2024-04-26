import { Component } from '@angular/core';
import { ResourceRequestDto } from '../../models/ResourceRequestDto';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.css']
})
export class CreateResourceComponent {
    resource:ResourceRequestDto|null=null;
    constructor(private crudService:CrudServiceService){}
}

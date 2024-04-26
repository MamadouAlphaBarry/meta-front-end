import { Component } from '@angular/core';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';

@Component({
  selector: 'app-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.css']
})
export class EditResourceComponent {
  constructor(private crudService:CrudServiceService){}

}

import { Component } from '@angular/core';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent {
  constructor(private crudService:CrudServiceService){}
}

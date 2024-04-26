import { Component } from '@angular/core';
import { TimeReportResponseDto } from '../../models/TimeReportResponseDto';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';

@Component({
  selector: 'app-list-reports',
  templateUrl: './list-reports.component.html',
  styleUrls: ['./list-reports.component.css']
})
export class ListReportsComponent {
timereports:TimeReportResponseDto[]=[];
constructor(private crudService:CrudServiceService){}
}

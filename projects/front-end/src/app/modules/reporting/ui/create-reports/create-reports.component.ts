import { Component } from '@angular/core';
import { TimeReportRequestDto } from '../../models/TimeReportRequestDto';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';
import { ReportingService } from '../../services/reports.service';

@Component({
  selector: 'app-create-reports',
  templateUrl: './create-reports.component.html',
  styleUrls: ['./create-reports.component.css']
})
export class CreateReportsComponent {
    timereport:TimeReportRequestDto|null=null;
    daysInMonth: { day: string; date: string }[] = [];
    constructor(reportService:ReportingService){}

    ngOnInit() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
  
      const days = new Date(year, month + 1, 0).getDate();
      for (let i = 1; i <= days; i++) {
        const date = new Date(year, month, i);
        const dayName = this.getAbbreviatedDayName(date.getDay());
        const dayNumber = i.toString().padStart(2, '0'); // Format day number with leading zeros
        this.daysInMonth.push({ day: dayName, date: dayNumber });
      }
      //A adopter a la realitè de mes objects;
    //this.reportService.getRapportMonth(currentDate);
    }
  
    getAbbreviatedDayName(dayIndex: number): string {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return daysOfWeek[dayIndex];
    }
}

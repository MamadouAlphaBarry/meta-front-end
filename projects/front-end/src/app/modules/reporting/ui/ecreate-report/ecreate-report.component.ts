import { Component } from '@angular/core';

@Component({
  selector: 'app-ecreate-report',
  templateUrl: './ecreate-report.component.html',
  styleUrls: ['./ecreate-report.component.css']
})
export class EcreateReportComponent {
  daysInMonth: number[] = [];

  constructor() {
    this.getAllDaysOfMonth();
  }
  getAllDaysOfMonth() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the last day of the current month

    // Generate an array containing all the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      this.daysInMonth.push(i);
    }
  }
}

import { Component } from '@angular/core';
import { TimeReportRequestDto } from '../../models/TimeReportRequestDto';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';
import { ReportingService } from '../../services/reports.service';
import {MatDialog} from "@angular/material/dialog";
import {TimeEntryFormComponent} from "../../services/time-entry-form";
interface WorkData {
  date: string;
  jobData: JobData[];
}

interface JobData {
  jobName: string;
  hours?: number;
}
interface Job {
  name: string;
  description: string;
}

@Component({
  selector: 'app-create-reports',
  templateUrl: './create-reports.component.html',
  styleUrls: ['./create-reports.component.css']
})
export class CreateReportsComponent {
  daysInMonth: any[];
   daysInMay2024:any;
  month:string="";
  date:Date=new Date();
  dayInMonth: any[]=[];
   weeks:any[] = []
    data:any[] = []
  dynamicColumns: string[];
 months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
  timeReportDate!:Date;
  jobs: Job[] = [
    { name: 'S0072214511-', description: 'Solidarietà - ICT' },
    // Ajoutez d'autres jobs si nécessaire
  ];

  ngOnInit(){
    //this.getWeeksInMonth(2022,2)
    let year = 2024;
    let month = 4; // May (0-indexed, so 4 means May)
    this.daysInMay2024 = this.getAllDaysWithNamesInMonth(year, month);
      for (let i = 0; i < this.daysInMay2024.length; i++) {
        console.log(this.daysInMay2024[1])
          if (this.daysInMay2024[i].dayName=='Sunday'){

          }
          if (this.daysInMay2024[i].dayName=='Monday'){}
          if (this.daysInMay2024[i].dayName=='Monday'){}
          if (this.daysInMay2024[i].dayName=='Wednesday'){}
          if (this.daysInMay2024[i].dayName=='Thursday'){}
          if (this.daysInMay2024[i].dayName=='Friday'){}
          if (this.daysInMay2024[i].dayName=='Saturday'){}

      }
  //console.log(this.daysInMay2024)
// Print all days with names
    for (let i = 1; i <= this.getAllDaysInMonth(2023,5).length ; i++) {
      this.dayInMonth.push(i)
    }

  }
  getAllDaysWithNamesInMonth(year:number, month:number) {
    let date = new Date(year, month, 1);
    let days = [];

    while (date.getMonth() === month) {
      let dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      days.push({ date: new Date(date).toISOString().slice(0, 10), dayName: dayName,day:date.getDay() });
      date.setDate(date.getDate() + 1);
    }

    return days;
  }
   getAllDaysInMonth(year:number, month:number) {
     this.date = new Date(year, month, 1);
    let days = [];

    // Get the month index for the next month, handling December (month 11)
    let nextMonth = new Date(year, month + 1, 1);

    while (this.date < nextMonth) {
      days.push(new Date(this.date));
      this.date.setDate(this.date.getDate() + 1);
    }

    return days;
  }
  getWeeksInMonth(year:number, month:number) {
    const weeks:any = [],
      firstDate = new Date(year, month, 1),
      lastDate = new Date(year, month + 1, 0),
      numDays = lastDate.getDate();
    console.log(numDays)

    let dayOfWeekCounter = firstDate.getDay();

    for (let date = 1; date <= numDays; date++) {
      if (dayOfWeekCounter === 0 || weeks.length === 0) {
        weeks.push([]);
      }
      weeks[weeks.length - 1].push(date);
      dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
    }

    return weeks
      .filter((w: string | any[]) => !!w.length)
      .map((w: string | any[]) => ({
        start: w[0],
        end: w[w.length - 1],
        dates: w,
      }));
  }
   /* timereport:TimeReportRequestDto|null=null;
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
    }*/

    //MATERIAL ANGULAR
  displayedColumns: string[] = [];
  dataSource: WorkData[] = [
    {
      date: 'Tue May 01 2024',
      jobData: [
        { jobName: 'Job A', hours: 8 },
        { jobName: 'Job B', hours: 6 },
        // Peut contenir d'autres données pour les travaux effectués ce jour-là
      ]
    },
    {
      date: 'Wed May 02 2024',
      jobData: [
        { jobName: 'Job A', hours: 7 },
        // Peut contenir d'autres données pour les travaux effectués ce jour-là
      ]
    },
    // Peut contenir d'autres objets WorkData pour d'autres jours
  ];

  selectedDate: Date = new Date();

  constructor(public dialog: MatDialog) {
    this.updateDataSource(this.selectedDate);
    this.daysInMonth = this.getDaysInMonth(new Date());
    this.dynamicColumns = ['job', ...this.daysInMonth.map(day => day.day.toString())];


  }

  updateDataSource(selectedDate: Date) {
    this.dataSource = [];
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const date = new Date(year, month, i).toDateString();
      const workData: WorkData = {
        date: date,
        jobData: []
      };
      this.dataSource.push(workData);
    }
  }




  onDateChange(event: any) {
    this.selectedDate = event.value;
    this.updateDataSource(this.selectedDate);
  }

  openDialog(workData: WorkData, jobData: JobData): void {
    // Ouvrir le dialogue pour entrer les heures travaillées
    const dialogRef = this.dialog.open(TimeEntryFormComponent, {
      width: '250px',
      data: { date: new Date(workData.date), jobData: jobData } // Passer la date et les données du travail au composant du formulaire
    });

    // Souscrire à l'événement de fermeture du dialogue
    dialogRef.afterClosed().subscribe(result => {
      // Vérifier si des données ont été retournées par le dialogue
      if (result) {
        // Mettre à jour les heures travaillées dans les données du travail
        jobData.hours = result.hours;
      }
    });
  }

  /*  openDialog(element: WorkDay): void {
      const dialogRef = this.dialog.open(TimeEntryFormComponent, {
        width: '250px',
        data: { date: new Date(element.date) }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          for (let week of this.dataSource) {
            const workDay = week.find(day => day.date === element.date);
            if (workDay) {
              workDay.hours = result.hours;
            }
          }
        }
      });
    }*/
  getDaysInMonth(date: Date): any[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Nombre de jours dans le mois

    const days: any[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      days.push({
        day: currentDate.getDate(), // Numéro du jour
        date: currentDate.toDateString() // Date complète
      });
    }
    return days;
  }

  incrementMonth(index:number) {
    return index++;
  }
  decrementMonth(index:number) {
    index=index-1;
    return index;
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
        providedIn:'root'
})
export class ReportingService{
        daysInMonth: { day: string; date: string }[] = [];
        constructor(private http:HttpClient){}
        

      getRapportMonth(myDate:any){
                if (myDate instanceof Date) {
                        return ;
                      } else {
                        myDate = new Date(myDate);
                      }    
        // const currentDate = new Date();
      const year = myDate.getFullYear();
      const month = myDate.getMonth();
  
      const days = new Date(year, month + 1, 0).getDate();
      for (let i = 1; i <= days; i++) {
        const date = new Date(year, month, i);
        const dayName = this.getAbbreviatedDayName(date.getDay());
        const dayNumber = i.toString().padStart(2, '0'); // Format day number with leading zeros
        this.daysInMonth.push({ day: dayName, date: dayNumber });
      }
      return this.daysInMonth;
        }
        getAbbreviatedDayName(dayIndex: number): string {
                const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                return daysOfWeek[dayIndex];
              }
}
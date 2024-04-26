import { Component } from '@angular/core';

@Component({
  selector: 'app-reload-dashboard',
  template: `
    <div class="row">

      <div class="col-12">
        <mat-card class="card-mat">
          <mat-card-header class="choice-month">
            <mat-card-title><strong>Mese in lavorazione</strong></mat-card-title>

            <mat-slide-toggle  class="toggle-input" [(ngModel)]="evaluationMonth" (change)="changeButtons()">Mese Precedente</mat-slide-toggle>
            <mat-slide-toggle   class="toggle-input"  [(ngModel)]="evaluationMonth" (change)="changeButtons()">Mese Corrente</mat-slide-toggle>

          </mat-card-header>
        </mat-card>
      </div>



    </div>
  `,
  styles: `
  .row{
  width:100%;
  margin-top:30px;
  }
  .choice-month{
  display:flex;
  flex-direction:columns;
  justify-content:space-arround;
  align-items:space-arround;
  }
  .card-mat{
  display:flex;
  height:80px;
  }
  `
})
export class ReloadDashboardComponent {
  evaluationMonth: boolean=false;

  changeButtons() {

  }
}

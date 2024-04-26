import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',


  template: `
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <mat-card>
            <mat-card-content>
              <mat-icon color="warn" class="bg-primary p-4 px-5 font-2xl mr-3 float-left icon-size">people</mat-icon>
              <div class="h5 mb-0 pt-3 text-center">80</div>
              <div class="text-muted text-uppercase font-weight-bold font-xs text-center">Commesse</div>
            </mat-card-content>
          </mat-card>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
          <mat-card>
            <mat-card-content>
              <mat-icon class="bg-danger p-4 px-5 font-2xl mr-3 float-left">laptop</mat-icon>
              <div class="h5 mb-0 pt-3 text-center">40</div>
              <div class="text-muted text-uppercase font-weight-bold font-xs text-center">Time Report non approvati</div>
            </mat-card-content>
          </mat-card>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <mat-card>
            <mat-card-content>
              <mat-icon class="bg-success p-4 px-5 font-2xl mr-3 float-left">comments</mat-icon>
              <div class="h5 mb-0 pt-3 text-center">62</div>
              <div class="text-muted text-uppercase font-weight-bold font-xs text-center">Note Spese non approvate</div>
            </mat-card-content>
          </mat-card>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <mat-card>
            <mat-card-content>
              <mat-icon class="bg-info p-4 px-5 font-2xl mr-3 float-left">notifications</mat-icon>
              <div class="h5 mb-0 pt-3 text-center">7</div>
              <div class="text-muted text-uppercase font-weight-bold font-xs text-center">Notifiche</div>
            </mat-card-content>
          </mat-card>
        </div>
        <!--/.col-->
      </div>
      <!--/.row-->

    </div>

  `,
  styles: `
  /* Style pour les commutateurs de diapositives Material */
.mat-slide-toggle {
  margin-right: 10px;

}
.col-12{
  width: 90%;

}
.choice-month{
  display: block;
  padding: 30px;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
}
.toggle-input{

  margin-left: 30px;
  margin-right: 30px;
}
.mat-icon {
  font-size: 40px; /* Change the size as needed */
  color:white;
  font-weigth:bold;
}

  `
})
export class CounterComponent {
  evaluationMonth:boolean= false;

  changeButtons() {
    console.log("Appeller")
  }
}

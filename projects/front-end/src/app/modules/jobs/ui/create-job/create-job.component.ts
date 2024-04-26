import {Component, inject} from '@angular/core';
import { JobEditRequestDto } from '../../models/JobEditRequestDto';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';

import { LocalDateTime } from '@js-joda/core';

import {Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-job',
 /** templateUrl: './create-job.component.html',*/
 template: `
    <form [formGroup]="jobForm"  (ngSubmit)="onSubmit()">
      <mat-card class="shipping-card">
        <mat-card-header>
          <mat-card-title>Shipping Information</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="row">
            <div class="col">
              <mat-form-field class="full-width">
                <mat-label>Job Name:</mat-label>
                <input matInput placeholder="Name" formControlName="name">
              </mat-form-field>
            </div>
            <div class="col">
              <mat-form-field class="full-width">
                <mat-label>job Description</mat-label>
                <input matInput placeholder="Description" formControlName="description">
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <mat-form-field class="full-width">
                <mat-label>Date Debut</mat-label>
                <input type="date" matInput placeholder="StartDate" formControlName="startDate">
                @if (jobForm.controls['startDate'].hasError('required')) {
                  <mat-error>First name is <strong>required</strong></mat-error>
                }
              </mat-form-field>
            </div>
            <div class="col">
              <mat-form-field class="full-width">
                <mat-label>Date De Fin</mat-label>
                <input type="date" matInput placeholder="End Date" formControlName="endDate">
                @if (jobForm.controls['startDate'].hasError('required')) {
                  <mat-error>Last name is <strong>required</strong></mat-error>
                }
              </mat-form-field>
            </div>
          </div>


          <div class="row">
            <div class="col">
              <mat-form-field class="full-width">
                <mat-select placeholder="Client" formControlName="client">
                  @for (state of states; track state) {
                  <mat-option [value]="state.abbreviation">{{ state.name }}</mat-option>
                  }
                </mat-select>
                @if (jobForm.controls['client'].hasError('required')) {
                <mat-error>State is <strong>required</strong></mat-error>
                }
              </mat-form-field>
            </div>
            <div class="col">
              <mat-form-field class="full-width">
                <mat-select placeholder="BU" formControlName="businessUnit">
                  @for (state of states; track state) {
                  <mat-option [value]="state.abbreviation">{{ state.name }}</mat-option>
                  }
                </mat-select>
                @if (jobForm.controls['businessUnit'].hasError('required')) {
                <mat-error>State is <strong>required</strong></mat-error>
                }
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <mat-form-field class="full-width">
                <mat-select placeholder="PM" formControlName="pm">
                  @for (state of states; track state) {
                  <mat-option [value]="state.abbreviation">{{ state.name }}</mat-option>
                  }
                </mat-select>
                @if (jobForm.controls['businessUnit'].hasError('required')) {
                <mat-error>State is <strong>required</strong></mat-error>
                }
              </mat-form-field>
            </div>
            <div class="col">
              <mat-form-field class="full-width">
                <input matInput placeholder="Alias" formControlName="alias">
                @if (jobForm.controls['client'].hasError('required')) {
                  <mat-error>City is <strong>required</strong></mat-error>
                }
              </mat-form-field>
            </div>

          </div>
          <div class="row">

          </div>
          <div class="row">

          </div>
          <div class="row">
            <div class="col">

              <mat-form-field class="full-width">
                <mat-label>job comment</mat-label>
                <textarea matInput placeholder="note" formControlName="note"></textarea>
              </mat-form-field>

            </div>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" type="submit">Submit</button>
        </mat-card-actions>
      </mat-card>
    </form>

  `,
  styles: `
    .full-width {
      width: 100%;
    }

    .shipping-card {
      min-width: 120px;
      margin: 20px auto;
    }

    .mat-radio-button {
      display: block;
      margin: 5px 0;
    }

    .row {
      display: flex;
      flex-direction: row;
    }

    .col {
      flex: 1;
      margin-right: 20px;
    }

    .col:last-child {
      margin-right: 0;
    }

  `,
  //styleUrls: ['./create-job.component.css']

})
export class CreateJobComponent {
  hasUnitNumber = false;
  private fb = inject(FormBuilder);
  jobs: JobEditRequestDto[] = [];
  absences: any[] = [];
  jobForm:FormGroup= new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(7)]),
    description: new FormControl("",[Validators.required,Validators.email,Validators.required]),
    startDate: new FormControl("",[Validators.required,Validators.minLength(7)]),
   endDate: new FormControl("",[Validators.required]),
   note: new FormControl("",[Validators.required]),
    client: new FormControl("",[Validators.required]),
    businessUnit: new FormControl("",[Validators.required]),
    pm: new FormControl("",[Validators.required]),
    alias: new FormControl("",[Validators.required])
  })
  job:JobEditRequestDto|null=null;
  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'}]
  constructor(private crudService:CrudServiceService){
   // this.generateJobs();
    //this.generateUsers();
    //this.generateAbsences();

  }


  get name() {

    return null;
  }
generateJobs() {
  for (let i = 0; i < 30; i++) {
    const job: any = {
      id: 'job_' + i,
      createdAt: this.randomDate(new Date(2022, 0, 1), new Date()),
        updatedAt: this.randomDate(new Date(2022, 0, 1), new Date()),
        name: 'Job ' + i,
        code: 'CODE_' + i,
        description: 'Description du travail ' + i,
        startDate: this.randomDate(new Date(), new Date(2025, 11, 31)),
        endDate: this.randomDate(new Date(), new Date(2025, 11, 31)),
        status: 'Status ' + i,
        jobId: this.randomNumber(1, 1000),
        customerId: this.randomNumber(1, 1000),
        activityId: this.randomNumber(1, 1000),
        businessUnitId: this.randomNumber(1, 1000),
        pmId: this.randomNumber(1, 1000),
        alias: 'Alias ' + i,
        deletedAt: this.randomDate(new Date(2022, 0, 1), new Date()),
        isInternal: Math.random() < 0.5,
        attr1: 'Attr1 ' + i,
        attr2: 'Attr2 ' + i,
        costCenterId: this.randomNumber(1, 1000),
        isClosed: Math.random() < 0.5,
        closedAt: this.randomDate(new Date(2022, 0, 1), new Date()),
        isOverturn: Math.random() < 0.5,
        old: Math.random() < 0.5,
        hasAvailability: Math.random() < 0.5,
        availabilityCost: Math.random() * 1000,
        addTmRevenues: Math.random() < 0.5,
        note: 'Note ' + i,
        isEnabled: Math.random() < 0.5,
        enabledAt: this.randomDate(new Date(2022, 0, 1), new Date()),
        enabledBy: this.randomNumber(1, 1000),
        isDaily: Math.random() < 0.5,
        isDirect: Math.random() < 0.5,
        isSupport: Math.random() < 0.5,
        sal: Math.random() * 1000,
        isWeeklyClosed: Math.random() < 0.5
    };
    this.jobs.push(job);
    console.log(this.jobs)
  }
}
randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

generateUsers() {
  for (let i = 0; i < 300; i++) {
    const user: any = {
      id: i + 1,
      createdAt: LocalDateTime.now(),
      updatedAt: new Date(),
      userId: i + 1000,
      costMinimum: Math.random() * 1000,
      costMedium: Math.random() * 1000,
      costMaximum: Math.random() * 1000,
      costReal: Math.random() * 1000,
      businessUnitId: i + 2000,
      codFiscale: 'COD' + i,
      matricola: 'MAT' + i,
      dataInizioRapporto: new Date(),
      inquadramento: 'Inquadramento ' + i,
      profiloOrario: 'ProfiloOrario ' + i,
      hasAvailability: Math.random() < 0.5,
      hasOvertime: Math.random() < 0.5,
      deletedAt: new Date(),
      ral: Math.random() * 1000,
      extra: Math.random() * 1000,
      welfare: Math.random() * 1000,
      premi: Math.random() * 1000,
      auto: Math.random() * 1000,
      qualifica: 'Qualifica ' + i,
      consulenteType: 'ConsulenteType ' + i,
      companyId: i + 3000,
      supervisorId: i + 4000,
      hasProfiloOrario: Math.random() < 0.5,
      hasTransfers: Math.random() < 0.5,
      fake: Math.random() < 0.5,
      hasAbsences: Math.random() < 0.5,
      dataFineRapporto: new Date(),
      profiloVerticale: Math.random() < 0.5,
      patronDate: new Date(),
      educational: 'Educational ' + i,
      ccnlDataId: i + 5000,
      companyCost: Math.random() * 1000,
      employmentLetter: 'EmploymentLetter ' + i,
      orarioLun: Math.floor(Math.random() * 9), // Utilise Math.floor pour arrondir à l'entier inférieur
      orarioMar: Math.floor(Math.random() * 9),
      orarioMer: Math.floor(Math.random() * 9),
      orarioGio: Math.floor(Math.random() * 9),
      orarioVen: Math.floor(Math.random() * 9),
      orarioSab: Math.floor(Math.random() * 9),
      orarioDom: Math.floor(Math.random() * 9),
      iban: 'IBAN ' + i,
      enableExpenses: Math.random() < 0.5
    };

  }
  //console.log(this.users)
}
generateAbsences() {
  for (let i = 0; i < 30; i++) {
    const absence: any = {
      id: i + 1,
      createdAt: LocalDateTime.now(),
      updatedAt: LocalDateTime.now(),
      resourceId: i + 1000,
      managedBy: Math.random() < 0.5 ? null : i + 2000,
      requestStart: LocalDateTime.now(),
      requestEnd: LocalDateTime.now().plusDays(1),
      status: 'pending',
      jobI: Math.random() < 0.5 ? null : i + 3000
    };
    this.absences.push(absence);
    //console.log(this.absences)
  }

}

  onSubmit(): void {

    console.log(this.jobForm.controls)
  }

}

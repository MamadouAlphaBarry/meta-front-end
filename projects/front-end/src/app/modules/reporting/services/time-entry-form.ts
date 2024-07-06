// time-entry-form.component.ts
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormField} from "@angular/material/form-field";
import {DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-time-entry-form',

  template: ` <h1 mat-dialog-title>Enter Worked Hours</h1>
  <div mat-dialog-content>
    <mat-form-field>
      <mat-label>Date</mat-label>
      <input matInput [value]="" disabled>
    </mat-form-field>
    <mat-form-field>
      <mat-label>Hours</mat-label>
      <input matInput [(ngModel)]="hours" type="number" min="0">
    </mat-form-field>
    <mat-form-field>
      <mat-label>Hours</mat-label>
      <input matInput [(ngModel)]="hours" type="number" min="0">
    </mat-form-field>
    <mat-form-field>
      <mat-label>Hours</mat-label>
      <input matInput [(ngModel)]="hours" type="number" min="0">
    </mat-form-field>
    <mat-form-field>
      <mat-label>Hours</mat-label>
      <input matInput [(ngModel)]="hours" type="number" min="0">
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Cancel</button>
    <button mat-button (click)="save()">Save</button>
  </div>
  `,

  styles: ['']
})
export class TimeEntryFormComponent {
  hours!: number;

  constructor(
    public dialogRef: MatDialogRef<TimeEntryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { date: Date }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close({ hours: this.hours });
  }
}

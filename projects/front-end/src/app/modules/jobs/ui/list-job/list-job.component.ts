import {Component, ViewChild} from '@angular/core';
import { JobResponseDto } from '../../models/JobResponseDto';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';
import { environment } from 'projects/front-end/src/environments/environment';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable} from "@angular/material/table";
import {ListJobDataSource, ListJobItem} from "./list-job-datasource";

@Component({
  selector: 'app-list-job',
 // templateUrl: './list-job.component.html',
//  styleUrls: ['./list-job.component.css']
  template: `
    <div class="mat-elevation-z8">
      <h2>Job List</h2>
      <table mat-table class="full-width-table" matSort aria-label="Elements">
        <!-- Id Column -->
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
          <td mat-cell *matCellDef="let row">{{row.name}}</td>
        </ng-container>
        <!-- Code Column -->
        <ng-container matColumnDef="code">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Code</th>
          <td mat-cell *matCellDef="let row">
            <a [routerLink]="'/details/' + row.id" style=" font-size: 16px;">
            {{row.code}}</a></td>
        </ng-container>
        <!-- Bu Column -->
        <ng-container matColumnDef="businessUnit">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Business Unit</th>
          <td mat-cell *matCellDef="let row">
            <a [routerLink]="'/details/' + row.id" style=" font-size: 16px;">
              {{row.name}}</a></td>

        </ng-container>
        <!-- Client Column -->
        <ng-container matColumnDef="client">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Client</th>
          <td mat-cell *matCellDef="let row">{{row.client}}</td>
        </ng-container>
        <ng-container matColumnDef="type">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Type</th>
          <td mat-cell *matCellDef="let row">{{row.type}}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

      <mat-paginator #paginator
          [length]="dataSource.data.length"
          [pageIndex]="0"
          [pageSize]="10"
          [pageSizeOptions]="[5, 10, 20]"
          aria-label="Select page">
      </mat-paginator>
    </div>

  `,
  styles: `
    .full-width-table {
      width: 80%;
    }

  `,
})
export class ListJobComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListJobItem>;
  dataSource = new ListJobDataSource();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'code','businessUnit','client','name','type'];
  jobs:JobResponseDto[]=[];
  constructor(private crudService:CrudServiceService){}
  OnInit(){
    this.crudService.read(environment.apiUrl)
    .subscribe((job:any)=>{
      this.jobs=job;
    },

    )
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

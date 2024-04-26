import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { UserDtoResponse } from '../../models/UserDtoResponse';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';
import {TemporalAdjusters, use} from "@js-joda/core";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import next = TemporalAdjusters.next;


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit,AfterViewInit{
  users:UserDtoResponse[]=[];
public  dataSource:any;
@ViewChild(MatPaginator)
paginator!:MatPaginator;
@ViewChild(MatSort) sort!:MatSort;
  displayedColumns=["id","firstName","lastName","email","name","Actions","impersonate"];
  //user: any[] = [];
  constructor(private crudService:CrudServiceService){
    this.dataSource= new MatTableDataSource(this.users);
  }
  ngOnInit(){
    this.generateUser();
   // console.log(this.users);
  this.crudService.read("http://localhost:8089/querysid/users/list").subscribe(
    result => {

      console.log(result)

    },
    error => {
      // Gérer l'erreur
      console.error(error);
      console.log("TestErreur")
    }
  );
    this.dataSource= new MatTableDataSource(this.users);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  generateUser() {
    for (let i = 0; i < 1000; i++) {
      const user: any = {
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        password: `password${i + 1}`,
        createdAt: new Date(),
        username: `username${i + 1}`,
        firstName: `First${i + 1}`,
        lastName: `Last${i + 1}`,
        title: `Title ${i + 1}`,
        displayName: `Display Name ${i + 1}`
      };
      this.users.push(user);
      this.dataSource= new MatTableDataSource(this.users);
      console.log(this.dataSource)
    }

  }


  filterData(event: Event) {
    let value=( event.target as HTMLInputElement).value
    this.dataSource.filter=value;

  }
}

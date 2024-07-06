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
    const nomsEtPrenomsItaliens = [
      "Marco Mancini",
      "Alessandra Rossi",
      "Luca Bianchi",
      "Giulia Romano",
      "Francesco Colombo",
      "Elena Ricci",
      "Andrea Gallo",
      "Martina Moretti",
      "Davide Conti",
      "Federica Greco",
      "Stefano De Luca",
      "Valentina Rizzo",
      "Matteo Ferraro",
      "Chiara Russo",
      "Roberto Barbieri",
      "Sara Costa",
      "Simone Bruno",
      "Laura Parisi",
      "Giovanni Esposito",
      "Raffaella Giordano"
    ];
    const emailsFictifs = nomsEtPrenomsItaliens.map(nomEtPrenom => {
      const [prenom, nom] = nomEtPrenom.toLowerCase().split(' ');
      return `${prenom}.${nom}@cws.it`;
    });
    const typesPostes = ["employé", "consultant"];
    for (let i = 0; i <21 ; i++) {
      const user: any = {
        id: i + 1,
        name: nomsEtPrenomsItaliens.map(nomEtPrenom => nomEtPrenom.split(' ')[0])[i],
        email: emailsFictifs[i],
        password: `password${i + 1}`,
        createdAt: new Date(),
        username: `username${i + 1}`,
        firstName: ``,
        lastName: nomsEtPrenomsItaliens[i],
        title: typesPostes[Math.floor(Math.random() * typesPostes.length)],
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

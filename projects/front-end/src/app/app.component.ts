import {Component, OnInit} from '@angular/core';
//import * as $ from 'jquery';
import { environment } from '../environments/environment';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements  OnInit{
  title = environment.title;
  currentRoute!: string;
constructor(private router: Router, private activatedRoute: ActivatedRoute) {
}

  isDashboardRouteActive: boolean = false;
url:any
  ngOnInit() {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.router.routerState.snapshot.url;
      console.log(this.currentRoute)
      if (this.currentRoute=="/"){
        this.isDashboardRouteActive=true;
      }
    });

  }
    }







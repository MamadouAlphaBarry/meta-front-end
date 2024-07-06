import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-dash-board',
  template:
      `

    <app-counter></app-counter>
    <app-reload-dashboard></app-reload-dashboard>
    <div class="grid-container">
      <mat-grid-list cols="2" rowHeight="60px">

        <mat-grid-tile [colspan]="2" [rowspan]="2">
          <mat-card class="dashboard-card">
            <mat-card-header>
              <mat-card-title>

              </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">

            </mat-card-content>
          </mat-card>
        </mat-grid-tile>
      </mat-grid-list>
      <mat-grid-list cols="2" rowHeight="60px">

        <mat-grid-tile [colspan]="2" [rowspan]="2">
          <mat-card class="dashboard-card">
            <mat-card-header>
              <mat-card-title>

             </mat-card-title>
    </mat-card-header>
    <mat-card-content class="dashboard-card-content">
      <div>Card Content Here</div>
    </mat-card-content>
  </mat-card>
</mat-grid-tile>
      </mat-grid-list>
      <mat-grid-list cols="2" rowHeight="350px">
        @for (card of cards | async; track card) {
          <mat-grid-tile [colspan]="card.cols" [rowspan]="card.rows">
            <mat-card class="dashboard-card">
              <mat-card-header>
                <mat-card-title>
                  {{card.title}}
                  <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">
                    <mat-icon>more_vert</mat-icon>
                  </button>
                  <mat-menu #menu="matMenu" xPosition="before">
                    <button mat-menu-item>Expand</button>
                    <button mat-menu-item>Remove</button>
                  </mat-menu>
                </mat-card-title>
              </mat-card-header>
              <mat-card-content class="dashboard-card-content">

              </mat-card-content>
            </mat-card>
          </mat-grid-tile>
        }
      </mat-grid-list>
    </div>
  `,
  styles: `
    .grid-container {
      margin: 20px;
    }

    .dashboard-card {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
    }

    .more-button {
      position: absolute;
      top: 5px;
      right: 10px;
    }

    .dashboard-card-content {
      text-align: center;
    }

  `
})
export class DashBoardComponent {
  private breakpointObserver = inject(BreakpointObserver);
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
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
}

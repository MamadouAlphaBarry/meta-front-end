import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './modules/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannedEmailDirective } from './directives/banned-email.directive';
import { EntityExistDirective } from './directives/entity-exist.directive';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { UsersModule } from './modules/users/users.module';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButton, MatIconButton, MatButtonModule} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatMenu, MatMenuItem, MatMenuTrigger, MatMenuModule} from "@angular/material/menu";
import {MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {MatGridList, MatGridTile, MatGridListModule} from "@angular/material/grid-list";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle, MatCardModule} from "@angular/material/card";
import { DashBoardComponent } from './dash-board/dash-board.component';
import {CounterComponent} from "./counter/counter.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import { ReloadDashboardComponent } from './reload-dashboard/reload-dashboard.component';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'meta-realm',
        clientId: 'meta-backend'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BannedEmailDirective,
    EntityExistDirective,
    SearchPipe,
    DashBoardComponent,
    CounterComponent,
    ReloadDashboardComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        KeycloakAngularModule,
        MatIconButton,
        MatToolbar,
        MatMenuTrigger,
        MatMenu,
        MatDrawerContainer,
        MatDrawer,
        MatNavList,
        MatListItem,
        MatIcon,
        MatSidenavModule,
        MatDrawerContent,
        MatMenuItem,
        MatButton,
        MatDivider,
        MatGridList,
        MatGridTile,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatCardTitle,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
       MatSlideToggle,
      FormsModule


    ],
  providers: [
    {
      provide : APP_INITIALIZER, useFactory : initializeKeycloak,
       multi :true,
       deps : [KeycloakService]
      },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

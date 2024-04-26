import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CreateUserComponent } from './ui/create-user/create-user.component';
import { EditUserComponent } from './ui/edit-user/edit-user.component';
import { ListUsersComponent } from './ui/list-users/list-users.component';
//import { FormComponent } from './ui/create-user/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsUserComponent } from './ui/details-user/details-user.component';
import { BaseInfoComponent } from './ui/details-user/base-info/base-info.component';
import { ContactInfoComponent } from './ui/details-user/contact-info/contact-info.component';
import { ResourceInfoComponent } from './ui/details-user/resource-info/resource-info.component';
import { AnagrapheInfoComponent } from './ui/details-user/anagraphe-info/anagraphe-info.component';
import { ResourceCostComponent } from './ui/details-user/resource-cost/resource-cost.component';
import { HistoryCostComponent } from './ui/details-user/history-cost/history-cost.component';
import { StatistiquesComponent } from './ui/details-user/statistiques/statistiques.component';
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatFooterRowDef, MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatFabButton, MatMiniFabButton} from "@angular/material/button";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatTab, MatTabContent, MatTabGroup} from "@angular/material/tabs";


@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent,
    EditUserComponent,
    ListUsersComponent,
    DetailsUserComponent,
    BaseInfoComponent,
    ContactInfoComponent,
    ResourceInfoComponent,
    AnagrapheInfoComponent,
    ResourceCostComponent,
    HistoryCostComponent,
    StatistiquesComponent,


  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIcon,
    MatCard,
    MatError,
    MatOption,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatTable,
    MatHeaderRowDef,
    MatFooterRowDef,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatPaginator,
    MatSort,
    MatSortHeader,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatFabButton,
    MatCardFooter,
    MatSelect,
    MatRadioGroup,
    MatRadioButton,
    MatMiniFabButton,
    MatTabGroup,
    MatTab,
    MatTabContent

  ]
})
export class UsersModule { }

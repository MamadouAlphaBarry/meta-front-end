import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CreateCustomerComponent } from './ui/create-customer/create-customer.component';
import { EditCustomerComponent } from './ui/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './ui/list-customer/list-customer.component';

import { CustomerComponent } from './customer.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";


@NgModule({
  declarations: [
    CreateCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,

    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    MatButton,
    MatCardHeader,
    MatCardTitle,
    MatLabel,
    MatDivider,
    MatIcon
  ]
})
export class CustomerModule { }

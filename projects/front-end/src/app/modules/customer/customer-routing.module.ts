import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './ui/create-customer/create-customer.component';
import { EditCustomerComponent } from './ui/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './ui/list-customer/list-customer.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {path:"",component:CustomerComponent},
 {path:"create",component:CreateCustomerComponent} ,
 {path:"edit",component:EditCustomerComponent},
 {path:"list",component:ListCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CrudServiceService} from "../../../../services/crud-service.service";
import {AlertServiceService} from "../../../../services/alert-service.service";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  customerForm:any;
  customer:any={"customerName":""}
  constructor(private  fb:FormBuilder,private crudService:CrudServiceService,
              private alertService:AlertServiceService
              ) {

  this.customerForm=  this.fb.group({'name':['',Validators.required]});
  }
  onSubmit(data:any){
    console.log(data)
    if (this.customerForm.valid){
      this.customer.customerName=data.name
      this.crudService.create("http://localhost:8090/command/customer/create",this.customer).subscribe(
          {
            next:result=>{
              this.alertService.alertSuccessWithCustomablePosition("top-end",'Customer Enregistrè');
            },
            error:err => {
              console.log(err.error)
            }
          }
      )
      console.log(this.customer)
    }
  }
}

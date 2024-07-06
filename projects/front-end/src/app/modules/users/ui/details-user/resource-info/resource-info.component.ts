import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudServiceService} from "../../../../../services/crud-service.service";
import {HttpClient} from "@angular/common/http";
import {UserRequestDto} from "../../../models/UserRequestDto";

@Component({
  selector: 'app-resource-info',
  templateUrl: './resource-info.component.html',
  styleUrls: ['./resource-info.component.css']
})
export class ResourceInfoComponent {
  resourceInfo:any={
    "encadrement": "", "qualification": "", "societe": "",
    "bu": "", "supervisor": "", "niveauEtude": "", "datePatrona": ""
  };



  resourceInfoForm= new FormGroup({
    encadrement: new FormControl("",[Validators.required]),
    qualification: new FormControl("",[Validators.required]),
    societe: new FormControl("",[Validators.required]),
     bu: new FormControl("",[Validators.required]),
    // username: new FormControl("",[Validators.required]),
    supervisor: new FormControl("",[Validators.required]),
    //lastName: new FormControl("",[Validators.required]),
    niveauEtude: new FormControl("",[Validators.required]),
    datePatrona: new FormControl("",[Validators.required])
  })



  constructor(private crudService:CrudServiceService,private http: HttpClient){}

  get bu(){
    return this.resourceInfoForm.controls.bu;
  }
  get qualification() {
    return this.resourceInfoForm.controls.qualification;
  }
  get supervisor(){
    return this.resourceInfoForm.controls.supervisor;
  }
  get niveauEtude(){
    return this.resourceInfoForm.controls.niveauEtude ;
  }
  get displayName(){
    return this.resourceInfoForm.controls.datePatrona;
  }
  get societe(){
    return this.resourceInfoForm.controls.societe ;
  }
  get encadrement(){
    return this.resourceInfoForm.controls.encadrement ;
  }
  handleSubmit(){
    alert("Je suis Appeller");

    if(this.resourceInfoForm.valid){
      if (this.resourceInfoForm.controls.encadrement.value) {
        this.resourceInfo.encadrement= this.resourceInfoForm.controls.encadrement.value;
      }
      if (this.resourceInfoForm.controls.qualification.value) {
        this.resourceInfo.qualification= this.resourceInfoForm.controls.qualification.value;
      }
      if (this.resourceInfoForm.controls.bu.value) {
        this.resourceInfo.bu= this.resourceInfoForm.controls.bu.value;
      }
      if (this.resourceInfoForm.controls.supervisor.value) {
        this.resourceInfo.supervisor= this.resourceInfoForm.controls.supervisor.value;
      }
      if (this.resourceInfoForm.controls.societe.value) {
        this.resourceInfo.societe= this.resourceInfoForm.controls.societe.value;
      }
      if (this.resourceInfoForm.controls.niveauEtude.value) {
        this.resourceInfo.n= this.resourceInfoForm.controls.niveauEtude.value;
      }
      if (this.resourceInfoForm.controls.datePatrona.value) {
        this.resourceInfo.datePatrona= this.resourceInfoForm.controls.datePatrona.value;
      }
      console.log(this.resourceInfo);
      console.log(this.resourceInfoForm.value)
      // this.crudService.create(this.user,"http://localhost:8084/command/user/create");
      //(id=null, name=null, email=barrymamadoualpha2@gmail.com, password=, createdAt=null, username=null, firstName=Mamadou Alpha, lastName=, title=, displayName=)
      this.crudService.create(this.resourceInfo,"http://localhost:8084/command/user/create").subscribe(
          result => {
            console.log(result)
          },
          error => {
            // Gérer l'erreur
            console.error(error);
            console.log("TestErreur")
          }
      );


    }


  }

}

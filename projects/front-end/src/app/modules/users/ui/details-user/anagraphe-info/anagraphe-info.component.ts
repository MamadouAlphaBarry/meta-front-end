import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudServiceService} from "../../../../../services/crud-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-anagraphe-info',
  templateUrl: './anagraphe-info.component.html',
  styleUrls: ['./anagraphe-info.component.css']
})
export class AnagrapheInfoComponent {
  displayedColumns: string[] = ['Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.', 'Dim.'];
  dataSource = [{ 'Lun.': 8, 'Mar.': 8, 'Mer.': 8, 'Jeu.': 8, 'Ven.': 8, 'Sam.': 0, 'Dim.': 0 }];
  resourceInfo:any={
    "codfiscal": "", "matricule": "", "ccnl": "",
    "lettre": "", "datedebut": "", "datefin": "", "iban": "","vincolo":""
  };

  anagraferesourceInfoForm= new FormGroup({
    codfiscal: new FormControl("",[Validators.required]),
    matricule: new FormControl("",[Validators.required]),
    ccnl: new FormControl("",[Validators.required]),
    lettre: new FormControl("",[Validators.required]),
    // username: new FormControl("",[Validators.required]),
    datedebut: new FormControl("",[Validators.required]),
    //lastName: new FormControl("",[Validators.required]),
    datefin: new FormControl("",[Validators.required]),
    iban: new FormControl("",[Validators.required]),
    vincolo: new FormControl("",Validators.required),
    day: new FormControl("",Validators.required)
  })



  constructor(private crudService:CrudServiceService,private http: HttpClient,private fb: FormBuilder){}

  get lettre(){
    return this.anagraferesourceInfoForm.controls.lettre;
  }
  get matricule() {
    return this.anagraferesourceInfoForm.controls.matricule;
  }
  get datedebut(){
    return this.anagraferesourceInfoForm.controls.datedebut;
  }
  get datefin(){
    return this.anagraferesourceInfoForm.controls.datefin ;
  }
  get iban(){
    return this.anagraferesourceInfoForm.controls.iban;
  }
  get ccnl(){
    return this.anagraferesourceInfoForm.controls.ccnl ;
  }
  get codfiscal(){
    return this.anagraferesourceInfoForm.controls.codfiscal ;
  }
  get vincolo(){
    return this.anagraferesourceInfoForm.controls.vincolo;
  }
  handleSubmit(){
    alert("Je suis Appeller");

    if(this.anagraferesourceInfoForm.valid){
      if (this.anagraferesourceInfoForm.controls.codfiscal.value) {
        this.resourceInfo.encadrement= this.anagraferesourceInfoForm.controls.codfiscal.value;
      }
      if (this.anagraferesourceInfoForm.controls.matricule.value) {
        this.resourceInfo.qualification= this.anagraferesourceInfoForm.controls.matricule.value;
      }
      if (this.anagraferesourceInfoForm.controls.lettre.value) {
        this.resourceInfo.bu= this.anagraferesourceInfoForm.controls.lettre.value;
      }
      if (this.anagraferesourceInfoForm.controls.datedebut.value) {
        this.resourceInfo.supervisor= this.anagraferesourceInfoForm.controls.datedebut.value;
      }
      if (this.anagraferesourceInfoForm.controls.ccnl.value) {
        this.resourceInfo.societe= this.anagraferesourceInfoForm.controls.ccnl.value;
      }
      if (this.anagraferesourceInfoForm.controls.datefin.value) {
        this.resourceInfo.datefin= this.anagraferesourceInfoForm.controls.datefin.value;
      }
      if (this.anagraferesourceInfoForm.controls.iban.value) {
        this.resourceInfo.datePatrona= this.anagraferesourceInfoForm.controls.iban.value;
      }
      if (this.anagraferesourceInfoForm.controls.vincolo.value) {
        this.resourceInfo.vincolo= this.anagraferesourceInfoForm.controls.vincolo.value;
      }
      console.log(this.resourceInfo);
      console.log(this.anagraferesourceInfoForm.value)
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

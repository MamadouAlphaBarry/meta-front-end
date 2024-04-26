import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EditInfoContactDto } from '../../../models/EditInfoContactDto';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  contact:EditInfoContactDto={
    sede:"",
    city:"",
    cap: "",
    telephone:"",
    cellulaire:"",
    addresse:"",
    province:"",
    etat:"",
    telephoneInterne:"",
  }
  contactForm= new FormGroup({
    sede: new FormControl("",[Validators.required]),
    city: new FormControl("",[Validators.required]),
    cap:  new FormControl("",[Validators.required]),
    telephone: new FormControl("",[Validators.required]),
    cellulaire: new FormControl("",[Validators.required]),
    addresse: new FormControl("",[Validators.required]),
    province: new FormControl("",[Validators.required]),
    ville: new FormControl("",[Validators.required]),
    telephoneInterne: new FormControl("",[]),
    pays: new FormControl("",[Validators.required]),
    //telephone: new FormControl("",[Validators.required]),
  });
constructor(private crudService:CrudServiceService){}
  handleSubmit(){
      console.log(this.contactForm.value);
      if (this.contactForm.valid) {
        if (this.contactForm.controls.addresse.value) {
          this.contact.addresse=this.contactForm.controls.addresse.value;
        }
        if (this.contactForm.controls.sede.value) {
          this.contact.sede=this.contactForm.controls.sede.value;
        }
        if (this.contactForm.controls.city.value) {
          this.contact.city=this.contactForm.controls.city.value;
        }
        if (this.contactForm.controls.cap.value) {
          this.contact.cap=this.contactForm.controls.cap.value;
        }
        if (this.contactForm.controls.telephone.value) {
          this.contact.telephone=this.contactForm.controls.telephone.value;
        }
        if (this.contactForm.controls.cellulaire.value) {
          this.contact.cellulaire=this.contactForm.controls.cellulaire.value;
        }
        if (this.contactForm.controls.province.value) {
          this.contact.province=this.contactForm.controls.province.value;
        }
        if (this.contactForm.controls.ville.value) {
          this.contact.etat=this.contactForm.controls.ville.value;
        }
        if (this.contactForm.controls.telephoneInterne.value) {
          this.contact.etat=this.contactForm.controls.telephoneInterne.value;
        }
        
      }
      alert("Hello world");
      console.log(this.contact)
  }

}

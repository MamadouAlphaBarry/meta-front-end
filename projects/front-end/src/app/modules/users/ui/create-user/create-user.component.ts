import { Component } from '@angular/core';
import { UserDtoRequest } from '../../models/UserDtoRequest';
import { CrudServiceService } from 'projects/front-end/src/app/services/crud-service.service';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { UserRequestDto } from '../../models/UserRequestDto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user:UserRequestDto={
    "confirm": "", "email": "", "password": "",
  "firstName": "", "lastName": "", "title": "", "displayName": ""
 };
  inscription= new FormGroup({
    confirm: new FormControl("",[Validators.required,Validators.minLength(7)]),
    email: new FormControl("",[Validators.required,Validators.email,Validators.required]),
    password: new FormControl("",[Validators.required,Validators.minLength(7)]),
   // createdAt: new FormControl("",[Validators.required]),
   // username: new FormControl("",[Validators.required]),
    firstName: new FormControl("",[Validators.required]),
    lastName: new FormControl("",[Validators.required]),
    title: new FormControl("",[Validators.required]),
    displayName: new FormControl("",[Validators.required])
  })

  constructor(private crudService:CrudServiceService,private http: HttpClient){}

  get firstName(){
    return this.inscription.controls.firstName;
  }
  get email() {
    return this.inscription.controls.email;
  }
  get lastName(){
    return this.inscription.controls.lastName;
  }
  get title(){
    return this.inscription.controls.title ;
  }
  get displayName(){
    return this.inscription.controls.displayName;
  }
  get password(){
    return this.inscription.controls.password ;
  }
  get confirm(){
    return this.inscription.controls.confirm ;
  }
  handleSubmit(){
   alert("Je suis Appeller");

    if(this.inscription.valid){
      if (this.inscription.controls.confirm.value) {
        this.user.confirm= this.inscription.controls.confirm.value;
      }
      if (this.inscription.controls.email.value) {
        this.user.email= this.inscription.controls.email.value;
      }
      if (this.inscription.controls.firstName.value) {
        this.user.firstName= this.inscription.controls.firstName.value;
      }
      if (this.inscription.controls.lastName.value) {
        this.user.lastName= this.inscription.controls.lastName.value;
      }
      if (this.inscription.controls.password.value) {
        this.user.password= this.inscription.controls.password.value;
      }
      if (this.inscription.controls.title.value) {
        this.user.title= this.inscription.controls.title.value;
      }
      if (this.inscription.controls.displayName.value) {
        this.user.displayName= this.inscription.controls.displayName.value;
      }
      console.log(this.user);
      console.log(this.inscription.value)
     // this.crudService.create(this.user,"http://localhost:8084/command/user/create");
      //(id=null, name=null, email=barrymamadoualpha2@gmail.com, password=, createdAt=null, username=null, firstName=Mamadou Alpha, lastName=, title=, displayName=)
      this.crudService.create(this.user,"http://localhost:8084/command/user/create").subscribe(
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
  showError(): any {
    if (this.crudService.error) {
      alert(this.crudService.error); // Vous pouvez modifier ceci selon votre logique d'affichage
      //return this.crudService.error.message;
    }
    return this.crudService.error
  }
  /**
 * Vérifie que l'email n'existe pas déjà en base de données
 */
 uniqueEmailValidator: AsyncValidatorFn = (
  control: AbstractControl<string>
) => {
  // On retourne le résultat d'une requête HTTP, résultat qui sera transformé en
  // un objet représentant l'erreur si il y en a une ou en null si tout est ok
  return fetch(
    'https://jsonplaceholder.typicode.com/users?email=' + control.value
  )
    .then((response) => response.json())
    .then((users) => {
      if (users.length > 0) {
        return { uniqueEmail: true };
      }

      return null;
    });
};
/**
 * Vérifie que le password et la confirmation soient identiques en recevant
 * un FormGroup qui contient les 2 champs
 */
 confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl<{
    password: AbstractControl<string>;
    confirm: AbstractControl<string>;
  }>
) => {
  // On récupère les 2 champs
  const password = control.get('password');
  const confirm = control.get('confirm');

  // Si les valeurs ne sont pas identiques, on retourne un objet avec une
  // propriété qui correspond à notre erreur
  if (password?.value !== confirm?.value) {
    // On peut aussi mettre à jour la validité du champ de confirmation
    confirm?.setErrors({ confirmPassword: true });

    return { confirmPassword: true };
  }

  // Sinon, on retourne null (pas d'erreur)
  return null;
};
}

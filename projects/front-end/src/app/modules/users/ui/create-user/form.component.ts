import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-form", 
  template: ` 
    <div class="container">
      <h1>Angular Avancé !</h1>
      <form>
        <input #email
          type="email"
          name="email"
          id="email"
          class="form-control mb-2"
          placeholder="Votre adresse email"
        />
        <input
          type="password"
          name="password"
          id="password"
          class="form-control mb-2"
          placeholder="Mot de passe"
        />
        <input
          type="password"
          name="confirm"
          id="confirm"
          class="form-control mb-2"
          placeholder="Confirmation du mot de passe"
        />
        <button class="btn btn-success">Inscription</button>
      </form>
    </div>
  `,
  styles: []
})
export class FormComponent {
  @ViewChild("email")
  email?: ElementRef<HTMLInputElement>;

  constructor() {}

  handleSubmit(form: NgForm) {
    console.log(this.email?.nativeElement.value);
  }
}

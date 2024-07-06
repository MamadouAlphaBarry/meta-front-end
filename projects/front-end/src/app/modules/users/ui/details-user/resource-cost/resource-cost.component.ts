import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-resource-cost',
  templateUrl: './resource-cost.component.html',
  styleUrls: ['./resource-cost.component.css']
})
export class ResourceCostComponent {
  resourceCostForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.resourceCostForm = this.fb.group({
      cost: [''],
      ral: [''],
      couts: this.fb.array([])
    });
  }

  get couts() {
    return this.resourceCostForm.get('couts') as FormArray;
  }

  ajouterCout() {
    this.couts.push(this.fb.group({
      type: [''],
      valeur: ['']
    }));
  }

  supprimerCout(index: number) {
    this.couts.removeAt(index);
  }

  mettreAJourUtilisateur() {
    // Mettre ici la logique pour mettre à jour l'utilisateur
  }
}

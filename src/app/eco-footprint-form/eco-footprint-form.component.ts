import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { EcoActionService } from '../service/EcoAction.service';
import { EcoFootprintService } from '../service/EcoFootprint.service';
import { BehaviorSubject } from 'rxjs';
import { EcoAction } from '../models/EcoAction';

@Component({
  selector: 'app-eco-footprint-form',
  templateUrl: './eco-footprint-form.component.html',
  styleUrls: ['./eco-footprint-form.component.scss']
})
export class EcoFootprintFormComponent implements OnInit {
  ecoActionsField: BehaviorSubject<EcoAction[]>;
  firstFormGroup: FormGroup;
  ecoActionsGroup: FormGroup;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private ecoActionService: EcoActionService,
    private ecoFootprintService: EcoFootprintService,
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl('', [
        Validators.maxLength(300),
      ]),
    });

    this.ecoActionsGroup = this._formBuilder.group({
      ecoActions: new FormArray([], [this.validateEcoActions])
    });

    this.ecoActionService.getEcoActionsField().subscribe( data => {
      this.ecoActions.clear();
      for(const ecoAction of data) {
        this.ecoActions.push(new FormControl(ecoAction, Validators.required));
      }
    });
  }

  validateEcoActions(arr: FormArray): Boolean {
    return arr.value.length > 0;
  }

  submit(){
      console.log(this.firstFormGroup.value);
      console.log(this.ecoActionsGroup.value);
      const newEcoFootprint = {
        ...this.firstFormGroup.value,
        ...this.ecoActionsGroup.value,
      };
      this.ecoFootprintService.save(newEcoFootprint).subscribe(result => {
        this.router.navigate(['/list', { }]);
        console.log(result)
      });
  }

  get ecoActions() {
    return this.ecoActionsGroup.get('ecoActions') as FormArray
  }
  get ecoActionsErrorMessage() {
    const ecoActions = this.ecoActionsGroup.get('ecoActions');
    if (ecoActions.invalid && (ecoActions.dirty || ecoActions.touched)) {
      return 'ecoActions is required.';
    }
    return false;
  }

  get firstName() { return this.firstFormGroup.get('firstName') }
  get firstNameErrorMessage() {
    const firstName = this.firstFormGroup.get('firstName');
    if (firstName.invalid && (firstName.dirty || firstName.touched)) {
      if (firstName.errors.required) return 'Firstname is required.';
      if (firstName.errors.minlength) return 'Firstname must be at least 4 characters long';
    }
    return false;
  }

  get lastName() { return this.firstFormGroup.get('lastName') }
  get lastNameErrorMessage() {
    const lastName = this.firstFormGroup.get('lastName');
    if (lastName.invalid && (lastName.dirty || lastName.touched)) {
      if (lastName.errors.required) return 'Lastname is required.';
      if (lastName.errors.minlength) return 'Lastname must be at least 4 characters long';
    }
    return false;
  }

  get description() { return this.firstFormGroup.get('description') }
  get descriptionErrorMessage() {
    const description = this.firstFormGroup.get('description');
    if (description.invalid && (description.dirty || description.touched)) {
      if (description.errors.maxlength) return 'Description must be as much 300 characters long';
    }
    return false;
  }


}

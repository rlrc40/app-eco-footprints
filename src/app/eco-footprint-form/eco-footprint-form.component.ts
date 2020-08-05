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
  isLinear: true;
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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      description: ['']
    });

    this.ecoActionsGroup = this._formBuilder.group({
      ecoActions: new FormArray([
        new FormGroup({
          description: new FormControl('')
        })], this.validateEcoActions)
    });

    this.ecoActionService.getEcoActionsField().subscribe( data => {
      this.ecoActions.clear();
      for(const ecoAction of data) {
        this.ecoActions.push(new FormControl(ecoAction, Validators.required));
      }
    });
  }

  get ecoActions() {
    return this.ecoActionsGroup.get('ecoActions') as FormArray
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

}

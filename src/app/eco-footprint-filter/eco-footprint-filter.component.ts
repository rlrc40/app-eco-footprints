import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { EcoActionService } from '../service/EcoAction.service';
import { EcoFootprintService } from '../service/EcoFootprint.service';

import { EcoAction } from '../models/EcoAction';
import { EcoFootprint } from '../models/EcoFootprint';

@Component({
  selector: 'app-eco-footprint-filter',
  templateUrl: './eco-footprint-filter.component.html',
  styleUrls: ['./eco-footprint-filter.component.scss']
})
export class EcoFootprintFilterComponent implements OnInit {
  ecoActionsTransport: EcoAction[] = [];
  ecoActionsFeeding: EcoAction[] = [];
  ecoActionsEnergy: EcoAction[] = [];

  selectable = true;
  removable = true;
  filterForm: FormGroup;

  // Form state
  opened = false;
  loading = false;
  success = false;

  filters: string[] = [];
  ecoFootprints: EcoFootprint[];
  ecoFootprintsFilter: EcoFootprint[];

  constructor(
    private ecoActionService: EcoActionService,
    private ecoFootprintService: EcoFootprintService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getEcoActions();

    this.resetFilterForm();

    this.filterForm.valueChanges.subscribe(formValues => {
      return;
    });

    this.ecoFootprintService.getEcoFootprints().subscribe(data => this.ecoFootprints = data);
    this.ecoFootprintService.getEcoFootprintsFilter().subscribe(data => this.ecoFootprintsFilter = data);
  }

  getEcoActions(): void {
    this.ecoActionService.getEcoActions()
      .subscribe(ecoActions => {
        this.ecoActionsTransport = ecoActions.filter(ecoAction => ecoAction.categoryType === 1);
        this.ecoActionsFeeding = ecoActions.filter(ecoAction => ecoAction.categoryType === 2);
        this.ecoActionsEnergy = ecoActions.filter(ecoAction => ecoAction.categoryType === 3);
      });
  }

  get name() { return this.filterForm.get('name'); }
  get description() { return this.filterForm.get('description'); }
  get ecoActionsCount() { return this.filterForm.get('ecoActionsCount'); }
  get totalCo2e() { return this.filterForm.get('totalCo2e'); }
  get transportActions() { return this.filterForm.get('transportActions') as FormArray; }
  get feedingActions() { return this.filterForm.get('feedingActions') as FormArray; }
  get energyActions() { return this.filterForm.get('energyActions') as FormArray; }

  removeFilter(filter: string): void {
    const index = this.filters.indexOf(filter);
    if (index >= 0) this.filters.splice(index, 1);
    this.filterData();
  }

  filterHandler() {
    this.loading = true;
    this.opened = false;
    this.setFilters();
    this.filterData();
    this.success = true;
    this.loading = false;
  }

  setFilters(): void {
    if (this.name.value) this.filters.push(`Name: ${this.name.value}`);
    if (this.description.value) this.filters.push(`Description: ${this.description.value}`);
    if (this.ecoActionsCount.value) this.filters.push(`Eco actions: ${this.ecoActionsCount.value}`);
    if (this.totalCo2e.value) this.filters.push(`Co2e: ${this.totalCo2e.value}`);

    if (this.transportActions?.value?.length) this.filters = [...this.filters, ...this.transportActions.value.map(({description}) => description)];
    if (this.feedingActions?.value?.length) this.filters = [...this.filters, ...this.feedingActions.value.map(({description}) => description)];
    if (this.energyActions?.value?.length) this.filters = [...this.filters, ...this.energyActions.value.map(({description}) => description)];

  }

  filterData(): void {
    let ecoFootprintsFiltered: EcoFootprint[] = this.ecoFootprints;

    if (this.name.value) {
      ecoFootprintsFiltered = ecoFootprintsFiltered.filter( ({ firstName, lastName }) => (firstName + lastName).toLowerCase().includes(this.name.value.toLowerCase()) );
    }
    if (this.description.value) {
      ecoFootprintsFiltered = ecoFootprintsFiltered.filter( ({ description }) => description.toLowerCase().includes(this.description.value.toLowerCase()) );
    }
    if (this.ecoActionsCount.value) {
      ecoFootprintsFiltered = ecoFootprintsFiltered.filter( ({ ecoActions }) => ecoActions.length == this.ecoActionsCount.value );
    }
    if (this.totalCo2e.value) {
      ecoFootprintsFiltered = ecoFootprintsFiltered.filter( ({ ecoActions }) => {
        const totalco2e = ecoActions?.length && ecoActions.map( action => action.co2e ).reduce((total, value) => total + value) || 0;
        return totalco2e >= this.totalCo2e.value;
      });
    }

    if (this.transportActions?.value?.length) {
      ecoFootprintsFiltered = ecoFootprintsFiltered.filter( ({ ecoActions }) => {
        return this.transportActions.value.every(({actionId}) => {
          const ecoActionList = ecoActions.map(({actionId}) => actionId);
          return ecoActionList.indexOf(actionId) > -1;
        });
      });
    }

    if (this.feedingActions?.value?.length) {
      ecoFootprintsFiltered = ecoFootprintsFiltered.filter( ({ ecoActions }) => {
        return this.feedingActions.value.every(({actionId}) => {
          const ecoActionList = ecoActions.map(({actionId}) => actionId);
          return ecoActionList.indexOf(actionId) > -1;
        });
      });
    }

    if (this.energyActions?.value?.length) {
      ecoFootprintsFiltered = ecoFootprintsFiltered.filter( ({ ecoActions }) => {
        return this.energyActions.value.every(({actionId}) => {
          const ecoActionList = ecoActions.map(({actionId}) => actionId);
          return ecoActionList.indexOf(actionId) > -1;
        });
      });
    }

    this.ecoFootprintService.setEcoFootprintsFilter(ecoFootprintsFiltered);
  }

  resetFilterForm(): void {
    this.filters = [];
    this.filterForm = this._formBuilder.group({
      name: ['', [Validators.maxLength(10)]],
      description: ['', []],
      ecoActionsCount: ['', [Validators.min(0)]],
      totalCo2e: ['', [Validators.min(0)]],
      transportActions: new FormControl(),
      feedingActions: new FormControl(),
      energyActions: new FormControl(),
    });
    this.ecoFootprintService.setEcoFootprintsFilter(this.ecoFootprints);
  }

  setOpenedFilterPanel(): void{
    this.opened = true;
  }

}

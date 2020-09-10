/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcoFootprintInformationComponent } from './eco-footprint-information.component';

describe('EcoFootprintInformationComponent', () => {
  let component: EcoFootprintInformationComponent;
  let fixture: ComponentFixture<EcoFootprintInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoFootprintInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoFootprintInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

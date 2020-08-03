/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcoActionListComponent } from './eco-action-list.component';

describe('EcoActionListComponent', () => {
  let component: EcoActionListComponent;
  let fixture: ComponentFixture<EcoActionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoActionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

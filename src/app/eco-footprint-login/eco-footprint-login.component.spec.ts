import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoFootprintLoginComponent } from './eco-footprint-login.component';

describe('EcoFootprintLoginComponent', () => {
  let component: EcoFootprintLoginComponent;
  let fixture: ComponentFixture<EcoFootprintLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoFootprintLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoFootprintLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

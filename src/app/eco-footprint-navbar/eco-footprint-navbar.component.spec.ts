import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoFootprintNavbarComponent } from './eco-footprint-navbar.component';

describe('EcoFootprintNavbarComponent', () => {
  let component: EcoFootprintNavbarComponent;
  let fixture: ComponentFixture<EcoFootprintNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoFootprintNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoFootprintNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

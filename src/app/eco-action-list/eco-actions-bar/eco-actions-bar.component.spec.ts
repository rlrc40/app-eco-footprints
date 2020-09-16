import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EcoActionsBarComponent } from './eco-actions-bar.component';

describe('EcoActionsBarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoActionsBarComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(EcoActionsBarComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display the correct totalBar', () => {
    let fixture = TestBed.createComponent(EcoActionsBarComponent);
    let component = fixture.componentInstance;
    component.totalBar = 7.4;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.eco-action-list-chart-box-bar-total').textContent)
      .toEqual('7.4');
  });

  it('should display the correct number of ticks', () => {
    let fixture = TestBed.createComponent(EcoActionsBarComponent);
    let component = fixture.componentInstance;
    component.ticks = [0, 1, 2, 3, 4, 5, 6];
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.eco-action-list-chart-box-bar-ticks-tick')).length)
      .toEqual(7);
  });
});

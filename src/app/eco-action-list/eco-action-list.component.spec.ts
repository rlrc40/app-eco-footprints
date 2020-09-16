/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EcoActionService } from '../service/EcoAction.service';

import { EcoActionListComponent } from './eco-action-list.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

describe('EcoActionListComponent', () => {
  const selectedMock = { selectedOptions: {
    selected: [{
      value: {
        id: "5f4b84644ccda9c56cca98e7",
        actionId: 9,
        description: "Seguir una dieta saludable",
        depends: "null",
        co2e: 1.0,
        categoryType: 2
      }
    }, {
    value: {
      id: "5f4b84644ccda9c56cca98e8",
      actionId: 8,
      description: "Reducir 1 vuelo de larga duración",
      depends: "null",
      co2e: 4.5,
      categoryType: 1
    }}]
  }};

  const ecoActionsMock = [
    {
      id: "5f4b84644ccda9c56cca98e7",
      actionId: 9,
      description: "Seguir una dieta saludable",
      depends: "null",
      co2e: 1.0,
      categoryType: 2
    }, {
      id: "5f4b84644ccda9c56cca98e8",
      actionId: 8,
      description: "Reducir 1 vuelo de larga duración",
      depends: "null",
      co2e: 4.5,
      categoryType: 1
    }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule],
      declarations: [ EcoActionListComponent ],
      providers: [ EcoActionService ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(EcoActionListComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have as totalBar 7.4', async(() => {
    let fixture = TestBed.createComponent(EcoActionListComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component.totalBar).toEqual(7.4);
  }));

  it('should have as 7 ticks', async(() => {
    let fixture = TestBed.createComponent(EcoActionListComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component.ticks.length).toEqual(7);
  }));

  it('should get sum of eco actions list', () => {
    let fixture = TestBed.createComponent(EcoActionListComponent);
    let component = fixture.componentInstance;
    expect(component.getSumCo2e(selectedMock)).toEqual(5.5);
  })

  it('should get with of bar', () => {
    let fixture = TestBed.createComponent(EcoActionListComponent);
    let component = fixture.componentInstance;
    expect(component.getWidthBar(3.7)).toEqual(50);
  })

  it('should get color of eco action from list', () => {
    let fixture = TestBed.createComponent(EcoActionListComponent);
    let component = fixture.componentInstance;
    expect(component.getCo2eColor(selectedMock, '5f4b84644ccda9c56cca98e7')).toEqual('#ff4081');
    expect(component.getCo2eColor(selectedMock, '5f4b84644ccda9c56cc298e7')).toEqual('#d9d9d9');
  })

  it('should get style of bar', () => {
    let fixture = TestBed.createComponent(EcoActionListComponent);
    let component = fixture.componentInstance;
    expect(component.getCurrentBarStyle(ecoActionsMock)).toEqual({'width.%': 25.675675675675677, 'backgroundColor': '#83ff00'});
  })

  it('should get current eco actions', () => {
    let fixture = TestBed.createComponent(EcoActionListComponent);
    let component = fixture.componentInstance;
    let spy = spyOn(component, 'getCurrentEcoActions').and.returnValue(ecoActionsMock);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.getCurrentEcoActions(selectedMock)).toEqual(ecoActionsMock);
      expect(spy.calls.any()).toEqual(true);
    });
  })

  it('should fetch data successfully', () => {
    let fixture = TestBed.createComponent(EcoActionListComponent);
    let component = fixture.debugElement.componentInstance;
    let service = fixture.debugElement.injector.get(EcoActionService);
    let spy = spyOn(service, 'getEcoActions').and.returnValue(of(ecoActionsMock));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.ecoActions).toBe(ecoActionsMock);
      expect(spy.calls.any()).toEqual(true);
    });
  });
});

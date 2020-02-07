import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPrimeNgComponent } from './training.component';

describe('TrainingPrimeNgComponent', () => {
  let component: TrainingPrimeNgComponent;
  let fixture: ComponentFixture<TrainingPrimeNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPrimeNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainingPrimeNgComponent } from './new-training.component';

describe('NewTrainingPrimeNgComponent', () => {
  let component: NewTrainingPrimeNgComponent;
  let fixture: ComponentFixture<NewTrainingPrimeNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrainingPrimeNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainingPrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTrainingPrimeNgComponent } from './current-training.component';

describe('CurrentTrainingAngComponent', () => {
  let component: CurrentTrainingPrimeNgComponent;
  let fixture: ComponentFixture<CurrentTrainingPrimeNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTrainingPrimeNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTrainingPrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

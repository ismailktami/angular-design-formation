import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainingPrimeNgComponent } from './edit-training.component';

describe('EditTrainingComponent', () => {
  let component: EditTrainingPrimeNgComponent;
  let fixture: ComponentFixture<EditTrainingPrimeNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrainingPrimeNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrainingPrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

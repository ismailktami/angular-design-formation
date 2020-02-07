import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTablePrimeNgComponent } from './training-table.component';

describe('TrainingTablePrimeNgComponent', () => {
  let component: TrainingTablePrimeNgComponent;
  let fixture: ComponentFixture<TrainingTablePrimeNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingTablePrimeNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingTablePrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

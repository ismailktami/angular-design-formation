import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTableAngComponent } from './training-table.component';

describe('TrainingTableComponent', () => {
  let component: TrainingTableAngComponent;
  let fixture: ComponentFixture<TrainingTableAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingTableAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingTableAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

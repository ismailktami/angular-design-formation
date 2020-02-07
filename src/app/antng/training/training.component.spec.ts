import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAngComponent } from './training.component';

describe('TrainingComponent', () => {
  let component: TrainingAngComponent;
  let fixture: ComponentFixture<TrainingAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

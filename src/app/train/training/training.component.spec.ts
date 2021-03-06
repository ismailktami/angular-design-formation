import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingMaterialComponent } from './training.component';

describe('TrainingComponent', () => {
  let component: TrainingMaterialComponent;
  let fixture: ComponentFixture<TrainingMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

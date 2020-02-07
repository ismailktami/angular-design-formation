import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainingAngComponent } from './edit-training.ang.component';

describe('EditTrainingComponent', () => {
  let component: EditTrainingAngComponent;
  let fixture: ComponentFixture<EditTrainingAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrainingAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrainingAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

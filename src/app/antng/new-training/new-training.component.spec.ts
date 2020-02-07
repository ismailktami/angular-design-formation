import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainingAngComponent } from './new-training.ang.component';

describe('NewTrainingComponent', () => {
  let component: NewTrainingAngComponent;
  let fixture: ComponentFixture<NewTrainingAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrainingAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainingAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

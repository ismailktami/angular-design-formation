import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTrainingAngComponent } from './current-trainingAng.component';

describe('CurrentTrainingAngComponent', () => {
  let component: CurrentTrainingAngComponent;
  let fixture: ComponentFixture<CurrentTrainingAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTrainingAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTrainingAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

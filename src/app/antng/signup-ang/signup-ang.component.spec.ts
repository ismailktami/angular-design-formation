import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAngComponent } from './signup-ang.component';

describe('SignupAngComponent', () => {
  let component: SignupAngComponent;
  let fixture: ComponentFixture<SignupAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

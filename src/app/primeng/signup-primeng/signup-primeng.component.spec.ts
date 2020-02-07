import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPrimengComponent } from './signup-primeng.component';

describe('SignupPrimengComponent', () => {
  let component: SignupPrimengComponent;
  let fixture: ComponentFixture<SignupPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

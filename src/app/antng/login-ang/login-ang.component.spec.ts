import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAngComponent } from './login-ang.component';

describe('LoginAngComponent', () => {
  let component: LoginAngComponent;
  let fixture: ComponentFixture<LoginAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

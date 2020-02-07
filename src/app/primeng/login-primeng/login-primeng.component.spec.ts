import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrimengComponent } from './login-primeng.component';

describe('LoginPrimengComponent', () => {
  let component: LoginPrimengComponent;
  let fixture: ComponentFixture<LoginPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

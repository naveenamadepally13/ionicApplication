import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throw alert when password is incorrect', () => {
    component.emailAddress = 'nehanavgale0604@gmail.com';
    component.password = 'xyz';
    component.login();
    expect(component.passwordError()).toHaveBeenCalled();
  });

  it('should throw error if user does not have account', () => {
    component.emailAddress = 'naveenamadepally@gmail.com';
    component.password = 'xyz';
    component.login();
    expect(component.accountError()).toHaveBeenCalled();
  });

});

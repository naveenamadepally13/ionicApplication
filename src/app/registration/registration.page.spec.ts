import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPage } from './registration.page';

describe('RegistrationPage', () => {
  let component: RegistrationPage;
  let fixture: ComponentFixture<RegistrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('password should not match with confirm password', () => {
    component.firstName = 'Neha';
    component.lastName = 'Navgale';
    component.emailAdress = 'nehanavgale0604@gmail.com';
    component.password = '123';
    component.confirmPassword = '234';
    component.register();
    expect(component.passwordError()).toHaveBeenCalled();
  });

  it('Registration successful when password and confirm password matches', () => {
    component.firstName = 'Neha';
    component.lastName = 'Navgale';
    component.emailAdress = 'nehanavgale0604@gmail.com';
    component.password = '123';
    component.confirmPassword = '123';
    component.register();
    expect(component.successAlert()).toHaveBeenCalled();
  });
});

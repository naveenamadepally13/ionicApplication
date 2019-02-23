import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  firstName;
  lastName;
  emailAdress;
  password;
  confirmPassword;
  emailValue;

  constructor(public storage: Storage, private router: Router) {
  }
  register() {
    this.storage.get('EmailAddress').then((data) => this.emailValue = data)
    if (this.emailValue !== this.emailAdress) {
      this.storage.set('EmailAdress', this.emailAdress);
      this.storage.set('Password', this.password);
      this.storage.set('FirstName', this.firstName);
      this.storage.set('LastName', this.lastName);
      this.router.navigateByUrl('/login');
    }
  }
  ngOnInit() {
  }

}

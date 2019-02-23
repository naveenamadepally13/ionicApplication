import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public storage: Storage, private router: Router) { }
  emailAddress;
  emailValue;
  passwordValue;
  password;
  login() {
    this.storage.get('EmailAddress').then((data) => this.emailValue = data)
    this.storage.get('Password').then(data => this.passwordValue = data)
    if (this.emailValue === this.emailAddress && this.passwordValue === this.password) {
      this.router.navigateByUrl('/home');
    }
  }
  ngOnInit() {
  }
}

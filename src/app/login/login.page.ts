import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public storage: Storage, private router: Router, public alertController: AlertController) { }
  emailAddress;
  emailValue;
  passwordValue;
  password;
  login() {
    if (this.emailAddress in window.localStorage) {
      if (JSON.parse(localStorage.getItem(this.emailAddress))['Password'] === this.password) {
        this.router.navigateByUrl('tabs/home');
      }
    }
  }
  ngOnInit() {
  }
}

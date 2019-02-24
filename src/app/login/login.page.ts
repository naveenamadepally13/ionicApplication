import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public storage: Storage, private router: Router, public navCtrl: NavController, public alertController: AlertController) { }
  emailAddress;
  password;

  async accountError() {
    const alert = await this.alertController.create({
      header: 'Account does not exists',
      message: 'You do not have any account. Please create account on registration page.',
      buttons: ['Ok']
    });
    await alert.present();
  }

  async passwordError() {
    const alert = await this.alertController.create({
      header: 'Password is Incorrect',
      message: 'Please enter the correct password',
      buttons: ['Ok']
    });
    await alert.present();
  }
  login() {
    if (this.emailAddress in window.localStorage) {
      if (JSON.parse(localStorage.getItem(this.emailAddress))['Password'] === this.password) {
        this.router.navigateByUrl('tabs/home');
      } else { this.passwordError(); }
    } else {
      this.accountError();
      this.navCtrl.navigateRoot('tabs/registration');
    }
  }
  ngOnInit() {
  }
}

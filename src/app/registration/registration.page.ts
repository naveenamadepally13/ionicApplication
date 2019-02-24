import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

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
  storageUser;

  constructor(public storage: Storage, private router: Router, public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  async successAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Registered Successfully',
      message: 'Your account has been created successfully',
      buttons: ['Ok']
    });
    await alert.present();
  }

  async passwordError() {
    const alert = await this.alertCtrl.create({
      header: 'Password mismatch',
      message: 'Password and confirm password does not match.',
      buttons: ['Ok']
    });
    await alert.present();
  }

  async accountError() {
    const alert = await this.alertCtrl.create({
      header: 'Account exists',
      message: 'You already have an account with this email address',
      buttons: ['Ok']
    });
    await alert.present();
  }

  register() {
    if (this.emailAdress in window.localStorage) {
      this.accountError();
    } else {
      if (this.password === this.confirmPassword) {
        this.storageUser = {
          FirstName: this.firstName, LastName: this.lastName, EmailAddress: this.emailAdress,
          Password: this.password
        }
        window.localStorage.setItem(this.emailAdress, JSON.stringify(this.storageUser));
        this.successAlert();
        this.navCtrl.navigateRoot('tabs/login');
      } else {
        this.passwordError();
      }
    }
  }
  ngOnInit() {
  }

}

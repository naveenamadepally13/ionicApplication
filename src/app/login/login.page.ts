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
    this.storage.get('EmailAddress').then((data) => this.emailValue = data)
    this.storage.get('Password').then(data => this.passwordValue = data)
    if (this.emailValue === this.emailAddress && this.passwordValue === this.password) {
      this.router.navigateByUrl('/home');
    } else {
      // const alertController = document.querySelector('ion-alert-controller');
      //  alertController.componentOnReady();
      // const errorAlert = await this.alertController.create({
      //   header: 'Error',
      //   subHeader: '',
      //   message: 'You do not have an acccount. Please create account on Registration page',
      //   buttons: ['ok']
      // });
      // errorAlert.present();
      // this.router.navigateByUrl('/registration');
    }
  }
  ngOnInit() {
  }
}

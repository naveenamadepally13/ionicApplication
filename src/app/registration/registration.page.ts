import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';

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

  constructor(public storage: Storage, private router: Router, public navCtrl: NavController) {
  }
  register() {
    if (this.emailAdress in window.localStorage) {
    //  alert
    } else {
      if (this.password === this.confirmPassword) {
        this.storageUser = {
          FirstName: this.firstName, LastName: this.lastName, EmailAddress: this.emailAdress,
          Password: this.password
        }
        window.localStorage.setItem(this.emailAdress, JSON.stringify(this.storageUser));
        this.navCtrl.navigateRoot('tabs/login');
      }
    }
  }
  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUserProvider } from '../../providers/app-user/app-user';
import { LobbyPage } from '../../pages/lobby/lobby';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public appUsers: AppUserProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login(form) {
    if(form.invalid) {
      return alert("Both fields required.");
    }
    
    console.log("Value of " + this.user);
    this.appUsers.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      //handle successful response and decide what happens next
      console.log("Token value: " + res.id + "\nUser id: " + res.userId);
      window.localStorage.setItem("token", res.id);
      window.localStorage.setItem("userId", res.userId);
      // window.localStorage.setItem("token", res.token);
      // window.localStorage.setItem("userId", res.id);
      console.log("successful login");
      this.navCtrl.setRoot(LobbyPage);
    }, err => {
      //inform user of any known problems that arose, otherwise give a generic failed message
      if(err.status == 404) {
        return alert("Page Not Found");
      } else if (err.status == 403) {
        return alert("Forbidden");
      } else if (err.status == 401) {
        return alert("Unauthorized");
      } else if (err.status == 500) {
        return alert("Server is offline");
      } else {
        return alert("Error - unaccounted");
      }
    });
  }

}

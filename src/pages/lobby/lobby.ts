import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuestionPage } from '../question/question';
import { HistoryPage } from '../history/history';
import { LandingPage } from '../landing/landing';
import { AppUserProvider } from '../../providers/app-user/app-user';

/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {
  
  token: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public appUsers: AppUserProvider
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }

  takeTest() {
    this.navCtrl.push(QuestionPage);
  }
  
  viewHistory() {
    this.navCtrl.push(HistoryPage);
  }
  
  logoff() {
    console.log("the logoff function starts to execute");
    console.log("token value for logoff is " + window.localStorage.getItem("token"));
    this.token = window.localStorage.getItem("token");
    this.appUsers.logout(this.token);
    this.navCtrl.push(LandingPage);
  }

}

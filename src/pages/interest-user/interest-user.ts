import { ChooseCardPage } from './../choose-card/choose-card';
import { User } from './../../common/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InterestUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interest-user',
  templateUrl: 'interest-user.html',
})
export class InterestUserPage {
  user:User
  users=[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
       this.user=navParams.data.user;
       this.users=[
         {
        'username':"西红柿炒鸡蛋",
        'avatar':'assets/img/avatar/ian-avatar.png',
        'keys':'[旅行]话题优秀回答者',
        'answers':'158',
        'follows':'525',
       },
       {
        'username':"西红柿炒鸡蛋",
        'avatar':'assets/img/avatar/ian-avatar.png',
        'keys':'[旅行]话题优秀回答者',
        'answers':'158',
        'follows':'525',
       },
       {
        'username':"西红柿炒鸡蛋",
        'avatar':'assets/img/avatar/ian-avatar.png',
        'keys':'[旅行]话题优秀回答者',
        'answers':'158',
        'follows':'525',
       },
       {
        'username':"西红柿炒鸡蛋",
        'avatar':'assets/img/avatar/ian-avatar.png',
        'keys':'[旅行]话题优秀回答者',
        'answers':'158',
        'follows':'525',
       },
      ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestUserPage');
  }
  openchoosecard(){
    this.navCtrl.push(ChooseCardPage);
  }

}

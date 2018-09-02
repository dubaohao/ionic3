import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import{ Article } from '../../common/Article';
import{ Recommend } from '../../common/Recommend';
import{ Hot } from '../../common/Hot';
import{ Video } from '../../common/Video';
import {InterestUserPage} from '../interest-user/interest-user'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  article:Article[];
  recommend:Recommend[];
  hot:Hot[];
  video:Video[];
  articles=[];
  recommands=[];
  hots=[];
  videos=[];

  constructor(public navCtrl: NavController,
  public navParams:NavParams) {
    this.article=navParams.data.article;
    this.articles=[
    {
      'username':'芝麻点小小仙',
      'updatetime':'刚刚',
      'title':'十大经典数据挖掘算法',
      'things':'如何解决拜占庭将军问题,天涯浪子：作者简介：人工智能爱好者社区专栏作者 博客专栏。。。',
      'avatar':'assets/img/avatar/ian-avatar.png',
      'picture':'assets/img/lists/stadium.jpg'
    },
    {
      'username':'大芝麻',
      'updatetime':'5小时前',
      'title':'区块链应用的共识机制',
      'things':'两周学会开发JavaScript高级课程,深度了解Vue、React等框架原理',
      'avatar':'assets/img/avatar/cosima-avatar.jpg',
      'picture':'assets/img/profile/profile-2.jpg'
    },
    {
      'username':'捡火柴的小女孩',
      'updatetime':'半小时前',
      'title':'我爱美妆视频，欧莱雅',
      'things':'女生应该如何保护自己，防狼手册,如何看待滴滴事件，是人性黑暗，还是妥协于社会',
      'avatar':'assets/img/avatar/girl-avatar.png',
      'picture':'assets/img/card/bjork-live.jpg'
    },
    {
      'username':'芝麻点小小仙',
      'updatetime':'22小时前',
      'title':'优秀的男生应该具有什么品质',
      'things':'小小仙交给你PUA如何使用，嘿嘿嘿,专业感情专家，心理分析师，解决一切疑难杂症',
      'avatar':'assets/img/avatar/ian-avatar.png',
      'picture':'assets/img/card/rundmc-live.png'
    },
    {
      'username':'街机小霸王',
      'updatetime':'12小时前',
      'title':'童年的小游戏',
      'things':'JS代码实现团子大战,QAQAWEAR连招技能，让敌人防不胜防，秒变王者',
      'avatar':'assets/img/avatar/sarah-avatar.jpg',
      'picture':'assets/img/card/advance-card-map-mario.png'
    },
  ];
  this.recommend=navParams.data.recommend;
    this.recommands=[
    {
      'username':'芝麻点小小仙',
      'updatetime':'刚刚',
      'title':'十大经典数据挖掘算法',
      'things':'如何解决拜占庭将军问题,天涯浪子：作者简介：人工智能爱好者社区专栏作者 博客专栏。。。',
      'avatar':'assets/img/avatar/ian-avatar.png',
      'picture':'assets/img/lists/stadium.jpg'
    }];

    this.hot=navParams.data.hot;
    this.hots=[
    {
      'username':'芝麻点小小仙',
      'updatetime':'刚刚',
      'title':'十大经典数据挖掘算法',
      'things':'如何解决拜占庭将军问题,天涯浪子：作者简介：人工智能爱好者社区专栏作者 博客专栏。。。',
      'avatar':'assets/img/avatar/ian-avatar.png',
      'picture':'assets/img/lists/stadium.jpg',
      'hotnum':'10000',
    }];

    this.video=navParams.data.video;
    this.videos=[
    {
      'username':'芝麻点小小仙',
      'updatetime':'刚刚',
      'title':'十大经典数据挖掘算法',
      'things':'如何解决拜占庭将军问题,天涯浪子：作者简介：人工智能爱好者社区专栏作者 博客专栏。。。',
      'avatar':'assets/img/avatar/ian-avatar.png',
      'picture':'assets/img/lists/stadium.jpg'
    }];

  }
  order: string ="关注"; 
  ionViewDidLoad(){

  }
  open_Interest_User(){
    this.navCtrl.push(InterestUserPage);
  }

}

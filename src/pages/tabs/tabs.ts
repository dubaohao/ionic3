import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { MinePage} from '../mine/mine';
import { NoticesPage } from './../notices/notices';
import { SchoolPage } from './../school/school';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SchoolPage;
  tab4Root = NoticesPage;
  tab5Root = MinePage;

  constructor() {

  }
}

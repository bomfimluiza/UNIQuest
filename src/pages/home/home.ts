import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
}

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <button ion-button menuToggle>
        <ion-icon name="menu"></ion-icon>
      </button>
      <ion-title>
        UNIQuest
      </ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content></ion-content>`
})
class TabContentPage{
  constructor() {}
}

@Component({
  template: `
  <ion-tabs>
    <ion-tab tabIcon="contact" [root]="rootPage"></ion-tab>
    <ion-tab tabIcon="compass" [root]="rootPage"></ion-tab>
    <ion-tab tabIcon="analytics" [root]="rootPage"></ion-tab>
  </ion-tabs>`
})
class TabIconsPage{
  constructor() {
    this.rootPage = TabContentPage;
  }
}
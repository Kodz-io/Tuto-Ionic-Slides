import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-slides-page',
  templateUrl: 'slides-page.html',
})
export class SlidesPage {
  slides: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.slides = [
    {
      title: 'Welcome to the Slides Componant !',
      description: 'This componant is one of the most common used componant in mobile application. With this one, you can introduce easely the concept of your apps to your potential customers.'
    },
    {
      title: 'What we can do ?',
      description: 'In each slide you can add everything that Angular can Handle. You can add for instance simple html or custom componant !'
    },
    {
      title: 'Take Control !',
      description: 'The Slides componant can be orchestrated by the out of the box API.For instance, you can switch manualy to the slide you want !'
    }
];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}

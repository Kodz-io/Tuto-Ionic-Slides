import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidesPage } from './slides-page';

@NgModule({
  declarations: [
    SlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidesPage),
  ],
  exports: [
    SlidesPage
  ]
})
export class SlidesPageModule {}

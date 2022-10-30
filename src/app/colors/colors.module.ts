import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ColorsPage } from './colors.page';
import { HomePageRoutingModule } from './colors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [ColorsPage]
})
export class ColorsPageModule {}

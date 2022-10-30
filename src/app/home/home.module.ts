import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import {Auth} from "../../providers/auth";
import {Api} from "../../providers/api";
import {HttpClient} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers:[Auth,Api,HttpClient],
  declarations: [HomePage]
})
export class HomePageModule {}

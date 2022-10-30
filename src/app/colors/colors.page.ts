import {Component} from '@angular/core';
import {NavController} from "@ionic/angular";
import {Auth, Colors} from "../../providers";

@Component({
  selector: 'colors',
  templateUrl: 'colors.page.html',
  styleUrls: ['colors.page.scss'],
})
export class ColorsPage {
  public data: any = {
    countColors: [],
    countSites: [],
    colorList: [],
    countItems:1
  };
  currPage = 1;

  constructor(
    public navCtrl: NavController,
    public colors: Colors,
    private auth:Auth) {
    this.loadData();
  }

  ionViewDidLoad() {
    this.loadData();
  }


  async loadData(page = 1) {
    await this.colors.getColors({page: page});
    this.colors.loaderState.subscribe(data => {
      this.data = data;
    })
  }

  getItemColor() {
    let colors = [];
    for (let i = 0; i < 10; i++) {
      if (this.data.countColors[i]) {
        colors.push({title: this.data.countColors[i].hex, hex: this.data.countColors[i].hex})
      } else {
        colors.push({title: 'no colors', hex: '#FFFFFF.'})
      }
    }
    return colors
  }

  public async selectPage(page: number) {
    this.currPage = page;
    await this.loadData(page);
  }

  getVisiblePages() {
    let pages = [];
    for (let i = 0; i < this.data.countItems/20; i++) {
      pages.push(i+1);
    }
    return pages;
  }
  getMathFloor(numb){
    return Math.floor(numb);
  }
  openSite(site:string){
    window.open(site)
  }
  logOut(){
    this.auth.logout();
  }
}

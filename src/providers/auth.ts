import {Injectable} from "@angular/core";
import {Api} from "./api";
import {NavController} from "@ionic/angular";


@Injectable()
export class Auth {

  constructor(public api: Api, public navCtrl: NavController,
  ) {
  }


  async login(accountInfo: any) {
    let seq = await this.api.post('/auth/login', accountInfo);

    seq.subscribe((res: any) => {
      if (res.token) {
        this.navCtrl.navigateForward('colors');
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

  }


  async signup(accountInfo: any) {
    let seq = await this.api.post('/auth/signup', accountInfo);

    seq.subscribe((res: any) => {
      if (res.token) {
        this.navCtrl.navigateForward('colors');
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
  }


  logout() {
    localStorage.removeItem('token');
    this.navCtrl.navigateRoot('home');
  }


  _loggedIn(resp) {
    localStorage.setItem('token',resp.token);
  }
}

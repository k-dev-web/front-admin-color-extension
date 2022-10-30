import {Component} from '@angular/core';
import {Auth} from "../../providers/auth";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  account: { login: string, password: string } = {
    login: '',
    password: ''
  };

  constructor(
    public auth: Auth,
  ) {
  }


  async Login() {
    await this.auth.login({...this.account, username: this.account.login});
  }

  async signup() {
    await this.auth.signup(this.account);
  }

}

import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Api} from "./api";
import {NavController} from "@ionic/angular";


@Injectable()
export class Colors {
  private loaderSubject = new BehaviorSubject<any>({
    countColors:[],
    countSites:[],
    colorList:[]

  });
  public loaderState = this.loaderSubject.asObservable();
  constructor(public api: Api, public navCtrl: NavController,
  ) {
  }
  async getColors(page) {
    let seq = await this.api.get('/colors',page);

    seq.subscribe((res: any) => {
      this.loaderSubject.next(res)
    }, err => {
      console.error('ERROR', err);
    });
  }


}

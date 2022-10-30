import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {environment} from "../environments/environment";
import {ToastController} from "@ionic/angular";
import {Injectable} from "@angular/core";

@Injectable()
export class InterceptorProvider implements HttpInterceptor {
  api: string = environment.apiUrl;

  constructor(
    private toastController:ToastController
  ) {

  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let token = localStorage.getItem('token');
    let header = new HttpHeaders({
      "Content-Type": 'application/json',
      "x-access-token": token ? token : '',
      "Accept": 'Access-Control-Allow-Origin'
    })

    const authReq = req.clone({
      url: this.api + req.url,
      headers: header
    })


    return next.handle(authReq).pipe(
      tap(
        (event) => {
          //if (event instanceof HttpResponse)
          //  console.log(event)
        },
         async (err) => {
          if (err instanceof HttpErrorResponse) {
            const toast = await this.toastController.create({
              message: err.error.message,
              duration: 2000,
              position:"top",
              color:"danger"
            });
            toast.present();
          }
        }
      )
    )
  }
}

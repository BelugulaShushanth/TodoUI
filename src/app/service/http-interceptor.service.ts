import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  authToken : any = ''

  intercept(req: HttpRequest<any>, next: HttpHandler){
    this.authToken = sessionStorage.getItem('authToken')
    if(this.authToken != null){
      req = req.clone({
        setHeaders : {
          Authorization : this.authToken
        }
      })
    }
    return next.handle(req)
  }

  getHeader(){
    return ""
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddheadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token :any = localStorage.getItem('token')
    if(token && request.url.includes('http://127.0.0.1:8000/api/user')){
      const clonedReq = request.clone({
        headers:request.headers.set("Authorization",token)
      })
      return next.handle(clonedReq)
    }
    return next.handle(request);
  }
}

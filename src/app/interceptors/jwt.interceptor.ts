import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInfo } from '../shared/models/loginInfo.model';
import { getUserStateFromLocalStorage } from '../shared/services/helpers/local-storage-helper';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  user: LoginInfo;
  constructor() {
    this.user = new LoginInfo();
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.user = getUserStateFromLocalStorage();
    if (this.user.username) {
      const duplicate = req.clone({
        setHeaders: {         
          'Authorization': `Bearer ${this.user.accessToken.token}`
        }
      })
      return next.handle(duplicate);
    }

    return next.handle(req);

  }

}

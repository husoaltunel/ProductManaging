import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { HttpService } from './http.service';
import {map} from 'rxjs/operators'
import { LoginInfo } from '../models/loginInfo.model';

import { Register } from '../models/register.model';
import { setLoginStateToLocalStorage, setUserStateToLocalStorage } from './helpers/local-storage-helper';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path = "Auth/";
  private loginInfo : LoginInfo;
  
  constructor(private http: HttpService) {
    this.loginInfo = new LoginInfo();
  }

  login(model: Login)  {
    return this.http.post(this.path.concat("login"), model).pipe(
      map((response : any)  => {
        if(response.success){
          this.loginInfo = response.data;
          setUserStateToLocalStorage(this.loginInfo);          
        }
        return response;
      })
    )
  }
  logOut(){
    localStorage.removeItem('user');
    setLoginStateToLocalStorage(false);
  }
  register(model : Register){
    return this.http.post(this.path.concat("register"),model)
  }
  isLoggedIn(){
    return this.http.get(this.path.concat("is-logged-in"));
  }
  getRoles(){
    return this.http.get(this.path.concat("roles"))
  }
}

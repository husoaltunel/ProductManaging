import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Login } from 'src/app/shared/models/login.model';
import { Register } from 'src/app/shared/models/register.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { setLoginInfo } from '../../helpers/register-helper';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: Register;
  loginInfo: Login;
  constructor(private authService: AuthService, private location: Location, private router: Router) {
    this.newUser = new Register();
    this.loginInfo = new Login();
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.newUser)
    this.authService.register(this.newUser).pipe(
      mergeMap(
        (response: any) => {
          if (response.success) {
            this.loginInfo = setLoginInfo(this.loginInfo, this.newUser);
            return this.authService.login(this.loginInfo);
          }
          return response;
        }
      )
    ).subscribe((response: any) => {
        this.router.navigateByUrl("/");
    })

  }
  cancel() {
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login.model';
import { LoginInfo } from 'src/app/shared/models/loginInfo.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { getCurrentNameFromLocalStorage as getCurrentNameFromLocalStorage, getLoginStateFromLocalStorage, getUserStateFromLocalStorage, setLoginStateToLocalStorage } from 'src/app/shared/services/helpers/local-storage-helper';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginInfo: Login;
  loggedIn: boolean;
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router) {
    this.loginInfo = new Login();
    this.setLoggedIn();
    this.loggedIn = this.getLoggedIn();
    this.getRoles();
  }

  ngOnInit(): void {
  }

  setLoggedIn() {
    this.authService.isLoggedIn().subscribe(response => {
      this.loggedIn = true;
      setLoginStateToLocalStorage(true);
    }, error => {
      this.loggedIn = false;
      setLoginStateToLocalStorage(false);
    });
  }
  getLoggedIn() {
    return getLoginStateFromLocalStorage();
  }
  login() {
    this.authService.login(this.loginInfo).subscribe((response: any) => {
      if (response.success) {
        this.loggedIn = true;
        this.router.navigateByUrl("/products")
      }
      else {
        this.router.navigateByUrl("/home")
      }

    });

  }
  logOut() {
    this.authService.logOut();
    this.setLoggedIn();
    this.router.navigateByUrl("/")
  }
  getCurrentUserInfo(): LoginInfo {
    return getUserStateFromLocalStorage();
  }

  
  getRoles() {
    return this.authService.getRoles().subscribe(response => {
      response.data.forEach((role: any) => {
        this.roles.push(role.value)
      });
    });
  }

}

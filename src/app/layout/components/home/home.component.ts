import { Component, OnInit } from '@angular/core';
import { getLoginStateFromLocalStorage } from 'src/app/shared/services/helpers/local-storage-helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // users : UserModel[] = [];
  constructor() { }

  ngOnInit(): void {

  }

  getLoginStateFromLocalStorage(){
    return !getLoginStateFromLocalStorage();
  }
 
}

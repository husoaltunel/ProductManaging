import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private path: string;

  constructor(private http: HttpService,httpClient : HttpClient) {

    this.path = "Products/";
    
  }

  insert(product : Product){
    return this.http.post(this.path,product);
  }

  getAll(){
    return this.http.get(this.path);
  }
  
  update(product : Product){
    return this.http.put(this.path,product);
  }

  delete(id : number){
    return this.http.delete(this.path,id);
  }


}

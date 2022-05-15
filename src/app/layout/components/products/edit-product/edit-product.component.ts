import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  form : FormGroup;
  product : Product;

  constructor(private route : ActivatedRoute,private productService : ProductService,private router : Router) { 
    this.setProduct();
    this.setForm();
  }

  ngOnInit(): void {
  }

  setForm(){
    this.form = new FormGroup({
      id : new FormControl(this.product.id),
      name : new FormControl(this.product.name),
      quantity : new FormControl(this.product.quantity),
      price : new FormControl(this.product.price)
    })
  }

  setProduct(){
    this.product = this.router?.getCurrentNavigation()?.extras.state as Product;
  }

  edit(){
    this.productService.update(this.form.value).subscribe(response  => response.success ? alert("Başarıyla düzenlendi") : alert("Hata"),error => alert("Hata") );
  }

}

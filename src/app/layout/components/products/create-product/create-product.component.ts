import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  form : FormGroup;

  constructor(private productService : ProductService) {
    this.setForm();
   }

  ngOnInit(): void {
  }

  setForm(){
    this.form = new FormGroup({
      name : new FormControl(''),
      quantity : new FormControl(''),
      price : new FormControl('')
    })
  }

  insert(){
    this.productService.insert(this.form.value).subscribe(response  => response.success ? alert("Başarıyla eklendi") : alert("Hata"),error => alert("Hata") )
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WORKER } from 'src/app/constants/roles';
import { Product } from 'src/app/shared/models/product.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  roles: string[] = [];
  constructor(private productService: ProductService, private authService: AuthService) {
    this.getProducts();
    this.getRoles();
  }

  ngOnInit(): void {
  }

  getProducts() {
    return this.productService.getAll().subscribe((response: any) => this.products = response.data)
  }

  getRoles() {
    return this.authService.getRoles().subscribe(response => {
      response.data.forEach((role: any) => {
        this.roles.push(role.value)
      });
    });
  }

  hasRoleNameAsWorker() {
    if (this.roles.includes(WORKER))
      return true;
    return false;
  }

  delete(id : number){
    this.productService.delete(id).subscribe(response => response.success? alert("Başarıyla silindi") : "Hata")
    this.getProducts();
  }

}

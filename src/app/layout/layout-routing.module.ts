import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';




import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: "", component: LayoutComponent, loadChildren: () => import("./components/home/home.module").then(m => m.HomeModule) },
  { path: "register", component: LayoutComponent, loadChildren: () => import("./components/register/register.module").then(m => m.RegisterModule) },
  { path: "products", component: LayoutComponent, loadChildren: () => import("./components/products/products.module").then(m => m.ProductsModule) ,canActivate : [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

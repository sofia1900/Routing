import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {ProductsComponent} from "./componentes/products/products.component";
import {ProductDetailComponent} from "./componentes/product-detail/product-detail.component";

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'products', component : ProductsComponent},
  {path: 'detail/:id', component : ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

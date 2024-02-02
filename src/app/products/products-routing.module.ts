import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductsListComponent} from "./products-list/products-list.component";

const routes: Routes = [
  {path : '', component : ProductsListComponent},
  {path : 'detail/:id', component : ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

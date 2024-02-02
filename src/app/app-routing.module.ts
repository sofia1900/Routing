import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {ProductsComponent} from "./componentes/products/products.component";

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'products', component : ProductsComponent,
    loadChildren : () => import('./products/products.module').then(m => m.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

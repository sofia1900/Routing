import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompraComponent} from "./componentes/compra/compra.component";
import {AddComponent} from "./componentes/add/add.component";

const routes: Routes = [
  {path : '', component: CompraComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

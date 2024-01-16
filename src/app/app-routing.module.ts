import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosComponent} from "./componentes/usuarios/usuarios.component";
import {PostComponent} from "./componentes/post/post.component";

const routes: Routes = [
  {path: '', component: UsuariosComponent},
  {path: 'posts', component : PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

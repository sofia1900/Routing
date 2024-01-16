import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MusicaService} from "./services/musica.service";
import {MusicaComponent} from "./componentes/musica/musica.component";
import {ImagenesComponent} from "./componentes/imagenes/imagenes.component";
import {VideosComponent} from "./componentes/videos/videos.component";
import {BodyComponent} from "./componentes/body/body.component";

const routes: Routes = [
  {path:'', component : BodyComponent},
  {path:'musica', component : MusicaComponent},
  {path:'imagenes', component : ImagenesComponent},
  {path:'videos', component : VideosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

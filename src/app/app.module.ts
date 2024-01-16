import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MusicaComponent } from './componentes/musica/musica.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { BodyComponent } from './componentes/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MusicaComponent,
    ImagenesComponent,
    VideosComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

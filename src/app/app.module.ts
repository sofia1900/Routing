import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductsComponent } from './componentes/products/products.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductsModule} from "./products/products.module";

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

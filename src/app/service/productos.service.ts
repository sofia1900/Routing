import { Injectable } from '@angular/core';
import {Producto} from "../modelos/producto";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos : Producto[] = []
  constructor() { }
  obtainProducts () : Observable<Producto[]>{
    return of(this.productos)
  }

  addProducto (producto : Producto) {
    producto.codigo = this.productos.length + 1;
    this.productos.push(producto)
  }
}

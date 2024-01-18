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
  modifyProducto (producto : Producto){
    for(let product of this.productos){
      if (product.codigo == producto.codigo){
        producto.articulo = product.articulo;
        producto.precio = product.precio;
        producto.cantidad = product.cantidad;
      }
    }
  }

  obtainById (code : number) : Producto{
    return this.productos[code+1]
  }
}

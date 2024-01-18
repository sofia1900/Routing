import { Component } from '@angular/core';
import {ProductosService} from "../../service/productos.service";
import {Producto} from "../../modelos/producto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  articulo = "";
  cantidad = 0;
  precio = 0;

  constructor(private service : ProductosService, private router : Router){}

  addProducto () {
    let producto : Producto = {codigo : 0, articulo: this.articulo, cantidad : this.cantidad, precio : this.precio}
    this.service.addProducto(producto)
    this.router.navigate(['']);
  }
}

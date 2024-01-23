import {Component, OnInit} from '@angular/core';
import {ProductosService} from "../../service/productos.service";
import {Producto} from "../../modelos/producto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {

  articulo = "";
  cantidad = 0;
  precio = 0;

  idSelect: number;
  productoSelect: Producto;

  accion: number;

  constructor(private service: ProductosService, private router: Router, private route: ActivatedRoute) {}

  addProducto() {
    let producto: Producto = {codigo: 0, articulo: this.articulo, cantidad: this.cantidad, precio: this.precio}
    this.service.addProducto(producto)
    this.router.navigate(['']);
  }

  ngOnInit() {

    this.accion = parseInt(this.route.snapshot.queryParams['action']);

    this.idSelect = this.route.snapshot.params['id'];
    if (this.idSelect != null) {
      this.productoSelect = this.service.obtainById(this.idSelect);
    }
  }

  action() {
    if (this.accion == 1) {
      this.service.modifyProducto(this.productoSelect);
      this.router.navigate([''])
    } else {
      this.service.delete(this.idSelect)
      this.router.navigate([''])
    }
  }
}

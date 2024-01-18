import {Component, OnInit} from '@angular/core';
import {ProductosService} from "../../service/productos.service";
import {Producto} from "../../modelos/producto";

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent implements OnInit {

  productos : Producto[] = [];
  constructor(private productoService : ProductosService) {}

  ngOnInit () {
    this.productoService.obtainProducts().subscribe( products =>
      this.productos = products
    )
  }

  protected readonly postMessage = postMessage;
}

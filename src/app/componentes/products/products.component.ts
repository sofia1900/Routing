import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../service/products.service";
import {Product} from "../../modelos/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  productos : Product[] = []
  constructor(private service : ProductsService) {
  }

  ngOnInit () {
    this.service.getList().subscribe( p =>
      this.productos = p
    )
  }

}

import {Component, OnInit} from '@angular/core';
import {Product} from "../../modelos/product";
import {ProductsService} from "../../service/products.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{

  productos : Product[] = []
  constructor(private service : ProductsService) {
  }

  ngOnInit () {
    this.service.getList().subscribe( p =>
      this.productos = p
    )
  }
}

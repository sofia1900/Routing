import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../service/products.service";
import {Product} from "../../modelos/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  id:number;
  product : Product
  constructor(private route : ActivatedRoute, private service : ProductsService) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    if (this.id != null){
      this.service.getProduct(this.id).subscribe( p =>
      this.product = p )
    }
  }
}

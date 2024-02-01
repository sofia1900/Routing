import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../modelos/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url_base = "https://fakestoreapi.com/products"
  constructor(private http : HttpClient) { }

  getList () : Observable<Product[]>  {
    return this.http.get<Product[]>(this.url_base)
  }

  getProduct (id :number): Observable<Product>{
    return this.http.get<Product>(this.url_base+"/"+id)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';


@Injectable({
  providedIn: 'root'
})
export class FormProductServiceService {

  constructor(private http:HttpClient) {}

  public createProduct(product:Product):void{
    this.http.post('http://localhost:8080/product', product).subscribe((result) => {
      console.log(result);
    });
  }


}

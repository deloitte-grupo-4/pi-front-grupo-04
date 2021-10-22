import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  public createProduct(product:Product):void{
    this.http.post('http://localhost:8080/product', product).subscribe((result) => {
      console.log(result);
    });
  }


  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/product');    
  }

}

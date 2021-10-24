import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  @Output() onEditClick:EventEmitter<Product> = new EventEmitter<Product>();
  
  constructor(private http:HttpClient) {}

  public createProduct(product:Product):void{
    this.http.post('http://localhost:8080/product', product).subscribe();
  }


  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/product');    
  }

  public putProducts(product:Product):void {
    this.http.put('http://localhost:8080/product', product).subscribe((result) => {
      console.log(result);
    });
  }

  public receiveProduct(product:Product):void{
    let obs = this.http.get<Product>(`http://localhost:8080/product/${product.id}`);
    obs.subscribe((result)=>{
      this.onEditClick.emit(result);
    });
  }


  public deleteProduct(productId:number | undefined):void {
    this.http.delete(`http://localhost:8080/product/${productId}`).subscribe();
    console.log(productId);
  }

}

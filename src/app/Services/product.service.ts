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

  public createProduct(product:Product){
    this.http.post('https://e-stampas.herokuapp.com/product', product).subscribe();
  }


  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('https://e-stampas.herokuapp.com/product');
  }

  public putProducts(product:Product){
    this.http.put('https://e-stampas.herokuapp.com/product', product).subscribe((result) => {
      console.log(result);
    });
  }

  public receiveProduct(product:Product){
    let obs = this.http.get<Product>(`https://e-stampas.herokuapp.com/product/${product.id}`);
    obs.subscribe((result)=>{
      this.onEditClick.emit(result);
    });
  }

  public getProductByID(productID:number):Observable<Product> {
    let obs = this.http.get<Product>(`https://e-stampas.herokuapp.com/product/${productID}`);
    return obs
  }

  public deleteProduct(productId:number | undefined):void {
    this.http.delete(`https://e-stampas.herokuapp.com/${productId}`).subscribe();
    console.log(productId);
  }
}

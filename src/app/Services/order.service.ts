import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  

  public submitOrder(order: Order){
    console.log(order)
    // console.log(usuario)
    return this.http.post('https://e-stampas.herokuapp.com/order', order);
  }
}

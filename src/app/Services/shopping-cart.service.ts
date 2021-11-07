import { Injectable } from '@angular/core';
import { CartProduct } from '../Models/cartProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCart: CartProduct[] = [];

  constructor() { }

  addToCart(p: CartProduct) {
    this.shoppingCart.push(p);
    localStorage.setItem("estampas_products", JSON.stringify(this.shoppingCart));
  }

  removeFromCart(p : CartProduct) {
    this.shoppingCart = this.shoppingCart.filter(item => {
      return item.listId != p.listId
    })
    localStorage.setItem("estampas_products", JSON.stringify(this.shoppingCart));
  }

  getCart() {
    let savedCart = localStorage.getItem("estampas_products")

    if(savedCart){
      this.shoppingCart = JSON.parse(savedCart);
    }
    return this.shoppingCart
  }

  setCart(products: CartProduct[]){
    this.shoppingCart = products
    localStorage.setItem("estampas_products", JSON.stringify(this.shoppingCart));
    
  }

}

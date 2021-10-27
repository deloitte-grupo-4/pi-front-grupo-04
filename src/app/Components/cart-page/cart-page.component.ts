import { Component, OnInit } from '@angular/core';
import { CartProduct } from './../../Models/cartProduct.model';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  products:CartProduct[] = [];
  validSizes:string[] = [];
  total:number = 0;

  constructor() { }

  ngOnInit(): void {
    let savedCart = localStorage.getItem("estampas_products");

    if(savedCart){
      this.products = JSON.parse(savedCart);
    }
    this.validSizes = ['P', 'M', 'G', 'GG']
    this.calculateTotal()
  }

  clickIncrease(product:CartProduct){
    if(!product.quantity){
      product.quantity = 1
    } else {
      product.quantity++;
    }
    this.calculateTotal()
  }

  clickDecrease(product:CartProduct){
    if(!product.quantity){
      product.quantity = 1
    } else {
      product.quantity <= 1 ? product.quantity = 1 : product.quantity--;
    }
    this.calculateTotal()
  }

  deleteProduct(product:CartProduct){
    this.products = this.products.filter(item => {
      item != product
    })
    localStorage.setItem("estampas_products", JSON.stringify(this.products));
    this.calculateTotal();

  }

  updateSize(){
    localStorage.setItem("estampas_products", JSON.stringify(this.products));
  }

  calculateTotal(){
    this.total = this.products.reduce((total, next) => {
      if(!next.quantity){
        next.quantity = 0
      }
      if(!next.price){
        next.price = 0
      }
      return total + (next.quantity * next.price)
    }, 0)
  }
}

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

  constructor() { }

  ngOnInit(): void {
    let savedCart = localStorage.getItem("estampas_products");

    if(savedCart){
      this.products = JSON.parse(savedCart);
    }

    this.validSizes = ['P', 'M', 'G', 'GG']
  }

  clickIncrease(product:CartProduct){
    if(!product.quantity){
      product.quantity = 1
    } else {
      product.quantity++;
    }
  }

  clickDecrease(product:CartProduct){
    if(!product.quantity){
      product.quantity = 1
    } else {
      product.quantity <= 0 ? product.quantity = 0 : product.quantity--;
    }
  }


}

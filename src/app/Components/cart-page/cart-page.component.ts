import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { UserService } from 'src/app/Services/user.service';
import { CartProduct } from './../../Models/cartProduct.model';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  validSizes:string[] = [];
  total:number = 0;
  products: CartProduct[] = [];
  user:string|null = '';

  constructor(private cart: ShoppingCartService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.validSizes = ['P', 'M', 'G', 'GG']
    this.products = this.cart.getCart()
    this.calculateTotal();

    this.user = this.userService.getUserID();
  }

  clickIncrease(product:CartProduct){
    if(!product.quantity){
      product.quantity = 1
    } else {
      product.quantity++;
    }
    this.cart.setCart(this.products);
    this.calculateTotal();
  }

  clickDecrease(product:CartProduct){
    if(!product.quantity){
      product.quantity = 1
    } else {
      product.quantity <= 1 ? product.quantity = 1 : product.quantity--;
    }
    this.cart.setCart(this.products);
    this.calculateTotal();
  }

  deleteProduct(product:CartProduct){
    this.cart.removeFromCart(product);
    this.products = this.cart.getCart();
    this.calculateTotal();
  }

  calculateTotal(){
    this.total = (this.products).reduce((total, next) => {
      if(!next.quantity){
        next.quantity = 0
      }
      if(!next.price){
        next.price = 0
      }
      return Math.round((total + (next.quantity * next.price))*100)/100
    }, 0)
  }

  syncCart(){
    this.cart.setCart(this.products);
  }

  showModal = false;

  showingModal(){
    this.showModal = true;
  }

  hidingModal(){
    this.showModal = false;
  }

  loggedIn(){
    if(this.user){
      this.router.navigate(['/payment'])
    } else {
      this.showingModal()
    }

  }
}

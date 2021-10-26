import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  price = 19.99;
  quantity = 2;
  clickIncrease(){
    this.quantity++;
  }

  clickDecrease(){
    this.quantity <= 0 ? this.quantity = 0 : this.quantity--;
  }


}

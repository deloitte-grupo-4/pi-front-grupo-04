import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.removeAll();
  }

}

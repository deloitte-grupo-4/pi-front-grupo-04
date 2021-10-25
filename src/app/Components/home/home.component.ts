import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  sendProduct(product: Product){
    this.productService.receiveProduct(product);
  }

}

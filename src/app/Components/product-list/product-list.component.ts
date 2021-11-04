import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();    
  }

  public getProducts():void{
    this.productService.getProducts().subscribe(resp => {
      this.products = resp;
    });
  }

  public sendProduct(product:Product):void{
    this.productService.receiveProduct(product);
  }

  public deleteProduct(productId:number | undefined):void {
    this.productService.deleteProduct(productId);
    for (let product of this.products) {
      if(product.id == productId){
        let pos = this.products.indexOf(product);
        this.products.splice(pos, 1);
      }
    }
    }

  }


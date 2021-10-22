import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from './../../Models/product.model';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  product?:Product;

  name?:string;
  category?:string;
  price?:number;
  description?:string;
  quantity?:number;
  type?:string;
  size?:string;

  public sendForm(){
    this.product = new Product();
    this.product.name = this.name;
    this.product.category = this.category;
    this.product.price = this.price;
    this.product.description = this.description;
    this.product.quantity = this.quantity;
    this.product.type = this.type;
    this.product.size = this.size;

    this.productService.createProduct(this.product);
    
    this.router.navigate(['/']).then(() => {
      window.location.reload();
   });
;

  }

}

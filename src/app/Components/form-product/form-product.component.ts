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

  productUpdate:Product = new Product();
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.onEditClick.subscribe(resp => {

      this.productUpdate = resp;

        this.name = resp.name;
        this.category = resp.category;
        this.price = resp.price;
        this.description = resp.description;
        this.url = resp.url;
    })
  }

  product?:Product;

  name?:string;
  category?:string;
  price?:number;
  description?:string;
  url?:string

  public sendForm(){
    this.product = new Product();
    this.product.name = this.name;
    this.product.category = this.category;
    this.product.price = this.price;
    this.product.description = this.description;
    this.product.url = this.url;

    this.productService.createProduct(this.product);

    this.router.navigate(['/product-list']);
  }

  public sendFormUpdate(){
    this.productUpdate.name = this.name;
    this.productUpdate.category = this.category;
    this.productUpdate.price = this.price;
    this.productUpdate.description = this.description;
    this.productUpdate.url = this.url;

    this.productService.putProducts(this.productUpdate);

    this.router.navigate(['/product-list']);
  }

}

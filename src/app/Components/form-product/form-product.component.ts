import { Product } from './../../Models/product.model';
import { Component, OnInit } from '@angular/core';
import { FormProductServiceService } from 'src/app/Services/form-product-service.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  constructor(private formProductServiceService:FormProductServiceService) { }

  ngOnInit(): void {
  }

  product?:Product;

  name?:string;
  category?:string;
  price?:number;
  description?:string;
  qtd?:number;
  type?:string;
  size?:string;

  public sendForm(){
    this.product = new Product();
    this.product.name = this.name;
    this.product.category = this.category;
    this.product.price = this.price;
    this.product.description = this.description;
    this.product.qtd = this.qtd;
    this.product.type = this.type;
    this.product.size = this.size;

    this.formProductServiceService.createProduct(this.product);
    console.log("funcionou")
  }

}

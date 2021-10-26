import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.onEditClick.subscribe((product: Product) => {
      this.product = product;
    })
  }

  sizes = [
    {name:'P', active:false},
    {name:'M', active:false},
    {name:'G', active:false},
    {name:'GG', active:true},
  ];

  toggleClass(selectedSize:any){
    for(let size of this.sizes){
      size == selectedSize ? size.active = true : size.active = false;
    }
  }

  quantity = 2;

  clickIncrease(){
    this.quantity++;
  }

  clickDecrease(){
    this.quantity <= 0 ? this.quantity = 0 : this.quantity--;
  }
}

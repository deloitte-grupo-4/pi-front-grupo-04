import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';
import {Router} from "@angular/router"
import { Observable, observable } from 'rxjs';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get('id')
    if(id) {
      id = parseInt(id);
      this.productService.getProductByID(id).subscribe(product => {this.product = product}, error => this.router.navigate(['/']))
    } else {
      this.router.navigate(['/'])
    }
  }

  sizes = [
    {name:'P', active:false},
    {name:'M', active:false},
    {name:'G', active:false},
    {name:'GG', active:true},
  ];

  selectedSize = 'GG';

  toggleClass(selectedSize:any){
    for(let size of this.sizes){
      size == selectedSize ? size.active = true : size.active = false;
    }
    this.selectedSize = selectedSize.name;
  }

  quantity = 2;

  clickIncrease(){
    this.quantity++;
  }

  clickDecrease(){
    this.quantity <= 0 ? this.quantity = 0 : this.quantity--;
  }

  addToCart(){
    let shoppingCart = [];
    let savedCart = localStorage.getItem("estampas_products")

    if(savedCart){
      shoppingCart = JSON.parse(savedCart);
    }

    console.log(this.product);
    let productToAdd = {
      name: this.product.name,
      price: this.product.price,
      quantity: this.quantity,
      size: this.selectedSize
    }

    shoppingCart.push(productToAdd);

    localStorage.setItem("estampas_products", JSON.stringify(shoppingCart))
  }
}

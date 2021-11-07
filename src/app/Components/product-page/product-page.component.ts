import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from "@angular/router"
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product: Product = new Product();
  products: Product[] = [];

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
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

  quantity = 1;

  clickIncrease(){
    this.quantity++;
  }

  clickDecrease(){
    this.quantity <= 0 ? this.quantity = 0 : this.quantity--;
  }

  createUUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

  addToCart(){
    let productToAdd = {
      productId: this.product.id,
      listId: this.createUUID(),
      name: this.product.name,
      price: this.product.price,
      quantity: this.quantity,
      size: this.selectedSize,
      url: this.product.url
    }
    this.cart.addToCart(productToAdd);
  }
}

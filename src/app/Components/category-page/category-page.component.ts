import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string = 'series'; // default category is series

  constructor(private route: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      let category = params.category;
      if(category){
        this.category = category
      }
      this.filteredProducts = this.products.filter((product) => product.category == this.category);
    })
    this.productService.getProducts().subscribe(products => {
      this.products = products
      this.filteredProducts = this.products.filter((product) => product.category == this.category);
    });
  }

}

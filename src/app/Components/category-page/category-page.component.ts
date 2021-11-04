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
  category: string = 'series'; // default category is series

  constructor(private route: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    let category = this.route.snapshot.paramMap.get("cat")
    console.log(category)
    if(category){
      this.category = category
    }
    this.productService.getProducts().subscribe(products => {
      console.log(products)
      this.products = products.filter((product) => product.category == this.category);
      console.log(this.products)
    });  }

}

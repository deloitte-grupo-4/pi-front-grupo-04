import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { FormProductComponent } from './Components/form-product/form-product.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';

const routes: Routes = [

    {
      path: 'product-list', component: ProductListComponent
    },
    {
      path: 'product-form', component: FormProductComponent
    },
    {
      path: '', component: HomeComponent
    },
    {
      path: 'product', component: ProductPageComponent
    },
    {
      path: 'shopping-cart', component: CartPageComponent
    }

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

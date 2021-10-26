import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './auth/authentication.guard';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { FormProductComponent } from './Components/form-product/form-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { SigninComponent } from './Components/signin/signin.component';

const routes: Routes = [

    {

      
      path: '', component: MainComponent,
      children: [
        {
          path: '', component: HomeComponent
        },
        {
          path: 'product-list', component: ProductListComponent
        },
        {
          path: 'product-form', component: FormProductComponent
        },
        {
          path: 'product', component: ProductPageComponent
        },
        {
          path: 'shopping-cart', component: CartPageComponent
        }
        
      ],
      canActivate: [AuthenticationGuard]
    },
    {
      path: '', component: AuthenticationComponent,
      children: [
        { path: '', redirectTo: 'login', pathMatch: 'full'},
        { path: 'login', component: SigninComponent}
      ]
    }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

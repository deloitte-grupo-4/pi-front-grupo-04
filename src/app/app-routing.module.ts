import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './auth/authentication.guard';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { BandsPageComponent } from './Components/bands-page/bands-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { ConfirmationPageComponent } from './Components/confirmation-page/confirmation-page.component';
import { FilmsPageComponent } from './Components/films-page/films-page.component';
import { FormProductComponent } from './Components/form-product/form-product.component';
import { GamesPageComponent } from './Components/games-page/games-page.component';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { PaymentPageComponent } from './Components/payment-page/payment-page.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { SeriesPageComponent } from './Components/series-page/series-page.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { UserPageComponent } from './Components/user-page/user-page.component';


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
        },
        {
          path: 'register', component: SignupComponent
        },
        {
          path: 'payment', component: PaymentPageComponent
        },
        {
          path: 'confirmation', component: ConfirmationPageComponent
        },
        {
          path: 'profile', component: UserPageComponent
        },
        {
          path: 'series', component: SeriesPageComponent
        },
        {
          path: 'bandas', component: BandsPageComponent
        },
        {
          path: 'filmes', component: FilmsPageComponent
        },
        {
          path: 'games', component: GamesPageComponent
        }


      ],
     // canActivate: [AuthenticationGuard]
    },
    {
      path: '', component: AuthenticationComponent,
      children: [
        {
          path: '', redirectTo: 'login', pathMatch: 'full'
        },
        {
          path: 'login', component: SigninComponent
        }
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

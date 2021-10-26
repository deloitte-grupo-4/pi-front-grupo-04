import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormProductComponent } from './Components/form-product/form-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { SigninComponent } from './Components/signin/signin.component';




@NgModule({
  declarations: [
    AppComponent,
    FormProductComponent,
    ProductListComponent,
    HeaderComponent,
    HomeComponent,
    ProductPageComponent,
    CartPageComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

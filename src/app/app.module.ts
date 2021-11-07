import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { ConfirmationPageComponent } from './Components/confirmation-page/confirmation-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormProductComponent } from './Components/form-product/form-product.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { PaymentPageComponent } from './Components/payment-page/payment-page.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { ProgressBarComponent } from './Components/progress-bar/progress-bar.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { UserPageComponent } from './Components/user-page/user-page.component';
import { CepService } from './Services/cep.service';
import { CategoryPageComponent } from './Components/category-page/category-page.component';





@NgModule({
  declarations: [
    AppComponent,
    FormProductComponent,
    ProductListComponent,
    HeaderComponent,
    HomeComponent,
    ProductPageComponent,
    CartPageComponent,
    SigninComponent,
    AuthenticationComponent,
    MainComponent,
    SignupComponent,
    PaymentPageComponent,
    ConfirmationPageComponent,
    ProgressBarComponent,
    UserPageComponent,
    FooterComponent,
    CategoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule  
  ],
  providers: [
    AuthenticationGuard,
    CepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

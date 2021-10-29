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
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { MainComponent } from './Components/main/main.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { SignupComponent } from './Components/signup/signup.component';




import { PaymentPageComponent } from './Components/payment-page/payment-page.component';
import { ConfirmationPageComponent } from './Components/confirmation-page/confirmation-page.component';
import { ProgressBarComponent } from './Components/progress-bar/progress-bar.component';
import { CepService } from './Services/cep.service';
import { SigninModalComponent } from './Components/signin-modal/signin-modal.component';


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
    SigninModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationGuard,
    CepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

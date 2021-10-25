import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './Components/form-product/form-product.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [

    {
      path: 'product-list', component: ProductListComponent
    },
    {
      path: 'product-form', component: FormProductComponent
    },
    {path: '', component: HomeComponent,}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

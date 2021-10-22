import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './Components/form-product/form-product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  
    {
      path: '', component: ProductListComponent
    },
    {
      path: 'product-form', component: FormProductComponent
    }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

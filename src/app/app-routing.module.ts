import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
{path:"",pathMatch:"full",component:ProductComponent},
{path:'products',component:ProductComponent},
{path:'products/:categoryId',component:ProductComponent},
{path:'my-cart',component:CartComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

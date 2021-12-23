import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component'
import { CartService } from './services/cart.service';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { KdvPipe } from './pipes/kdv.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavigationComponent,
    CartSummaryComponent,
    KdvPipe,
    FilterPipe,
    CategoryComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [CartService]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }

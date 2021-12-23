import { Component, DoCheck, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit ,DoCheck{
  title="Vbt Software Angular Training"
  totalCartItem=0;
  totalCartItemPrice=0;
  cartItems:Array<Cart>=new Array<Cart>();

  constructor(private cartService:CartService) { }
  ngDoCheck(): void {
   this.totalCartItem=this.cartService.ilst().reduce((a,b)=>a+b.Quentity,0);
   this.totalCartItemPrice=this.cartService.ilst().reduce((a,b)=>a+b.Quentity*b.Product.unitPrice
   ,0)
  }

  ngOnInit(): void {
    this.cartItems=this.cartService.ilst();
  }

}

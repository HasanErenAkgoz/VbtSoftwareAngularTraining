import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:Cart[]=[];
  isProductRemoved:boolean=false;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItems=this.cartService.ilst();
  }
  removeFromCart(product:Product){
    if (confirm("Silmek istediğinizden emin misiniz?")) {
      this.cartService.removeFromCart(product);
      this.isProductRemoved=true;
    }

  }

}

import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { CartItemList } from '../models/cartItemList';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){

    var addedItem=CartItemList.find(x=>x.Product.productId==product.productId);
    if (addedItem) {
      addedItem.Quentity+=1;
    }
    else
    {
    let cartItem=new Cart();
    cartItem.Product=product
    cartItem.Quentity=1;
    CartItemList.push(cartItem);
    }

  }
  ilst():Cart[]{
    return CartItemList
  }
  removeFromCart(product:Product):void{
    var addedItem=CartItemList.find(x=>x.Product.productId==product.productId);
    if (addedItem) {
      var ındexNo=CartItemList.indexOf(addedItem)
      if (ındexNo!=-1) {
        CartItemList.splice(ındexNo,1);
      }
    }
  }
}

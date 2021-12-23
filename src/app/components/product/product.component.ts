import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  productData:Product[]=[];
  addedProduct:string="";
  filterText:string="";
  constructor(private productService:ProductService
    ,private cartService:CartService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      if (params["categoryId"]) {
        this.getProductByCategoryId(params["categoryId"])
      }
      else
      {
        this.getProduct()
      }

    })
  }

  getProduct(){
    return this.productService.getProduct().subscribe(response=>{
      this.productData=response;
    });
  }
  getProductByCategoryId(categoryId:number){
    return this.productService.getProductByCategoryId(categoryId).subscribe(response=>{
      this.productData=response;
    });
  }
  addToCart(product:Product){
    this.addedProduct=product.productName
    this.cartService.addToCart(product)
  }
}

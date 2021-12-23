import { Product } from "./product";

export class Cart{
  Quentity:number
  Product:Product;
  /**
   *
   */
  constructor() {
    this.Quentity=0;
    this.Product=new Product()

  }
}


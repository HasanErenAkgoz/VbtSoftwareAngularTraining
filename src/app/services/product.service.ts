import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }


  getProduct():Observable<Product[]>{
    let apiUrl="https://demodata.grapecity.com/northwind/api/v1/Products"
    return this.httpClient.get<Product[]>(apiUrl).pipe(map(response=>response))
  }
  getProductByCategoryId(categoryId:number):Observable<Product[]>{
    let apiUrl="https://demodata.grapecity.com/northwind/api/v1/Categories/"+categoryId+"/Products"
    return this.httpClient.get<Product[]>(apiUrl).pipe(map(response=>response))
  }
}

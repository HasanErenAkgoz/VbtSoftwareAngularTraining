import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient){
  }
  getCategories():Observable<Category[]>{
    let apiUrl="https://demodata.grapecity.com/northwind/api/v1/Categories"
    return this.httpClient.get<Category[]>(apiUrl).pipe(map(response=>response))

  }
}

import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Array<Category>=new Array<Category>();
  selectedCategory:Category=new Category();
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
        this.categories=response;
    });
  }
  onSelect(category:Category){
    if (category) {
      this.selectedCategory=category;
    }
    else{
      this.selectedCategory=new Category();
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
   if (!filterText) {
      return value;
   }
   const text=filterText;
   filterText=(filterText?filterText.toLocaleLowerCase():"");
   return filterText? value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(text)!=-1):value
  }

}

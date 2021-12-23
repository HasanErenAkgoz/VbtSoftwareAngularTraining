import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv'
})
export class KdvPipe implements PipeTransform {

  transform(value: any, args?: number):number {
    var vatPercentage:number=10;
    if (args) {
      vatPercentage=args;
    }
    return value+(value/100*vatPercentage)
  }

}

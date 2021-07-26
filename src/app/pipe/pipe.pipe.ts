import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value:any): any {
    return value.slice(0,10) + " at " +value.slice(11,-1);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim2length'
})
export class Trim2lengthPipe implements PipeTransform {

  transform(value: any, len:number): string {
    return value.substr(0, len);
  }

}

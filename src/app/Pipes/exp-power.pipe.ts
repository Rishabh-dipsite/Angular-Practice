import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expPower'
})
export class ExpPowerPipe implements PipeTransform {

  transform(value: number, args: number): number {
    return Math.pow(value, args);
  }

}

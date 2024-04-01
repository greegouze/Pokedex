import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
})
export class TypePipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'Feu':
        color = 'red';
        break;
      case 'Eau':
        color = 'blue';
        break;
      case 'Electricity':
        color = '#FAD616';
        break;
      case 'Plante':
        color = 'green';
        break;
      default:
        color = 'grey';
        break;
    }

    return color;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awards'
})
export class AwardsPipe implements PipeTransform {
  /**
   * transform - принимает колличество неаград и и перед выводом в разметку форматирует их
   */
  transform(countAwards: number): string {
    if ( countAwards > 1000 ) {
      return '$' + (countAwards / 1000).toFixed(1) + 'k';
    } else {
      return '$' + countAwards;
    }
  }
}

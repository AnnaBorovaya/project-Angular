import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countVotes'
})
export class CountVotesPipe implements PipeTransform {
  /**
   * transform - принимает колличество голосов и перед выводом в размсетку форматирует их
   */
  transform(countVotes: number): string {
    if ( countVotes > 1000 ) {
      return (countVotes / 1000).toFixed(1) + 'k';
    } else {
      return String(countVotes);
    }
  }
}

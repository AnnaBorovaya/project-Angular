import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengesItemComponent } from './components/challenges-item/challenges-item.component';
import { ChallengesPageComponent } from './components/challenges-page/challenges-page.component';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { AwardsPipe } from '../../pipes/awards.pipe';
import { CountVotesPipe } from '../../pipes/count-votes.pipe';
import { CountdownDirective } from './directives/countdown.directive';


@NgModule({
  declarations: [ChallengesPageComponent, ChallengesItemComponent, CountdownDirective, AwardsPipe, CountVotesPipe],
  imports: [
    CommonModule,
    ChallengesRoutingModule
  ]
})
export class ChallengesModule { }

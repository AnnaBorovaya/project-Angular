import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChallengesService } from '../../services/challenges.service';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';

@Component({
  selector: 'app-challenges-item',
  templateUrl: './challenges-item.component.html',
  styleUrls: ['./challenges-item.component.css']
})

export class ChallengesItemComponent implements OnInit {
  /**
   * @Input() challengeItemSingle - принимает один элемент картинки-challenges
   */
  @Input() challengeItemSingle: any;
  @Input() visibleUpcomingOverlay: boolean;
  @Input() visibleOpenOverlay: boolean;
  @Input() visibleClosedOverlay: boolean;
  public endDate;
  private countAwards;
  private countVotes;
  constructor(
    public challengesService: ChallengesService
  ) {}
  /**
   * ngOnInit - инициализируются переменные необходимые для вывода в разметку
   */
  ngOnInit() {
    this.countVotes = Number(this.challengeItemSingle.votes);
    this.countAwards = Number(this.challengeItemSingle.awards);
    this.endDate = new Date(this.challengeItemSingle.end_date);
  }
}

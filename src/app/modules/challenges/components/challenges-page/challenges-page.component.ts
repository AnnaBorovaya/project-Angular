import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChallengesService } from '../../services/challenges.service';
import { ImagesChallenges } from '../../interfaces/images-challenges';

@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.css']
})
export class ChallengesPageComponent implements OnInit {
  public challengeItems: ImagesChallenges[];
  public messageChallenge = true;
  public visibleUpcomingOverlay = false;
  public visibleOpenOverlay = true;
  public visibleClosedOverlay = false;
  constructor(
    public challengesService: ChallengesService
  ) { }
  /**
   * ngOnInit() - происходит начальная инициализация данных на странице по умолчанию ChallengeOpen
   */
  ngOnInit() {
    this.challengesService.getChallengeOpen().subscribe((data: ImagesChallenges[]) => {
      if (!data.length) {
        this.challengeItems = data;
        return;
      }
      this.challengeItems = data;
      this.messageChallenge = false;
    });
  }
  /**
   * getOpenChallenge() - метод-хендлер для получения массива данных от сервера на ChallengeOpen
   */
  getOpenChallenge() {
    this.challengesService.getChallengeOpen().subscribe((data: ImagesChallenges[]) => {
      if (!data.length) {
        this.challengeItems = data;
        this.messageChallenge = true;
        return;
      }
      this.challengeItems = data;
      this.messageChallenge = false;
      this.visibleUpcomingOverlay = false;
      this.visibleOpenOverlay = true;
      this.visibleClosedOverlay = false;
    });
  }
  /**
   * getChallengeClosed() - метод-хендлер для получения массива данных от сервера на ChallengeClosed
   */
  getClosedChallenge() {
    this.challengesService.getChallengeClosed().subscribe((data: ImagesChallenges[]) => {
      if (!data.length) {
        this.challengeItems = data;
        this.messageChallenge = true;
        return;
      }
      this.challengeItems = data;
      this.messageChallenge = false;
      this.visibleUpcomingOverlay = false;
      this.visibleOpenOverlay = false;
      this.visibleClosedOverlay = true;
    });
  }
  /**
   * getChallengeClosed() - метод-хендлер для получения массива данных от сервера на ChallengeUpcoming
   */
  getUmcomingChallenge() {
    this.challengesService.getChallengeUpcoming().subscribe((data: ImagesChallenges[]) => {
      if (!data.length) {
        this.challengeItems = data;
        this.messageChallenge = true;
        return;
      }
      this.challengeItems = data;
      this.messageChallenge = false;
      this.visibleUpcomingOverlay = true;
      this.visibleOpenOverlay = false;
      this.visibleClosedOverlay = false;
    });
  }
}

import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ImagesChallenges } from '../interfaces/images-challenges';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChallengesService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }
  /**
   * getChallengeOpen() - получения данных ChallengeOpen от API
   */
  public getChallengeOpen(): Observable<ImagesChallenges[]> {
    let params = new HttpParams();
    params = params.append('isActive', '1');
    params = params.append('isClosed', '0');
    return this.http.get<ImagesChallenges[]>(`${this.apiUrl}/public/challenges/list`, {params}).pipe(
      map((data: any) => {
        return data.challenges;
      })
    );
  }
  /**
   * getChallengeClosed() - получения данных ChallengeClosed от API
   */
  public getChallengeClosed(): Observable<ImagesChallenges[]> {
    let params = new HttpParams();
    params = params.append('isActive', '0');
    params = params.append('isClosed', '1');
    return this.http.get<ImagesChallenges[]>(`${this.apiUrl}/public/challenges/list`, {params}).pipe(
      map((data: any) => {
        return data.challenges;
      })
    );
  }
  /**
   * getChallengeUpcoming() - получения данных ChallengeUpcoming от API
   */
  public getChallengeUpcoming(): Observable<ImagesChallenges[]> {
    let params = new HttpParams();
    params = params.append('isActive', '0');
    params = params.append('isClosed', '0');
    return this.http.get<ImagesChallenges[]>(`${this.apiUrl}/public/challenges/list`, {params}).pipe(
      map((data: any) => {
        return data.challenges;
      })
    );
  }
}

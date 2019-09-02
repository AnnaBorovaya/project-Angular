import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiseService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }
  getSearchUser(userName): Observable<any> {
    let params = new HttpParams();
    params = params.append('search_text',  userName);
    return this.http.post<any>(`${this.apiUrl}/public/users/search-users/`, params);
  }
}

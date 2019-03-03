import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Images } from '../../user/interfaces/images';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewPhotoModalService {

  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }
  /**
   * getSingleImgInfo - получение объекта одной картинки
   * @param id string
   */
  public getSingleImgInfo(id: string): Observable<Images> {
    return this.http.get<Images>(`${this.apiUrl}/public/users/image-info/${id}`);
  }
}

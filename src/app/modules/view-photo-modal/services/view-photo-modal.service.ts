import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Images } from '../../user/interfaces/images';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { pipe } from 'rxjs';

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

  public changeDescription(idImg, title, description): any {
    return this.http.put<any>(`${this.apiUrl}/public/users/image-info/${idImg}`, {
      description: description,
      title: title
    });
  }

  public addComment(comment, imgId): any {
    return this.http.post<any>(`${this.apiUrl}/public/users/comment/${imgId}`, {comment_text: comment});
  }

  public deleteComment(comment_id: string, imgId: string): any {
    const options = {
      body: {
        image_id: imgId
        }
      };
    return this.http.request('delete', `${this.apiUrl}/public/users/comment/${comment_id}`, options);
  }
}

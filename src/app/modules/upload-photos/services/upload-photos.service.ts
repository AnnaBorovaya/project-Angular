import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthGlobalService } from 'src/app/services/auth-global.service';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotosService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    public http: HttpClient,
    public authService: AuthGlobalService
  ) { }
/**
 * uploadPhotos() - отправление данных на сервер в формате FormData
 * @param files - массив картинок
 */
  public uploadPhotos(files) {
    const formData = new FormData;
    files.forEach((photo) => formData.append('userPhotos', photo));
    return this.http.post(`${this.apiUrl}/public/users/upload-photos/${this.authService.getUserId}`, formData);
  }
}
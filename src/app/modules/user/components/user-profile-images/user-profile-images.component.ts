import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Images } from '../../interfaces/images';

@Component({
  selector: 'app-user-profile-images',
  templateUrl: './user-profile-images.component.html',
  styleUrls: ['./user-profile-images.component.css']
})
export class UserProfileImagesComponent implements OnInit {
  @Input() idProfile: string;
  @Input() idActive: string;
  public idImages: string;
  public uploadPhotosModalOpened = false;
  public viewPhotosModalOpened = false;
  public images: Images;
  constructor(
    private userService: UserService
  ) { }
  /**
   * ngOnInit - вызов метода на получение от сервера данных об изображениях
   */
  ngOnInit() {
    this.getImages();
  }
  /**
   * getImages() - вызов метода на получение от сервера данных об изображениях
   * запись в переменную images полученных данных
   */
  getImages() {
      this.userService.getUserImg(this.idProfile).subscribe((images: Images) => {
      this.images = images;
    });
  }

  /**
   * onClickPhotos(data) - при клике на картинку открываем модальное окно и получаем её id
   * который потом опрокидываем в дочерний элемент модального окна
   * @param data string
   */
  onClickPhotos(data) {
    this.viewPhotosModalOpened = true;
    this.idImages = data;
  }
}

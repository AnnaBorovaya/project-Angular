import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadPhotosService } from '../../services/upload-photos.service';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.css']
})
export class UploadPhotosComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onUploadEnd: EventEmitter<any> = new EventEmitter();
  public  photosArray = [];
  constructor(
    public uploadPhotosService: UploadPhotosService
  ) { }

  ngOnInit() {
  }
  /**
   * closeModal() - на событик кликпо кнопке имитим событие и сообщаем о нем родителю
   * где из разметки закрываем модальное окно
   */
  closeModal() {
    this.onClose.emit();
  }
  /**
   * addPhotos() срабатывает при нажатии кнопки Add (добавить файлы)
   * перезаписываем наш пустой массив новым массивом картинок
   * @param input - объект input 
   */
  addPhotos(input) {
    this.photosArray = this.photosArray.concat(...input.files);
  }
  /**
   * deletePhotos - срабатываеи при нажатии нат кнопку delete
   * фильтрует весь массив наших добавленных фотографий исключая те которые мы хотим удалить
   * @param name string
   */
  deletePhotos(name) {
    this.photosArray = this.photosArray.filter((photo) => photo.name != name);
  }
  /**
   * uploadPhotos() - вызываем метод загрузки фотографий на сервисе uploadPhotosService
   * и имитим данное событие передавая его в родительский элемент на котрое из разметки закрываем модальное окно
   * и вызываем метод getImg
   */
  uploadPhotos() {
    this.uploadPhotosService.uploadPhotos(this.photosArray).subscribe((data) => {
      this.onUploadEnd.emit();
    });
  }
}

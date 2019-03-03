import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewPhotoModalService } from '../../services/view-photo-modal.service';
import { Images } from '../../../user/interfaces/images';

@Component({
  selector: 'app-view-photo-modal',
  templateUrl: './view-photo-modal.component.html',
  styleUrls: ['./view-photo-modal.component.css']
})
export class ViewPhotoModalComponent implements OnInit {
  @Input() idImageSingle: string;
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  public imageSingle: Images;

  constructor(
    public photoModalService: ViewPhotoModalService
  ) { }
  /**
   * получаем объект одной картинки
   */
  ngOnInit() {
    this.photoModalService.getSingleImgInfo(this.idImageSingle).subscribe((data: Images) => {
      this.imageSingle = data;
    });
  }
  /**
   * hanlerClouseModal() - имитим событие закрытия окна и сообщаем об этом в родителя
   * где из разметки закрываем его
   */
  hanlerClouseModal() {
    this.onClose.emit();
  }
}

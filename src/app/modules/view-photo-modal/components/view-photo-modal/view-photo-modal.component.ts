import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewPhotoModalService } from '../../services/view-photo-modal.service';
import { Images } from '../../../user/interfaces/images';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-photo-modal',
  templateUrl: './view-photo-modal.component.html',
  styleUrls: ['./view-photo-modal.component.css']
})
export class ViewPhotoModalComponent implements OnInit {
  @Input() idImageSingle: string;
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  public imageSingle: Images;
  public inputActive = true;
  public info = {
    title: '',
    description: ''
  };
  public comment = '';
  public comments = [];

  constructor(
    public photoModalService: ViewPhotoModalService
  ) { }
  /**
   * получаем объект одной картинки
   */
  ngOnInit() {
    this.sendRequestSingleImgInfo();
  }

  sendRequestSingleImgInfo() {
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

  onSubmitHandler(imageSingle){
    this.inputActive = false;
    this.photoModalService.changeDescription(imageSingle._id, this.info.title, this.info.description).subscribe((data) => {
      this.sendRequestSingleImgInfo();
    });
  }
  onChangeHandler(imageSingle) {
    this.inputActive = !this.inputActive;
    this.photoModalService.changeDescription(imageSingle._id, this.info.title, this.info.description).subscribe((data) => {
      this.sendRequestSingleImgInfo();
    });
  }
  addCommentHandler(statusForm, imgId) {
    this.photoModalService.addComment(this.comment, imgId).subscribe((data) => {
      this.sendRequestSingleImgInfo();
      statusForm.resetForm();
    });
  }
  handlerDeleteComment(idComment, imgId) {
    this.photoModalService.deleteComment(idComment, imgId).subscribe((data) => {
      this.sendRequestSingleImgInfo();
    });
  }
}

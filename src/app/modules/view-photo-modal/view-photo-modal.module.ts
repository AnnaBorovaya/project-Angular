import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPhotoModalComponent } from './components/view-photo-modal/view-photo-modal.component';

@NgModule({
  declarations: [ViewPhotoModalComponent],
  imports: [
    CommonModule
  ],
  exports: [ ViewPhotoModalComponent ]
})
export class ViewPhotoModalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPhotoModalComponent } from './components/view-photo-modal/view-photo-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewPhotoModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ ViewPhotoModalComponent ]
})
export class ViewPhotoModalModule { }

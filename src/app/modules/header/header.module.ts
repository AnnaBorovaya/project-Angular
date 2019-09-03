import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    
  ]
})
export class HeaderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditEventComponent } from './editEvent.component';
import { SharedModule } from '../../container/shared.module';

@NgModule({
  declarations: [EditEventComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EditEventModule { }

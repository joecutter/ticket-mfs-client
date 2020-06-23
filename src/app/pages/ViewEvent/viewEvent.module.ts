import { NgModule } from '@angular/core';
import { ViewEventComponent } from './viewEvent.component';
import { ViewEventRoutingModule } from './viewEvent-route.module';
import { SharedModule } from '../../container/shared.module';

@NgModule({
  declarations: [ViewEventComponent],
  imports: [
    SharedModule,
    ViewEventRoutingModule
  ]
})
export class ViewEventModule { }

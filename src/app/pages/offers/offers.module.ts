import { NgModule } from '@angular/core';
import { SharedModule } from '../../container/shared.module';
import { OffersComponent } from './offers.component';
import { OffersRoutingModule } from './offers-route.module';
// import { EditEventComponent } from '../../components/EditEventComponent/editEvent.component';

@NgModule({
  declarations: [OffersComponent],
  imports: [
    SharedModule, OffersRoutingModule
  ]
})
export class OffersModule { }

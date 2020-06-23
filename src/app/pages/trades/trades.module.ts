import { NgModule } from '@angular/core';
import { SharedModule } from '../../container/shared.module';
import { TradesComponent } from './trades.component';
import { TradesRoutingModule } from './trades-route.module';

@NgModule({
  declarations: [TradesComponent],
  imports: [
    SharedModule,
    TradesRoutingModule
  ]
})
export class TradesModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '../../container/shared.module';
import { PostTradeRoutingModule } from './post-trade-route.module';
import { PostTradeComponent } from './post-trade.component';

@NgModule({
  declarations: [PostTradeComponent],
  imports: [SharedModule, PostTradeRoutingModule],
})
export class PostTradeModule {}

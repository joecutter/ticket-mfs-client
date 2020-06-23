import { NgModule } from '@angular/core';
import { SharedModule } from '../../container/shared.module';
import { WalletComponent } from './wallet.component';
import { WalletRoutingModule } from './wallet-route.module';

@NgModule({
  declarations: [WalletComponent],
  imports: [
    SharedModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }

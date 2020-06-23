import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletComponent } from './wallet.component';

const WalletRoutes: Routes = [
  {
    path: '',
    component: WalletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(WalletRoutes)],
  exports: [RouterModule]
})
export class WalletRoutingModule {}

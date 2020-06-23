import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradesComponent } from './trades.component';

const TradesRoutes: Routes = [
  {
    path: '',
    component: TradesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(TradesRoutes)],
  exports: [RouterModule]
})
export class TradesRoutingModule {}

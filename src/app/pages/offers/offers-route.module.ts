import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers.component';
// import { EditEventComponent } from '../../components/EditEventComponent/editEvent.component';

const OffersRoutes: Routes = [
  {
    path: '',
    component: OffersComponent
  },
  // {
  //   path: 'editOffers',
  //   component: EditEventComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(OffersRoutes)],
  exports: [RouterModule]
})
export class OffersRoutingModule {}

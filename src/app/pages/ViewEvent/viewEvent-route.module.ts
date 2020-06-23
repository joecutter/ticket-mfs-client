import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEventComponent } from './viewEvent.component';

const ViewEventRoutes: Routes = [
  {
    path: '',
    component: ViewEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ViewEventRoutes)],
  exports: [RouterModule]
})
export class ViewEventRoutingModule {}

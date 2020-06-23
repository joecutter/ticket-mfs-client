import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostTradeComponent } from './post-trade.component';
// import { EditEventComponent } from '../../components/EditEventComponent/editEvent.component';


const PostTradeRoutes: Routes = [
  {
    path: '',
    component: PostTradeComponent
  },
  // {
  //   path: 'edit',
  //   component: EditEventComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(PostTradeRoutes)],
  exports: [RouterModule]
})
export class PostTradeRoutingModule {}

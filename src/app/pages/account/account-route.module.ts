import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const AccountRoutes: Routes = [
  {
    path: '',
    component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(AccountRoutes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}

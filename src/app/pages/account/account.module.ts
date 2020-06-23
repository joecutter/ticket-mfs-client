import { NgModule } from '@angular/core';
import { SharedModule } from '../../container/shared.module';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-route.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }

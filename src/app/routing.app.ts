import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Providers */
import { AuthGuardService } from './helper';

/*Global Pages*/
import { LoginComponent } from './pages/signin/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetPwdComponent } from './pages/forget-pwd/forget-pwd.component';


import { P401Component } from './pages/error/401.component';
import { P500Component } from './pages/error/500.component';
import { P404Component } from './pages/error/404.component';
import { DefaultLayoutComponent } from './container/default/default-layout.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'forget',
    component: ForgetPwdComponent,
    pathMatch: 'full'
  },
  {
    path: '401',
    component: P401Component
  },
  {
    path: '500',
    component: P500Component
  },
  {
    path: '404',
    component: P404Component
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule'
      },
      {
        path: 'account',
        loadChildren: './pages/account/account.module#AccountModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'event/checkout',
        loadChildren: './pages/wallet/wallet.module#WalletModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'my-trades',
        loadChildren: './pages/trades/trades.module#TradesModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'offers',
        loadChildren: './pages/offers/offers.module#OffersModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'post-trade',
        loadChildren: './pages/post-trade/post-trade.module#PostTradeModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'view-event',
        loadChildren: './pages/ViewEvent/viewEvent.module#ViewEventModule',
        canActivate: [AuthGuardService]
      },
      // otherwise redirect to welcome
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

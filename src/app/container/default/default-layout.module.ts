import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './default-layout.component';
import { FooterLayoutComponent } from '../footer/footer-layout.component';
import { BannerLayoutComponent } from '../banner/banner-layout.component';
import { HeaderLayoutComponent } from '../header/header-layout.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    FooterLayoutComponent,
    BannerLayoutComponent,
    DefaultLayoutComponent,
    HeaderLayoutComponent,
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }

import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routing.app';


import { AppComponent } from './app.component';

// Import containers
import { DefaultModule } from './container/default/default-layout.module';
import { P404Component } from './pages/error/404.component';
import { P500Component } from './pages/error/500.component';
import { P401Component } from './pages/error/401.component';
import { LoginComponent } from './pages/signin/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetPwdComponent } from './pages/forget-pwd/forget-pwd.component';


//helper
import { JwtInterceptor, AuthGuardService, ErrorInterceptor } from './helper';

//provider
import { ServiceService, AlertService, AuthService, EventService } from './provider';
import { SharedModule } from './container/shared.module';


@NgModule({
	declarations: [
		AppComponent,
		P404Component,
		P401Component,
		P500Component,
		LoginComponent,
		SignupComponent,
		ForgetPwdComponent,

	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		DefaultModule,
		SharedModule,
	],
	providers: [
		ServiceService,
		AlertService,
		AuthService,
		EventService,
		AuthGuardService,
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

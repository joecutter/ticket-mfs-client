import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, ServiceService } from '../../provider';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: [ './account.component.css' ]
})
export class AccountComponent implements OnInit {
	currentUser;
	username;
	phone;
	email;
	password;
	loading:boolean;
	returnUrl: string;

	constructor(
		public authService: AuthService,
		public userService: ServiceService,
		private route: ActivatedRoute,
		private router: Router,
	) {
		const currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.username = currentUser.username;
		this.phone = currentUser.phone;
		this.email = currentUser.email;
		this.password = currentUser.password;
	}

	ngOnInit() {
		this.userService.getUserDetail(this.email).subscribe(res=>{

		})
	}

	logOut() {
		console.log('Loging out');
		this.loading = true;
		this.authService.OnLogout();
		this.router.navigate(['/login']);
	}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';


@Component({
	selector: 'app-trades',
	templateUrl: './trades.component.html',
	styleUrls: [ './trades.component.css' ]
})
export class TradesComponent implements OnInit {
	showSpinner = true;
	currentUser: string;
	email: string;
	pageLoading = true;
	inactive;
	active;

	constructor(private route: ActivatedRoute, private router: Router) {
		const Str = localStorage.getItem('currentUser');
		const obj = JSON.parse(Str);
		this.currentUser = obj.username;
		this.email = obj.email;
	}

	ngOnInit(){
		console.log('Active Trades Page');
    this.showSpinner = false;
	}

	retriveActive(){
		console.log('retrive Active Trades');
	}
}

import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
	selector: 'app-footer',
	templateUrl: './footer-layout.component.html'
})
export class FooterLayoutComponent {
	date = moment().format('MMMM Do YYYY');;
	constructor() {}

	ngOnInit() {
	}
}

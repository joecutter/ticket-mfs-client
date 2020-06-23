import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: [ './modal.component.css' ]
})
export class ModalComponent implements OnInit {
	@Input() id: string;
	@Input() title: string;
	obj: any;
	showSpinner = true;

	constructor() {}

	ngOnInit(): void {
	};

	retrivePost(){
		console.log('Retrive Single Post', this.id);
		// this.methods.getSingleEvent(this.id).then(
		// 	(res) => {
		// 		this.showSpinner = false;
		// 		this.obj = res.data['getEvent'];
		// 	},
		// 	(error) => {
		// 		this.showSpinner = false;
		// 		console.log(error);
		// 	}
		// );
	}
}

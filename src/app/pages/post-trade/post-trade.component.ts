import { Component, OnInit, NgZone, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


//provider
import { AlertService, EventService } from '../../provider/index';

@Component({
	selector: 'app-post-trade',
	templateUrl: './post-trade.component.html',
	styleUrls: [ './post-trade.component.css' ]
})
export class PostTradeComponent implements OnInit {
	rForm: FormGroup;
	submitted: boolean;
	isLoading : boolean;
	returnUrl: string;
	filesToUpload: File;
	email;

	constructor(
		private fb: FormBuilder,
		private eventService: EventService,
		private alertService: AlertService,
		private route: ActivatedRoute,
		private router: Router
	) {
		
	}

	ngOnInit() {
		const currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.email = currentUser.email;
		this.rForm = this.fb.group({
			title: [ '', Validators.required ],
			description: [ '', Validators.required ],
			prize: [ '', Validators.required ],
			category: [ '', Validators.required ],
			image: [ '', Validators.required ],
			venue: [ '', Validators.required ],
			email: [ this.email, Validators.required ]
		});
	}

	get formValues() {
		return this.rForm.controls;
	  }

	postTrade() {
		console.log('PostTrade Initiated');
		this.isLoading = true;
		this.submitted = true;

		// stop here if form is invalid
		if (this.rForm.invalid) {
			this.isLoading = false;
			return;
		}

		console.log(this.rForm.value);
		// const {title, category, description, prize, name, venue, phone, email} = this.rForm.value;

		const data = JSON.stringify(this.rForm.value);

		const input = new FormData();
		input.append('jsonData', data);
		input.append('image', this.filesToUpload, this.filesToUpload.name);

		console.log(input);

		this.eventService.createEvent(input).subscribe(
			(res) => {
				this.isLoading = false;
				console.log(res);
				this.router.navigate([ '/offers' ]);
			},
			(err) => {
				this.isLoading = false;
				this.alertService.error('An Error Occurred.Try Again');
			}
		);
	}


	fileChangeEvent(fileInput: any) {
		this.filesToUpload = fileInput.target.files[0];
		console.log('image ', this.filesToUpload);
	}
}

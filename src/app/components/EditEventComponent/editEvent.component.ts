import { Component, OnInit, NgZone, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';



//provider
import { AlertService, EventService } from '../../provider/index';

@Component({
	selector: 'app-editEvent-trade',
	templateUrl: './editEvent.component.html',
	styleUrls: [ './editEvent.component.css' ]
})
export class EditEventComponent implements OnInit {
	rForm: FormGroup;
	name: String = '';
	phone: String = '';
	email: String = '';
	city: String = '';
	userID: String = '';
	obj: any;

	loading: boolean;
	showSpinner = true;
	alert = false;
	returnUrl: string;

	cutoff = 0.025;
	prize = 0;
	filesholder = [];
	urls = [];
	filesToUpload: Array<File> = [];

	itemid: String;
	category: String;
	condition: String;
	dateCreated: String;
	description: String;
	images= [];
	isActive: String;
	itemId: String;
	title: String;
	type: String;
	views: any;

	constructor(
		private fb: FormBuilder,
		////private methods: Methods,
		private serviceService: EventService,
		private alertService: AlertService,
		private route: ActivatedRoute,
		private router: Router
	) {
		const userDeatails = JSON.parse(localStorage.getItem('currentUser'));
		console.log(userDeatails);
		this.email = userDeatails.email;
		this.name = userDeatails.username;
		this.phone = userDeatails.phone;
		this.userID = userDeatails._id;
	}

	ngOnInit() {
		this.showSpinner = false;
		this.fetchQueryParams();

		/** Form Group*/
		this.rForm = this.fb.group({
			type: [ '', Validators.required ],
			title: [ '', Validators.required ],
			condition: [ '', Validators.required ],
			description: [ '', Validators.required ],
			prize: [ '', Validators.required ],
			category: [ '', Validators.required ],
			image: [ '', Validators.required ],
			name: [ this.name, Validators.required ],
			phone: [ this.phone, Validators.required ],
			city: [ '', Validators.required ],
			email: [ this.email, Validators.required ]
		});
	}

	fetchQueryParams() {
		this.route.queryParams.filter((params) => params.itemid).subscribe((params) => {
			console.log(params);
			this.itemid = params.itemid;
			this.getPost(this.itemid);
			console.log(this.itemid);
		});
	}

	getPost(id): any {
		console.log('Retrive Single Event', id);
		// this.methods.getSingleEvent(id).then(
		// 	({ errors, data }) => {
		// 		console.log(data);
		// 		this.obj = data['getEvent'];
		// 		this.category = this.obj.category;
		// 		this.city = this.obj.city;
		// 		this.condition = this.obj.condition;
		// 		this.description = this.obj.description;
		// 		this.images = this.obj.image;
		// 		this.isActive = this.obj.isActive;
		// 		this.itemId = this.obj.itemId;
		// 		this.phone = this.obj.phone;
		// 		this.prize = this.obj.prize;
		// 		this.title = this.obj.title;
		// 		this.type = this.obj.type;
		// 		this.views = this.obj.views;
		// 	},
		// 	(error) => {
		// 		console.log(error);
		// 	}
		// );
	}

	postTrade(post) {
		console.log('PostTrade Initiated');
		this.loading = true;

		let newPost = {
			type: post.type,
			title: post.title.toUpperCase(),
			condition: post.condition,
			category: post.category,
			description: post.description,
			prize: post.prize,
			image: this.filesToUpload,
			name: post.name,
			city: post.city,
			phone: post.phone,
			email: post.email,
			status: 'CREATED',
			views: 0
		};

		console.log(newPost);

		this.serviceService.createEvent(newPost).subscribe(
			(res) => {
				this.loading = false;
				console.log(res);
				if (!res['success']) {
					this.alertService.error(res['message']);
				}
				this.router.navigate([ '/offers' ]);
			},
			(err) => {
				this.loading = false;
				this.alertService.error(err);
			}
		);
	}

	onFilesAdded(files: File[]) {
		console.log(files);

		files.forEach((file) => {
			const reader = new FileReader();

			reader.onload = (e: ProgressEvent) => {
				const content = (e.target as FileReader).result;

				// this content string could be used directly as an image source
				// or be uploaded to a webserver via HTTP request.
				console.log(content);
				this.filesholder.push(content);
			};

			// use this for basic text files like .txt or .csv
			// reader.readAsText(file);

			// use this for images
			reader.readAsDataURL(file);
		});
	}

	fileChangeEvent(fileInput: any) {
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}
}

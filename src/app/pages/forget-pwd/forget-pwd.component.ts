import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
	selector: 'app-forget-pwd',
	templateUrl: './forget-pwd.component.html',
	styleUrls: [ './forget-pwd.component.css' ]
})
export class ForgetPwdComponent implements OnInit {
	rForm: FormGroup;
	message: string = '';
	error: string = '';
	loading: boolean;
	alert: any;
	
	constructor(private fb: FormBuilder,) {
		this.rForm = fb.group({
			email: [ '', Validators.required ]
		});
	}

	ngOnInit() {}

	Forgot(post) {}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//provider
import {
  AlertService,
  AuthService,
  ServiceService,
} from '../../provider/index';

// import custom validator to validate that password and confirm password fields match
import { MustMatch, ValidateEmailNotTaken } from '../../helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  post: any;
  message = '';
  error = '';
  alert: any;
  quote: any;
  showSpinner: boolean;
  submited: boolean;

  constructor(
    private fb: FormBuilder,
    public alertService: AlertService,
    private authService: AuthService,
    private serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        email: [
          '',
          [Validators.required, Validators.email],
          ValidateEmailNotTaken(this.serviceService),
        ],
        username: ['', Validators.required],
        phone: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  get formValues() {
    return this.registerForm.controls;
  }

  Signup() {
    console.log('Signup Initiated');
    this.showSpinner = true;
    this.submited = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.showSpinner = false;
      return;
    }

    console.log(this.registerForm.value);
    this.authService.OnsignUp(this.registerForm.value).subscribe((res) => {
      console.log(res);
      if (res['success']) {
        this.alertService.success(res['message'], true);
        return;
      }
      this.alertService.error(res['message'], true);
      return;
    });

    this.showSpinner = false;
  }
}

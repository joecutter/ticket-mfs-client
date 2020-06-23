import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

//provider
import { AuthService, AlertService } from '../../provider/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  post: any;
  emailAlert = 'Email is required';
  passwordAlert = 'Password is required';
  fieldAlert = 'All the fields are required';
  loading: boolean;
  submited: boolean;
  returnUrl: string;
  message = '';
  error = '';
  alert: boolean;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.authService.OnLogout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get formValues() {
    return this.loginForm.controls;
  }

  login() {
    console.log('Login Initiated');
    this.loading = true;
    this.submited = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }

    console.log(this.loginForm.value);

    this.authService.OnsignIn(this.loginForm.value).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }
}

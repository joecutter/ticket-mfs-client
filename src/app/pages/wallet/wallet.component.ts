import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//provider
import {
  AlertService,
  PaymentService,
  EventService,
} from '../../provider/index';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  rForm: FormGroup;
  showSpinner = true;
  loading: boolean;

  amount;
  history: Array<any> = [];
  email;
  account;
  balance;
  eventId;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private paymentService: PaymentService,
    private route: ActivatedRoute
  ) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.account = currentUser.phone.startsWith('254')
      ? currentUser.phone
      : '254' + currentUser.phone.substring(1);
  }

  ngOnInit() {
    this.fetchQueryParams();
    this.showSpinner = false;

    this.rForm = this.fb.group({
      phone: [this.account, Validators.required],
      amount: [this.amount, Validators.required],
      type: ['', Validators.required],
    });
  }

  fetchQueryParams() {
    this.route.queryParams
      .filter((params) => params.eventId)
      .subscribe((params) => {
        console.log(params);
        this.eventId = params.eventId;
	    	this.amount = params.amount;
	   	this.getHistory();
   		//  this.getBalance();
        console.log(this.eventId , ' : ', this.amount);
      });
  }


  getHistory() {
    console.log('Get Transaction History ', this.account);
    this.paymentService.getTransLog(this.account).subscribe(
      (data) => {
        this.loading = false;
        console.log(data);
        this.history = data['message'];
      },
      (err) => {
        this.loading = false;
        this.alertService.error(err);
      }
    );
  }

  getBalance() {
    console.log('Get Mpesa Balance ', this.account);
    this.paymentService.getBalance(this.account).subscribe(
      (data) => {
        this.loading = false;
        console.log(data);
        this.balance = data['message'];
      },
      (err) => {
        this.loading = false;
        this.alertService.error(err);
      }
    );
  }

  topUp(post) {
    console.log('Wallet Transaction Initiated');
    this.loading = true;
    let phone = post.phone;

    if (!phone.startsWith('254')) {
      const str = phone;
      const res = str.substring(1);
      phone = '254' + res;
      console.log(phone);
    }

    const data = {
      phone: phone,
      amount: post.amount,
    };

    this.paymentService.checkOut(data).subscribe(
      (res) => {
        this.loading = false;
        console.log(res);
        this.alertService.success(res['message']['data']['CustomerMessage']);
      },
      (err) => {
        this.loading = false;
        this.alertService.error(err);
      }
    );
  }

  getUserDetails() {
    // this.methods.getUserDetails(this.email).then((res) => {
    // 	console.log(res)
    // });
  }
}

import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/** Providers */
import { ServiceService } from '../../provider/index';

/**Components */
import { LoginComponent } from '../../pages/signin/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  currentUser: any;
  returnUrl: any;
  username: any;
  tradeNotify: any;
  msgNotify: any;
  allNotify: any;
  offerNotify: any;

  constructor(
    public service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const Str = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(Str);

    if (this.currentUser == null) {
      this.username = null;
      this.currentUser = 'not logged';
      // console.log("not logged");
    } else {
      this.username = this.currentUser.username;
      this.currentUser = 'logged';
      // console.log("logged in");
    }

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
}

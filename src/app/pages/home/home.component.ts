import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../provider';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showSpinner = true;
  category = 'all';
  allPost: any;
  seller: any;
  buyer: any;
  trader: any;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('Home Page Initiated');
    this.getAllEvents();
    this.showSpinner = false;
  }

  getAllEvents() {
    this.showSpinner = true;
    this.eventService.getEvents().subscribe(res => {
      this.allPost = res['message'];
    });
  }

  apply(eventId) {
    console.log('select item ' + eventId);
    this.allPost.forEach(element => {
      console.log('element ', element);
      if (element.eventId === eventId) {
        this.router.navigate(['/view-event'], {
          queryParams: { eventId }
        });
      }
    });
  }
}

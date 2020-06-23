import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { EventService } from '../../provider';

@Component({
  selector: "app-viewItem",
  templateUrl: './viewEvent.component.html',
  styleUrls: ['./viewEvent.component.css'],
})
export class ViewEventComponent implements OnInit {
  showSpinner = true;
  eventId: String;
  category: String;
  description: String;
  image: String;
  prize: String;
  title: String;
  venue: String;
  createdAt: String;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchQueryParams();
  }

  fetchQueryParams() {
    this.route.queryParams
      .filter((params) => params.eventId)
      .subscribe((params) => {
        console.log(params);
        this.eventId = params.eventId;
        this.retrivePost();
        console.log(this.eventId);
      });
  }

  retrivePost() {
    console.log('Retrive Single Post', this.eventId);
    this.eventService.getEventByItemId(this.eventId).subscribe(
      (res) => {
        this.showSpinner = false;
        console.log(res);
        const {
          category,
          description,
          image,
          prize,
          title,
          venue,
          createdAt,
        } = res['message'];
        this.category = category;
        this.description = description;
        this.image = image;
        this.prize = prize;
        this.title = title;
        this.venue = venue;
        this.createdAt = createdAt;
      },
      (error) => {
        this.showSpinner = false;
        console.log(error);
      }
    );
  }

  apply() {
    this.router.navigate(['/event/checkout'], {
      queryParams: { eventId: this.eventId, amount: this.prize },
    });
  }
}

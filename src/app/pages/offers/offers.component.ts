import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertService, EventService } from "../../provider/index";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.css"],
})
export class OffersComponent implements OnInit {
  showSpinner = true;
  loading = false;
  data: any;
  settings: any;
  email: string;

  bodyText = "This text can be updated in modal 1";

  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService,
    private eventService: EventService,
    private router: Router
  ) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.email = currentUser.email;
  }

  ngOnInit() {
    console.log("Offer Page");
    this.getOffers();
    this.showSpinner = false;
  }

  getOffers() {
    this.eventService.getEvents().subscribe(
      (res) => {
          this.data = res["message"];
          console.log( this.data);
      },
      (err) => {
        this.showSpinner = false;
        this.alertService.error("An Error Occurred.Try Again");
      }
    );
  }
}

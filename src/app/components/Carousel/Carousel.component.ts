import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-carousel',
	templateUrl: './Carousel.component.html',
	styleUrls: [ './Carousel.component.css' ]
})
export class CarouselComponent implements OnInit {
	@Input() event: any;
	constructor() {}

	ngOnInit() {}
}

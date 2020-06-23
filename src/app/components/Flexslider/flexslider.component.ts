import { Component, OnInit, Input } from '@angular/core';
import $ from 'flexslider';

@Component({
	selector: 'app-flexslider',
	templateUrl: './flexslider.component.html',
	styleUrls: [ './flexslider.component.css' ]
})
export class FlexsliderComponent implements OnInit {
	@Input() images: any;
	constructor() {}

	ngOnInit() {
        this.slide();
    }

	slide() {
		$('#carousel').flexslider({
			animation: 'slide',
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 210,
			itemMargin: 5,
			asNavFor: '#slider'
		});

		$('#slider').flexslider({
			animation: 'slide',
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: '#carousel'
		});
	}
}

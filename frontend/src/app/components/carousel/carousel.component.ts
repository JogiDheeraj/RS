import {Component, OnInit} from '@angular/core';

// Import the Image interface
import {Image} from '../../model/model.image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public images = [
    {"title": "We are covered", "url": "./assets/images/1113.jpg"},
    {"title": "Generation Gap", "url": "./assets/images/3331.jpg"},
    {"title": "Potter Me", "url": "./assets/images/4441.jpg"},
    {"title": "Pre-School Kids", "url": "./assets/images/5552.jpg"},
    {"title": "Young Peter Cech", "url": "./assets/images/22221.jpg"}
  ];

  ngOnInit() {
  }

}



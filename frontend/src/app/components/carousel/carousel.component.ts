import {Component, OnInit} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';

// Import the Image interface
import {Image} from '../../model/model.image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  public carouselBannerItems: Array<any> = [];
  public carouselBanner: NgxCarousel;

  public images = [
    {"title": "We are covered", "url": "./assets/images/1113.jpg"},
    {"title": "Generation Gap", "url": "./assets/images/3331.jpg"},
    {"title": "Potter Me", "url": "./assets/images/4441.jpg"},
    {"title": "Pre-School Kids", "url": "./assets/images/5552.jpg"},
    {"title": "Young Peter Cech", "url": "./assets/images/22221.jpg"}
  ];

  ngOnInit() {
    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 4,
      speed: 500,
      interval: 5000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      custom: 'banner',
      touch: true,
      loop: false,
      easing: 'cubic-bezier(0, 0, 0.2, 1)'
    };
    
    this.carouselBannerLoad();
  }
  
  public myfunc(event: Event) {
    // carouselLoad will trigger this function when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all Carousel
  }
  
  public carouselBannerLoad() {
    const len = this.carouselBannerItems.length;
    if (len <= 4) {
      for (let i = len; i < len + 5; i++) {
        this.carouselBannerItems.push(
          this.images[Math.floor(Math.random() * this.images.length)]
        );
      }
    }
  }

}



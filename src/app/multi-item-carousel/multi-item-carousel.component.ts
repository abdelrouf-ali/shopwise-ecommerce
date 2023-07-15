import { AfterViewInit, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $: any;

@Component({
  selector: 'app-multi-item-carousel',
  templateUrl: './multi-item-carousel.component.html',
  styleUrls: ['./multi-item-carousel.component.css']
})
export class MultiItemCarouselComponent {
  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
    images: string[] = [
    '../assets/images/banner7.jpg',
    '../assets/images/banner7.jpg',
    '../assets/images/banner7.jpg',
    '../assets/images/banner7.jpg',
    '../assets/images/banner7.jpg',
    '../assets/images/banner7.jpg'
  ];
}
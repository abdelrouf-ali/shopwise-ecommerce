import { AfterViewInit, Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-multi-item-carousel',
  templateUrl: './multi-item-carousel.component.html',
  styleUrls: ['./multi-item-carousel.component.css']
})
export class MultiItemCarouselComponent {

  images: string[] = [
    '../assets/images/banner7.jpg',
    '../assets/images/banner7.jpg',
    '../assets/images/banner7.jpg',
    '../assets/images/banner7.jpg',
    '../assets/images/banner7.jpg',
    '../assets/images/banner7.jpg'
  ];

  constructor() { }

  ngAfterViewInit(): void {
    $(document).ready(() => {
      const itemsPerSlide = 3; // Adjust this value according to the number of items per slide
      const totalItems = $('.carousel-item').length;

      if (totalItems > itemsPerSlide) {
        const slidesToShow = Math.ceil(totalItems / itemsPerSlide);

        $('.carousel-inner').addClass('multi-item');

        for (let i = 0; i < slidesToShow; i++) {
          const items = $('.carousel-item').slice(i * itemsPerSlide, (i * itemsPerSlide) + itemsPerSlide);

          const innerWrapper = $('<div class="carousel-item"></div>');
          items.wrapAll(innerWrapper);
        }
      }
    });

    $('#myCarousel').carousel();
  }
}
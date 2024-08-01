import { Component, AfterViewInit, ElementRef  } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  ngAfterViewInit() {
    // Bootstrap carousel initialization
    const myCarousel = document.querySelector('#grandmasterCarousel');
    if (myCarousel) {
      new bootstrap.Carousel(myCarousel);
    }
  }
}

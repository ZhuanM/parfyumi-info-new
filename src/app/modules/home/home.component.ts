import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  // @ViewChild('hero')
  // private heroExp: ElementRef;

  // toggleAnimation(): void {
  //   this.heroExp.nativeElement.classList.toggle('hero-expanded');

  //   // I make it this way with carouselExp because I don't have access to the carousel class and i can't put "#" like with the hero class
  //   let carouselExp = document.getElementsByClassName("carousel");
  //   // Since carouselExp returns an Array of classes (and there could be other "carousels" (but there aren't)) I want just the first and only one
  //   carouselExp[0].classList.toggle('carousel-expanded');
  // }
}
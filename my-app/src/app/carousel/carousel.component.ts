import { Component, Input, OnInit } from '@angular/core';


interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; // default to 3 seconds


  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages();
    } 
  }

  //change slides for every 3 seconds
  autoSlideImages():void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  // sets index of image on dot/indicator click
  selectImage(index: number):void {
    this.selectedIndex = index;
  }

  //previous click
  onPrevClick():void {
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length -1;
    }
    else{
      this.selectedIndex--;
    }
  }

  //next click
  onNextClick():void {
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }

  }

}

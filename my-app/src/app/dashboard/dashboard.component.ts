import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  images = [
    {
      imageSrc:
        './assets/signdayimg1.png',
      imageAlt: 'carousel1',
    },
    {
      imageSrc:
        './assets/signdayimg2.png',
      imageAlt: 'carousel2',
    },
    {
      imageSrc:
        './assets/signdayimg3.png',
      imageAlt: 'carousel3',
    },
    {
      imageSrc:
        './assets/signdayimg4.png',
      imageAlt: 'carousel4',
    },
  ]

}

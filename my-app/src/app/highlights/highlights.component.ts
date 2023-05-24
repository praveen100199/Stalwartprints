import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent {

  images = [  
    { img: "./assets/accessories-badges.jpg" },  
    { img: "./assets/accessories-caps.png" },  
    { img: "./assets/accessories-cups.webp" },  
    { img: "./assets/accessories-badges.jpg" },  
    { img: "./assets/accessories-caps.png" },  
    { img: "./assets/accessories-cups.webp" },
    { img: "./assets/accessories-badges.jpg" },  
    { img: "./assets/accessories-caps.png" },  
    { img: "./assets/accessories-cups.webp" }  
  ];

}

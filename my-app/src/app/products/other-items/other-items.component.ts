import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-other-items',
  templateUrl: './other-items.component.html',
  styleUrls: ['./other-items.component.scss']
})
export class OtherItemsComponent {

  @ViewChild('caps') caps!: ElementRef;
  @ViewChild('bags') bags!: ElementRef;
  @ViewChild('bottles') bottles!: ElementRef;
  @ViewChild('pens') pens!: ElementRef;
  @ViewChild('badges') badges!: ElementRef;
  @ViewChild('cups') cups!: ElementRef;
  @ViewChild('idcards') idcards!: ElementRef;
  @ViewChild('pillows') pillows!: ElementRef;
  @ViewChild('stoneframes') stoneframes!: ElementRef;


  constructor(private renderer: Renderer2) {}

  scrollToDiv(elementId: string): void {
    let element: ElementRef | null = null;

    switch (elementId) {
      case 'caps':
        element = this.caps;
        break;
      case 'bags':
        element = this.bags;
        break;
      case 'bottles':
        element = this.bottles;
        break;
      case 'pens':
        element = this.pens;
        break;
      case 'badges':
        element = this.badges;
        break;
      case 'cups':
        element = this.cups;
        break;
      case 'idcards':
        element = this.idcards;
        break;
      case 'pillows':
        element = this.pillows;
        break;
      case 'stoneframes':
        element = this.stoneframes;
        break;
    }

    if (element) {
      const yOffset = -20; // Adjust as needed to offset any fixed header or other elements
      const y = element.nativeElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

      this.renderer.setProperty(document.documentElement, 'scrollTop', y);
    }
  }

}

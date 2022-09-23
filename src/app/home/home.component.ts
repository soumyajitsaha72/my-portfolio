import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import FOG from "vanta/dist/vanta.fog.min.js";
import * as THREE from "three";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('vantaEl') vantaRef: ElementRef;

  scrollTo(target: string) {
    this.viewportScroller.scrollToAnchor(target);
  }

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    FOG({
      THREE: THREE,
      el: this.vantaRef.nativeElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.00,
      scaleMobile: 1.00,
      highlightColor: 0x5f542c,
      midtoneColor: 0x82291d,
      lowlightColor: 0x2c00ff,
      baseColor: 0x0,
      // shininess: 41.00,
      // waveHeight: 15.00,
      // waveSpeed: 1.50,
      // zoom: 0.2,
      // color: "#000000",
      // color: 0xd0e18
    })
  }

  //This code is taken from w3Schools... It's responsible for backToTop button.
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  showButton = false; // Button not visible a the top of the page.
  // When the user scrolls down 20px from the top of the document, show the button.
  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  backToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}

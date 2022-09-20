import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import RINGS from "vanta/dist/vanta.waves.min.js";
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
    console.log("clicked")
    this.viewportScroller.scrollToAnchor(target);
  }

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    RINGS({
      THREE: THREE,
      el: this.vantaRef.nativeElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.00,
      scaleMobile: 1.00,
      // shininess: 41.00,
      // waveHeight: 15.00,
      // waveSpeed: 1.50,
      // zoom: 1,
      color: "#000000",
      // color: 0xd0e18
    })
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import RINGS from "vanta/dist/vanta.waves.min.js";
import * as THREE from "three";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('vantaEl') vantaRef: ElementRef;

  constructor() { }

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
      color: '#000000'
    })
  }

}

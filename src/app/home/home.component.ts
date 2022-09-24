import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  scrollTo(target: string) {
    this.viewportScroller.scrollToAnchor(target);
  }

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {

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

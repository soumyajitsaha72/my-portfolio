import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openStudies = true;
  openCloseStudies() {
    this.openStudies = !this.openStudies;
  }

  openDailyLife = true;
  openCloseDailyLife() {
    this.openDailyLife = !this.openDailyLife;
  }

  openNotes = true;
  openCloseNotes() {
    this.openNotes = !this.openNotes;
  }
}

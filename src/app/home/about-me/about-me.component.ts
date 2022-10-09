import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  age: Number;

  constructor() { }

  ngOnInit(): void {
    this.age = Math.abs(new Date(Date.now() - new Date("10/29/1998").getTime()).getFullYear() - 1970);
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

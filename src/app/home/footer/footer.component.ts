import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date: Number;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }

}

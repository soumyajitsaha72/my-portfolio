import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  @ViewChild("contactForm") contactForm: NgForm;
  showMsg: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showMsg = false;
  }

  onSubmitForm() {
    // console.log(this.contactForm.value);
    this.showMsg = true;
    setTimeout(() => this.showMsg = false, 2000);
    this.contactForm.reset();
  }

}

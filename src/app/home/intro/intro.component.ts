import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MyInfo } from 'src/app/my-info.service';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<string>();
  fullName: string;
  designation: string;
  introBio: string;
  resume: { downloadLink: string; downloadFile: string; };

  constructor(private myInfo: MyInfo) { }

  ngOnInit(): void {
    this.fullName = this.myInfo.firstName + " " + this.myInfo.lastName;
    this.designation = this.myInfo.designation;
    this.introBio = this.myInfo.introBio;
    this.resume = this.myInfo.resumeDownload;
  }

  @ViewChild("target") resumeRef: ElementRef;
  onClickDownload() {
    this.resumeRef.nativeElement.click();
  }

  onClickAboutMe() {
    this.buttonClicked.emit("about-me");
  }

  onClickProjects() {
    this.buttonClicked.emit("projects");
  }

  onClickSkills() {
    this.buttonClicked.emit("skills");
  }

  onClickContactMe() {
    this.buttonClicked.emit("contact-me");
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

}

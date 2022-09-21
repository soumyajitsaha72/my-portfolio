import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MyInfo } from 'src/app/my-info.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: { id: number; name: string; img: string; year: number; info: string; links: { github: string; live: string; }; }[];

  @ViewChild('projectInfo') projectInfoEl: ElementRef;
  @HostListener("window:resize") private onResize() {
    this.detectScreenSize();
  }

  sliceEnd: number;
  private detectScreenSize() {
    this.sliceEnd = this.projectInfoEl.nativeElement.clientWidth / 8;
  }

  constructor(private myInfo: MyInfo) { }

  ngOnInit(): void {
    this.projects = this.myInfo.projects;
    this.sliceEnd = window.innerWidth / 18;
  }



  displayNumber: number;
  onMouseEnter(projectId: number) {
    this.displayNumber = projectId;
  }

  onMouseLeave() {
    this.displayNumber = -1;
  }

}

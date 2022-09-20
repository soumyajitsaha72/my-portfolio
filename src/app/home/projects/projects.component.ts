import { Component, ElementRef, OnInit } from '@angular/core';
import { MyInfo } from 'src/app/my-info.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: { id: number; name: string; img: string; year: number; info: string; links: { github: string; live: string; }; }[];

  constructor(private myInfo: MyInfo) { }

  ngOnInit(): void {
    this.projects = this.myInfo.projects;
  }

  displayNumber: number;
  onMouseEnter(projectId: number) {
    this.displayNumber = projectId;
  }

  onMouseLeave() {
    this.displayNumber = -1;
  }

}

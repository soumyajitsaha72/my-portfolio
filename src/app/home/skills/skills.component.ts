import { Component, OnInit } from '@angular/core';
import { MyInfo } from 'src/app/my-info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: string[];
  skillsUsedBefore: string[];
  skillsWantToLearn: string[];

  constructor(private myInfo: MyInfo) { }

  ngOnInit(): void {
    this.skills = this.myInfo.skills;
    this.skillsUsedBefore = this.myInfo.skillsUsedBefore;
    this.skillsWantToLearn = this.myInfo.skillsWantToLearn;
  }

}

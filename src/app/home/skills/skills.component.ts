import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: string[] = ["HTML", "CSS", "Javascript", "TypeScript", "Angular", "Java", "Spring Boot"];
  skillsUsedBefore: string[] = ["MongoDb", "React"];
  skillsWantToLearn: string[] = ["Vue", "GraphQL", "MongoDb", "React"];

  constructor() { }

  ngOnInit(): void {
  }

}

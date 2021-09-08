import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<any> =[
    {
      "userId": 1,
      "id": 1,
      "title": "HTML",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "CSS",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "Javascript",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "JAVA",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "C++",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "C#",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "Angular",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "Github Account",
      "completed": true
    } 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

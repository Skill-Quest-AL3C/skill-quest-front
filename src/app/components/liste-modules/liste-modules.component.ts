import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-modules',
  templateUrl: './liste-modules.component.html',
  styleUrls: ['./liste-modules.component.css']
})
export class ListeModulesComponent implements OnInit {

  sections: any[] = [
    {
      "id": "1",
      "name": "Toto"
    },
    {
      "id": "2",
      "name": "Titi"
    }
  ];


  private modules_names: any[] = [
    {
      "id": "1",
      "section_id": "1",
      "name": "Java",
      "bg_img": "/assets/logo.png" 
    },
    {
      "id": "2",
      "section_id": "1",
      "name": "Français",
      "bg_img": "/assets/logo.png"
    },
    {
      "id": "3",
      "section_id": "1",
      "name": "Maths",
      "bg_img": "/assets/logo.png"
    },
    {
      "id": "4",
      "section_id": "2",
      "name": "Physique-Chimie",
      "bg_img": "/assets/logo.png"
    },
    {
      "id": "5",
      "section_id": "2",
      "name": "Course relais",
      "bg_img": "/assets/logo.png"
    },
    {
      "id": "6",
      "section_id": "2",
      "name": "Intelligence Artificielle",
      "bg_img": "/assets/logo.png"
    }

  ]

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  getModulesBySectionId($section_id : number) {
    let array = [];

    for (let index = 0; index < this.modules_names.length; index++) {
      if (this.modules_names[index].section_id === $section_id) {
        array.push(this.modules_names[index]);
      }
    }
    
    return array;
  }
}
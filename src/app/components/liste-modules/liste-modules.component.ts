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
      "name": "Langages de programmation"
    },
    {
      "id": "2",
      "name": "Général"
    }
  ];


  private modules_names: any[] = [
    {
      "id": "1",
      "section_id": "1",
      "name": "TypeScript",
      "bg_img": "/assets/logo.png" 
    },
    {
      "id": "2",
      "section_id": "1",
      "name": "C#",
      "bg_img": "/assets/logo.png"
    },
    {
      "id": "3",
      "section_id": "1",
      "name": "Python",
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
      "name": "Français",
      "bg_img": "/assets/logo.png"
    },
    {
      "id": "6",
      "section_id": "2",
      "name": "Apprendre les Mathématiques",
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
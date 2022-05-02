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
      "name": "Section 1 - Nom section"
    },
    {
      "id": "2",
      "name": "Section 2 - Nom section"
    }
  ];


  modules_names: any[] = [
    {
      "id": "1",
      "section_id": "1",
      "name": "Java",
      "bg_img": "" 
    },
    {
      "id": "2",
      "section_id": "1",
      "name": "Français",
      "bg_img": ""
    },
    {
      "id": "3",
      "section_id": "1",
      "name": "Maths",
      "bg_img": ""
    },
    {
      "id": "4",
      "section_id": "2",
      "name": "Physique-Chimie",
      "bg_img": ""
    },
    {
      "id": "5",
      "section_id": "2",
      "name": "Course relais",
      "bg_img": ""
    },
    {
      "id": "6",
      "section_id": "2",
      "name": "Intelligence Artificielle",
      "bg_img": ""
    }

  ]

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onClickModule($module : string = ""){
    this.router.navigateByUrl('/modules/' + $module);
  }

}
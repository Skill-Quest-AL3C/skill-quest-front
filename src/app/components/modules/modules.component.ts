import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  exercice: any[] = [
    {
      "id": "1",
      "id_module": "1",
      "name": "exercice 1 - Nom section"
    },
    {
      "id": "2",
      "id_module": "1",
      "name": "exercice 2 - Nom section"
    },
    {
      "id": "3",
      "id_module": "1",
      "name": "exercice 3 - Nom section"
    },
    {
      "id": "4",
      "id_module": "1",
      "name": "exercice 4 - Nom section"
    }
  ];


  cours: any[] = [
    {
      "id": "1",
      "id_module": "1",
      "name": "cours 1 - Nom section"
    },
    {
      "id": "2",
      "id_module": "1",
      "name": "cours 2 - Nom section"
    },
    {
      "id": "3",
      "id_module": "1",
      "name": "cours 3 - Nom section"
    },
    {
      "id": "4",
      "id_module": "1",
      "name": "cours 4 - Nom section"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
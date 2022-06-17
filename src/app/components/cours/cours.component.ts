import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor(private _location: Location) { 
  }

  // fix : faire passer le module dans le composant et non pas l'id du cours
  ngOnInit() {

  }

  goToModule() {
    this._location.back();
  }

}

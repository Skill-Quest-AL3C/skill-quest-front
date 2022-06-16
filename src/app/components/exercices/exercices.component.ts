import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Exercice } from 'src/app/services/modules.service';
import { QuizComponent } from './quiz/quiz.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {

  public exercice!: Exercice; 

  constructor(private _location: Location, private route: ActivatedRoute) { 
  }

  // fix : faire passer le module dans le composant et non pas l'id du cours
  ngOnInit() {
    this.exercice = history.state.exo;
  }

  goToModule() {
    this._location.back();
  }

  onOutletLoaded(component: QuizComponent) {
    component.exercice = this.exercice;
  }
}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Cours, Exercice } from 'src/app/services/modules.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
})
export class ModulesComponent implements OnInit {
  
  public cours: Cours[] = [];
  public exercices: Exercice[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.cours = history.state.cours;
    this.exercices = history.state.exercices;
  }
}

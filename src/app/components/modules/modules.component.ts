import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
})
export class ModulesComponent implements OnInit {
  exercices: any[] = [
    {
      id: '1',
      id_module: '1',
      name: 'Exercice 1',
    },
    {
      id: '2',
      id_module: '1',
      name: 'Exercice 2',
    },
    {
      id: '3',
      id_module: '1',
      name: 'Exercice 3',
    },
    {
      id: '4',
      id_module: '1',
      name: 'Exercice 4',
    },
    {
      id: '1',
      id_module: '2',
      name: 'exercice 1 2',
    },
    {
      id: '2',
      id_module: '2',
      name: 'exercice 2 2',
    },
    {
      id: '3',
      id_module: '2',
      name: 'exercice 3 2',
    },
    {
      id: '4',
      id_module: '2',
      name: 'exercice 4 2',
    },
  ];

  cours: any[] = [
    {
      id: '1',
      id_module: '1',
      name: '1. Les bases du TypeScript',
    },
    {
      id: '2',
      id_module: '1',
      name: '2. Syntaxe de base',
    },
    {
      id: '3',
      id_module: '1',
      name: '3. Les classes en TypeScript',
    },
    {
      id: '4',
      id_module: '1',
      name: '4. Type ou interface ?',
    },
    {
      id: '1',
      id_module: '2',
      name: 'cours 1 2',
    },
    {
      id: '2',
      id_module: '2',
      name: 'cours 2 2',
    },
    {
      id: '3',
      id_module: '2',
      name: 'cours 3 2',
    },
    {
      id: '4',
      id_module: '2',
      name: 'cours 4 2',
    },
  ];

  private current_module: number;

  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.current_module = -1;
    this.routeSub = new Subscription();
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params);
      this.current_module = params['id']; // store the value of the current module id
    });
  }

  getExercices() {
    let array = [];

    for (let index = 0; index < this.exercices.length; index++) {
      if (this.exercices[index].id_module === this.current_module) {
        array.push(this.exercices[index]);
      }
    }

    return array;
  }

  getCours() {
    let array = [];

    for (let index = 0; index < this.cours.length; index++) {
      if (this.cours[index].id_module === this.current_module) {
        array.push(this.cours[index]);
      }
    }

    return array;
  }
}

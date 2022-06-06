import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  template:'<router-outlet></router-outlet>',
})
export class QuizComponent implements OnInit {
  quiz!: Quiz;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}

import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Exercice } from 'src/app/services/modules.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  
  
  constructor(private router: Router) {}

  public exercice!: Exercice

  ngOnInit(): void {
    
  }
}

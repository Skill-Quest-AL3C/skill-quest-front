import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css'],
})
export class QcmComponent implements OnInit {
  private quizData = [
    {
      question: 'Which language runs in a web browser?',
      a: 'Java',
      b: 'C',
      c: 'Python',
      d: 'JavaScript',
      correct: 'd',
    },
    {
      question: 'What does CSS stand for?',
      a: 'Central Style Sheets',
      b: 'Cascading Style Sheets',
      c: 'Cascading Simple Sheets',
      d: 'Cars SUVs Sailboats',
      correct: 'b',
    },
    {
      question: 'What does HTML stand for?',
      a: 'Hypertext Markup Language',
      b: 'Hypertext Markdown Language',
      c: 'Hyperloop Machine Language',
      d: 'Helicopters Terminals Motorboats Lamborginis',
      correct: 'a',
    },
    {
      question: 'What year was JavaScript launched?',
      a: '1996',
      b: '1995',
      c: '1994',
      d: 'none of the above',
      correct: 'b',
    },
  ];

  private currentQuiz = 0;
  private score = 0;

  private quiz;
  private answerEls;
  private questionEl;
  private a_text;
  private b_text;
  private c_text;
  private d_text;
  private submitBtn;

  constructor() {
    this.quiz = document.getElementById('quiz');
    this.answerEls = document.querySelectorAll('.answer');
    this.questionEl = document.getElementById('question');
    this.a_text = document.getElementById('a_text');
    this.b_text = document.getElementById('b_text');
    this.c_text = document.getElementById('c_text');
    this.d_text = document.getElementById('d_text');
    this.submitBtn = document.getElementById('submit');
  }
  ngOnInit(): void {}

  loadQuiz() {
    this.deselectAnswers();

    const currentQuizData = this.quizData[this.currentQuiz];

    this.questionEl.innerText = currentQuizData.question;
    this.a_text.innerText = currentQuizData.a;
    this.b_text.innerText = currentQuizData.b;
    this.c_text.innerText = currentQuizData.c;
    this.d_text.innerText = currentQuizData.d;
  }
  deselectAnswers() {
    this.answerEls.forEach((answerEl) => (answerEl.checked = false));
  }
}

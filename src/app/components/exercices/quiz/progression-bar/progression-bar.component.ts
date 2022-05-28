import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progression-bar',
  templateUrl: './progression-bar.component.html',
  styleUrls: ['./progression-bar.component.css']
})
export class ProgressionBarComponent implements OnInit {

  private formes: any[] = [
    {
      "done": "✓",
      "wrong": "✕",
      "not-finished": "●"
    }  
  ]
    

  constructor() { }

  ngOnInit(): void {
  }

}

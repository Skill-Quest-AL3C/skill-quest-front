import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModulesService, Section } from 'src/app/services/modules.service';
@Component({
  selector: 'app-liste-modules',
  templateUrl: './liste-modules.component.html',
  styleUrls: ['./liste-modules.component.css']
})
export class ListeModulesComponent implements OnInit {

  public sections$!: Observable<Section[]>;

  constructor(private router : Router, private modulesService: ModulesService) { }

  ngOnInit(): void {
    this.sections$ = this.modulesService.getSections();

    this.sections$.subscribe((sections) => {
      console.log(sections);
    });

    this.modulesService.init();
  }

}
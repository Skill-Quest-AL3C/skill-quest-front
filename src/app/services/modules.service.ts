import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Section {
  section_id: string;
  section_name: string;
  modules: Module[];
}

export interface Module {
  id: string;
  name: string;
  bg_img: string;
  cours: Cours[];
  exercices: Exercice[];
  boss: Boss;
}

export interface Cours {
  id: string;
  id_module: string;
  name: string;
}

export interface Exercice {
  id: string;
  id_module: string;
  name: string;
}

export interface Boss {
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class ModulesService {
  private sections$ = new BehaviorSubject<Section[]>([]);

  constructor(private http: HttpClient) {}

  public init(): void {
    this.http
    .get<Section[]>('/assets/modules/modules.json')
    .subscribe((sections) => {
      this.sections$.next(sections);
    });
  }

  public getSections(): Observable<Section[]> {
    return this.sections$;
  }
}

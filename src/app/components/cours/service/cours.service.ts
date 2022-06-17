import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  constructor(private http: HttpClient) {}

  getCoursTxt(id: string, id_module: string) {
    return this.http.get<any>('assets/cours/'+ id + "" + id_module + '.txt');
  }
}
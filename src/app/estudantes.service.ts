import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudante } from './estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {
   url = "http://localhost:3000/estudantes";
  constructor(private http: HttpClient) {}
  getEstudantes(): Observable<Estudante[]>{
  return this.http.get<[Estudante]>(this.url);
  }
  save(Estudante: Estudante): Observable<Estudante>{
    return this.http.post<Estudante>(this.url, Estudante);

  }
  edit(Estudante: Estudante): Observable<Estudante>{
    return this.http.put<Estudante>(`${this.url}/${Estudante.id}`, Estudante);
  }
  delete(Estudante: Estudante): Observable<void>{
    return this.http.delete<void>(`${this.url}/${Estudante.id}`);

  }


}

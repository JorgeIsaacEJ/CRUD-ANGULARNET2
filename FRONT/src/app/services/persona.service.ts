import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiURL = 'https://localhost:44325/api/persona/';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any>{
    return this.http.get(this.apiURL);
  }
  getPersona(id : number): Observable<any>{
    return this.http.get(this.apiURL + id);
  }
  crearPersona(persona : Persona): Observable<any>{
    return this.http.post(this.apiURL, persona);
  }
  actualizaPersona(persona : Persona): Observable<any>{
    return this.http.patch(this.apiURL, persona);
  }
  eliminarPersona(id : number): Observable<any>{
    return this.http.delete(this.apiURL + id);
  }
}

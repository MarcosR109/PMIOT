import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FichajesService {
  index() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8000/api/fichajes'; // Cambia esto a tu API de fichajes

  constructor(private http: HttpClient) { }

  getFichajes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

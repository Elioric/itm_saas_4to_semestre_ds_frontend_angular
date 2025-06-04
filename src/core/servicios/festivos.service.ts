import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Festivo } from 'src/shared/entidades/festivo';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {
  private apiUrl = 'http://localhost:8080/festivos';

  constructor(private http: HttpClient) {}

  verificarFestivo(anio: number, mes: number, dia: number): Observable<string> {
    const url = `${this.apiUrl}/verificar/${anio}/${mes}/${dia}`;
    return this.http.get(url, { responseType: 'text' });
  }

  obtenerFestivosPorAnio(anio: number): Observable<Festivo[]> {
    const url = `${this.apiUrl}/obtener/${anio}`;
    return this.http.get<Festivo[]>(url);
  }
}
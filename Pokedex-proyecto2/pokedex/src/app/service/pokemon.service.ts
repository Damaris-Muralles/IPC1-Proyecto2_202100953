import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })
  Cargarusuarios() : any {
    return this.http.get(`${this.API_URI}/users`);
  }
  CargarDatos() : any {
    return this.http.get(`${this.API_URI}/Pokemon`);
  }
  CargarDatosPorNumero(Numero:string) : any {
    return this.http.get(`${this.API_URI}/PokemonNumero/${Numero}`);
  }
  CargarDatosPorNombre(Nombre:string) : any {
    return this.http.get(`${this.API_URI}/PokemonNombre/${Nombre}`);
  }
  CargarDatosPorTipo(Tipo: string) : any {
    return this.http.get(`${this.API_URI}/PokemonTipo/${Tipo}`);
  }
 
  

}
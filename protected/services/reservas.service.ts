import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ReservaResponse } from '../interfaces/reserva.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private baseUrl : string = environment.baseUrl
  private _reserva!: ReservaResponse;

  get reserva() {
    return{...this._reserva}
  }
  
  constructor( private http: HttpClient) { }

  crearReserva(
    usuario: string | null,
    producto: string,
    disponible: boolean,
  ){
    const url = `${this.baseUrl}/registros`;
    const body = {usuario, producto, disponible}
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')
    return this.http.post<ReservaResponse>(url,body,{headers})
  .pipe(
    tap(resp => {
      if (resp) {
       this._reserva = {
         usuario    : resp.usuario,
         producto   : resp.producto,
         disponible : resp.disponible,
         _id        : resp._id,
         fechaInicial: resp.fechaInicial,
         fechaFinal : resp.fechaFinal
        }
      }
    }),
    map(valid => valid.disponible = true),
    catchError( err => of(false))
  )
  }
}

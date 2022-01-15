import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Usuario, AuthResponse } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl : string = environment.baseUrl
  private _usuario!: Usuario;

  get usuario() {
    return{...this._usuario}
  }

  constructor(private http: HttpClient) { }

  registro (
    nombre: string, 
    nombreCompleto: string, 
    pais: string, 
    ciudad: string, 
    correo: string, 
    password:string, 
    rol:string) 
    {
    const url = `${this.baseUrl}/usuarios`
    const body = {nombre, nombreCompleto, pais, ciudad, correo, password, rol}
    return this.http.post<AuthResponse>(url,body)
       .pipe(
         tap(resp => {
           if (resp.usuario.estado = true) {
            localStorage.setItem('token',JSON.stringify(resp.token))
            this._usuario = {
              nombre: resp.usuario.nombre!,
              nombreCompleto: resp.usuario.nombreCompleto!,
              pais: resp.usuario.pais!,
              ciudad: resp.usuario.ciudad!,
              correo: resp.usuario.correo!,
              password: resp.usuario.password!,
              rol: resp.usuario.rol!,
              uid: resp.usuario.uid!
             }
           }
         }),
         map(valid => valid.usuario.estado = true),
         catchError( err => of(false))
       )
  }

  login(correo:string, password:string) {
    const url = `${this.baseUrl}/auth/login`
    const body = {correo, password}

    return this.http.post<AuthResponse>(url,body)
      .pipe(
        tap(resp => {
          if(resp.usuario.estado = true)  {
            localStorage.setItem('token', resp.token!)
            this._usuario = {
              nombre: resp.usuario.nombre!,
              nombreCompleto: resp.usuario.nombreCompleto!,
              pais: resp.usuario.pais!,
              ciudad: resp.usuario.ciudad!,
              correo: resp.usuario.correo!,
              rol: resp.usuario.rol!,
              imagen: resp.usuario.imagen!,
              uid: resp.usuario.uid!
            }
          }
        }),
        map(valid => valid.usuario.estado = true),
        catchError( err => of(false))
      )
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/auth/interfaces/usuario.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl : string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getUsuarioPorId(id: string | null):Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/usuarios/${ id }`)
  } 

}


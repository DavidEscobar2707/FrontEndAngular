import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Producto, ProductoResponse } from '../interfaces/producto.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl : string = environment.baseUrl
  private _producto!: Producto;

  get producto() {
    return{...this._producto}
  }

  constructor( private http: HttpClient) { }

  getProducto():Observable<ProductoResponse> {
    return this.http.get<ProductoResponse>(`${this.baseUrl}/productos`)
  }
  getProductoPorId(id: string):Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/productos/${ id }`)
  }
  crearProducto(
    nombre: string, 
    telefono: number,
    direccion: string,
    pais: string, 
    ciudad: string, 
    categoria:string
  ){
    const url = `${this.baseUrl}/productos`;
    const body = {nombre, telefono, direccion, pais,  ciudad,  categoria}
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')
  return this.http.post<Producto>(url,body,{headers})
  .pipe(
    tap(resp => {
      if (resp.disponible = true) {
       this._producto = {
         nombre: resp.nombre!,
         telefono: resp.telefono!,
         direccion: resp.direccion!,
         pais: resp.pais!,
         ciudad: resp.ciudad!,
         categoria: resp.categoria!,
         _id: resp._id!,
         disponible: resp.disponible!,
         usuario: resp.usuario
        }
      }
    }),
    map(valid => valid.disponible = true),
    catchError( err => of(false))
  )
  }

  crearImagen(filename: FormData, id: string): Observable<HttpEvent<string[]>> {
    const url = `${this.baseUrl}/uploads/productos/${id}`;

    return this.http.put<string[]>(url,filename,{
      reportProgress: true,
      observe: 'events'
    })
  }
}

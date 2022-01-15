import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent  {
  
  

  nombres: string []= [];
  estatus = {status: '', request: '', percent: 0};


  constructor(
              private productoService: ProductoService ,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }


  crearImagen(archivos: File[]):void  {
      const fd = new FormData();
      for (const archivo of archivos)
        {
          fd.append('archivo',archivo, archivo.name)
        }
        this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.productoService.crearImagen( fd ,id)) 
        )
        .subscribe(evento =>{
          console.log(evento)
          this.reportarEvento(evento),
          (error: HttpErrorResponse) => console.log(error)
        }) 
        
  }
  private reportarEvento(evento: HttpEvent<string[]>) {
    switch(evento.type) {
      case HttpEventType.UploadProgress:
        this.estatusSubida(evento.loaded, evento.total!, 'Subiendo');
        break
      case HttpEventType.ResponseHeader:
        console.log('Header', evento)
        break;
      case HttpEventType.Response:
        this.estatus.status = 'hecho'
        break
      default:
        console.log(evento)
    }
  }
  private estatusSubida(loaded: number, total: number , request : string) {
    this.estatus.status = 'progreso';
    this.estatus.request = request;
    this.estatus.percent = Math.round(100 * loaded / total)
  }

}

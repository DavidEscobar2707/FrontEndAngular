import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';
import { ReservasService } from '../../services/reservas.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: []
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = []
  producto!: Producto
 
  id : string | null = ''
  usuario !: string | null
  disponible !: boolean
  fechaFinal !: number
  fechaInicial !: number
  productoId !: string

  constructor(private productoService: ProductoService,
              private reservasService: ReservasService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id')
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.productoService.getProductoPorId(id) )
      )
      .subscribe( producto => this.producto = producto)
    
      this.usuario = localStorage.getItem('id')
      this.disponible = false
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.reservasService.crearReserva(this.usuario, id, this.disponible) )
      )
        .subscribe(resp => { 
          console.log(resp)
        })
    
    
    }
    
    
    crear(){
      
  }
  

}

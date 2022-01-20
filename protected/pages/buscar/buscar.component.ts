import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: []
})
export class BuscarComponent implements OnInit {
  public texto: string = '';
  productos : Producto[] = []
  constructor( private activatedRoute: ActivatedRoute,
               private productoService: ProductoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
      this.texto = params['texto']
      
      this.productoService.buscarProductos(params['texto']).subscribe((productos: any) => {
        this.productos = productos['results']
        console.log(this.productos)
      })
    })
    
  }

}

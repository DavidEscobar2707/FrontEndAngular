import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  productos: Producto[] = []

  usuario !: string | null
  disponible !: boolean
  router: any;
  constructor( private reservasService: ReservasService,
               private productoService: ProductoService,
               private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
      this.productoService.getProducto()
      .subscribe(resp => {
        this.productos = resp['productos']
      })
    }
  
}



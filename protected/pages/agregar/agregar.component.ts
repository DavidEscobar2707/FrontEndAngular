import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto, Categoria } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: []
})
export class AgregarComponent  {
  productos : Producto[] = []

  constructor(private fb: FormBuilder,
              private router: Router,
              private productoService:ProductoService) { }

  formulario: FormGroup = this.fb.group({
    nombre:['Casa Azul 1',[Validators.required, Validators.minLength(4)]],
    telefono:['3001112222',[Validators.required]],
    direccion:['122 St',[Validators.required]],
    ciudad:['Santiago',[Validators.required]],
    pais:['Chile',[Validators.required]],
    categoria:['',[Validators.required]]
  })

  crear(){
    const {nombre, telefono, direccion, pais,  ciudad,  categoria} = this.formulario.value
    this.productoService.crearProducto(nombre, telefono, direccion, pais,  ciudad,  categoria)
      .subscribe(resp => {
        if (!resp) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El correo y/o nombre de usuario ya existen'
          })
        } else {
          this.router.navigateByUrl('dashboard/reserva')
          console.log(this.productos)
        }
      })
  }
}
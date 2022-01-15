import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    ` 
      * {
        margin:15,
      }
    
    `]
})
export class DashboardComponent implements OnInit {
  
  productos: Producto[] = []

  get usuario () {
    return this.authService.usuario;
  }

  get token() {
    return localStorage.getItem('token') 
  }

  

  constructor(private authService: AuthService,
              private productoService: ProductoService) { }


  ngOnInit(): void {
    
    this.productoService.getProducto()
      .subscribe(resp => {
        this.productos = resp['productos']
        console.log(this.productos)
      })
  }
    



}

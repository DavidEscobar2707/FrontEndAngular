import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/auth/interfaces/usuario.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id!: string | null 
  usuario !: Usuario 
  constructor(private authService: AuthService) {
    
               }

  ngOnInit(): void {
    this.id = localStorage.getItem('id')

    this.authService.getUsuarioPorId(this.id)
      .subscribe({
        next: resp => {this.usuario = resp},
        error: (err: Error) => console.error(err)
      })
  }
}

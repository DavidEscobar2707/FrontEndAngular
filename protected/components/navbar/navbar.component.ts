import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  faUserCircle = faUserCircle
  usuario!: Usuario
  id !: string | null
  constructor(private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id')
    this.usuarioService.getUsuarioPorId(this.id)
    .subscribe({
      next: resp => {this.usuario = resp},
      error: (err: Error) => console.error(err)
    })
  }
  buscar(texto: string) {
    texto = texto.trim()

    if (texto.length === 0) {
      return;
    }
    
    this.router.navigate(['dashboard/buscar', texto])
  }


  logout() {
    this.router.navigateByUrl('/auth')
  }
}

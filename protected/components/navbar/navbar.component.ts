import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/usuario.interface';

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
              private authService: AuthService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id')
    this.authService.getUsuarioPorId(this.id)
    .subscribe({
      next: resp => {this.usuario = resp},
      error: (err: Error) => console.error(err)
    })
  }

  logout() {
    this.router.navigateByUrl('/auth')
  }
}

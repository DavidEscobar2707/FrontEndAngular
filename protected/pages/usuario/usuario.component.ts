import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id: string | null = ''


  get usuario () {
    return this.authService.usuario;
  }

  constructor(private authService: AuthService) {
    
               }

  ngOnInit(): void {
     this.id = localStorage.getItem('id')
     
  }

}

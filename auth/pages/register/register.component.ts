import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent  {

  formulario: FormGroup = this.fb.group({
    nombre:['userName1',[Validators.required]],
    nombreCompleto:['Antonio José Ricaute',[Validators.required]],
    pais:['Colombia',[Validators.required]],
    ciudad:['Medellín',[Validators.required]],
    correo:['test@test.com',[Validators.required, Validators.email]],
    password:['contraseña',[Validators.required, Validators.minLength(6)]],
    rol:['',[Validators.required]]
  })

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  registro() {
    const {nombre, nombreCompleto, pais, ciudad, correo, password, rol} = this.formulario.value

    this.authService.registro( nombre, nombreCompleto, pais, ciudad, correo, password, rol )
      .subscribe( estado => {
        if(estado === true) {
          this.router.navigateByUrl('/dashboard')
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El correo y/o nombre de usuario ya existen'
          })
        }
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent  {

  formulario: FormGroup = this.fb.group({
    correo:['test3@gmail.com',[Validators.required, Validators.email]],
    password:['contraseña',[Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  login() {
    console.log(this.formulario.value)
    
    const {correo, password} = this.formulario.value

    this.authService.login( correo, password )
      .subscribe( ok => {
        if(ok) {
          this.router.navigateByUrl('/dashboard')
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El correo y/o con contraseña no son correctos'
          })
        }
      })
  }

}

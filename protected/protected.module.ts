import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ComponentsModule } from './components/components.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagenComponent } from './pages/imagen/imagen.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductoComponent,
    BuscarComponent,
    AgregarComponent,
    ImagenComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }

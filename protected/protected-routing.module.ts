import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ImagenComponent } from './pages/imagen/imagen.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ReservaComponent } from './pages/reserva/reserva.component';


const routes: Routes = [
  {
    path:'',
    children: [
      {path: '', component: DashboardComponent},
      {path: 'producto/:id', component: ProductoComponent},
      {path: 'agregar', component: AgregarComponent},
      {path: 'usuario', component: UsuarioComponent},
      {path: 'reserva', component: ReservaComponent},
      {path: 'buscar/:texto', component: BuscarComponent},
      {path: 'producto/imagen/:id', component: ImagenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }

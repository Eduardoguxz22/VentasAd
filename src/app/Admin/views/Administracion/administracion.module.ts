import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionRoutes } from './Administracion.routing';
import {
  ListClienteComponent,
  AddClienteComponent,
  ListEmpresaComponent,
  AddEmpresaComponent,
  ListProveedorComponent,
  AddProveedorComponent,
  ListSeriesComponent,
  AddSeriesComponent,
  ListAfectacionComponent,
  AddAfectaccionComponent,
  ListComprobanteComponent,
  AddComprobanteComponent
} from '../Administracion';


@NgModule({
  declarations: [
    ListClienteComponent,
    AddClienteComponent,
    ListEmpresaComponent,
    AddEmpresaComponent,
    ListProveedorComponent,
    AddProveedorComponent,
    ListSeriesComponent,
    AddSeriesComponent,
    ListAfectacionComponent,
    AddAfectaccionComponent,
    ListComprobanteComponent,
    AddComprobanteComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutes
  ]
})
export class AdministracionModule { }

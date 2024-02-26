import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesRoutes } from './reportes.routing';
import {
  KardexTotalizadoComponent,
  KardexXProductoComponent,
  RegistroDeVentasComponent,
  VentasXCategoriaComponent,
  VentasXProductoComponent
} from '../Reportes';


@NgModule({
  declarations: [
    KardexTotalizadoComponent,
    KardexXProductoComponent,
    RegistroDeVentasComponent,
    VentasXCategoriaComponent,
    VentasXProductoComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutes
  ]
})
export class ReportesModule { }

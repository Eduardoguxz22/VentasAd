import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AddCotizacionComponent,
  ListCotizacionComponent,
  EmitirBoletaComponent,
  EmitirFacturaComponent,
  NotaDeCreditoComponent,
  NotaDeDebitoComponent,
  ResumenDeBoletasComponent
} from '.';
import { PuntoVentaRoutes } from './puntoventa.routing';


@NgModule({
  declarations: [
    AddCotizacionComponent,
    ListCotizacionComponent,
    EmitirBoletaComponent,
    EmitirFacturaComponent,
    NotaDeCreditoComponent,
    NotaDeDebitoComponent,
    ResumenDeBoletasComponent
  ],
  imports: [
    CommonModule,
    PuntoVentaModule,
    PuntoVentaRoutes
  ]
})
export class PuntoVentaModule { }

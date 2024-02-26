import { Routes, RouterModule } from '@angular/router';
import {
  AddCotizacionComponent,
  ListCotizacionComponent,
  EmitirBoletaComponent,
  EmitirFacturaComponent,
  NotaDeCreditoComponent,
  NotaDeDebitoComponent,
  ResumenDeBoletasComponent
} from '../Puntoventa';

export const routes: Routes = [
{path: 'add_Cotizacion', component:AddCotizacionComponent},
{path: 'list_Cotizacion', component:ListCotizacionComponent},
{path: 'emitir_Boleta', component:EmitirBoletaComponent},
{path: 'emitir_faactura', component:EmitirFacturaComponent},
{path: 'nota_credito', component:NotaDeCreditoComponent},
{path: 'nota_debito', component:NotaDeDebitoComponent},
{path: 'resumen_boletas', component:ResumenDeBoletasComponent},
];

export const PuntoVentaRoutes = RouterModule.forChild(routes);

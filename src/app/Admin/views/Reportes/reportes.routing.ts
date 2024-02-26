import { Routes, RouterModule } from '@angular/router';
import {
  KardexTotalizadoComponent,
  KardexXProductoComponent,
  RegistroDeVentasComponent,
  VentasXCategoriaComponent,
  VentasXProductoComponent
} from '../Reportes';

export const routes: Routes = [
  { path: 'kardex_totalizado', component: KardexTotalizadoComponent },
  { path: 'kardex_producto', component: KardexXProductoComponent },
  { path: 'registro_ventas', component: RegistroDeVentasComponent },
  { path: 'ventas_x_categoria', component: VentasXCategoriaComponent },
  { path: 'ventas_x_producto', component: VentasXProductoComponent },
];

export const ReportesRoutes = RouterModule.forChild(routes);

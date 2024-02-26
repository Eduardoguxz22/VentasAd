import { Routes, RouterModule } from '@angular/router';
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


export const routes: Routes = [

  { path: 'list_cliente', component: ListClienteComponent, },
  { path: 'add_cliente', component: AddClienteComponent },
  { path: 'list_empresa', component: ListEmpresaComponent },
  { path: 'add_empresa', component: AddEmpresaComponent },
  { path: 'list_proveedores', component: ListProveedorComponent },
  { path: 'add_proveedores', component: AddProveedorComponent },
  { path: 'list_series', component: ListSeriesComponent },
  { path: 'add_series', component: AddSeriesComponent },
  { path: 'list_afectaciones', component: ListAfectacionComponent },
  { path: 'add_afectaciones', component: AddAfectaccionComponent },
  { path: 'list_comprobantes', component: ListComprobanteComponent },
  { path: 'add_comprobantes', component: AddComprobanteComponent },

];



export const AdministracionRoutes = RouterModule.forChild(routes);

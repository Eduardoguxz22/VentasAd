import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './Components/navigation/navigation.component';





export const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,


    children: [
      {
        path: 'administracion',
        loadChildren: () => import('./views/Administracion/administracion.module').then(m => m.AdministracionModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./views/Productos/productos.module').then(m => m.ProductosModule)
      },
     
      {
        path: 'administracion',
        loadChildren: () => import('./views/Administracion/administracion.module').then(m => m.AdministracionModule)
      },
      {
        path: 'reportes',
        loadChildren: () => import('./views/Reportes/reportes.module').then(m => m.ReportesModule)
      },
      /*{
        path: 'seguridad',
        loadChildren: () => import('./views/Seguridad/').then(m => m.ReportesModule)
      },*/ 
    

    ]
  }


];

export const AdminRoutes = RouterModule.forChild(routes);

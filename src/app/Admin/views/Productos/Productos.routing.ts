import { Routes, RouterModule } from '@angular/router';
// Importar todos los componentes utilizando el barril desde la carpeta Productos
import {
  AddCategoriaComponent,
  ListCategoriaComponent,
  ListProductoComponent,
  AddProductoComponent
} from '../Productos';

// Ahora puedes usar los componentes importados normalmente en tu código


export const routes: Routes = [

  
  { path: 'add_Categoria', component: AddCategoriaComponent },
  { path: 'list_Categoria', component: ListCategoriaComponent },
  { path: 'add_Producto', component: AddProductoComponent },
  { path: 'list_Producto', component: ListProductoComponent },
];

export const ProductosRoutes = RouterModule.forChild(routes);

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutes } from './Productos.routing';
import { ListCategoriaComponent } from './Categoria/ListCategoria/ListCategoria.component';
import { AddCategoriaComponent } from './Categoria/AddCategoria/AddCategoria.component';
import { AddProductoComponent } from './Producto/AddProducto/AddProducto.component';
import { ListProductoComponent } from './Producto/ListProducto/ListProducto.component';
import { ProductsTableComponent } from './Producto/ListProducto/products-table/products-table.component';

@NgModule({
  declarations: [
    ListCategoriaComponent,
    AddCategoriaComponent,
    AddProductoComponent,
    ListProductoComponent,
  ],
  imports: [CommonModule, ProductosRoutes, ProductsTableComponent],
})
export class ProductosModule {}

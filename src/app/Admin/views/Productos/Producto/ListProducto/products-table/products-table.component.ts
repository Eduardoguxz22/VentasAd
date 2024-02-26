import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface InventoryData {
  categoryId: number;
  category: string;
  productImage: string;
  IGVTypeId: number;
  unitId: string;
  price: number;
  'price C/IGV': number;
  'price S/IGV': number;
  'maxPrice C/IGV': number;
  'maxPrice S/IGV': number;
  'offerPrice C/IGV': number;
}

const data: InventoryData[] = [
  {
    categoryId: 0,
    category: 'Fruit',
    productImage: 'http://localhost:4200',
    IGVTypeId: 10,
    unitId: 'unit',
    price: 1,
    'price C/IGV': 1,
    'price S/IGV': 1,
    'maxPrice C/IGV': 0.9,
    'maxPrice S/IGV': 0.9,
    'offerPrice C/IGV': 0.8,
  },
];
@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css',
  imports: [MatTableModule],
  standalone: true,
})
export class ProductsTableComponent {
  displayedColumns = [
    'categoryId',
    'category',
    'productImage',
    'IGVTypeId',
    'unitId',
    'price',
    'price C/IGV',
    'price S/IGV',
    'maxPrice C/IGV',
    'maxPrice S/IGV',
    'offerPrice C/IGV',
  ];
  data = data;
}

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VentasXProductoComponent } from './ventas-x-Producto.component';

describe('VentasXProductoComponent', () => {
  let component: VentasXProductoComponent;
  let fixture: ComponentFixture<VentasXProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasXProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasXProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

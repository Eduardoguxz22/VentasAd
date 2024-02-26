/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KardexXProductoComponent } from './Kardex-x-Producto.component';

describe('KardexXProductoComponent', () => {
  let component: KardexXProductoComponent;
  let fixture: ComponentFixture<KardexXProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexXProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexXProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

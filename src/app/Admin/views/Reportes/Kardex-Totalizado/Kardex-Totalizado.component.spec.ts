/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KardexTotalizadoComponent } from './Kardex-Totalizado.component';

describe('KardexTotalizadoComponent', () => {
  let component: KardexTotalizadoComponent;
  let fixture: ComponentFixture<KardexTotalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexTotalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexTotalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

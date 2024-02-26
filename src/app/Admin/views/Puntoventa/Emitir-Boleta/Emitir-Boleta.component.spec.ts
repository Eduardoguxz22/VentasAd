/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmitirBoletaComponent } from './Emitir-Boleta.component';

describe('EmitirBoletaComponent', () => {
  let component: EmitirBoletaComponent;
  let fixture: ComponentFixture<EmitirBoletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitirBoletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitirBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

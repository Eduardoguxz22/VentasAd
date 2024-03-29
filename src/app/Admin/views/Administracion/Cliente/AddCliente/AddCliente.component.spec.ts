/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddClienteComponent } from './AddCliente.component';

describe('AddClienteComponent', () => {
  let component: AddClienteComponent;
  let fixture: ComponentFixture<AddClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

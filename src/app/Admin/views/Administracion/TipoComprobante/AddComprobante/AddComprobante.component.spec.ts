/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddComprobanteComponent } from './AddComprobante.component';

describe('AddComprobanteComponent', () => {
  let component: AddComprobanteComponent;
  let fixture: ComponentFixture<AddComprobanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComprobanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

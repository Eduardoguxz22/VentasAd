/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotaDeDebitoComponent } from './Nota-de-debito.component';

describe('NotaDeDebitoComponent', () => {
  let component: NotaDeDebitoComponent;
  let fixture: ComponentFixture<NotaDeDebitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaDeDebitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaDeDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

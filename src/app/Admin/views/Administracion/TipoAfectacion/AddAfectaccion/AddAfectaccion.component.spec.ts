/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddAfectaccionComponent } from './AddAfectaccion.component';

describe('AddAfectaccionComponent', () => {
  let component: AddAfectaccionComponent;
  let fixture: ComponentFixture<AddAfectaccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAfectaccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAfectaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListAfectacionComponent } from './ListAfectacion.component';

describe('ListAfectacionComponent', () => {
  let component: ListAfectacionComponent;
  let fixture: ComponentFixture<ListAfectacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAfectacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAfectacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

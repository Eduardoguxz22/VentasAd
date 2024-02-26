/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyContainComponent } from './MyContain.component';

describe('MyContainComponent', () => {
  let component: MyContainComponent;
  let fixture: ComponentFixture<MyContainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyContainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

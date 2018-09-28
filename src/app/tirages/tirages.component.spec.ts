/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TiragesComponent } from './tirages.component';

describe('TiragesComponent', () => {
  let component: TiragesComponent;
  let fixture: ComponentFixture<TiragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

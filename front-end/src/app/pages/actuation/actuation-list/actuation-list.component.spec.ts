/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActuationListComponent } from './actuation-list.component';

describe('ActuationListComponent', () => {
  let component: ActuationListComponent;
  let fixture: ComponentFixture<ActuationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActuationListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

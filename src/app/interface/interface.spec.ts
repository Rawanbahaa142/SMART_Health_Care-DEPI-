import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interface } from './interface';

describe('Interface', () => {
  let component: Interface;
  let fixture: ComponentFixture<Interface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Interface]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interface);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

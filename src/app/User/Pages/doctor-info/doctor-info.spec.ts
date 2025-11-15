import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInfo } from './doctor-info';

describe('DoctorInfo', () => {
  let component: DoctorInfo;
  let fixture: ComponentFixture<DoctorInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

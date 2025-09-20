import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmoreButton } from './readmore-button';

describe('ReadmoreButton', () => {
  let component: ReadmoreButton;
  let fixture: ComponentFixture<ReadmoreButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadmoreButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadmoreButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

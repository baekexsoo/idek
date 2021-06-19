import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BananesComponent } from './bananes.component';

describe('BananesComponent', () => {
  let component: BananesComponent;
  let fixture: ComponentFixture<BananesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BananesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BananesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

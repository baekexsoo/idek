import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoandzouComponent } from './voandzou.component';

describe('VoandzouComponent', () => {
  let component: VoandzouComponent;
  let fixture: ComponentFixture<VoandzouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoandzouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoandzouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

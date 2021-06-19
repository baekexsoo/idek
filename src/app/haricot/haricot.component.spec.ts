import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaricotComponent } from './haricot.component';

describe('HaricotComponent', () => {
  let component: HaricotComponent;
  let fixture: ComponentFixture<HaricotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaricotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaricotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

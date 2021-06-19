import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilComponent } from './ail.component';

describe('AilComponent', () => {
  let component: AilComponent;
  let fixture: ComponentFixture<AilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

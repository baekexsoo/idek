import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnameComponent } from './igname.component';

describe('IgnameComponent', () => {
  let component: IgnameComponent;
  let fixture: ComponentFixture<IgnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

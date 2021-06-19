import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GingembreComponent } from './gingembre.component';

describe('GingembreComponent', () => {
  let component: GingembreComponent;
  let fixture: ComponentFixture<GingembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GingembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GingembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

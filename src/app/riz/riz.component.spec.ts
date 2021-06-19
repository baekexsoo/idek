import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RizComponent } from './riz.component';

describe('RizComponent', () => {
  let component: RizComponent;
  let fixture: ComponentFixture<RizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

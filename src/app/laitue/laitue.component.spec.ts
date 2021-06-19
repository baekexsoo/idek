import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaitueComponent } from './laitue.component';

describe('LaitueComponent', () => {
  let component: LaitueComponent;
  let fixture: ComponentFixture<LaitueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaitueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaitueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

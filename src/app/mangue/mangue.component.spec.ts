import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangueComponent } from './mangue.component';

describe('MangueComponent', () => {
  let component: MangueComponent;
  let fixture: ComponentFixture<MangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

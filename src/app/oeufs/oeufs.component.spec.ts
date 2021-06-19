import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeufsComponent } from './oeufs.component';

describe('OeufsComponent', () => {
  let component: OeufsComponent;
  let fixture: ComponentFixture<OeufsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeufsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OeufsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

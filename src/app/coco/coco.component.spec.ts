import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoComponent } from './coco.component';

describe('CocoComponent', () => {
  let component: CocoComponent;
  let fixture: ComponentFixture<CocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

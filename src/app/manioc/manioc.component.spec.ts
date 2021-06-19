import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManiocComponent } from './manioc.component';

describe('ManiocComponent', () => {
  let component: ManiocComponent;
  let fixture: ComponentFixture<ManiocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManiocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManiocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

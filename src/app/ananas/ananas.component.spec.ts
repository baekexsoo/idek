import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnanasComponent } from './ananas.component';

describe('AnanasComponent', () => {
  let component: AnanasComponent;
  let fixture: ComponentFixture<AnanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnanasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

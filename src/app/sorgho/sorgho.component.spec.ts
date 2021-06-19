import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorghoComponent } from './sorgho.component';

describe('SorghoComponent', () => {
  let component: SorghoComponent;
  let fixture: ComponentFixture<SorghoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorghoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorghoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

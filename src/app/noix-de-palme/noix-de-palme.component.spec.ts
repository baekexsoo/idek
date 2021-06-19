import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoixDePalmeComponent } from './noix-de-palme.component';

describe('NoixDePalmeComponent', () => {
  let component: NoixDePalmeComponent;
  let fixture: ComponentFixture<NoixDePalmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoixDePalmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoixDePalmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

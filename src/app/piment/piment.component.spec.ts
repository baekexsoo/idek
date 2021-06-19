import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PimentComponent } from './piment.component';

describe('PimentComponent', () => {
  let component: PimentComponent;
  let fixture: ComponentFixture<PimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

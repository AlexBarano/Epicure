import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsPageComponent } from './chefs-page.component';

describe('ChefsPageComponent', () => {
  let component: ChefsPageComponent;
  let fixture: ComponentFixture<ChefsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

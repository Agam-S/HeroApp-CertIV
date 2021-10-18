import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVillainsComponent } from './all-villains.component';

describe('AllVillainsComponent', () => {
  let component: AllVillainsComponent;
  let fixture: ComponentFixture<AllVillainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVillainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVillainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

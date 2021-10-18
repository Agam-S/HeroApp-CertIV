import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHeroesComponent } from './all-heroes.component';

describe('AllHeroesComponent', () => {
  let component: AllHeroesComponent;
  let fixture: ComponentFixture<AllHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

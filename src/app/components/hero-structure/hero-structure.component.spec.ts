import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroStructureComponent } from './hero-structure.component';

describe('HeroStructureComponent', () => {
  let component: HeroStructureComponent;
  let fixture: ComponentFixture<HeroStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainStructureComponent } from './villain-structure.component';

describe('VillainStructureComponent', () => {
  let component: VillainStructureComponent;
  let fixture: ComponentFixture<VillainStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillainStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

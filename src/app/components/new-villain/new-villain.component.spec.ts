import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVillainComponent } from './new-villain.component';

describe('NewVillainComponent', () => {
  let component: NewVillainComponent;
  let fixture: ComponentFixture<NewVillainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVillainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

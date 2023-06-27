import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLeavesCardComponent } from './staff-leaves-card.component';

describe('StaffLeavesCardComponent', () => {
  let component: StaffLeavesCardComponent;
  let fixture: ComponentFixture<StaffLeavesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLeavesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffLeavesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

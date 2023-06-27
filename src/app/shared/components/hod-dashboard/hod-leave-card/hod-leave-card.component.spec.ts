import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodLeaveCardComponent } from './hod-leave-card.component';

describe('HodLeaveCardComponent', () => {
  let component: HodLeaveCardComponent;
  let fixture: ComponentFixture<HodLeaveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodLeaveCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodLeaveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

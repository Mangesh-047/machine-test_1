import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacbarComponent } from './snacbar.component';

describe('SnacbarComponent', () => {
  let component: SnacbarComponent;
  let fixture: ComponentFixture<SnacbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnacbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnacbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainSeatbookingComponent } from './train-seatbooking.component';

describe('TrainSeatbookingComponent', () => {
  let component: TrainSeatbookingComponent;
  let fixture: ComponentFixture<TrainSeatbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainSeatbookingComponent]
    });
    fixture = TestBed.createComponent(TrainSeatbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

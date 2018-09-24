import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryDisplayComponent } from './itinerary-display.component';

describe('ItineraryDisplayComponent', () => {
  let component: ItineraryDisplayComponent;
  let fixture: ComponentFixture<ItineraryDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

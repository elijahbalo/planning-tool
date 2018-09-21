import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriveDisplayComponent } from './arrive-display.component';

describe('ArriveDisplayComponent', () => {
  let component: ArriveDisplayComponent;
  let fixture: ComponentFixture<ArriveDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArriveDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArriveDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

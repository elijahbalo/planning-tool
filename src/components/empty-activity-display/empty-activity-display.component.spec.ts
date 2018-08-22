import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyActivityDisplayComponent } from './empty-activity-display.component';

describe('EmptyActivityDisplayComponent', () => {
  let component: EmptyActivityDisplayComponent;
  let fixture: ComponentFixture<EmptyActivityDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyActivityDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyActivityDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

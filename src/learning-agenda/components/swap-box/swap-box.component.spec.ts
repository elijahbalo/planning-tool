import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapBoxComponent } from './swap-box.component';

describe('SwapBoxComponent', () => {
  let component: SwapBoxComponent;
  let fixture: ComponentFixture<SwapBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

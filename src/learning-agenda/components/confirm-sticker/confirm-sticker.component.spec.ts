import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmStickerComponent } from './confirm-sticker.component';

describe('ConfirmStickerComponent', () => {
  let component: ConfirmStickerComponent;
  let fixture: ComponentFixture<ConfirmStickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmStickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

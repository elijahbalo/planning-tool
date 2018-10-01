import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-activity-display',
  templateUrl: './empty-activity-display.component.html',
  styleUrls: ['./empty-activity-display.component.scss']
})
export class EmptyActivityDisplayComponent implements OnInit {
  @Output()
  nxt: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  prev: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  showNext;
  @Output()
  addItem: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  disable;
  @Input()
  isClickable;
  constructor() {}

  ngOnInit() {
    console.log(this.isClickable);
  }

  addActivity() {
    let num = JSON.parse(localStorage.getItem('num'));
    localStorage.setItem('add', JSON.stringify(true));
    this.addItem.emit(false);
    localStorage.setItem('num', JSON.stringify(num + 1));
  }

  next() {
    // localStorage.setItem('f_grade1', JSON.stringify(this.model.options));
    this.nxt.emit(true);
    this.prev.emit('step4');
  }
}

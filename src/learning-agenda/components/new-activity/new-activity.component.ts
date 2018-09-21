import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})
export class NewActivityComponent implements OnInit {
  @Output()
  set: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  nxt: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  prev: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  change() {
    this.set.emit(true);
  }
  next() {
    this.nxt.emit(true);
    this.prev.emit('step4');
  }
}

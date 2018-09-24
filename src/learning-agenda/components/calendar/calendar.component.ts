import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Output()
  nxt: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  prev: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  newDate: EventEmitter<any> = new EventEmitter<any>();
  hoveredDate: NgbDateStruct;
  set = false;
  date: Date;
  js_date: Date;
  constructor(private calendar: NgbCalendar) {}
  ngOnInit() {}
  get today() {
    return new Date();
  }

  setDate(year, month, day) {
    if (day === undefined) {
      return;
    }

    this.js_date = new Date(year, month, day);
    if (this.js_date) {
      return this.js_date;
    } else {
      return 'no date selected';
    }
  }

  next() {
    this.newDate.emit(this.js_date);
    this.nxt.emit(true);
    this.prev.emit('step3');
  }
}

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
  hoveredDate: NgbDateStruct;

  model: NgbDateStruct;
  date: { year: number; month: number; day: number };
  constructor(private calendar: NgbCalendar) {}
  ngOnInit() {}
  selectToday() {
    this.model = this.calendar.getToday();
  }

  next() {
    this.nxt.emit(true);
    this.prev.emit('step3');
  }
}

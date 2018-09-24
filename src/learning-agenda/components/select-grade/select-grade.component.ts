import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-select-grade',
  templateUrl: './select-grade.component.html',
  styleUrls: ['./select-grade.component.scss']
})
export class SelectGradeComponent implements OnInit {
  @Output()
  nxt: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  prev: EventEmitter<any> = new EventEmitter<any>();
  model = { options: '' };
  g_filter = [];
  constructor() {}

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('f_grade'))) {
      this.model.options = JSON.parse(localStorage.getItem('f_grade'));
    }
  }

  ngAfterViewInit() {
    $('#Grade6To8').prop('checked', true);
  }

  populateFilter(field, event) {
    if (event == false) {
      let filter = JSON.parse(localStorage.getItem('g_filter'));
      let index = filter.findIndex(elem => elem == field);
      filter.splice(index, 1);
      this.g_filter = filter;
      localStorage.setItem('g_filter', JSON.stringify(this.g_filter));
    } else {
      this.g_filter.push(field);
      localStorage.setItem('g_filter', JSON.stringify(this.g_filter));
    }
  }

  next() {
    localStorage.setItem('f_grade1', JSON.stringify(this.model.options));
    this.nxt.emit(true);
    this.prev.emit('step1');
  }
}

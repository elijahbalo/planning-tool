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
  @Input()
  model;
  check1;
  check2;
  check3;
  g_filter = [];
  @Input()
  enabled = false;
  constructor() {}

  ngOnInit() {
    /* if (JSON.parse(localStorage.getItem('f_grade'))) {
      this.model.options = JSON.parse(localStorage.getItem('f_length'));
    } */
    /*    if (JSON.parse(localStorage.getItem('g_filter'))) {
      let filters = JSON.parse(localStorage.getItem('g_filter'));
      filters.map(elem => {
        if (elem == 'kinderTo2') {
          this.check1 = true;
        }
        if (elem == 'Gr3To5') {
          this.check2 = true;
        }
        if (elem == 'Gr6To8') {
          this.check3 = true;
        }
      });
    } */
  }

  populateFilter(field, event) {
    if (event == false) {
      let filter = JSON.parse(localStorage.getItem('g_filter'));
      let index = filter.findIndex(elem => elem == field);
      filter.splice(index, 1);
      this.g_filter = filter;
      localStorage.setItem('g_filter', JSON.stringify(this.g_filter));
    } else {
      if (JSON.parse(localStorage.getItem('g_filter'))) {
        this.g_filter = JSON.parse(localStorage.getItem('g_filter'));
      }
      console.log(this.g_filter);
      this.g_filter.push(field);
      console.log(this.g_filter);
      localStorage.setItem('g_filter', JSON.stringify(this.g_filter));
    }
  }

  enable() {
    this.enabled = true;
  }

  next() {
    localStorage.setItem('f_grade', JSON.stringify(this.model));

    this.nxt.emit(true);
    this.prev.emit('step1');
  }
}

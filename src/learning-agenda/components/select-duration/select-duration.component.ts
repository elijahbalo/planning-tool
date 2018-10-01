import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-duration',
  templateUrl: './select-duration.component.html',
  styleUrls: ['./select-duration.component.scss']
})
export class SelectDurationComponent implements OnInit {
  @Output()
  nxt: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  prev: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  model;
  constructor() {}

  ngOnInit() {
    /*  if (JSON.parse(localStorage.getItem('f_length'))) {
      this.model.options = JSON.parse(localStorage.getItem('f_length'));
    } */
  }

  next() {
    localStorage.setItem('day', JSON.stringify(this.model));
    if (JSON.parse(localStorage.getItem('day')) == '') {
    } else {
      this.nxt.emit(true);
      this.prev.emit('step2');
    }
  }
}

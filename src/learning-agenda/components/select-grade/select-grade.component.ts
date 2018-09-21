import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  

  next(){
   this.nxt.emit(true)
   this.prev.emit("step1")
  }
}

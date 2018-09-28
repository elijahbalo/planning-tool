import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-activity-display',
  templateUrl: './empty-activity-display.component.html',
  styleUrls: ['./empty-activity-display.component.scss']
})
export class EmptyActivityDisplayComponent implements OnInit {
  @Input()
  showNext = false;
  @Output()
  addItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  addActivity() {
    localStorage.setItem('add', JSON.stringify(true));
    this.addItem.emit(true);
  }
}

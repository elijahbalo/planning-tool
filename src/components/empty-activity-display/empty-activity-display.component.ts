import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-empty-activity-display',
  templateUrl: './empty-activity-display.component.html',
  styleUrls: ['./empty-activity-display.component.scss']
})
export class EmptyActivityDisplayComponent implements OnInit {

  @Output() set: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

change(){
  this.set.emit(true)
}


}

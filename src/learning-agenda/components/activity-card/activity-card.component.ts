import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent implements OnInit {

@Input() item: any;
@Output() newItem: EventEmitter<any> = new EventEmitter<any>();
@Output() length: EventEmitter<any> = new EventEmitter<any>();



  constructor() {
    
  }

  ngOnInit() {
  }
 
changeItem(event: any){
  
  this.newItem.emit(event);
  this.length.emit(event.length);
}

}

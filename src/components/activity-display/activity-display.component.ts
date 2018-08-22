import { Component, OnInit, Input, Output } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  styleUrls: ['./activity-display.component.scss']
})
export class ActivityDisplayComponent implements OnInit {

  @Input() itinerary

  constructor() { }

  ngOnInit() {
    
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input()
  id;
  @Input()
  url;
  @Input()
  date;
  @Input()
  month;
  @Input()
  day;
  @Input()
  year;
  constructor() {}

  ngOnInit() {}
}

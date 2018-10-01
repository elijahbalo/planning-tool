import { Component, OnInit ,Input, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent  implements OnInit {
  @Input()
  route
  
  constructor() {}

  ngOnInit() {
   
  }


}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 hide = false
 @Input() item;
 @Input() modal = false
 @Output() set: EventEmitter<any> = new EventEmitter<any>(); 
  constructor() { }

  ngOnInit() {
  }
  toggleModal(){
    if(this.modal == false)this.modal = true
    else{
      this.modal = false;
      this.set.emit(false)
    }
  }

  toggleHide(){
    if(this.hide == false)this.hide = true
    else{
      this.hide = false;
   
    }
  }


}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 hide = false
 @Input() item;
 @Input() modal = false
  constructor() { }

  ngOnInit() {
  }
  toggleModal(){
    if(this.modal == false)this.modal = true
    else{
      this.modal = false;
    }
  }

  toggleHide(){
    if(this.hide == false)this.hide = true
    else{
      this.hide = true;
    }
  }
}

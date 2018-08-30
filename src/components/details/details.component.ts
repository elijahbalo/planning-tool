import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 @Input() item;
 @Input() modal
  constructor() { }

  ngOnInit() {
  }
  toggleModal(){
    if(this.modal == false)this.modal = true
    else{
      this.modal = false;
    }
  }
}

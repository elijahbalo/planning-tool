import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-swap-box',
  templateUrl: './swap-box.component.html',
  styleUrls: ['./swap-box.component.scss']
})
export class SwapBoxComponent implements OnInit {
  modal = false
 closeResult: string;
 innerSwap = false
 @Input() ord
 @Input() item
 @Output() swap: EventEmitter<any> = new EventEmitter<any>();
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }



  check(order){
    if (order == this.ord)
    return true
    else{
      return false
    }
  }


  fixItem(event){
    this.swap.emit(event)
  }


  toggleInnerSwap(){
    if(this.innerSwap == false)this.innerSwap = true
    else{
      this.innerSwap = false;
    }
  }

  toggleModal(){
    if(this.modal == false)this.modal = true
    else{
      this.modal = false;
    }
  }

  setModalFromChild(event){
    this.modal = event;
  }
}

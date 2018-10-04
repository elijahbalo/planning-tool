import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-swap-box',
  templateUrl: './swap-box.component.html',
  styleUrls: ['./swap-box.component.scss']
})
export class SwapBoxComponent implements OnInit {
  modal = false;
  closeResult: string;
  innerSwap = false;
  @Input()
  newSelection = false;
  @Input()
  activity;
  @Input()
  activities;
  @Input()
  presentItem;
  @Input()
  itn;
  @Output()
  selectedItm: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  presentItm: EventEmitter<any> = new EventEmitter<any>();
  contains = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.containedInActivities();
  }

  open(content) {
    this.modalService.open(content).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
  
  selected() {
    if (this.activity.order == this.presentItem.order) {
      return true;
    }
    return false;
  }
  containedInActivities() {
    this.itn.map(elem => {
      if (elem.order == this.activity.order) {
        this.contains = true;
      }
    });
  }
  selectItem(newItem) {
    this.selectedItm.emit(newItem);
  }
  toggleModal() {
    if (this.modal == false) this.modal = true;
    else {
      this.modal = false;
    }
  }

  setModalFromChild(event) {
    this.modal = event;
  }
}

import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  closeResult: string;
  public innerWidth: any;
  constructor(private modalService: NgbModal) {
    this.onResize();
  }
  ngOnInit(){
    this.innerWidth = window.innerWidth;
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }


  @HostListener('window:resize', ['$event'])
onResize(event?) {
  this.innerWidth = window.innerWidth;
  console.log(this.innerWidth)
}
}

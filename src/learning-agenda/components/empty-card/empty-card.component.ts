import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empty-card',
  templateUrl: './empty-card.component.html',
  styleUrls: ['./empty-card.component.scss']
})
export class EmptyCardComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal,  private router: Router,
    private route:ActivatedRoute) {}
  ngOnInit(){
    
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  navigateToDesignPage(){
    this.router.navigateByUrl('DesignPage');
  }
}

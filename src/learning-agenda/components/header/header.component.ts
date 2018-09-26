import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HostListener } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header-old',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  design
  confirm
  submit
  closeResult: string;
  public innerWidth: any;
  constructor(private modalService: NgbModal,private router: Router,
    private route:ActivatedRoute) {
    this.onResize();
  }
  ngOnInit(){

    this.innerWidth = window.innerWidth;
    this.design = JSON.parse(localStorage.getItem('design')) 
    this.confirm = JSON.parse(localStorage.getItem('confirm')) 
    this.submit = JSON.parse(localStorage.getItem('submit')) 
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
navigateToLanding(){
  localStorage.setItem('edit', JSON.stringify(true))
  this.router.navigateByUrl('LandingPage');
}
navigateToDesign(){
  localStorage.setItem('edit', JSON.stringify(true))
  this.router.navigateByUrl('DesignPage');
}

navigateToConfirm(){
  localStorage.setItem('edit', JSON.stringify(true))
  this.router.navigateByUrl('ConfirmPage');
}

navigateToSubmit(){
  localStorage.setItem('edit', JSON.stringify(true))
  this.router.navigateByUrl('SubmitPage');
}
}

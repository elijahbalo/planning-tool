import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { JSONP_ERR_NO_CALLBACK } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'app-header-old',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  title;
  @Output()
  back: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {}

  goBack() {
    this.back.emit(true);
  }
}

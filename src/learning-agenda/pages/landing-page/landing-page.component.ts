import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from 'angularfire2/firestore';
import * as Lodash from 'lodash';
import * as $ from 'jquery';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  activities;
  constructor(
    private modalService: NgbModal,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {}

  navigateToBrowsePage() {
    this.router.navigate(['/BrowsePage']);
  }
}

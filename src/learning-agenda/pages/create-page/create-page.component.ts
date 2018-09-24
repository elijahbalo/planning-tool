import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from 'angularfire2/firestore';
import * as Lodash from 'lodash';
import * as $ from 'jquery';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { map } from 'rxjs/operators';
declare function require(name: string);
var itn = require('../../test.json');
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  content: string;
  m_activities: any[];
  url;
  rId: string;
  modified = false;
  arrive;
  c_activities = [];
  prev: string;
  step1 = false;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;
  step6 = false;
  showDet = false;
  createTitle = '1. Select a Grade';
  n_set;
  description = true;
  c_time;
  enableSwap = false;
  enableDelete = false;
  itineraries = [];
  titles;
  title;
  grade;
  year;
  img;
  addedPost = false;
  set = false;
  create = false;
  browse = false;
  first = false;
  second = false;
  third = false;
  fourth = false;
  fifth = false;
  sixth = false;

  bActive = false;
  cActive = false;
  prop;
  date: Date;
  newSet = false;
  showSwap = true;

  p: number = 1;

  log = '';
  KinderTo2: boolean;
  Gr3To5: boolean;
  Gr6To8: boolean;
  OctoberToApril: boolean;
  MayToJune: boolean;
  checkboxValue: boolean;
  closeResult: string;
  items = [];
  filtered: any;
  filters = {};
  filters1 = {};
  toggler = false;
  margins = {
    top: 70,
    bottom: 40,
    left: 30,
    width: 550
  };
  //grades: string;
  //timeOfYear: string;
  day: string;
  constructor(
    private modalService: NgbModal,
    private db: AngularFirestore,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    console.log(itn.itineraries);
    localStorage.clear();
    this.setCreate();
    /* this.items = this.db
      .collection('/itineraries')
      .valueChanges()
      .subscribe(items => {
        this.items = items;
        this.applyFilters();
      }); */
    this.items = itn.itineraries;
    this.arrive = itn.arrive;
    this.c_activities = itn.c_activities;

    console.log(this.items);

    $('.cbox').prop('checked', false);
    $('.rad').prop('checked', false);
  }

  public addPost() {
    /* this.db.collection('/modified_itineraries').add({'name': this.title, 'description': this.content, 'length': this.length}); */
    this.randomId();
    this.addedPost = true;
    this.url = 'http://planning-tool.herokuapp.com/ItineraryPage/' + this.rId;
    this.db
      .collection('/modified_itineraries')
      .doc(this.rId)
      .set({
        name: this.title,
        grade: this.grade,
        title: this.title,
        year: this.year,
        activities: this.itineraries
      });
  }

  randomId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    this.rId = Math.random()
      .toString(36)
      .substr(2, 9);
  }

  print() {
    window.print();
  }

  setDate(event) {
    this.date = event;
  }

  getSet(event) {
    this.set = event;
    this.itineraries = JSON.parse(localStorage.getItem('itinerary'));
    this.img = JSON.parse(localStorage.getItem('img'));
    this.grade = JSON.parse(localStorage.getItem('grade'));
    this.title = JSON.parse(localStorage.getItem('title'));
    this.year = JSON.parse(localStorage.getItem('year'));
    this.titles = JSON.parse(localStorage.getItem('titles'));
  }

  add(event) {
    this.itineraries.push(0);
    localStorage.setItem('itinerary', JSON.stringify(this.itineraries));
    console.log(this.itineraries);

    localStorage.setItem('_set', JSON.stringify(event));
  }

  setBrowse() {
    this.create = false;
    this.browse = true;
    this.bActive = true;
    this.cActive = false;
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
    this.step6 = false;
  }

  setCreate() {
    localStorage.clear();
    console.log(JSON.parse(localStorage.getItem('itinerary')));
    this.create = true;
    this.browse = false;
    this.cActive = true;
    this.bActive = false;
    this.set = false;
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
    this.step6 = false;
    this.createTitle = '1. Select a Grade';
    let item = [];
    localStorage.setItem('itinerary', JSON.stringify(item));
    this.itineraries = JSON.parse(localStorage.getItem('itinerary'));
    $('#step1').prop('checked', false);
    $('#step2').prop('checked', false);
    $('#step3').prop('checked', false);
    $('#step4').prop('checked', false);
    $('#step5').prop('checked', false);
  }

  setStep2(event) {
    this.step1 = false;
    this.step2 = event;
    this.createTitle = '2. Select a Duration';
    $('#step1').prop('checked', false);
    $('#step1').prop('checked', true);
  }

  setStep3(event) {
    this.step2 = false;
    this.step3 = event;
    this.createTitle = '3. Select a Date';
    $('#step2').prop('checked', false);
    $('#step2').prop('checked', true);
  }

  setStep4(event) {
    this.step3 = false;
    this.step4 = event;
    this.createTitle = '4. Select your Activities';
    $('#step3').prop('checked', false);
    $('#step3').prop('checked', true);
  }

  setStep5(event) {
    this.step4 = false;
    this.step5 = event;
    this.createTitle = '5. Contact Information';
    $('#step4').prop('checked', false);
    $('#step4').prop('checked', true);
  }

  setStep6(event) {
    this.step5 = false;
    this.step6 = event;
    localStorage.setItem('itinerary', JSON.stringify(this.itineraries));
    this.createTitle = '6. Review and Submit';
    $('#step5').prop('checked', false);
    $('#step5').prop('checked', true);
  }

  back() {
    this.set = false;
    this.changeDetector.detectChanges();
    localStorage.removeItem('itinerary');
  }
  restart() {
    localStorage.clear();
    this.create = true;
    this.browse = false;
    this.cActive = true;
    this.bActive = false;
    this.set = false;
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
    this.step6 = false;
    this.createTitle = '1. Select a Grade';
    let item = [];
    localStorage.setItem('itinerary', JSON.stringify(item));
    this.itineraries = JSON.parse(localStorage.getItem('itinerary'));
    $('#step1').prop('checked', false);
    $('#step2').prop('checked', false);
    $('#step3').prop('checked', false);
    $('#step4').prop('checked', false);
    $('#step5').prop('checked', false);
  }
  create_Back() {
    if (this.prev == 'step1') {
      this.step2 = false;
      this.step1 = true;
      this.createTitle = '1. Select a Grade';
      $('#step1').prop('checked', false);
    }
    if (this.prev == 'step2') {
      this.step3 = false;
      this.step2 = true;
      this.createTitle = '2. Select a Duration';
      this.prev = 'step1';
      $('#step2').prop('checked', false);
    }
    if (this.prev == 'step3') {
      this.step4 = false;
      this.step3 = true;
      this.createTitle = '3. Select a Date';
      this.prev = 'step2';
      $('#step3').prop('checked', false);
    }
    if (this.prev == 'step4') {
      this.step5 = false;
      this.step4 = true;
      this.createTitle = '4. Select your Activities';
      this.prev = 'step3';
      $('#step4').prop('checked', false);
    }
    if (this.prev == 'step5') {
      this.step6 = false;
      this.step5 = true;
      this.createTitle = '5. Contact Information';
      this.prev = 'step4';
      $('#step5').prop('checked', false);
    }
  }

  setPrev(event) {
    this.prev = event;
  }

  setItem(event) {
    console.log('set item method fgfdfdfgddgdfgdfg');
    this.itineraries.pop();
    console.log(this.itineraries);
    this.itineraries.push(event);
    localStorage.setItem('itinerary', JSON.stringify(this.itineraries));
  }

  open(content) {
    this.modalService.open(content).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  emitOrder(event) {
    localStorage.setItem('n_e_o', JSON.stringify(event));
  }

  notice(event) {
    this.itineraries = JSON.parse(localStorage.getItem('itinerary'));
  }

  modify(event) {
    this.modified = event;
    this.itineraries = JSON.parse(localStorage.getItem('itinerary'));
    this.addPost();
  }

  printDiv() {
    var divToPrint = document.getElementById('printx');

    var newWin = window.open('', 'Print-Window');

    newWin.document.open();

    newWin.document.write(
      '<html><body onload="window.print()">' +
        divToPrint.innerHTML +
        '</body></html>'
    );

    newWin.document.close();

    setTimeout(function() {
      newWin.close();
    }, 10);
  }

  pdf() {
    html2canvas(document.getElementById('printx')).then(canvas => {
      var img = canvas.toDataURL('image/png');
      var doc = new jsPDF();
      doc.addImage(img, 'JPEG', 10, 10, 190, 0);
      doc.save('itinerary.pdf');
    });
  }

  resizeImage() {
    let value = false;
    if (screen.width < 1024) {
      value = true;
      return value;
    }
  }
}

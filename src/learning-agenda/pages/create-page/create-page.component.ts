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
var itn_E = require('../../../assets/i18n/en.json');
var itn_F = require('../../../assets/i18n/fr.json');
import { Router, ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../../services/translation.service';
import { Activity } from '../../models/activity';

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
  itn_E = [];
  itn_F = [];
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
  en = true;
  fr = false;
  bActive = false;
  cActive = false;
  prop;
  date: Date;
  newSet = false;
  showSwap = true;

  p: number = 1;
  plan;
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
    private translateService: TranslationService,
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
    console.log(this.translateService.get('h2'));
    this.plan = this.translateService.get('h2');
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
        activities: this.itn_E
      });
  }

  fetchTranslation(key) {
    return this.translateService.fetchTranslation(key);
  }
  switchLanguage(language: string) {
    if (language == 'en') {
      localStorage.setItem('lang', 'en');
      this.fr = false;
      this.en = true;
    }
    if (language == 'fr') {
      localStorage.setItem('lang', 'fr');
      this.en = false;
      this.fr = true;
    }
    this.translateService.switchLanguage(language);
  }

  randomId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    this.rId = Math.random()
      .toString(36)
      .substr(2, 9);
  }

  setDate(event) {
    this.date = event;
  }

  setCreate() {
    localStorage.clear();
    console.log(JSON.parse(localStorage.getItem('itinerary')));
    this.create = true;
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
    localStorage.setItem('french', JSON.stringify(item));
    this.itn_E = JSON.parse(localStorage.getItem('itinerary'));
    this.itn_F = JSON.parse(localStorage.getItem('french'));
    $('#step1').prop('checked', false);
    $('#step2').prop('checked', false);
    $('#step3').prop('checked', false);
    $('#step4').prop('checked', false);
    $('#step5').prop('checked', false);
  }

  setStep2() {
    this.step1 = false;
    this.step2 = true;
    this.createTitle = '2. Select a Duration';
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
    localStorage.setItem('itinerary', JSON.stringify(this.itn_E));
    localStorage.setItem('french', JSON.stringify(this.itn_F));
    this.createTitle = '6. Review and Submit';
    $('#step5').prop('checked', false);
    $('#step5').prop('checked', true);
  }

  back() {
    this.set = false;
    this.changeDetector.detectChanges();
    localStorage.removeItem('itinerary');
    localStorage.removeItem('french');
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
    localStorage.setItem('french', JSON.stringify(item));
    this.itn_E = JSON.parse(localStorage.getItem('itinerary'));
    this.itn_F = JSON.parse(localStorage.getItem('french'));
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
    }
    if (this.prev == 'step2') {
      this.step3 = false;
      this.step2 = true;
      this.createTitle = '2. Select a Duration';
      this.prev = 'step1';
    }
    if (this.prev == 'step3') {
      this.step4 = false;
      this.step3 = true;
      this.createTitle = '3. Select a Date';
      this.prev = 'step2';
    }
    if (this.prev == 'step4') {
      this.step5 = false;
      this.step4 = true;
      this.createTitle = '4. Select your Activities';
      this.prev = 'step3';
    }
    if (this.prev == 'step5') {
      this.step6 = false;
      this.step5 = true;
      this.createTitle = '5. Contact Information';
      this.prev = 'step4';
    }
    console.log(this.createTitle);
    console.log(this.prev);
  }

  open(content) {
    this.modalService.open(content).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
}

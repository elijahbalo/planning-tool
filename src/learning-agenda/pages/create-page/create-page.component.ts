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
  grade_select = { options: '' };
  day_select = { options: '' };
  itn__act;
  content: string;
  m_activities: any[];
  g_filter = [];
  url;
  rId: string;
  modified = false;
  arrive;
  c_activities = [];
  route = 'create';
  showNext = true;
  showSwap;
  showDelete;
  prev: string;
  step1 = false;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;
  step6 = false;
  step7 = false;
  showDet = false;
  createTitle = '1. Select a Grade';
  clickable = true;
  activities;
  n_set;
  description = true;
  c_time;
  enableSwap = false;
  enableDelete = false;

  click = false
  usrData
  empData

  sDate

  enabled;
  e_grade;
  e_calendar;
  e_activities;

  fname
  lname
  mail
  phn
  lang = ''
  news
  consent

  enable

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
  max = false;
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

  showHead = true
  step1Done;
  step2Done;
  step3Done;
  step4Done;
  step5Done;
  step6Done;

  //grades: string;
  //timeOfYear: string;
  day: string;
  constructor(
    private translateService: TranslationService,
    private modalService: NgbModal,
    private db: AngularFirestore,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) { }
  ngOnInit() {
    localStorage.removeItem('sDate')
    localStorage.removeItem('fname')
    localStorage.removeItem('lname')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
    localStorage.removeItem('langs')
    localStorage.removeItem('news')
    localStorage.removeItem('consent')
    localStorage.removeItem('day')
    localStorage.removeItem('f_grade')
    localStorage.removeItem('add')
    localStorage.removeItem('num')
    localStorage.removeItem('day')
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      this.createTitle = '1. Select a Grade'
    } else {
      this.createTitle = '1. Sélectionnez une note'
    }
    this.enabled = false;
    this.e_grade = false;
    this.e_calendar = false;
    this.e_activities = false;
    this.setCreate();
    this.displayItem();
    this.enable = false
    this.activities = itn_E.activities;
    this.showHeading()
    this.sDate = ''
    this.fname = ''
    this.lname = ''
    this.lang = ''
    this.mail = ''




  }
  showHeading() {
    if (this.createTitle == '1. Select a Grade' || this.createTitle == '1. Sélectionnez une note' || this.createTitle == 'Thank You!' || this.createTitle == 'Merci!') {
      this.showHead = false
    }
    else {
      this.showHead = true
    }
  }
  ngOnChanges() {
    this.showHeading()
    this.filterActivities()

    let lang = JSON.parse(localStorage.getItem('lang'));
    let num = JSON.parse(localStorage.getItem('num'));
    let day = JSON.parse(localStorage.getItem('day'));
    if (day == 'Half-day') {
      if (num == 4) {
        this.max = true;
      } else {
        this.max = false;
      }
    }
    if (day == 'Full-day') {
      if (num == 7) {
        this.max = true;
        console.log('at max')
      } else {
        this.max = false;
      }
    }
    if (lang == 'en') {
      this.items = itn_E.itineraries;
      this.arrive = itn_E.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_En'));

      this.switchHeaderText()
    } else {
      this.items = itn_F.itineraries;
      this.arrive = itn_F.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_Fr'));

      this.switchFrench()
    }
    if (this.step4 == true) {
      this.showSwap = true;
      this.showDelete = true;
    }
    if (JSON.parse(localStorage.getItem('f_grade'))) {
      this.grade_select.options = JSON.parse(localStorage.getItem('f_grade'));
      this.enabled = true;
    } else {
      this.grade_select.options = '';
    }

    if (JSON.parse(localStorage.getItem('day'))) {
      this.day_select.options = JSON.parse(localStorage.getItem('day'));
      this.e_grade = true;
    } else {
      this.day_select.options = '';
    }

    if (this.sDate) {
      this.e_calendar = true

    } else {
      this.click = false
    }





    if (JSON.parse(localStorage.getItem('fname'))) {
      this.fname = JSON.parse(localStorage.getItem('fname'))
    }
    if (JSON.parse(localStorage.getItem('lname'))) {
      this.lname = JSON.parse(localStorage.getItem('lname'))
    }
    if (JSON.parse(localStorage.getItem('email'))) {
      this.mail = JSON.parse(localStorage.getItem('email'))
    }
    if (JSON.parse(localStorage.getItem('phone'))) {
      this.phn = JSON.parse(localStorage.getItem('phone'))

    }
    if (JSON.parse(localStorage.getItem('langs'))) {
      this.lang = JSON.parse(localStorage.getItem('langs'))

    }
    if (JSON.parse(localStorage.getItem('news'))) {
      this.news = JSON.parse(localStorage.getItem('news'))

    }
    if (JSON.parse(localStorage.getItem('consent'))) {
      this.consent = JSON.parse(localStorage.getItem('consent'))

    }

  }

  navigateToBrowsePage() {
    this.router.navigate(['BrowsePage']);
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
  switchHeaderText() {
    if (this.createTitle == '1. Sélectionnez une note') { this.createTitle = '1. Select a Grade' }
    if (this.createTitle == '2. Sélectionnez une durée') { this.createTitle = '2. Select a Duration' }
    if (this.createTitle == '3. Sélectionnez une date') { this.createTitle = '3. Select a Date' }
    if (this.createTitle == '4. Sélectionnez vos activités') { this.createTitle = '4. Select your Activities' }
    if (this.createTitle == '5. Coordonnées') { this.createTitle = '5. Contact Information' }
    if (this.createTitle == '6. Examiner et soumettre') { this.createTitle = '6. Review and Submit' }
    if (this.createTitle == 'Merci!') { this.createTitle = 'Thank You!' }

  }
  switchFrench() {
    if (this.createTitle == '1. Select a Grade') { this.createTitle = '1. Sélectionnez une note' }
    if (this.createTitle == '2. Select a Duration') { this.createTitle = '2. Sélectionnez une durée' }
    if (this.createTitle == '3. Select a Date') { this.createTitle = '3. Sélectionnez une date' }
    if (this.createTitle == '4. Select your Activities') { this.createTitle = '4. Sélectionnez vos activités' }
    if (this.createTitle == '5. Contact Information') { this.createTitle = '5. Coordonnées' }
    if (this.createTitle == '6. Review and Submit') { this.createTitle = '6. Examiner et soumettre' }
    if (this.createTitle == 'Thank You!') { this.createTitle = 'Merci!' }
  }
  fetchTranslation(key) {
    return this.translateService.fetchTranslation(key);
  }
  switchLanguage(language) {
    if (language == 'en') {
      localStorage.setItem('lang', JSON.stringify('en'));

      this.fr = false;
      this.en = true;
      this.switchHeaderText()
    }
    if (language == 'fr') {
      localStorage.setItem('lang', JSON.stringify('fr'));

      this.en = false;
      this.fr = true;
      this.switchFrench()
    }
    this.translateService.switchLanguage(language);
    this.ngOnChanges();
  }

  randomId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    this.rId = Math.random()
      .toString(36)
      .substr(2, 9);
  }
  update(event) {
    this.e_activities = true;
    this.ngOnChanges();
  }
  updateTog(event) {
    this.clickable = event;
  }
  addItem(event) {
    this.clickable = event;
    let emptyItem = {};
    let act_E = JSON.parse(localStorage.getItem('itn_En'));
    let act_F = JSON.parse(localStorage.getItem('itn_Fr'));
    act_E.push(emptyItem);
    act_F.push(emptyItem);
    localStorage.setItem('itn_En', JSON.stringify(act_E));
    localStorage.setItem('itn_Fr', JSON.stringify(act_F));
    this.ngOnChanges();
  }
  setDate(event) {
    this.date = event;
  }
  displayItem() {
    this.clickable = true;
    let num = 0;
    let activities = [];

    localStorage.setItem('itn_En', JSON.stringify(activities));
    localStorage.setItem('itn_Fr', JSON.stringify(activities));
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      this.arrive = itn_E.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_En'));
    } else {
      this.arrive = itn_F.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_Fr'));
    }
  }
  displayActivity() {
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      this.activities = itn_E.activities;
    } else {
      this.activities = itn_F.activities;
    }
  }
  setCreate() {
    this.create = true;
    this.set = false;
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
    this.step6 = false;
    this.createTitle = '1. Select a Grade';
    $('#step1').prop('checked', false);
    $('#step2').prop('checked', false);
    $('#step3').prop('checked', false);
    $('#step4').prop('checked', false);
    $('#step5').prop('checked', false);
  }
  jumpStep1(event) {
    this.step1 = event;
    this.step1Done = false;
    if (!this.step2Done) {
      this.step2 = false;
    }
    if (!this.step3Done) {
      this.step3 = false;
    }
    if (!this.step4Done) {
      this.step4 = false;
    }
    if (!this.step5Done) {
      this.step5 = false;
    }
    this.ngOnChanges();
  }
  jumpStep2(event) {
    this.step2 = event;
    this.step2Done = false;
    if (!this.step1Done) {
      this.step1 = false;
    }
    if (!this.step3Done) {
      this.step3 = false;
    }
    if (!this.step4Done) {
      this.step4 = false;
    }
    if (!this.step5Done) {
      this.step5 = false;
    }
    this.ngOnChanges();
  }
  jumpStep3(event) {
    this.step3 = event;
    this.step3Done = false;

    if (!this.step2Done) {
      this.step2 = false;
    }
    if (!this.step1Done) {
      this.step1 = false;
    }
    if (!this.step4Done) {
      this.step4 = false;
    }
    if (!this.step5Done) {
      this.step5 = false;
    }
    this.ngOnChanges();
  }
  jumpStep4(event) {
    this.step4 = event;
    this.step4Done = false;

    if (!this.step2Done) {
      this.step2 = false;
    }
    if (!this.step3Done) {
      this.step3 = false;
    }
    if (!this.step1Done) {
      this.step1 = false;
    }
    if (!this.step5Done) {
      this.step5 = false;
    }
    this.ngOnChanges();
  }
  jumpStep5(event) {
    this.step5 = event;
    this.step5Done = false;

    if (!this.step2Done) {
      this.step2 = false;
    }
    if (!this.step3Done) {
      this.step3 = false;
    }
    if (!this.step4Done) {
      this.step4 = false;
    }
    if (!this.step1Done) {
      this.step1 = false;
    }
    this.ngOnChanges();
  }
  setStep2(event) {
    this.step1 = false;
    this.step2 = event;
    this.step1Done = true;
    // @ Elijah: Can I leave it with you to localize this stuff? We don't 
    // want any static text in business logic, we should make calls to json file.
    this.createTitle = '2. Select a Duration';
    this.ngOnChanges()
  }

  setStep3(event) {
    this.step2 = false;
    this.step3 = event;
    this.step2Done = true;
    this.createTitle = '3. Select a Date';
    $('#step2').prop('checked', false);
    $('#step2').prop('checked', true);
    this.ngOnChanges()
  }

  setStep4(event) {
    this.step3 = false;
    this.step4 = event;
    this.step3Done = true;
    this.showSwap = true;
    this.showDelete = true;
    this.createTitle = '4. Select your Activities';
    $('#step3').prop('checked', false);
    $('#step3').prop('checked', true);
    console.log(this.activities)
    this.ngOnChanges()
    console.log(this.activities)
  }

  setStep5(event) {
    this.step4 = false;
    this.step5 = event;
    this.step4Done = true;
    this.createTitle = '5. Contact Information';
    $('#step4').prop('checked', false);
    $('#step4').prop('checked', true);
    this.ngOnChanges()
  }

  setPrev(event) {
    this.prev = event;
  }

  setStep6(event) {
    this.step5 = false;
    this.step6 = event;
    this.step5Done = true;
    this.showSwap = false;
    this.showDelete = false;
    this.createTitle = '6. Review and Submit';
    $('#step5').prop('checked', false);
    $('#step5').prop('checked', true);
    this.ngOnChanges()
  }
  setStep7(event) {
    this.step6 = false;
    this.step7 = event;
    this.step6Done = true;
    this.showHead = false
    this.createTitle = 'Thank You!'
    this.ngOnChanges()
  }

  back() {
    this.set = false;
    this.changeDetector.detectChanges();
    localStorage.removeItem('itinerary');
    localStorage.removeItem('french');
  }
  restart() {

    localStorage.removeItem('sDate')
    localStorage.removeItem('fname')
    localStorage.removeItem('lname')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
    localStorage.removeItem('langs')
    localStorage.removeItem('news')
    localStorage.removeItem('consent')
    localStorage.removeItem('day')
    localStorage.removeItem('f_grade')
    localStorage.removeItem('add')

    this.enable = false
    this.ngOnInit();
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
    this.step6 = false;
    this.step7 = false;
    this.step1Done = false;
    this.step2Done = false;
    this.step3Done = false;
    this.step4Done = false;
    this.step5Done = false;
    this.step6Done = false;
    this.createTitle = '1. Select a Grade';
    this.ngOnChanges();
  }
  create_Back() {
    if (this.prev == 'step1') {
      this.step2 = false;
      this.step1 = true;
      this.step1Done = false;
      this.step2Done = false;
      this.createTitle = '1. Select a Grade';
    }
    if (this.prev == 'step2') {
      this.step3 = false;
      this.step2 = true;
      this.step2Done = false;
      this.createTitle = '2. Select a Duration';
      this.prev = 'step1';
    }
    if (this.prev == 'step3') {
      this.step4 = false;
      this.step3 = true;
      this.step3Done = false;
      this.createTitle = '3. Select a Date';
      this.prev = 'step2';
    }
    if (this.prev == 'step4') {
      this.step5 = false;
      this.step4 = true;
      this.step4Done = false;
      this.createTitle = '4. Select your Activities';
      this.prev = 'step3';
    }
    if (this.prev == 'step5') {
      this.enable = true
      this.step6 = false;
      this.step5 = true;
      this.step5Done = false;
      this.createTitle = '5. Contact Information';
      this.prev = 'step4';

    }
    this.ngOnChanges();
  }

  open(content) {
    this.modalService.open(content).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  saveFrench_v(item) {
    let index = itn_F.itineraries.findIndex(elem => elem.id == item.id);

    return itn_F.itineraries[index].activities;
  }

  saveEnglish_v(item) {
    let index = itn_E.itineraries.findIndex(elem => elem.id == item.id);

    return itn_E.itineraries[index].activities;
  }

  filterActivities() {
    console.log("this method was called")
    let activities = []
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {

      activities = itn_E.activities;

    } else {

      activities = itn_F.activities;

    }
    if (JSON.parse(localStorage.getItem('f_grade'))) {
      let grade = JSON.parse(localStorage.getItem('f_grade'));

      if (grade == 'KinderTo2') {
        this.activities = activities.filter(
          elem => elem.kinderTo2 == true
        );
      }

      if (grade == 'Gr3To5') {
        this.activities = activities.filter(elem => elem.Gr3To5 == true);
      }

      if (grade == 'Gr6To8') {
        this.activities = activities.filter(elem => elem.Gr6To8 == true);
      }
    }
    console.log(JSON.parse(localStorage.getItem('f_grade')))
    console.log(this.activities)
  }

  setUsrData(event) {
    this.usrData = event
  }
  setEmplData(event) {
    this.empData = event
  }

  submitForm() {
    console.log(this.usrData)
    console.log(this.empData)
    this.postUserData()
    this.sendUserEmail()
    this.setStep7(true)

  }

  setDates(event) {
    this.sDate = event
  }
  postUserData() {


    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    var name

    for (name in this.empData) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(this.empData[name]));
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to 
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');


    var http = new XMLHttpRequest();
    var url = '/form-util/';
    var params = this.empData;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {//Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
      }
    }
    http.send(urlEncodedData);
  }



  sendUserEmail() {


    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    var name

    for (name in this.usrData) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(this.usrData[name]));
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to 
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');


    var http = new XMLHttpRequest();
    var url = '/form-util/';
    var params = this.usrData;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {//Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
      }
    }
    http.send(urlEncodedData);
  }



}

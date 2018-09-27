import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from 'angularfire2/firestore';
import * as Lodash from 'lodash';
import * as $ from 'jquery';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { Activity } from '../../models/activity';
import { map } from 'rxjs/operators';
declare function require(name: string);
import { TranslationService } from '../../../services/translation.service';
var itn_E = require('../../../assets/i18n/en.json');
var itn_F = require('../../../assets/i18n/fr.json');
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.scss']
})
export class BrowsePageComponent implements OnInit {
  itn__act; //var that holds the activities for the currently selected itinerary
  itn; // selected itinerary variable
  items; // var set to hold list of itineraries
  en = true; // global variable for lang toggle; default is "en"(English)
  fr = false; // global variable for lang toggle (french)
  dis = false; // var for back button toggle
  arrive; // var that holds first activity of every itinerary
  showSwapBox = false; // set to true if swap box is to be reavealed
  activities; // holds all activity items from the backend
  content: string;
  m_activities: any[];
  url;
  rId: string;

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
    localStorage.clear();
    localStorage.setItem('lang', JSON.stringify('en'));
    /* this.items = this.db
      .collection('/itineraries')
      .valueChanges()
      .subscribe(items => {
        this.items = items;
        this.applyFilters();
      }); */
    this.items = itn_E.itineraries;
    /*     this.arrive = itn.arrive;
    this.c_activities = itn.c_activities; */
  }

  /*   public addPost() {

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
  } */
  fetchTranslation(key) {
    return this.translateService.fetchTranslation(key);
  }
  switchLanguage(language: string) {
    if (language == 'en') {
      localStorage.setItem('lang', JSON.stringify('en'));

      this.fr = false;
      this.en = true;
    }
    if (language == 'fr') {
      localStorage.setItem('lang', JSON.stringify('fr'));

      this.en = false;
      this.fr = true;
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
  navigateToLanding() {
    this.router.navigate(['/LandingPage']);
  }
  toggleDis() {
    console.log('dis is clicked');
    if (this.dis == true) {
      this.dis = false;
    } else {
      this.dis = true;
    }
  }

  ngOnChanges() {
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      this.arrive = itn_E.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_En'));
      this.activities = itn_E.activities;
    } else {
      this.arrive = itn_F.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_Fr'));
      this.activities = itn_F.activities;
    }
  }
  displayItem(item) {
    this.dis = true;
    this.itn = item;
    let activities = [];
    item.activities.map(act => activities.push(act));
    localStorage.setItem('itn_En', JSON.stringify(activities));
    localStorage.setItem('itn_Fr', JSON.stringify(this.saveFrench_v(item)));
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      this.arrive = itn_E.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_En'));
    } else {
      this.arrive = itn_F.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_Fr'));
    }
  }

  saveFrench_v(item) {
    let index = itn_F.itineraries.findIndex(elem => elem.id == item.id);

    return itn_F.itineraries[index].activities;
  }

  saveEnglish_v(order, time) {
    let index = itn_E.activities.findIndex(elem => elem.order == order);
    //  localStorage.setItem('itinerary', JSON.stringify(itn_F.activities[index]));
    let activity = new Activity(
      time,
      itn_E.activities[index].name,
      itn_E.activities[index].type,
      itn_E.activities[index].length,
      itn_E.activities[index].description,
      itn_E.activities[index].fees,
      itn_E.activities[index].img,
      itn_E.activities[index].ageRange,
      itn_E.activities[index].order,
      itn_E.activities[index].kinderTo2,
      itn_E.activities[index].Gr3To5,
      itn_E.activities[index].Gr6To8
    );
    return activity;
  }

  toggleSwapBox() {
    this.showSwapBox = true;
  }

  checkSelectedActivities() {}

  displayActivity(order) {
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      this.activities = itn_E.activities;
    } else {
      this.activities = itn_F.activities;
    }
  }

  removeActivity(order) {
    let act_E = JSON.parse(localStorage.getItem('itn_En'));
    let act_F = JSON.parse(localStorage.getItem('itn_Fr'));
    let index = act_E.findIndex(elem => elem.order == order);
    let index1 = act_F.findIndex(elem => elem.order == order);
    act_E.splice(index, 1);
    act_F.splice(index1, 1);
    localStorage.setItem('itn_En', JSON.stringify(act_E));
    localStorage.setItem('itn_Fr', JSON.stringify(act_F));
    this.ngOnChanges();
  }
}

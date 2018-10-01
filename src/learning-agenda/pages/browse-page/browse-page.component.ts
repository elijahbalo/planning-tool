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
  activities;
  max;
  route = 'browse';
  content: string;
  clickable;
  m_activities: any[];
  url;
  rId: string;
  showNext;
  g_filter = [];
  filters = [];
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
    private changeDetector: ChangeDetectorRef
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
    this.activities = itn_E.activities;
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
    this.router.navigate(['LandingPage']);
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
      } else {
        this.max = false;
      }
    }
    if (lang == 'en') {
      this.items = itn_E.itineraries;
      this.arrive = itn_E.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_En'));
      this.activities = itn_E.activities;
    } else {
      this.items = itn_F.itineraries;
      this.arrive = itn_F.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_Fr'));
      this.activities = itn_F.activities;
    }
  }

  navigateToCreatePage(event) {
    event.preventDefault();
    this.router.navigate(['CreatePage']);
  }

  update(event) {
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

  displayItem(item) {
    this.clickable = true;
    let num = 0;
    this.dis = true;
    this.itn = item;
    localStorage.setItem('day', JSON.stringify(item.day));
    let activities = [];
    item.activities.map(act => {
      activities.push(act);
      num = num + 1;
    });
    localStorage.setItem('num', JSON.stringify(num));
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
  displayActivity() {
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      this.activities = itn_E.activities;
    } else {
      this.activities = itn_F.activities;
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
  pdf() {
    html2canvas(document.getElementById('main-sect')).then(canvas => {
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 200;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF('p', 'mm');
      var position = 0;

      doc.addImage(imgData, 'PNG', 5, position, imgWidth, 0);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 5, position, imgWidth, 0);
        heightLeft -= pageHeight;
      }
      doc.save('itinerary.pdf');
    });
  }
  printDiv() {
    var divToPrint = document.getElementById('main-sect');

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

  filterItems(field, event) {
    if (event == false) {
      let index = this.g_filter.findIndex(elem => elem == field);
      this.g_filter.splice(index, 1);
      console.log(this.g_filter);
    } else {
      this.g_filter.push(field);
      console.log(this.g_filter);
    }
    this.filter();
    console.log(this.g_filter);
  }

  clearAll() {
    for (var i = 0; i < this.g_filter.length; i++) {
      if (this.g_filter[i] == 'KinderTo2') {
        $('#grade-kindergarden_2').prop('checked', false);
        this.filterItems('KinderTo2', false);
      }
      if (this.g_filter[i] == 'Gr3To5') {
        $('#grade-3_6').prop('checked', false);
        this.filterItems('Gr3To5', false);
      }
      if (this.g_filter[i] == 'Gr6To8') {
        $('#grade-6_8').prop('checked', false);
        this.filterItems('Gr6To8', false);
      }
      if (this.g_filter[i] == 'OctoberToApril') {
        $('#toy-oct_apr').prop('checked', false);
        this.filterItems('OctoberToApril', false);
      }
      if (this.g_filter[i] == 'MayToJune') {
        $('#toy-may_jun').prop('checked', false);
        this.filterItems('MayToJune', false);
      }
      if (this.g_filter[i] == 'Half-Day') {
        $('#length-half').prop('checked', false);
        this.filterItems('Half-Day', false);
      }
      if (this.g_filter[i] == 'Full-Day') {
        $('#length-full').prop('checked', false);
        this.filterItems('Full-Day', false);
      }
    }
  }

  filter() {
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      var items = itn_E.itineraries;
    } else {
      var items = itn_F.itineraries;
    }
    if (this.g_filter.length == 0) {
      /* should set items to the two langs, using en for now....*/
      this.filters = itn_E.itineraries;
    } else {
      for (var i = 0; i < this.g_filter.length; i++) {
        if (this.g_filter[i] == 'KinderTo2') {
          let newItems = items.filter(elem => elem.KinderTo2 == true);
          if (i == 0) {
            this.filters = newItems;
          }
          if (i > 0) {
            let toggler = false;
            newItems.map(elem => {
              this.filters.map(element => {
                if (elem.id == element.id) {
                  toggler = true;
                }
              });
              if (toggler == false) {
                this.filters.push(elem);
              }
            });
          }
        }

        if (this.g_filter[i] == 'Gr3To5') {
          let newItems = items.filter(elem => elem.Gr3To5 == true);
          if (i == 0) {
            this.filters = newItems;
          }
          if (i > 0) {
            let toggler = false;
            newItems.map(elem => {
              this.filters.map(element => {
                if (elem.id == element.id) {
                  toggler = true;
                }
              });
              if (toggler == false) {
                this.filters.push(elem);
              }
            });
          }
        }

        if (this.g_filter[i] == 'Gr6To8') {
          let newItems = items.filter(elem => elem.Gr6To8 == true);
          if (i == 0) {
            this.filters = newItems;
          }
          if (i > 0) {
            let toggler = false;
            newItems.map(elem => {
              this.filters.map(element => {
                if (elem.id == element.id) {
                  toggler = true;
                }
              });
              if (toggler == false) {
                this.filters.push(elem);
              }
            });
          }
        }

        if (this.g_filter[i] == 'OctoberToApril') {
          let newItems = items.filter(elem => elem.OctoberToApril == true);
          if (i == 0) {
            this.filters = newItems;
          }
          if (i > 0) {
            let toggler = false;
            newItems.map(elem => {
              this.filters.map(element => {
                if (elem.id == element.id) {
                  toggler = true;
                }
              });
              if (toggler == false) {
                this.filters.push(elem);
              }
            });
          }
        }

        if (this.g_filter[i] == 'MayToJune') {
          let newItems = items.filter(elem => elem.MayToJune == true);
          if (i == 0) {
            this.filters = newItems;
          }
          if (i > 0) {
            let toggler = false;
            newItems.map(elem => {
              this.filters.map(element => {
                if (elem.id == element.id) {
                  toggler = true;
                }
              });
              if (toggler == false) {
                this.filters.push(elem);
              }
            });
          }
        }

        if (this.g_filter[i] == 'Half-Day') {
          let newItems = items.filter(elem => elem.HalfDay == true);
          if (i == 0) {
            this.filters = newItems;
          }
          if (i > 0) {
            let toggler = false;
            newItems.map(elem => {
              this.filters.map(element => {
                if (elem.id == element.id) {
                  toggler = true;
                }
              });
              if (toggler == false) {
                this.filters.push(elem);
              }
            });
          }
        }

        if (this.g_filter[i] == 'Full-Day') {
          let newItems = items.filter(elem => elem.FullDay == true);
          if (i == 0) {
            this.filters = newItems;
          }
          if (i > 0) {
            let toggler = false;
            newItems.map(elem => {
              this.filters.map(element => {
                if (elem.id == element.id) {
                  toggler = true;
                }
              });
              if (toggler == false) {
                this.filters.push(elem);
              }
            });
          }
        }
      }
    }
    this.items = this.filters;
  }
}

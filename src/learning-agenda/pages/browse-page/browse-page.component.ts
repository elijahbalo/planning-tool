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
  showSwap = true;
  showDelete = true;
  route = 'browse';
  content: string;
  clickable;
  m_activities: any[];
  url;
  rId: string;
  showNext;
  g_filter = [];
  y_filter = [];
  d_filter = [];
  g_filter_ = [];
  y_filter_ = [];
  d_filter_ = [];
  filters = [];
  margins = {
    top: 70,
    bottom: 40,
    left: 30,
    width: 550
  };

  showHead = false
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
    if (JSON.parse(localStorage.getItem('lang')) == 'en') {
      this.en = true;
      this.fr = false;
      this.items = itn_E.itineraries;
    }

    if (JSON.parse(localStorage.getItem('lang')) == 'fr') {
      this.fr = true;
      this.en = true;
      this.items = itn_F.itineraries;
    }
    /* this.items = this.db
      .collection('/itineraries')
      .valueChanges()
      .subscribe(items => {
        this.items = items;
        this.applyFilters();
      }); */

    this.activities = itn_E.activities;
    console.log(this.items);
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
  showFilterAside: boolean = false; // Hide filter aside menu by default.
  onFilterBtnSelect() {
    this.showFilterAside = !this.showFilterAside ? true : false;
  }
  switchLanguage(language) {
    if (language == 'en') {
      localStorage.setItem('lang', JSON.stringify('en'));

      this.fr = false;
      this.en = true;
      if (this.dis == true) {
        this.setEnglish(this.itn)
      }
    }
    if (language == 'fr') {
      localStorage.setItem('lang', JSON.stringify('fr'));

      this.en = false;
      this.fr = true;
      if (this.dis == true) {
        this.setFrench(this.itn)
      }
    }
    this.translateService.switchLanguage(language);
    this.g_filter_ = []
    this.y_filter_ = []
    this.d_filter_ = []
    this.filterGrade()
    this.filterYear()
    this.filterDay()
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
  navigateToMain() {
    this.dis = false
    this.showHead = false
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
        console.log('max')
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
      this.arrive = itn_E.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_En'));

    } else {
      this.arrive = itn_F.arrive;
      this.itn__act = JSON.parse(localStorage.getItem('itn_Fr'));

      this.filterActivities()
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
    this.showHead = true
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
    localStorage.setItem('itn_En', JSON.stringify(this.saveEnglish_v(item)));
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
  setFrench(item) {
    let index = itn_F.itineraries.findIndex(elem => elem.id == item.id);

    this.itn = itn_F.itineraries[index]
  }

  setEnglish(item) {
    let index = itn_E.itineraries.findIndex(elem => elem.id == item.id);

    this.itn = itn_E.itineraries[index]
  }
  saveFrench_v(item) {
    let index = itn_F.itineraries.findIndex(elem => elem.id == item.id);

    return itn_F.itineraries[index].activities;
  }

  saveEnglish_v(item) {
    let index = itn_E.itineraries.findIndex(elem => elem.id == item.id);

    return itn_E.itineraries[index].activities;
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

    setTimeout(function () {
      newWin.close();
    }, 10);
  }

  filterGradeItems(field, event) {
    if (event == false) {
      let index = this.g_filter.findIndex(elem => elem == field);
      this.g_filter.splice(index, 1);
      console.log(this.g_filter);
    } else {
      this.g_filter.push(field);
    }
    this.filterGrade();
  }

  filterYearItems(field, event) {
    if (event == false) {
      let index = this.y_filter.findIndex(elem => elem == field);
      this.y_filter.splice(index, 1);
      console.log(this.y_filter);
    } else {
      this.y_filter.push(field);
    }
    this.filterYear();
  }

  filterDayItems(field, event) {
    if (event == false) {
      let index = this.d_filter.findIndex(elem => elem == field);
      this.d_filter.splice(index, 1);
      console.log(this.d_filter);
    } else {
      this.d_filter.push(field);
    }
    this.filterDay();
  }

  clearAll() {
    console.log(this.g_filter);
    console.log(this.g_filter.length);
    this.g_filter = [];
    this.y_filter = [];
    this.d_filter = [];
    this.g_filter_ = [];
    this.y_filter_ = [];
    this.d_filter_ = [];

    $('#grade-kindergarden_2').prop('checked', false);

    $('#grade-3_5').prop('checked', false);

    $('#grade-6_8').prop('checked', false);

    $('#toy-oct_apr').prop('checked', false);

    $('#toy-may_jun').prop('checked', false);

    $('#length-half').prop('checked', false);

    $('#length-full').prop('checked', false);

    console.log(this.g_filter);
    console.log(this.g_filter.length);
    this.filterGrade();
    this.filterYear();
    this.filterDay();
  }
  filterGrade() {
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      var items = itn_E.itineraries;
      this.itn__act = JSON.parse(localStorage.getItem('itn_En'));
    } else {
      var items = itn_F.itineraries;
      this.itn__act = JSON.parse(localStorage.getItem('itn_Fr'));
      console.log("lang was changed")

    }

    if (this.g_filter.length == 0) {

      this.filters = items
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
      }
    }
    this.filterActivities()
    this.g_filter_ = this.filters;
    this.computeIntersection()
    console.log(this.g_filter, this.y_filter, this.d_filter)
    //console.log(this.g_filter_, this.y_filter_, this.d_filter_)
  }


  filterYear() {
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      var items = itn_E.itineraries;
      this.itn__act = JSON.parse(localStorage.getItem('itn_En'));
    } else {
      var items = itn_F.itineraries;
      this.itn__act = JSON.parse(localStorage.getItem('itn_Fr'));
    }

    if (this.y_filter.length == 0) {

      this.filters = items
    } else {
      for (var i = 0; i < this.y_filter.length; i++) {

        if (this.y_filter[i] == 'OctoberToApril') {
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

        if (this.y_filter[i] == 'MayToJune') {
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



      }
    }
    this.y_filter_ = this.filters;
    this.computeIntersection()
    console.log(this.g_filter, this.y_filter, this.d_filter)
    // console.log(this.g_filter_, this.y_filter_, this.d_filter_)
  }


  filterDay() {
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      var items = itn_E.itineraries;
      this.itn__act = JSON.parse(localStorage.getItem('itn_En'));
    } else {
      var items = itn_F.itineraries;
      this.itn__act = JSON.parse(localStorage.getItem('itn_Fr'));
    }

    if (this.d_filter.length == 0) {

      this.filters = items
    } else {
      for (var i = 0; i < this.d_filter.length; i++) {

        if (this.d_filter[i] == 'Half-Day') {
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

        if (this.d_filter[i] == 'Full-Day') {
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
    this.d_filter_ = this.filters;
    this.computeIntersection()
    console.log(this.g_filter, this.y_filter, this.d_filter)
    //console.log(this.g_filter_, this.y_filter_, this.d_filter_)
  }
  computeIntersection() {
    let temp = []
    let final = []
    let toggler = false
    console.log(this.g_filter_, this.y_filter_, this.d_filter_)
    if (this.g_filter_.length > 0 && this.y_filter_.length == 0 && this.d_filter_.length == 0) {
      console.log("1")

      this.items = this.g_filter_
    }
    else {
      if (this.g_filter_.length == 0 && this.y_filter_.length == 0 && this.d_filter_.length > 0) {
        console.log("2")
        this.items = this.d_filter_
      }
      else {
        if (this.g_filter_.length == 0 && this.y_filter_.length > 0 && this.d_filter_.length == 0) {
          console.log("3")
          this.items = this.y_filter_
        }
        else {

          if (this.g_filter_.length > 0 && this.y_filter_.length > 0 && this.d_filter_.length == 0) {
            console.log("1")

            this.g_filter_.map(elem => {
              this.y_filter_.map(element => {
                if (elem.id == element.id) { temp.push(elem) }
              })
            })
            this.items = temp

          }

          if (this.g_filter_.length > 0 && this.y_filter_.length == 0 && this.d_filter_.length > 0) {
            console.log("2")
            this.g_filter_.map(elem => {
              this.d_filter_.map(element => {
                if (elem.id == element.id) { temp.push(elem) }
              })
            })
            this.items = temp
          }

          if (this.g_filter_.length == 0 && this.y_filter_.length > 0 && this.d_filter_.length > 0) {
            console.log("2")
            this.y_filter_.map(elem => {
              this.d_filter_.map(element => {
                if (elem.id == element.id) { temp.push(elem) }
              })
            })
            this.items = temp
          }

          if (this.g_filter_.length > 0 && this.y_filter_.length > 0 && this.d_filter_.length > 0) {
            this.g_filter_.map(elem => {
              this.y_filter_.map(element => {
                if (elem.id == element.id) { temp.push(elem) }
              })
            })
            temp.map(elem => {
              this.d_filter_.map(element => {
                if (elem.id == element.id) { final.push(elem) }
              })
            })

            this.items = final
          }

        }
      }


      /*   */
    }
  }

  filterActivities() {
    let filters = []
    let lang = JSON.parse(localStorage.getItem('lang'));
    if (lang == 'en') {
      var items = itn_E.activities;
      this.itn__act = JSON.parse(localStorage.getItem('itn_En'));
    } else {
      var items = itn_F.activities;
      this.itn__act = JSON.parse(localStorage.getItem('itn_Fr'));
      console.log("lang was changed")

    }

    if (this.g_filter.length == 0) {

      filters = items
    } else {
      for (var i = 0; i < this.g_filter.length; i++) {
        if (this.g_filter[i] == 'KinderTo2') {
          let newItems = items.filter(elem => elem.kinderTo2 == true);
          if (i == 0) {
            filters = newItems;
          }
          if (i > 0) {
            let toggler = false;
            newItems.map(elem => {
              filters.map(element => {
                if (elem.id == element.id) {
                  toggler = true;
                }
              });
              if (toggler == false) {
                filters.push(elem);
              }
            });
          }
        }

        if (this.g_filter[i] == 'Gr3To5') {
          let newItems = items.filter(elem => elem.Gr3To5 == true);
          if (i == 0) {
            filters = newItems;
          }
          if (i > 0) {
            let toggler = false;
            newItems.map(elem => {
              filters.map(element => {
                if (elem.id == element.id) {
                  toggler = true;
                }
              });
              if (toggler == false) {
                filters.push(elem);
              }
            });
          }
        }

        if (this.g_filter[i] == 'Gr6To8') {
          let newItems = items.filter(elem => elem.Gr6To8 == true);
          if (i == 0) {
            filters = newItems;
          }
          if (i > 0) {
            let toggler = false;
            newItems.map(elem => {
              filters.map(element => {
                if (elem.id == element.id) {
                  toggler = true;
                }
              });
              if (toggler == false) {
                filters.push(elem);
              }
            });
          }
        }
      }
    }
    this.activities = filters

  }





  /*   filter() {
      var items = itn_E.itineraries;
  
      if (this.g_filter.length == 0) {
  
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
    } */
}

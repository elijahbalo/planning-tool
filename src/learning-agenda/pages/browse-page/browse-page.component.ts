import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from 'angularfire2/firestore';
import * as Lodash from 'lodash';
import * as $ from 'jquery';
import { map } from 'rxjs/operators';
declare function require(name:string);
var itn = require('../../test.json');
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.scss']
})
export class BrowsePageComponent implements OnInit {
  content: string;
  m_activities: any[];
  url;
  rId: string;
  modified = false;
  arrive
  c_activities = []
  prev:string
  step1 = false;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;
  step6 = false;
  showDet = false;
  createTitle = "1. Select a Grade"
  n_set;

  c_time;

  itineraries;
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
    this.setBrowse();
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
    this.applyFilters();
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
  }

  setCreate() {
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
    this.createTitle="1. Select a Grade"
  }
  
  setStep2(event){
    this.step1=false;
    this.step2 = event
    this.createTitle = "2. Select a Duration"
  }

  setStep3(event){
    this.step2=false
    this.step3 = event
    this.createTitle = "3. Select a Date"
  }
  
  setStep4(event){
    this.step3=false
    this.step4 = event
    this.createTitle = "4. Select your Activities"
    this.itineraries = itn.c_activities
    localStorage.setItem('itinerary', JSON.stringify(this.itineraries));
  }
  
  setStep5(event){
    this.step4=false
    this.step5 = event
    this.createTitle = "5. Contact Information"
  }
  
  setStep6(event){
    this.step5=false
    this.step6 = event
    this.createTitle ="6. Review and Submit"
  }
  
  back() {
    this.set = false;
    this.changeDetector.detectChanges();
    localStorage.removeItem('itinerary');
  }

  create_Back(){
   if (this.prev == "step1") {this.step2=false; this.step1 = true; this.createTitle="1. Select a Grade"}
   if (this.prev == "step2") {this.step3=false; this.step2 = true; this.createTitle="2. Select a Duration"; this.prev="step1"} 
   if (this.prev == "step3") {this.step4=false; this.step3 = true; this.createTitle="3. Select a Date"; this.prev="step2"}
   if (this.prev == "step4") {this.step5=false; this.step4 = true; this.createTitle="4. Select your Activities"; this.prev="step3"}
   if (this.prev == "step5") {this.step6=false; this.step5 = true; this.createTitle="5. Contact Information"; this.prev="step4"}
  }

  setPrev(event){
   this.prev = event
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
    this.addPost();
  }

  printDiv() {
    var divToPrint = document.getElementById('print');

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

  resizeImage() {
    let value = false;
    if (screen.width < 1024) {
      value = true;
      return value;
    }
  }

  private applyFilters() {
    console.log('action called');
    let newlyFilter = Lodash.filter(this.items, Lodash.conforms(this.filters));
    console.log(newlyFilter);
    this.filtered = newlyFilter;
    /* if (this.filtered === undefined || this.filtered.length == 0) {
      this.filtered = newlyFilter;
      console.log(true)
      console.log(this.filtered)
      console.log(newlyFilter)
  }
  else{
       console.log(false)

  newlyFilter.map((elem)=> this.filtered.push(elem));
  console.log(this.filtered)
  console.log(newlyFilter)
  } */
  }

  filterExact(property: string, rule: any) {
    let toggler = false;
    let myFilter = [];
    let filter;
    console.log(this.day);
    console.log(this.fourth);
    console.log(this.fifth);

    if (this.day == 'Half-day') {
      console.log('callinghalf');
      if (
        this.first == true ||
        this.second == true ||
        this.third == true ||
        this.fourth == true ||
        this.fifth == true
      ) {
        if (this.first == true) {
          let first = this.items.filter(elem => elem.KinderTo2 == true);
          let firstFilter = first.filter(elem => elem.day == 'Half-day');
          firstFilter.map(elem => myFilter.push(elem));
        }
        if (this.second == true) {
          let first = this.items.filter(elem => elem.Gr3To5 == true);
          let firstFilter = first.filter(elem => elem.day == 'Half-day');
          firstFilter.map(elem => myFilter.push(elem));
        }
        if (this.third == true) {
          let first = this.items.filter(elem => elem.Gr6To8 == true);
          let firstFilter = first.filter(elem => elem.day == 'Half-day');
          firstFilter.map(elem => myFilter.push(elem));
        }
        if (this.fourth == true) {
          let first = this.items.filter(elem => elem.OctoberToApril == true);
          let firstFilter = first.filter(elem => elem.day == 'Half-day');
          console.log(firstFilter);
          console.log(myFilter);
          firstFilter.map(elem => {
            myFilter.map(element => {
              if (elem == element) {
                this.toggler = true;
                console.log(elem);
              }
            });
            if (this.toggler == false) {
              myFilter.push(elem);
            }
          });
          this.toggler = false;
        }
        if (this.fifth == true) {
          let first = this.items.filter(elem => elem.MayToJune == true);
          let firstFilter = first.filter(elem => elem.day == 'Half-day');
          console.log(firstFilter);
          console.log(myFilter);
          firstFilter.map(elem => {
            myFilter.map(element => {
              if (elem == element) {
                this.toggler = true;
                console.log(elem);
              }
            });
            if (this.toggler == false) {
              myFilter.push(elem);
            }
          });
          this.toggler = false;
        }

        this.filtered = myFilter;
        console.log(this.filtered);
      } else {
        this.filtered = this.items.filter(elem => elem.day == 'Half-day');
      }
    }

    if (this.day == 'Full-day' && this.sixth == true) {
      console.log('callinghalf');
      if (
        this.first == true ||
        this.second == true ||
        this.third == true ||
        this.fourth == true ||
        this.fifth == true
      ) {
        if (this.first == true) {
          let first = this.items.filter(elem => elem.KinderTo2 == true);
          let firstFilter = first.filter(elem => elem.day == 'Full-day');
          firstFilter.map(elem => myFilter.push(elem));
        }
        if (this.second == true) {
          let first = this.items.filter(elem => elem.Gr3To5 == true);
          let firstFilter = first.filter(elem => elem.day == 'Full-day');
          firstFilter.map(elem => myFilter.push(elem));
        }
        if (this.third == true) {
          let first = this.items.filter(elem => elem.Gr6To8 == true);
          let firstFilter = first.filter(elem => elem.day == 'Full-day');
          firstFilter.map(elem => myFilter.push(elem));
        }
        if (this.fourth == true) {
          let first = this.items.filter(elem => elem.OctoberToApril == true);
          let firstFilter = first.filter(elem => elem.day == 'Full-day');
          console.log(firstFilter);
          console.log(myFilter);
          firstFilter.map(elem => {
            myFilter.map(element => {
              if (elem == element) {
                this.toggler = true;
                console.log(elem);
              }
            });
            if (this.toggler == false) {
              myFilter.push(elem);
            }
          });
          this.toggler = false;
        }
        if (this.fifth == true) {
          let first = this.items.filter(elem => elem.MayToJune == true);
          let firstFilter = first.filter(elem => elem.day == 'Full-day');
          console.log(firstFilter);
          console.log(myFilter);
          firstFilter.map(elem => {
            myFilter.map(element => {
              if (elem == element) {
                this.toggler = true;
                console.log(elem);
              }
            });
            if (this.toggler == false) {
              myFilter.push(elem);
            }
          });
          this.toggler = false;
        }
        this.filtered = myFilter;
        console.log(this.filtered);
      } else {
        this.filtered = this.items.filter(elem => elem.day == 'Full-day');
      }
    }

    this.sixth = true;
  }

  filterBoolean(property: string, rule: boolean) {
    this.first = true;
    let tempfilter = [];
    if (!rule) this.removeFilter(property);
    else {
      if (this.fourth == true || this.fifth == true || this.sixth == true) {
        if (this.second == false && this.third == false) {
          this.filtered = this.filtered.filter(elem => elem.KinderTo2 == true);
        } else {
          if (this.fourth == true && this.sixth == false) {
            let filter = this.items.filter(elem => elem.KinderTo2 == true);
            console.log(this.filtered);
            console.log(filter);
            filter.map(elem => {
              this.filtered.map(element => {
                if (elem == element) {
                  this.toggler = true;
                  console.log(elem);
                }
              });
              if (this.toggler == false) {
                tempfilter.push(elem);
              }
            });
            this.toggler = false;
            let temp = tempfilter.filter(elem => elem.OctoberToApril == true);
            temp.map(elem => this.filtered.push(elem));
          } else {
            if (this.fourth == true && this.sixth == true) {
              let tem = [];
              let filter = this.items.filter(elem => elem.KinderTo2 == true);
              console.log(this.filtered);
              console.log(filter);
              filter.map(elem => {
                this.filtered.map(element => {
                  if (elem == element) {
                    this.toggler = true;
                    console.log(elem);
                  }
                });
                if (this.toggler == false) {
                  tem.push(elem);
                }
              });
              this.toggler = false;
              let temp = tem.filter(elem => elem.OctoberToApril == true);
              if (this.day == 'Half-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Half-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
              if (this.day == 'Full-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Full-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
            }
          }

          if (this.fifth == true && this.sixth == false) {
            let filter = this.items.filter(elem => elem.KinderTo2 == true);
            console.log(this.filtered);
            console.log(filter);
            filter.map(elem => {
              this.filtered.map(element => {
                if (elem == element) {
                  this.toggler = true;
                  console.log(elem);
                }
              });
              if (this.toggler == false) {
                tempfilter.push(elem);
              }
            });
            this.toggler = false;
            let temp = tempfilter.filter(elem => elem.MayToJune == true);
            temp.map(elem => this.filtered.push(elem));
          } else {
            if (this.fifth == true && this.sixth == true) {
              let tem = [];
              let filter = this.items.filter(elem => elem.KinderTo2 == true);
              console.log(this.filtered);
              console.log(filter);
              filter.map(elem => {
                this.filtered.map(element => {
                  if (elem == element) {
                    this.toggler = true;
                    console.log(elem);
                  }
                });
                if (this.toggler == false) {
                  tem.push(elem);
                }
              });
              this.toggler = false;
              let temp = tem.filter(elem => elem.MayToJune == true);
              if (this.day == 'Half-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Half-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
              if (this.day == 'Full-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Full-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
            }
          }
        }
      } else {
        if (this.second == false && this.third == false) {
          this.filtered = this.filtered.filter(elem => elem.KinderTo2 == true);
        } else {
          let filter = this.items.filter(elem => elem.KinderTo2 == true);
          console.log(this.filtered);
          console.log(filter);
          filter.map(elem => {
            this.filtered.map(element => {
              if (elem == element) {
                this.toggler = true;
                console.log(elem);
              }
            });
            if (this.toggler == false) {
              this.filtered.push(elem);
            }
          });
        }
        this.toggler = false;
      }
    }
  }

  filterBoolean1(property: string, rule: boolean) {
    this.second = true;
    let tempfilter = [];
    if (!rule) this.removeFilter1(property);
    else {
      if (this.fourth == true || this.fifth == true || this.sixth == true) {
        if (this.first == false && this.third == false) {
          this.filtered = this.filtered.filter(elem => elem.Gr3To5 == true);
        } else {
          if (this.fourth == true && this.sixth == false) {
            let filter = this.items.filter(elem => elem.Gr3To5 == true);
            console.log(this.filtered);
            console.log(filter);
            filter.map(elem => {
              this.filtered.map(element => {
                if (elem == element) {
                  this.toggler = true;
                  console.log(elem);
                }
              });
              if (this.toggler == false) {
                tempfilter.push(elem);
              }
            });
            this.toggler = false;
            let temp = tempfilter.filter(elem => elem.OctoberToApril == true);
            temp.map(elem => this.filtered.push(elem));
          } else {
            if (this.fourth == true && this.sixth == true) {
              let tem = [];
              let filter = this.items.filter(elem => elem.Gr3To5 == true);
              console.log(this.filtered);
              console.log(filter);
              filter.map(elem => {
                this.filtered.map(element => {
                  if (elem == element) {
                    this.toggler = true;
                    console.log(elem);
                  }
                });
                if (this.toggler == false) {
                  tem.push(elem);
                }
              });
              this.toggler = false;
              let temp = tem.filter(elem => elem.OctoberToApril == true);
              if (this.day == 'Half-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Half-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
              if (this.day == 'Full-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Full-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
            }
          }

          if (this.fifth == true && this.sixth == false) {
            let filter = this.items.filter(elem => elem.Gr3To5 == true);
            console.log(this.filtered);
            console.log(filter);
            filter.map(elem => {
              this.filtered.map(element => {
                if (elem == element) {
                  this.toggler = true;
                  console.log(elem);
                }
              });
              if (this.toggler == false) {
                tempfilter.push(elem);
              }
            });
            this.toggler = false;
            let temp = tempfilter.filter(elem => elem.MayToJune == true);
            temp.map(elem => this.filtered.push(elem));
          } else {
            if (this.fifth == true && this.sixth == true) {
              let tem = [];
              let filter = this.items.filter(elem => elem.Gr3To5 == true);
              console.log(this.filtered);
              console.log(filter);
              filter.map(elem => {
                this.filtered.map(element => {
                  if (elem == element) {
                    this.toggler = true;
                    console.log(elem);
                  }
                });
                if (this.toggler == false) {
                  tem.push(elem);
                }
              });
              this.toggler = false;
              let temp = tem.filter(elem => elem.MayToJune == true);
              if (this.day == 'Half-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Half-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
              if (this.day == 'Full-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Full-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
            }
          }
        }
      } else {
        if (this.first == false && this.third == false) {
          this.filtered = this.filtered.filter(elem => elem.Gr3To5 == true);
        } else {
          let filter = this.items.filter(elem => elem.Gr3To5 == true);
          console.log(this.filtered);
          console.log(filter);
          filter.map(elem => {
            this.filtered.map(element => {
              if (elem == element) {
                this.toggler = true;
                console.log(elem);
              }
            });
            if (this.toggler == false) {
              this.filtered.push(elem);
            }
          });
          this.toggler = false;
        }
      }
    }
  }

  filterBoolean2(property: string, rule: boolean) {
    this.third = true;
    let tempfilter = [];
    if (!rule) this.removeFilter2(property);
    else {
      if (this.fourth == true || this.fifth == true || this.sixth == true) {
        if (this.first == false && this.second == false) {
          this.filtered = this.filtered.filter(elem => elem.Gr6To8 == true);
        } else {
          if (this.fourth == true && this.sixth == false) {
            let filter = this.items.filter(elem => elem.Gr6To8 == true);
            console.log(this.filtered);
            console.log(filter);
            filter.map(elem => {
              this.filtered.map(element => {
                if (elem == element) {
                  this.toggler = true;
                  console.log(elem);
                }
              });
              if (this.toggler == false) {
                tempfilter.push(elem);
              }
            });
            this.toggler = false;
            let temp = tempfilter.filter(elem => elem.OctoberToApril == true);
            temp.map(elem => this.filtered.push(elem));
          } else {
            if (this.fourth == true && this.sixth == true) {
              let tem = [];
              let filter = this.items.filter(elem => elem.Gr6To8 == true);
              console.log(this.filtered);
              console.log(filter);
              filter.map(elem => {
                this.filtered.map(element => {
                  if (elem == element) {
                    this.toggler = true;
                    console.log(elem);
                  }
                });
                if (this.toggler == false) {
                  tem.push(elem);
                }
              });
              this.toggler = false;
              let temp = tem.filter(elem => elem.OctoberToApril == true);
              if (this.day == 'Half-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Half-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
              if (this.day == 'Full-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Full-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
            }
          }

          if (this.fifth == true && this.sixth == false) {
            let filter = this.items.filter(elem => elem.Gr6To8 == true);
            console.log(this.filtered);
            console.log(filter);
            filter.map(elem => {
              this.filtered.map(element => {
                if (elem == element) {
                  this.toggler = true;
                  console.log(elem);
                }
              });
              if (this.toggler == false) {
                tempfilter.push(elem);
              }
            });
            this.toggler = false;
            let temp = tempfilter.filter(elem => elem.MayToJune == true);
            temp.map(elem => this.filtered.push(elem));
          } else {
            if (this.fourth == true && this.sixth == true) {
              let tem = [];
              let filter = this.items.filter(elem => elem.Gr6To8 == true);
              console.log(this.filtered);
              console.log(filter);
              filter.map(elem => {
                this.filtered.map(element => {
                  if (elem == element) {
                    this.toggler = true;
                    console.log(elem);
                  }
                });
                if (this.toggler == false) {
                  tem.push(elem);
                }
              });
              this.toggler = false;
              let temp = tem.filter(elem => elem.MayToJune == true);
              if (this.day == 'Half-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Half-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
              if (this.day == 'Full-day') {
                let temp2 = temp.filter(elem => (elem.day = 'Full-day'));
                temp2.map(elem => this.filtered.push(elem));
              }
            }
          }
        }
      } else {
        if (this.first == false && this.second == false) {
          this.filtered = this.filtered.filter(elem => elem.Gr6To8 == true);
        } else {
          let filter = this.items.filter(elem => elem.Gr6To8 == true);
          console.log(this.filtered);
          console.log(filter);
          filter.map(elem => {
            this.filtered.map(element => {
              if (elem == element) {
                this.toggler = true;
                console.log(elem);
              }
            });
            if (this.toggler == false) {
              this.filtered.push(elem);
            }
          });
        }

        this.toggler = false;
      }
    }
  }

  filterBoolean3(property: string, rule: boolean) {
    this.fourth = true;
    if (!rule) this.removeFilter3(property);
    else {
      //check if external has been checked
      if (
        this.first == true ||
        this.second == true ||
        this.third == true ||
        this.sixth == true
      ) {
        // check if an internal checkbox has been selected
        if (this.fifth == true) {
          console.log('intenal checked');
          //go through all the checked boxes and filter
          if (this.first == true) {
            let first = this.items.filter(elem => elem.KinderTo2 == true);

            if (this.day == 'Half-day') {
              console.log('fitering full days');
              var fill1 = first.filter(elem => elem.day == 'Half-day');
              console.log(fill1);
              fill1.map(elem => this.filtered.push(elem));
            } else {
              if (this.day == 'Full-day') {
                console.log('filtering half days');
                var fill1 = first.filter(elem => elem.day == 'Full-day');
                fill1.map(elem => this.filtered.push(elem));
              } else {
                console.log('i should be here');
                var fill1 = first.filter(elem => elem.OctoberToApril == true);
                fill1.map(elem => this.filtered.push(elem));
              }
            }
          }

          if (this.second == true) {
            let second = this.items.filter(elem => elem.Gr3To5 == true);
            if (this.day == 'Half-day') {
              var fill2 = second.filter(elem => elem.day == 'Half-day');
              fill2.map(elem => this.filtered.push(elem));
            } else {
              if (this.day == 'Full-day') {
                var fill2 = second.filter(elem => elem.day == 'Full-day');
                fill2.map(elem => this.filtered.push(elem));
              } else {
                var fill2 = second.filter(elem => elem.OctoberToApril == true);
                fill2.map(elem => this.filtered.push(elem));
              }
            }
          }

          if (this.third == true) {
            let third = this.items.filter(elem => elem.Gr6To8 == true);
            if (this.day == 'Half-day') {
              var fill3 = third.filter(elem => elem.day == 'Half-day');
              fill3.map(elem => this.filtered.push(elem));
            } else {
              if (this.day == 'Full-day') {
                var fill3 = third.filter(elem => elem.day == 'Full-day');
                fill3.map(elem => this.filtered.push(elem));
              } else {
                var fill3 = third.filter(elem => elem.OctoberToApril == true);
                fill3.map(elem => this.filtered.push(elem));
              }
            }
          }

          /*  if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)
  
        let thirdFilter = third.filter(elem => elem.MayToJune)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }
   */
        }

        // no internal checkbox selected therefore, filter on the filtered items.
        else {
          this.filtered = this.filtered.filter(
            elem => elem.OctoberToApril == true
          );
        }
      }

      // if external has not been checked
      else {
        let result = this.items.filter(elem => elem.OctoberToApril == true);
        if (this.fifth == true) {
          result.map(elem => this.filtered.push(elem));
        } else {
          this.filtered = result;
        }
      }
    }
  }

  filterBoolean4(property: string, rule: boolean) {
    this.fifth = true;
    if (!rule) this.removeFilter4(property);
    else {
      //check if external has been checked
      if (
        this.first == true ||
        this.second == true ||
        this.third == true ||
        this.sixth == true
      ) {
        console.log('external checked');
        // check if an internal checkbox has been selected
        if (this.fourth == true) {
          //go through all the checked boxes and filter
          if (this.first == true) {
            let first = this.items.filter(elem => elem.KinderTo2 == true);

            if (this.day == 'Half-day') {
              console.log('fitering full days');
              var fill1 = first.filter(elem => elem.day == 'Half-day');
              console.log(fill1);
              fill1.map(elem => this.filtered.push(elem));
            } else {
              if (this.day == 'Full-day') {
                console.log('filtering half days');
                var fill1 = first.filter(elem => elem.day == 'Full-day');
                fill1.map(elem => this.filtered.push(elem));
              } else {
                var fill1 = first.filter(elem => elem.MayToJune == true);
                fill1.map(elem => this.filtered.push(elem));
              }
            }
          }

          if (this.second == true) {
            let second = this.items.filter(elem => elem.Gr3To5 == true);
            if (this.day == 'Half-day') {
              var fill2 = second.filter(elem => elem.day == 'Half-day');
              fill2.map(elem => this.filtered.push(elem));
            } else {
              if (this.day == 'Full-day') {
                var fill2 = second.filter(elem => elem.day == 'Full-day');
                fill2.map(elem => this.filtered.push(elem));
              } else {
                var fill2 = second.filter(elem => elem.MayToJune == true);
                fill2.map(elem => this.filtered.push(elem));
              }
            }
          }

          if (this.third == true) {
            let third = this.items.filter(elem => elem.Gr6To8 == true);
            if (this.day == 'Half-day') {
              var fill3 = third.filter(elem => elem.day == 'Half-day');
              fill3.map(elem => this.filtered.push(elem));
            } else {
              if (this.day == 'Full-day') {
                var fill3 = third.filter(elem => elem.day == 'Full-day');
                fill3.map(elem => this.filtered.push(elem));
              } else {
                var fill3 = third.filter(elem => elem.MayToJune == true);
                fill3.map(elem => this.filtered.push(elem));
              }
            }
          }

          /*  if (this.sixth == true){
          let third = this.items.filter(elem => elem.day == this.day)
  
          let thirdFilter = third.filter(elem => elem.OctoberToApril)
          thirdFilter.map(elem=>this.filtered.push(elem))
         }
   */
        }

        // no internal checkbox selected therefore, filter on the filtered items.
        else {
          console.log('internal not checked');
          this.filtered = this.filtered.filter(elem => elem.MayToJune == true);
        }
      } else {
        let result = this.items.filter(elem => elem.MayToJune == true);
        if (this.fourth == true) {
          result.map(elem => this.filtered.push(elem));
        } else {
          this.filtered = result;
        }
      }
    }
  }

  removeFilter(property: string) {
    this.first = false;

    if (this.fourth == true || this.fifth == true || this.sixth == true) {
      this.filtered = this.filtered.filter(elem => elem.KinderTo2 == false);
      console.log('external checked');
      // check if an internal checkbox has been selected
      if (this.second == true || this.third == true) {
        console.log('intenal checked');
        //go through all the checked boxes and filter
        if (this.fourth == true) {
          console.log('logged fourth');
          if (this.second == true) {
            let first = this.items.filter(elem => elem.OctoberToApril == true);
            let sec = first.filter(elem => elem.Gr3To5 == true);
            let firstFilter = sec.filter(elem => elem.KinderTo2);
            let secFilter = sec.filter(elem => elem.KinderTo2);
            if (this.day == 'Half-day') {
              var fil = firstFilter.filter(elem => elem.day == 'Half-day');
              var fils = secFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil = firstFilter.filter(elem => elem.day == 'Full-day');
              var fils = secFilter.filter(elem => elem.day == 'Full-day');
            }
            fil.map(elem => this.filtered.push(elem));
          }

          if (this.third == true) {
            let first = this.items.filter(elem => elem.OctoberToApril == true);
            let sec = first.filter(elem => elem.Gr6To8 == true);
            let firstFilter = sec.filter(elem => elem.KinderTo2);
            let secFilter = sec.filter(elem => elem.KinderTo2);
            if (this.day == 'Half-day') {
              var fil1 = firstFilter.filter(elem => elem.day == 'Half-day');
              var fils1 = secFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil1 = firstFilter.filter(elem => elem.day == 'Full-day');
              var fils1 = secFilter.filter(elem => elem.day == 'Full-day');
            }
            fil1.map(elem => this.filtered.push(elem));
          }
        }

        if (this.fifth == true) {
          console.log('logged fifth');

          if (this.second == true) {
            let first = this.items.filter(elem => elem.MayToJune == true);
            let sec = first.filter(elem => elem.Gr3To5 == true);
            let firstFilter = sec.filter(elem => elem.KinderTo2);
            let secFilter = sec.filter(elem => elem.KinderTo2);
            if (this.day == 'Half-day') {
              var fil2 = firstFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil2 = firstFilter.filter(elem => elem.day == 'Full-day');
            }
            fil2.map(elem => this.filtered.push(elem));
          }

          if (this.third == true) {
            let first = this.items.filter(elem => elem.MayToJune == true);
            let sec = first.filter(elem => elem.Gr6To8 == true);
            let firstFilter = sec.filter(elem => elem.KinderTo2);
            let secFilter = sec.filter(elem => elem.KinderTo2);
            if (this.day == 'Half-day') {
              var fil3 = firstFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil3 = firstFilter.filter(elem => elem.day == 'Full-day');
            }
            fil3.map(elem => this.filtered.push(elem));
          }
        }

        /*    if (this.sixth == true){
         console.log("logged sixth")
        if (this.second == true){
          let first = this.items.filter(elem => elem.day == this.day)
          let sec = this.items.filter(elem => elem.Gr3To5 == true)
          let firstFilter = first.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
       
          firstFilter.map(elem=>this.filtered.push(elem))
          secFilter.map(elem=>this.filtered.push(elem))
         }


         if (this.third == true){
          let first = this.items.filter(elem => elem.day == this.day)
          let sec = this.items.filter(elem => elem.Gr6To8 == true)
          let firstFilter = first.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
       
          firstFilter.map(elem=>this.filtered.push(elem))
          secFilter.map(elem=>this.filtered.push(elem))
         }
       }
       */
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else {
        console.log('internal not checked');
        console.log(this.day);
        if (this.fourth == true) {
          let first = this.items.filter(elem => elem.OctoberToApril == true);

          if (this.day == 'Half-day') {
            console.log('fitering full days');
            var fill1 = first.filter(elem => elem.day == 'Half-day');
            console.log(fill1);
          }
          if (this.day == 'Full-day') {
            console.log('filtering half days');
            var fill1 = first.filter(elem => elem.day == 'Full-day');
          }

          fill1.map(elem => this.filtered.push(elem));
        }

        if (this.fifth == true) {
          let second = this.items.filter(elem => elem.MayToJune == true);
          if (this.day == 'Half-day') {
            var fill2 = second.filter(elem => elem.day == 'Half-day');
          }
          if (this.day == 'Full-day') {
            var fill2 = second.filter(elem => elem.day == 'Full-day');
          }

          fill2.map(elem => this.filtered.push(elem));
        }

        /*  if (this.sixth == true){
          let second = this.items.filter(elem => elem.day == this.day)
          second.map(elem=>this.filtered.push(elem))
         } */
      }
    } else {
      if (this.second == false && this.third == false) {
        this.applyFilters();
      } else {
        console.log('removetrue');
        console.log(this.filtered);
        this.filtered = this.filtered.filter(elem => elem.KinderTo2 == false);
      }
    }
  }

  removeFilter1(property: string) {
    this.second = false;
    if (this.fourth == true || this.fifth == true || this.sixth == true) {
      this.filtered = this.filtered.filter(elem => elem.Gr3To5 == false);
      console.log('external checked');
      // check if an internal checkbox has been selected
      if (this.first == true || this.third == true) {
        console.log('intenal checked');
        //go through all the checked boxes and filter
        if (this.fourth == true) {
          if (this.first == true) {
            console.log('first is checked');
            let first = this.items.filter(elem => elem.OctoberToApril == true);
            let sec = first.filter(elem => elem.KinderTo2 == true);
            console.log(sec);
            let firstFilter = sec.filter(elem => elem.Gr3To5);
            let secFilter = sec.filter(elem => elem.Gr3To5);
            if (this.day == 'Half-day') {
              var fil4 = firstFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil4 = firstFilter.filter(elem => elem.day == 'Full-day');
            }
            fil4.map(elem => this.filtered.push(elem));
          }

          if (this.third == true) {
            let first = this.items.filter(elem => elem.OctoberToApril == true);
            let sec = first.filter(elem => elem.Gr6To8 == true);
            let firstFilter = sec.filter(elem => elem.Gr3To5);
            let secFilter = sec.filter(elem => elem.Gr3To5);
            if (this.day == 'Half-day') {
              var fil5 = firstFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil5 = firstFilter.filter(elem => elem.day == 'Full-day');
            }
            fil5.map(elem => this.filtered.push(elem));
          }
        }

        if (this.fifth == true) {
          if (this.first == true) {
            let first = this.items.filter(elem => elem.MayToJune == true);
            let sec = first.filter(elem => elem.KinderTo2 == true);
            let firstFilter = sec.filter(elem => elem.Gr3To5);
            let secFilter = sec.filter(elem => elem.Gr3To5);
            if (this.day == 'Half-day') {
              var fil6 = firstFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil6 = firstFilter.filter(elem => elem.day == 'Full-day');
            }
            fil6.map(elem => this.filtered.push(elem));
          }

          if (this.third == true) {
            let first = this.items.filter(elem => elem.MayToJune == true);
            let sec = first.filter(elem => elem.Gr6To8 == true);
            let firstFilter = sec.filter(elem => elem.Gr3To5);
            let secFilter = sec.filter(elem => elem.Gr3To5);
            if (this.day == 'Half-day') {
              var fil7 = firstFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil7 = firstFilter.filter(elem => elem.day == 'Full-day');
            }
            fil7.map(elem => this.filtered.push(elem));
          }
        }

        /* if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)

        let thirdFilter = third.filter(elem => elem.Gr3To5)
        thirdFilter.map(elem=>this.filtered.push(elem))
       } */
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else {
        if (this.fourth == true) {
          let first = this.items.filter(elem => elem.OctoberToApril == true);

          if (this.day == 'Half-day') {
            console.log('fitering full days');
            var fill1 = first.filter(elem => elem.day == 'Half-day');
            console.log(fill1);
          }
          if (this.day == 'Full-day') {
            console.log('filtering half days');
            var fill1 = first.filter(elem => elem.day == 'Full-day');
          }

          fill1.map(elem => this.filtered.push(elem));
        }

        if (this.fifth == true) {
          let second = this.items.filter(elem => elem.MayToJune == true);
          if (this.day == 'Half-day') {
            var fill2 = second.filter(elem => elem.day == 'Half-day');
          }
          if (this.day == 'Full-day') {
            var fill2 = second.filter(elem => elem.day == 'Full-day');
          }

          fill2.map(elem => this.filtered.push(elem));
        }
        /* 
         if (this.sixth == true){
          let second = this.items.filter(elem => elem.day == this.day)
          second.map(elem=>this.filtered.push(elem))
         } */
      }
    } else {
      if (this.first == false && this.third == false) {
        this.applyFilters();
      } else {
        console.log('removetrue');
        console.log(this.filtered);
        this.filtered = this.filtered.filter(elem => elem.Gr3To5 == false);
      }
    }
  }

  removeFilter2(property: string) {
    this.third = false;
    if (this.fourth == true || this.fifth == true || this.sixth == true) {
      this.filtered = this.filtered.filter(elem => elem.Gr6To8 == false);
      console.log('external checked');
      // check if an internal checkbox has been selected
      if (this.second == true || this.first == true) {
        console.log('intenal checked');
        //go through all the checked boxes and filter
        if (this.fourth == true) {
          if (this.first == true) {
            let first = this.items.filter(elem => elem.OctoberToApril == true);
            let sec = first.filter(elem => elem.KinderTo2 == true);
            let firstFilter = sec.filter(elem => elem.Gr6To8);
            let secFilter = sec.filter(elem => elem.Gr6To8);
            if (this.day == 'Half-day') {
              var fil4 = firstFilter.filter(elem => elem.day == 'Half-day');
              var fils4 = secFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil4 = firstFilter.filter(elem => elem.day == 'Full-day');
              var fils4 = secFilter.filter(elem => elem.day == 'Full-day');
            }
            fil4.map(elem => this.filtered.push(elem));
          }

          if (this.second == true) {
            let first = this.items.filter(elem => elem.OctoberToApril == true);
            let sec = first.filter(elem => elem.Gr3To5 == true);
            let firstFilter = sec.filter(elem => elem.Gr6To8);
            let secFilter = sec.filter(elem => elem.Gr6To8);
            if (this.day == 'Half-day') {
              var fil4 = firstFilter.filter(elem => elem.day == 'Half-day');
              var fils4 = secFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil4 = firstFilter.filter(elem => elem.day == 'Full-day');
              var fils4 = secFilter.filter(elem => elem.day == 'Full-day');
            }
            fil4.map(elem => this.filtered.push(elem));
          }
        }

        if (this.fifth == true) {
          if (this.first == true) {
            let first = this.items.filter(elem => elem.MayToJune == true);
            let sec = first.filter(elem => elem.KinderTo2 == true);
            let firstFilter = sec.filter(elem => elem.Gr6To8);
            let secFilter = sec.filter(elem => elem.Gr6To8);
            if (this.day == 'Half-day') {
              var fil4 = firstFilter.filter(elem => elem.day == 'Half-day');
              var fils4 = secFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil4 = firstFilter.filter(elem => elem.day == 'Full-day');
              var fils4 = secFilter.filter(elem => elem.day == 'Full-day');
            }
            fil4.map(elem => this.filtered.push(elem));
          }

          if (this.second == true) {
            let first = this.items.filter(elem => elem.MayToJune == true);
            let sec = first.filter(elem => elem.Gr3To5 == true);
            let firstFilter = sec.filter(elem => elem.Gr6To8);
            let secFilter = sec.filter(elem => elem.Gr6To8);
            if (this.day == 'Half-day') {
              var fil4 = firstFilter.filter(elem => elem.day == 'Half-day');
              var fils4 = secFilter.filter(elem => elem.day == 'Half-day');
            }
            if (this.day == 'Full-day') {
              var fil4 = firstFilter.filter(elem => elem.day == 'Full-day');
              var fils4 = secFilter.filter(elem => elem.day == 'Full-day');
            }
            fil4.map(elem => this.filtered.push(elem));
          }
        }
        /* 
       if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)

        let thirdFilter = third.filter(elem => elem.Gr6To8)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }
       */
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else {
        console.log('internal not checked');
        if (this.fourth == true) {
          let first = this.items.filter(elem => elem.OctoberToApril == true);

          if (this.day == 'Half-day') {
            console.log('fitering full days');
            var fill1 = first.filter(elem => elem.day == 'Half-day');
            console.log(fill1);
          }
          if (this.day == 'Full-day') {
            console.log('filtering half days');
            var fill1 = first.filter(elem => elem.day == 'Full-day');
          }

          fill1.map(elem => this.filtered.push(elem));
        }

        if (this.fifth == true) {
          let second = this.items.filter(elem => elem.MayToJune == true);
          if (this.day == 'Half-day') {
            var fill2 = second.filter(elem => elem.day == 'Half-day');
          }
          if (this.day == 'Full-day') {
            var fill2 = second.filter(elem => elem.day == 'Full-day');
          }

          fill2.map(elem => this.filtered.push(elem));
        }
        /* 
         if (this.sixth == true){
          let second = this.items.filter(elem => elem.day == this.day)
          second.map(elem=>this.filtered.push(elem))
         } */
      }
    } else {
      if (this.second == false && this.first == false) {
        this.applyFilters();
      } else {
        console.log('removetrue');
        console.log(this.filtered);
        this.filtered = this.filtered.filter(elem => elem.Gr6To8 == false);
      }
    }
  }

  removeFilter3(property: string) {
    this.fourth = false;

    // check if external was selected
    if (
      this.first == true ||
      this.second == true ||
      this.third == true ||
      this.sixth == true
    ) {
      this.filtered = this.filtered.filter(
        elem => elem.OctoberToApril == false
      );
      console.log('external checked');
      // check if an internal checkbox has been selected
      if (this.fifth == true) {
        console.log('intenal checked');
        //go through all the checked boxes and filter
        if (this.first == true) {
          let first = this.items.filter(elem => elem.KinderTo2 == true);

          if (this.day == 'Half-day') {
            console.log('fitering full days');
            var fill1 = first.filter(elem => elem.day == 'Half-day');
            console.log(fill1);
          }
          if (this.day == 'Full-day') {
            console.log('filtering half days');
            var fill1 = first.filter(elem => elem.day == 'Full-day');
          }
        }

        if (this.second == true) {
          let second = this.items.filter(elem => elem.Gr3To5 == true);
          if (this.day == 'Half-day') {
            var fill2 = second.filter(elem => elem.day == 'Half-day');
          }
          if (this.day == 'Full-day') {
            var fill2 = second.filter(elem => elem.day == 'Full-day');
          }

          fill2.map(elem => this.filtered.push(elem));
        }

        if (this.third == true) {
          let third = this.items.filter(elem => elem.Gr6To8 == true);
          if (this.day == 'Half-day') {
            var fill3 = third.filter(elem => elem.day == 'Half-day');
          }
          if (this.day == 'Full-day') {
            var fill3 = third.filter(elem => elem.day == 'Full-day');
          }

          fill3.map(elem => this.filtered.push(elem));
        }

        /*  if (this.sixth == true){
      let third = this.items.filter(elem => elem.day == this.day)

      let thirdFilter = third.filter(elem => elem.MayToJune)
      thirdFilter.map(elem=>this.filtered.push(elem))
     }
 */
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else {
        console.log('internal not checked');
        if (this.first == true) {
          let first = this.items.filter(elem => elem.KinderTo2 == true);
          if (this.day == 'Half-day') {
            console.log('fitering full days');
            var fill5 = first.filter(elem => elem.day == 'Half-day');
            console.log(fill5);
            fill5.map(elem => this.filtered.push(elem));
          } else {
            if (this.day == 'Full-day') {
              console.log('filtering half days');
              var fill5 = first.filter(elem => elem.day == 'Full-day');
              fill5.map(elem => this.filtered.push(elem));
            } else {
              first.map(elem => this.filtered.push(elem));
            }
          }
        }

        if (this.second == true) {
          let second = this.items.filter(elem => elem.Gr3To5 == true);
          if (this.day == 'Half-day') {
            console.log('fitering full days');
            var fill6 = second.filter(elem => elem.day == 'Half-day');
            console.log(fill6);
            fill6.map(elem => this.filtered.push(elem));
          } else {
            if (this.day == 'Full-day') {
              console.log('filtering half days');
              var fill6 = second.filter(elem => elem.day == 'Full-day');
              fill6.map(elem => this.filtered.push(elem));
            } else {
              second.map(elem => this.filtered.push(elem));
            }
          }
        }

        if (this.third == true) {
          let third = this.items.filter(elem => elem.Gr6To8 == true);
          if (this.day == 'Half-day') {
            console.log('fitering full days');
            var fill7 = third.filter(elem => elem.day == 'Half-day');
            console.log(fill1);
            fill7.map(elem => this.filtered.push(elem));
          } else {
            if (this.day == 'Full-day') {
              console.log('filtering half days');
              var fill7 = third.filter(elem => elem.day == 'Full-day');
              fill7.map(elem => this.filtered.push(elem));
            } else {
              third.map(elem => this.filtered.push(elem));
            }
          }
        }

        if (this.sixth == true) {
          let second = this.items.filter(elem => elem.day == this.day);
          second.map(elem => this.filtered.push(elem));
        }
      }
    }

    // external has not been selected apply normal
    else {
      if (this.fifth == false) {
        this.applyFilters();
      } else {
        console.log('removetrue');
        console.log(this.filtered);
        this.filtered = this.filtered.filter(
          elem => elem.OctoberToApril == false
        );
      }
    }
  }

  removeFilter4(property: string) {
    this.fifth = false;
    console.log('may to june deselected');
    if (
      this.first == true ||
      this.second == true ||
      this.third == true ||
      this.sixth == true
    ) {
      this.filtered = this.filtered.filter(elem => elem.MayToJune == false);

      // check if an internal checkbox has been selected
      if (this.fourth == true) {
        //go through all the checked boxes and filter
        if (this.first == true) {
          let first = this.items.filter(elem => elem.KinderTo2 == true);

          if (this.day == 'Half-day') {
            console.log('fitering full days');
            var fill1 = first.filter(elem => elem.day == 'Half-day');
            console.log(fill1);
          }
          if (this.day == 'Full-day') {
            console.log('filtering half days');
            var fill1 = first.filter(elem => elem.day == 'Full-day');
          }
        }

        if (this.second == true) {
          let second = this.items.filter(elem => elem.Gr3To5 == true);

          console.log('second..' + second);
          if (this.day == 'Half-day') {
            var fill2 = second.filter(elem => elem.day == 'Half-day');
          }
          if (this.day == 'Full-day') {
            var fill2 = second.filter(elem => elem.day == 'Full-day');
          }
          fill2.map(elem => this.filtered.push(elem));
        }

        if (this.third == true) {
          let third = this.items.filter(elem => elem.Gr6To8 == true);
          if (this.day == 'Half-day') {
            var fill3 = third.filter(elem => elem.day == 'Half-day');
          }
          if (this.day == 'Full-day') {
            var fill3 = third.filter(elem => elem.day == 'Full-day');
          }
          fill3.map(elem => this.filtered.push(elem));
        }

        if (this.sixth == true) {
          let third = this.items.filter(elem => elem.day == this.day);

          let thirdFilter = third.filter(elem => elem.OctoberToApril);
          thirdFilter.map(elem => this.filtered.push(elem));
        }
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else {
        console.log('internal not checked');
        if (this.first == true) {
          console.log('first is true');
          let first = this.items.filter(elem => elem.KinderTo2 == true);
          if (this.day == 'Half-day') {
            console.log('fitering full days');
            var fill5 = first.filter(elem => elem.day == 'Half-day');
            fill5.map(elem => this.filtered.push(elem));
            console.log(fill5);
          } else {
            if (this.day == 'Full-day') {
              console.log('filtering half days');
              var fill5 = first.filter(elem => elem.day == 'Full-day');
              fill5.map(elem => this.filtered.push(elem));
            } else {
              first.map(elem => this.filtered.push(elem));
            }
          }
        }

        if (this.second == true) {
          console.log('second is true');
          let second = this.items.filter(elem => elem.Gr3To5 == true);
          if (this.day == 'Half-day') {
            console.log('fitering full days');
            var filt = second.filter(elem => elem.day == 'Half-day');
            console.log(filt);
            filt.map(elem => this.filtered.push(elem));
          } else {
            if (this.day == 'Full-day') {
              console.log('filtering half days');
              var filt = second.filter(elem => elem.day == 'Full-day');
              filt.map(elem => this.filtered.push(elem));
            } else {
              second.map(elem => this.filtered.push(elem));
            }
          }
        }

        if (this.third == true) {
          console.log('third is true');
          let third = this.items.filter(elem => elem.Gr6To8 == true);
          if (this.day == 'Half-day') {
            console.log('fitering full days');
            var fill7 = third.filter(elem => elem.day == 'Half-day');
            fill7.map(elem => this.filtered.push(elem));
            console.log(fill1);
          } else {
            if (this.day == 'Full-day') {
              console.log('filtering half days');
              var fill7 = third.filter(elem => elem.day == 'Full-day');
              fill7.map(elem => this.filtered.push(elem));
            } else {
              third.map(elem => this.filtered.push(elem));
            }
          }
        }

        if (this.sixth == true) {
          console.log('sixth is true');
          console.log(this.day);

          let sixth = this.items.filter(elem => elem.day == this.day);
          sixth.map(elem => this.filtered.push(elem));
        }
      }
    } else {
      if (this.fourth == false) {
        this.applyFilters();
      } else {
        console.log('removetrue');
        console.log(this.filtered);
        this.filtered = this.filtered.filter(elem => elem.MayToJune == false);
      }
    }
  }

  /*  filterExact1(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters1()
  }

  filterExact2(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters2()
  } */

  reset() {
    $('.cbox').prop('checked', false);
    $('.rad').prop('checked', false);
    this.removeFilter('day');
    this.removeFilter('KinderTo2');
    this.removeFilter('Gr3To5');
    this.removeFilter('Gr6To8');
    this.first = false;
    this.second = false;
    this.third = false;
    this.fourth = false;
    this.fifth = false;
    this.filtered = this.items;
  }

  navigateToDesignPage() {
    this.router.navigate(['/DesignPage']);
  }
}

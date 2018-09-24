import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
declare function require(name: string);
var act = require('../../test.json');
@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  styleUrls: ['./activity-display.component.scss']
})
export class ActivityDisplayComponent implements OnInit {
  @Output()
  order: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  item: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  time: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  notify: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  modify: EventEmitter<any> = new EventEmitter<any>();
  ord;
  modal = false;
  newTime;
  det = false;
  newSet;
  isSet = false;
  swap = false;
  innerSwap = false;
  items = [];
  @Input()
  itinerary;
  @Input()
  showSwap;
  @Input()
  showDet = true;
  my_time;
  activity;
  add;
  @Input()
  activities;

  @Input()
  enableSwap = true;

  @Input()
  enableDelete = true;

  @Input()
  description = false;
  toggler = false;
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    /*    this.items = this.db
      .collection('/activities')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      ); */

    this.getFilter(act.activities);
    //  this.items = act.activities;
    console.log(this.items);
    this.activities = JSON.parse(localStorage.getItem('itinerary'));
    console.log(JSON.parse(localStorage.getItem('itinerary')));
    if (this.itinerary.time) {
      localStorage.setItem('c_time', JSON.stringify(this.itinerary.time));
    }

    this.newSet = JSON.parse(localStorage.getItem('_set'));
    if (this.itinerary == 0) {
      this.swap = true;
      this.add = true;
    }
    if (this.itinerary.name == 'Arrive') {
      this.enableSwap = false;
      this.enableDelete = false;
    }
  }
  getFilter(activities) {
    let g_filter = JSON.parse(localStorage.getItem('g_filter'));
    let length = JSON.parse(localStorage.getItem('f_length'));
    let f_items = [];
    console.log(g_filter);
    if (g_filter == null) {
      this.items = activities;
    } else {
      g_filter.map(elem => {
        if (elem == 'kinderTo2') {
          let my_items = activities;
          my_items = my_items.filter(elem => elem.kinderTo2 == true);
          console.log('first');
          my_items.map(elem => {
            f_items.map(element => {
              if (elem == element) {
                this.toggler = true;
              }
            });
            if (this.toggler == false) {
              f_items.push(elem);
            }
            this.toggler = false;
          });
        }
        if (elem == 'Gr3To5') {
          let my_items = activities;
          my_items = my_items.filter(elem => elem.Gr3To5 == true);
          console.log('second');
          my_items.map(elem => {
            f_items.map(element => {
              if (elem == element) {
                this.toggler = true;
              }
            });
            if (this.toggler == false) {
              f_items.push(elem);
            }
            this.toggler = false;
          });
        }
        if (elem == 'Gr6To8') {
          let my_items = activities;
          my_items = my_items.filter(elem => elem.Gr6To8 == true);
          console.log('third');
          console.log(my_items);
          console.log(f_items);
          my_items.map(elem => {
            f_items.map(element => {
              if (elem == element) {
                this.toggler = true;
                console.log('elem found');
              }
            });
            if (this.toggler == false) {
              console.log('elem not found');
              console.log(elem);
              f_items.push(elem);
            }
            this.toggler = false;
          });
        }

        /*    my_items.map(elem => {
          console.log(f_items);
          f_items.map(element => {
            if (elem == element) {
              this.toggler = true;
            }
          });
          if (this.toggler == false) {
            f_items.push(elem);
          }
        }); */
      });
      this.items = f_items;
    }
  }
  setSwap() {
    if (this.swap == false) this.swap = true;
    else {
      this.swap = false;
    }

    if (this.isSet) {
      this.order.emit(this.activity.order);
      this.ord = this.activity.order;
    } else {
      this.order.emit(this.itinerary.order);
      this.ord = this.itinerary.order;
    }
  }

  toggleModal() {
    if (this.modal == false) this.modal = true;
    else {
      this.modal = false;
    }
  }

  setModalFromChild(event) {
    this.modal = event;
  }

  toggleInnerSwap() {
    if (this.innerSwap == false) this.innerSwap = true;
    else {
      this.innerSwap = false;
    }
  }

  fixItem(item) {
    let act = JSON.parse(localStorage.getItem('itinerary'));
    console.log(act);
    if (this.newSet == true) {
      console.log(this.itinerary);
      if (this.itinerary.time) {
        console.log('do nothing');
      } else {
        console.log(act.length);
        if (act.length >= 2) {
          item.time = this.timeConvert(
            act[act.length - 2].time,
            act[act.length - 2].length
          ).toString();
          console.log(act[act.length - 2].time);
          console.log(act[act.length - 2].length);
        } else {
          item.time = '10:00';
        }
      }
      this.item.emit(item);
      localStorage.setItem('_set', JSON.stringify(false));
    }
    this.swap = false;
    let order = JSON.parse(localStorage.getItem('n_e_o'));
    console.log(order);

    let index = act.findIndex(i => i.order === order);
    console.log(index);
    if (index > 0) {
      let index2 = index - 1;

      item.time = this.timeConvert(
        act[index2].time,
        act[index2].length
      ).toString();
      console.log(act);
      act.splice(index, 1, item);
      localStorage.setItem('itinerary', JSON.stringify(act));
      this.notify.emit(true);
    }
    if (index == 0) {
      item.time = act[index].time;
      act.splice(index, 1, item);
      localStorage.setItem('itinerary', JSON.stringify(act));
      this.notify.emit(true);
    }
    this.isSet = true;
    this.activity = item;
    this.modify.emit(true);
  }
  deleteItem(order) {
    let act = JSON.parse(localStorage.getItem('itinerary'));
    let index = act.findIndex(i => i.order === order);
    act.splice(index, 1);
    localStorage.setItem('itinerary', JSON.stringify(act));
    this.modify.emit(true);
  }
  check(order) {
    if (order == this.ord) return true;
    else {
      return false;
    }
  }

  toggleDet() {
    if (this.det == false) this.det = true;
    else {
      this.det = false;
    }
  }

  setTime(item) {
    this.newTime = 25;
    item.time = 25;
  }

  timeConvert(data, length) {
    console.log('time is here');
    console.log(data);
    let index;
    let h = '';
    let m = '';

    for (var i = 0; i < data.length; i++) {
      var strChar = data.charAt(i);

      if (strChar == ':') {
        index = data.indexOf(strChar);
        console.log(index);
      }
    }
    for (var i = 0; i < index; i++) {
      let str = data.charAt(i);
      h += str;
    }

    for (var j = index + 1; j < data.length; j++) {
      let str = data.charAt(j);
      m += str;
    }

    let time = Number(h) * 60 + Number(m) + length;
    console.log('time is here');
    console.log(time);
    this.my_time = time;
    let minutes = time % 60;
    let hours = (time - minutes) / 60;
    if (minutes < 10) {
      let min = '0' + minutes;
      return hours + ':' + min;
    } else {
      return hours + ':' + minutes;
    }
  }

  tConvert(time) {
    // Check correct time format and split into components
    if (!(time == null)) {
      time = time
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(''); // return adjusted time or original string
    }
  }
}

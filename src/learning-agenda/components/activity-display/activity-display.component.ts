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
  my_time;
  activity;
  add;
  @Input()
  activities;

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
    this.items = act.activities;
    console.log(this.items);

    console.log(this.itinerary.time);
    this.activities = JSON.parse(localStorage.getItem('itinerary'));
    console.log(this.activities);
    if (this.itinerary.time) {
      localStorage.setItem('c_time', JSON.stringify(this.itinerary.time));
    }

    this.newSet = JSON.parse(localStorage.getItem('_set'));
    if (this.itinerary == 0) {
      this.swap = true;
      this.add = true;
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
      if (this.itinerary.time) {
        console.log('do nothing');
      } else {
        item.time = this.timeConvert(
          act[act.length - 2].time,
          act[act.length - 2].length
        ).toString();
      }
      this.item.emit(item);
      localStorage.setItem('_set', JSON.stringify(false));
    }
    this.swap = false;
    let order = JSON.parse(localStorage.getItem('n_e_o'));
    console.log(order);

    let index = act.findIndex(i => i.order === order);
    console.log(index);
    if (index >= 0) {
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
    this.isSet = true;
    this.activity = item;
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

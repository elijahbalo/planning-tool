import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
declare function require(name: string);
var act = require('../../test.json');
var itn_E = require('../../../assets/i18n/en.json');
var itn_F = require('../../../assets/i18n/fr.json');
import { TranslationService } from '../../../services/translation.service';
import { enableDebugTools } from '@angular/platform-browser';
import { DEFAULT_STYLES } from 'ngx-pagination/dist/template';
@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  styleUrls: ['./activity-display.component.scss']
})
export class ActivityDisplayComponent implements OnInit {
  showSwapBox = false; // set to true if swap box is to be reavealed
  @Input()
  itn;
  @Input()
  showSwap;
  @Input()
  showDelete;
  @Input()
  activities; // holds all activity items from the backend
  @Input()
  act;
  newSelection;
  @Output()
  itmDel: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  itmRpl: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  toggle: EventEmitter<any> = new EventEmitter<any>();
  previousItem;
  order;
  constructor(
    private db: AngularFirestore,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('swap_id'))) {
      if (this.act.order == JSON.parse(localStorage.getItem('swap_id'))) {
        this.showSwapBox = true;
      }
    }
    if (JSON.stringify(this.act) === JSON.stringify({})) {
      this.showSwapBox = true;
      this.newSelection = true;
    }

    this.order = this.act.order;
    let act_E = JSON.parse(localStorage.getItem('itn_En'));
    if (JSON.stringify(act_E[0]) === JSON.stringify({})) {
      this.act.time = '10:00';
    }
    if (JSON.stringify(this.act) === JSON.stringify({})) {
      if (act_E.length >= 2)
        this.act.time = this.timeConvert(act_E[act_E.length - 2].time, 45);
    }
  }

  toggleSwapBox(order) {
    this.showSwapBox = true;
    localStorage.setItem('swap_id', JSON.stringify(order));
    this.toggle.emit(false);
  }
  replaceItem(event) {
    let previousItem = this.act;
    let act_E = JSON.parse(localStorage.getItem('itn_En'));
    let act_F = JSON.parse(localStorage.getItem('itn_Fr'));
    let index = act_E.findIndex(elem => elem.order == previousItem.order);
    let index1 = act_F.findIndex(elem => elem.order == previousItem.order);
    let en = this.getEnglish_v(event);
    if (JSON.stringify(act_E[0]) === JSON.stringify({})) {
      en.time = '10:00';
    }
    if (JSON.stringify(previousItem) === JSON.stringify({})) {
      en.time = this.timeConvert(act_E[act_E.length - 2].time, 45);
    } else {
      en.time = previousItem.time;
    }

    let fr = this.getFrench_v(event);
    if (JSON.stringify(act_E[0]) === JSON.stringify({})) {
      fr.time = '10:00';
    }
    if (JSON.stringify(previousItem) === JSON.stringify({})) {
      fr.time = this.timeConvert(act_F[act_E.length - 2].time, 45);
    } else {
      fr.time = previousItem.time;
    }
    act_E.splice(index, 1, en);
    act_F.splice(index1, 1, fr);
    localStorage.setItem('itn_En', JSON.stringify(act_E));
    localStorage.setItem('itn_Fr', JSON.stringify(act_F));
    this.act = event;
    this.showSwapBox = false;
    localStorage.removeItem('swap_id');
    this.itmRpl.emit(true);
    this.toggle.emit(true);
  }

  removeActivity(order) {
    let lastItemEn = false;
    let lastItemFr = false;
    let act_E = JSON.parse(localStorage.getItem('itn_En'));
    let act_F = JSON.parse(localStorage.getItem('itn_Fr'));
    let index = act_E.findIndex(elem => elem.order == order);
    let index1 = act_F.findIndex(elem => elem.order == order);

    if (index == act_E.length - 1) {
      lastItemEn = true;
    }
    if (index == act_E.length - 1) {
      lastItemFr = true;
    }
    act_E.splice(index, 1);
    act_F.splice(index1, 1);
    if (!lastItemEn) {
      for (var i = index; i < act_E.length; i++) {
        act_E[i].time = this.timeConvert(act_E[i].time, -45);
      }
    }
    if (!lastItemFr) {
      for (var i = index; i < act_F.length; i++) {
        act_F[i].time = this.timeConvert(act_F[i].time, -45);
      }
    }
    let num = JSON.parse(localStorage.getItem('num'));
    localStorage.setItem('itn_En', JSON.stringify(act_E));
    localStorage.setItem('itn_Fr', JSON.stringify(act_F));
    localStorage.setItem('num', JSON.stringify(num - 1));
    this.itmDel.emit(true);
  }

  getFrench_v(item) {
    let index = itn_F.activities.findIndex(elem => elem.order == item.order);
    return itn_F.activities[index];
  }
  getEnglish_v(item) {
    let index = itn_E.activities.findIndex(elem => elem.order == item.order);
    return itn_E.activities[index];
  }

  newTime() {
    let act_E = JSON.parse(localStorage.getItem('itn_En'));
    let act_F = JSON.parse(localStorage.getItem('itn_Fr'));
    act_E[act_E.length - 1].time;
  }
  /* getFilter(activities) {
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
 */
  /*   my_items.map(elem => {
          console.log(f_items);
          f_items.map(element => {
            if (elem == element) {
              this.toggler = true;
            }
          });
          if (this.toggler == false) {
            f_items.push(elem);
          }
        }); 
      });
      this.items = f_items;
    }
  }
  
 */

  timeConvert(data, length) {
    console.log(data);
    let index;
    let h = '';
    let m = '';

    for (var i = 0; i < data.length; i++) {
      var strChar = data.charAt(i);

      if (strChar == ':') {
        index = data.indexOf(strChar);
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
    if (!(time == null)) {
      time = time
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) {
        time = time.slice(1);
        time[5] = +time[0] < 12 ? ' AM' : ' PM';
        time[0] = +time[0] % 12 || 12;
      }
      return time.join('');
    }
  }
}

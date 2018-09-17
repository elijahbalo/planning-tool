import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Activity } from '../../models/activity';
import { Router, ActivatedRoute } from '@angular/router';
import * as Lodash from 'lodash';
import { map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent implements OnInit {
  page = '/ConfirmPage';
  items: Observable<any[]>;
  activities: Activity[] = [];
  selection = new Array<any>(7);
  dates = new Array<any>(12);
  set: any;
  select;
  time = 45;
  count = 0;
  duration;
  edit;
  isEdit;
  itineraries;

  edited = true;
  swap = true;
  display = true;
  showTools = true;
  selected = true;

  filtered: any;
  filters = {};

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    localStorage.setItem('design', JSON.stringify(true));
    localStorage.setItem('submit', JSON.stringify(false));
    localStorage.setItem('landing', JSON.stringify(false));
    localStorage.setItem('confirm', JSON.stringify(false));
    // retreive the set variable from local storage
    this.set = JSON.parse(localStorage.getItem('set'));
    this.dates[0] = 570;
    // set date number in localstorage
    localStorage.setItem('dates', JSON.stringify(this.dates));
    this.edit = JSON.parse(localStorage.getItem('edit'));

    this.checkEdit();
    this.filterExact('grades', JSON.parse(localStorage.getItem('filter')));
    // load the itinerary from local storage if using pre-defined itinerary
    this.itineraries = JSON.parse(localStorage.getItem('itinerary'));
  }

  checkEdit() {
    if (!this.edit) {
      this.items = this.db
        .collection('/activities', ref => ref.orderBy('order'))
        .snapshotChanges()
        .pipe(
          map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              console.log(id);
              this.applyFilters();
              return { id, ...data };
            });
          })
        );

      this.isEdit = false;
    } else {
      this.items = JSON.parse(localStorage.getItem('activities'));
      this.isEdit = true;
    }
  }

  reset() {
    this.items = this.db
      .collection('/activities', ref => ref.orderBy('order'))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            console.log(id);
            return { id, ...data };
          });
        })
      );

    this.isEdit = false;
    localStorage.setItem('edit', JSON.stringify(false));
    this.activities = [];
    localStorage.removeItem('activities');
  }

  navigate() {
    this.router.navigate([this.page]);
  }

  private applyFilters() {
    console.log('action called');

    this.filtered = Lodash.filter(this.items, Lodash.conforms(this.filters));
  }

  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule;
    this.applyFilters();
  }

  populate(event) {
    this.select = event;
    if (event.order != 0) {
      this.dates[event.order] = this.dates[event.order - 1] + this.duration;
      let next = this.dates[event.order + 1];
      while (next != null) {
        this.dates[event.order + 1] =
          this.dates[event.order] + this.activities[event.oder + 1].length;
        next = next + 1;
      }
    }

    localStorage.setItem('dates', JSON.stringify(this.dates));

    if (!this.selection.some(item => item === event.id)) {
      this.count++;
    }
    localStorage.setItem('count', JSON.stringify(this.count));

    console.log(event.id, event.order);
    this.selection[event.order] = event.id;
    console.log(this.selection);
  }

  placeEdit() {}

  getActivity(event) {
    this.duration = event.length;
    this.time = this.time + event.length;
    if (!this.activities.some(item => item.name === event.name)) {
      this.activities.push(
        new Activity(
          this.dates[this.select.order],
          this.select.order,
          event.name,
          event.type,
          event.length,
          event.description,
          event.on,
          event.qc,
          event.fees,
          event.img,
          event.ageRange,
          event.timeOfYear,
          event.timeSlots,
          event.order
        )
      );
    }
    localStorage.setItem('activities', JSON.stringify(this.activities));
    console.log(this.activities);
  }

  remove(event) {
    console.log(event);
    let items = JSON.parse(localStorage.getItem('activities'));
    console.log(items);

    let index = items.findIndex(i => i.selection === event);

    items.splice(index, 1);
    this.activities = items;

    console.log(items);
    localStorage.setItem('activities', JSON.stringify(items));
  }
}

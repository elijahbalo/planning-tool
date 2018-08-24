import { Component, OnInit, Input, Output } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';



@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  styleUrls: ['./activity-display.component.scss']
})
export class ActivityDisplayComponent implements OnInit {
  det = false
  @Input() newSet
 isSet = false
  swap = false;
  public items: Observable<any[]>;
  @Input() itinerary
  activity

  constructor(private db: AngularFirestore, ) { }

  ngOnInit() {
    this.items = this.db.collection('/activities').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });



    if(this.itinerary == 0){
      this.swap = true;
    }
  }


  setSwap(){
    if(this.swap == false)this.swap = true
    else{
      this.swap = false;
    }
  }



  fixItem(item){
    this.swap = false;
  this.isSet=true;
  this.activity = item
  }

  toggleDet(){
    if(this.det == false)this.det = true
    else{
      this.det = false;
    }
  }
}

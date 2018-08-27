import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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

  @Output() item: EventEmitter<any> = new EventEmitter<any>();
  @Output() time: EventEmitter<any> = new EventEmitter<any>();
  newTime;
  det = false
  @Input() newSet =false
 isSet = false
  swap = false;
  public items: Observable<any[]>;
  @Input() itinerary
  activity

  activities

  constructor(private db: AngularFirestore, ) { }

  ngOnInit() {
    this.items = this.db.collection('/activities').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });

  console.log(this.itinerary.time)
    this.activities = JSON.parse(localStorage.getItem("itinerary"))
   
    if (this.itinerary.time){
    localStorage.setItem('c_time', JSON.stringify(this.itinerary.time))
    }

    

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
  this.setTime(item)
 this.item.emit(item)

  }

  toggleDet(){
    if(this.det == false)this.det = true
    else{
      this.det = false;
    }
  }


  setTime(item){
    this.newTime = 25
    console.log(this.newTime)
    console.log(this.newSet)
  }

}

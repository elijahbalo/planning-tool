import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Activity} from '../../models/activity';
import { Router,ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent implements OnInit {
 page="/ConfirmPage"
 items: Observable<any[]>;
activities: Activity[] = [];

  constructor(
    private db: AngularFirestore,private router: Router,
    private route:ActivatedRoute
  ) { 
    
      this.items = db.collection('/activities').snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  ngOnInit() {
  }

  navigate(){
    this.router.navigate([this.page])
  }

 
  getActivity(event){
    if (!(this.activities.some(item => item.name === event.name))){
    this.activities.push(new Activity(event.name,
      event.type,
      event.length,
      event.description,
      event.on,
      event.qc,
      event.fees,
      event.img,
      event.ageRange,
      event.timeOfYear,
      event.timeSlots));
    }
    localStorage.setItem('activities', JSON.stringify(this.activities));
    console.log(this.activities)
  }
}

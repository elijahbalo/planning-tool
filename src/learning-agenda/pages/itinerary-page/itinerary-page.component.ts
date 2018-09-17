import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-itinerary-page',
  templateUrl: './itinerary-page.component.html',
  styleUrls: ['./itinerary-page.component.scss']
})
export class ItineraryPageComponent implements OnInit {
  url;
  rId;
  items: any;
  showSwap: false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.rId = this.route.snapshot.params['id'];
    console.log(this.rId);
    this.items = this.db
      .collection('/modified_itineraries')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    this.url = 'http://planning-tool.herokuapp.com/ItineraryPage/' + this.rId;
  }

  checkId(id) {
    if (id == this.rId) {
      return true;
    } else {
      return false;
    }
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string;
  content:string;
  length:string;
  public items: Observable<any[]>;
  

  
 

  constructor(private db: AngularFirestore) {
      this.items = db.collection('/itineraries').snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  public addPost(){
   this.db.collection('/itineraries').add({'name': this.title, 'description': this.content, 'length': this.length});
  }




  }


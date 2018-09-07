import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string;
  content:string;
  length:string;
  itemsCol:  AngularFirestoreCollection<any>;
  public items: Observable<any[]>;


  postDoc: AngularFirestoreDocument<any>;
  post: Observable<any[]>;
  
  posts: any;
  
 

  constructor(private db: AngularFirestore) {
      this.items = db.collection('/itineraries').snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });

      this.postDoc = this.db.doc('modified_itineraries/_g28i01oey');
      this.post = this.postDoc.valueChanges();
  }

  public addPost(){
   /* this.db.collection('/modified_itineraries').add({'name': this.title, 'description': this.content, 'length': this.length}); */
   this.db.collection('/modified_itineraries').doc(this.randomId()).set({'name': this.title, 'description': this.content, 'length': this.length});
  }

 randomId () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };

 checkId(id){
  if (id == 5 ){
    return true
  }
  else{
    return false
  }
 }

  }


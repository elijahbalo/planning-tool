import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
@Input() set = false;
@Input() itinerary
@Input() showImage=true; 
@Input() showTools=true;
@Input() showDescription=true;  
@Input() adjust=true; 
 details= false;
 @Input() swap=false;
 @Input() display=true;
 @Input() selected=false;
 images: Array<string>;
 @Input() item : any;
@Input() selectedItem: any;
@Input() fromConfirm = false;
@Input() time;
length;
startTime = 20;

expand = false
@Input() edited= false 
date
@Output() activity: EventEmitter<any> = new EventEmitter<any>();
@Output() count: EventEmitter<any> = new EventEmitter<any>();
@Output() index: EventEmitter<any> = new EventEmitter<any>();
@Output() remove: EventEmitter<any> = new EventEmitter<any>();
 public items: Observable<any[]>;

  constructor(private _http: HttpClient,private db: AngularFirestore) {
   
    
  }

  ngOnInit() {
   
    this.items = this.db.collection('/activities').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
   

    this.date = JSON.parse(localStorage.getItem('dates'))
    




    this._http.get('https://picsum.photos/list')
    .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
    .subscribe(images => this.images = images);
  

  }

 itemChange(event) {
    this.selectedItem = event;
    if (this.edited){
      this.index.emit(this.selectedItem)
    }else{
    this.index.emit(this.item);
    }
    this.activity.emit(event);
    this.date = JSON.parse(localStorage.getItem('dates'))

  }

 
  getLength(event){
  this.length = event;
  }

  toggleSwap(event){
    this.details=false;
    if(!this.selected){
     this.selected=true;
    }
    else{
      this.selected=false;
    }
   if(!this.swap){
     this.swap=true;
   }
   else{
     this.remove.emit(event);
     this.swap=false;
   }

   
   //this.remove.emit(event);
 }  

 toggleSwap2(){
  this.swap = !(this.swap)
}

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }

   timeConvert(data) {
     if (!data){
       return 'select for time'
     }

     else{
    let minutes = data % 60;
    let hours =  (data - minutes)/60; 
    if (minutes < 10){
     let  min= '0' + minutes
     return hours + ':' + min;
    }
    else{
      return hours + ':' + minutes;
    }

  }
    }

    toggleDetails(){
      if(!this.details){
        this.details=true;
      }
      else{
        this.details=false;
      }
    }
    
    toggleDetails2(){
      if(this.expand == false){
        this.expand=true;
      }
      else{
        this.expand=false;
      }
    }

    timeOfDay(data){
     if (data >= 720){
       return 'PM'
     }
     else{
       if (!data){
       return ''
       }
       else{
        return 'AM'
      }
     }
     
    }
  

    

  

 
 

}

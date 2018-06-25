import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
@Input() showImage=true; 
@Input() showTools=true;
@Input() showDescription=true;  
@Input() adjust=true; 
 details= false;
 swap=false;
 @Input() display=true;
 selected=false;
 images: Array<string>;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('https://picsum.photos/list')
    .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
    .subscribe(images => this.images = images);
  }

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }


  private toggleDetails(){
   if(!this.details){
     this.details=true;
   }
   else{
     this.details=false;
   }
 } 

 private toggleSwap(){
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
    this.swap=false;
  }
}  
}

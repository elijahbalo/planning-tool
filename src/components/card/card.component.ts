import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Router,ActivatedRoute } from '@angular/router';
import { Activity} from '../../models/activity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


 @Output() set: EventEmitter<any> = new EventEmitter<any>();



  activities: Activity[] = [];
  @Input() view=true;  
  images: Array<string>;
  @Input() item : any;
  constructor(private _http: HttpClient,private router: Router,
    private route:ActivatedRoute) {}


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


  navigateToDesign(){
      localStorage.setItem("grade", JSON.stringify(this.item.grades))
      localStorage.setItem("title", JSON.stringify(this.item.title))
      localStorage.setItem("year", JSON.stringify(this.item.timeOfYear))
      this.item.activities.map(activity =>{
        this.activities.push(new Activity(
            activity.time,
            0,
            activity.name,
            activity.type,
            activity.length,
            activity.description,
            activity.on,
            activity.qc,
            activity.fees,
            activity.img,
            activity.ageRange,
            activity.timeOfYear,
            activity.timeSlots,
            activity.order));  
      })
      localStorage.setItem("itinerary", JSON.stringify(this.activities))
      this.set.emit(true);

      

  }
 /* private ResizeImage() {
    var filesToUpload = document.getElementById('imageFile').files;
    var file = filesToUpload[0];

    // Create an image
    var img = document.createElement("img");
    // Create a file reader
    var reader = new FileReader();
    // Set the image once loaded into file reader
    reader.onload = function(e) {
            img.src = e.target.result;

            var canvas = document.createElement("canvas");
            //var canvas = $("<canvas>", {"id":"testing"})[0];
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            var MAX_WIDTH = 400;
            var MAX_HEIGHT = 400;
            var width = img.width;
            var height = img.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            var dataurl = canvas.toDataURL("image/png");
            document.getElementById('output').src = dataurl;
        }
        // Load files into file reader
    reader.readAsDataURL(file);
} */

}
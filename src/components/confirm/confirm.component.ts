import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
 showIamge=false;
 showTools=false;
 showDescription=false;
 adjust=false;
 view=false;
 display=false;
activities;
set: any
itineraries
  constructor( private router: Router,
    private route:ActivatedRoute) {
      
     }

  ngOnInit() {
    this.set = JSON.parse(localStorage.getItem("set"))
    localStorage.setItem('edit',JSON.stringify(false))
    this.itineraries = JSON.parse(localStorage.getItem("itinerary"))
    this.activities = JSON.parse(localStorage.getItem('activities'));

  }
  navigateToDesign(){
    localStorage.setItem('edit', JSON.stringify(true))
    this.router.navigateByUrl('DesignPage');
  }

  timeConvert(data) {
    
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

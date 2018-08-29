import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import * as Lodash from 'lodash';
import * as $ from 'jquery';



import { Router,ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.scss']
})

export class BrowsePageComponent implements OnInit {


modified= false;  

n_set

c_time

itineraries
titles
title
grade
year

  set = false;

first = false
second = false
third = false
fourth = false
fifth = false
sixth = false

active=true
prop

newSet= false

 
  p: number = 1;

  log = '';
  KinderTo2: boolean;
  Gr3To5: boolean;
  Gr6To8: boolean;
  OctoberToApril:boolean;
  MayToJune:boolean;
  checkboxValue:boolean;
  closeResult: string;
  items: any
  filtered:any;
  filters = {}
  filters1 = {}
  
  grades: string;
  timeOfYear: string;
  day: string;
  constructor(private modalService: NgbModal,private db: AngularFirestore,private router: Router,private changeDetector: ChangeDetectorRef,
    private route:ActivatedRoute) {
    
  }
  ngOnInit(){
   localStorage.clear();
  
   this.items = this.db.collection('/itineraries').valueChanges().subscribe(items => {
      this.items=items
      this.applyFilters()
    })
  
 console.log(this.items)
   

   
  }



getSet(event){
this.set=event;
this.itineraries = JSON.parse(localStorage.getItem("itinerary"))
this.grade = JSON.parse(localStorage.getItem("grade"))
this.title = JSON.parse(localStorage.getItem("title"))
this.year = JSON.parse(localStorage.getItem("year"))
this.titles = JSON.parse(localStorage.getItem("titles"))
}

add(event){


  this.itineraries.push(0)
  localStorage.setItem('itinerary', JSON.stringify(this.itineraries))
  console.log(this.itineraries)

  localStorage.setItem('_set', JSON.stringify(event))

}

back(){
  this.set = false;
  this.changeDetector.detectChanges();
  localStorage.removeItem('itinerary')
}

setItem(event){
  console.log("set item method fgfdfdfgddgdfgdfg")
this.itineraries.pop()
console.log(this.itineraries)
  this.itineraries.push(event)
  localStorage.setItem('itinerary', JSON.stringify(this.itineraries))

}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  emitOrder(event){
    localStorage.setItem('n_e_o', JSON.stringify(event))
  }

notice(event){
  this.itineraries = JSON.parse(localStorage.getItem("itinerary"))
}

modify(event){
  this.modified = event;
}







  resizeImage(){
    let value = false;
    if (screen.width < 1024) {
      value = true;
      return value
  }
  }



  private applyFilters() {
   
    console.log('action called')
    let newlyFilter = Lodash.filter(this.items, Lodash.conforms(this.filters))
    console.log(newlyFilter)
    this.filtered = newlyFilter;
    /* if (this.filtered === undefined || this.filtered.length == 0) {
      this.filtered = newlyFilter;
      console.log(true)
      console.log(this.filtered)
      console.log(newlyFilter)
  }
  else{
       console.log(false)

  newlyFilter.map((elem)=> this.filtered.push(elem));
  console.log(this.filtered)
  console.log(newlyFilter)
  } */


  
  }

  filterExact(property: string, rule: any) {
    this.sixth = true
     console.log(this.day)

    if(this.day == "Half-day"){
      console.log("callinghalf")
 this.filtered= this.items.filter(elem => elem.day=="Half-day")
}
 else{
    console.log("callingfull")
  this.filtered= this.items.filter(elem => elem.day=="Full-day")

}
  }




  filterBoolean(property: string, rule: boolean) {
    this.first = true
    
    if (!rule) this.removeFilter(property)
    else {
    if(this.fourth == true || this.fifth == true || this.sixth == true){
      console.log("external checked")
      // check if an internal checkbox has been selected
   
      if (this.second == true || this.third == true){
        console.log("intenal checked")
      //go through all the checked boxes and filter
       if (this.fourth == true){
         console.log("logged fourth")
         if (this.second == true){
          let first = this.items.filter(elem => elem.OctoberToApril== true)
          let sec = this.items.filter(elem => elem.Gr3To5 == true)
          let firstFilter = first.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
          if (this.day == "Half-day"){
          var fil = firstFilter.filter(elem => elem.day == "Half-day")
          var fils = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil = firstFilter.filter(elem => elem.day == "Full-day")
          var fils = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil.map(elem=>this.filtered.push(elem))
          fils.map(elem=>this.filtered.push(elem))
         }
       
         if (this.third== true){
          let first = this.items.filter(elem => elem.OctoberToApril== true)
          let sec = this.items.filter(elem => elem.Gr6To8 == true)
          let firstFilter = first.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
          if (this.day == "Half-day"){
          var fil1 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils1 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil1 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils1 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil1.map(elem=>this.filtered.push(elem))
          fils1.map(elem=>this.filtered.push(elem))
         }

         

        
       }
        
       if (this.fifth == true){

         console.log("logged fifth")

        
        if (this.second == true){
          let first = this.items.filter(elem => elem.MayToJune == true)
          let sec = this.items.filter(elem => elem.Gr3To5 == true)
          let firstFilter = first.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
          if (this.day == "Half-day"){
          var fil2 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils2 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil2 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils2 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil2.map(elem=>this.filtered.push(elem))
          fils2.map(elem=>this.filtered.push(elem))
         }


         if (this.third== true){
          let first = this.items.filter(elem => elem.MayToJune== true)
          let sec = this.items.filter(elem => elem.Gr6To8 == true)
          let firstFilter = first.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
          if (this.day == "Half-day"){
          var fil3 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils3 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil3 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils3 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil3.map(elem=>this.filtered.push(elem))
          fils3.map(elem=>this.filtered.push(elem))
         }
       
       }



    /*    if (this.sixth == true){
         console.log("logged sixth")
        if (this.second == true){
          let first = this.items.filter(elem => elem.day == this.day)
          let sec = this.items.filter(elem => elem.Gr3To5 == true)
          let firstFilter = first.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
       
          firstFilter.map(elem=>this.filtered.push(elem))
          secFilter.map(elem=>this.filtered.push(elem))
         }


         if (this.third == true){
          let first = this.items.filter(elem => elem.day == this.day)
          let sec = this.items.filter(elem => elem.Gr6To8 == true)
          let firstFilter = first.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
       
          firstFilter.map(elem=>this.filtered.push(elem))
          secFilter.map(elem=>this.filtered.push(elem))
         }
       }
       */
      }
   
   
   
   

      // no internal checkbox selected therefore, filter on the filtered items.
      else{
        console.log("internal not checked")
      this.filtered = this.filtered.filter(elem => elem.KinderTo2 == true)

      }
    }


 
    else {
      let result = this.items.filter(elem => elem.KinderTo2 == true)
      if (this.second == true || this.third == true){
        result.map( elem => this.filtered.push(elem))
        
      }
      else{
        this.filtered = result
      
    }
    }
  }
  }

  filterBoolean1(property: string, rule: boolean) {
  this.second = true;
  if (!rule) this.removeFilter1(property)
  else {
    if(this.fourth == true || this.fifth == true || this.sixth == true){
      console.log("external checked")
      // check if an internal checkbox has been selected
      if (this.first == true || this.third == true){
        console.log("intenal checked")
      //go through all the checked boxes and filter
       if (this.fourth == true){
        if (this.first == true){
          let first = this.items.filter(elem => elem.OctoberToApril== true)
          let sec = this.items.filter(elem => elem.KinderTo2 == true)
          let firstFilter = first.filter(elem => elem.Gr3To5)
          let secFilter = sec.filter(elem => elem.Gr3To5)
          if (this.day == "Half-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils4 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils4 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil4.map(elem=>this.filtered.push(elem))
          fils4.map(elem=>this.filtered.push(elem))
         }
        
         if (this.third == true){
          let first = this.items.filter(elem => elem.OctoberToApril== true)
          let sec = this.items.filter(elem => elem.Gr6To8 == true)
          let firstFilter = first.filter(elem => elem.Gr3To5)
          let secFilter = sec.filter(elem => elem.Gr3To5)
          if (this.day == "Half-day"){
          var fil5 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils5 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil5 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils5 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil5.map(elem=>this.filtered.push(elem))
          fils5.map(elem=>this.filtered.push(elem))
         }


       }
        
       if (this.fifth == true){
        if (this.first == true){
          let first = this.items.filter(elem => elem.MayToJune== true)
          let sec = this.items.filter(elem => elem.KinderTo2 == true)
          let firstFilter = first.filter(elem => elem.Gr3To5)
          let secFilter = sec.filter(elem => elem.Gr3To5)
          if (this.day == "Half-day"){
          var fil6 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils6 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil6 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils6 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil6.map(elem=>this.filtered.push(elem))
          fils6.map(elem=>this.filtered.push(elem))
         }


          if (this.third == true){
          let first = this.items.filter(elem => elem.MayToJune == true)
          let sec = this.items.filter(elem => elem.Gr6To8 == true)
          let firstFilter = first.filter(elem => elem.Gr3To5)
          let secFilter = sec.filter(elem => elem.Gr3To5)
          if (this.day == "Half-day"){
          var fil7 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils7 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil7 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils7 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil7.map(elem=>this.filtered.push(elem))
          fils7.map(elem=>this.filtered.push(elem))
         }
       }

       /* if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)

        let thirdFilter = third.filter(elem => elem.Gr3To5)
        thirdFilter.map(elem=>this.filtered.push(elem))
       } */
      
      }


      // no internal checkbox selected therefore, filter on the filtered items.
      else{
        console.log("internal not checked")
      this.filtered = this.filtered.filter(elem => elem.Gr3To5 == true)

      }
    }



    else{
    let result = this.items.filter(elem => elem.Gr3To5 == true)
    if (this.first == true || this.third == true){
      result.map( elem => this.filtered.push(elem))
      
    }
    else{
      this.filtered = result
    }
  }
}
  }

  filterBoolean2(property: string, rule: boolean) {
    this.third = true;
    if (!rule) this.removeFilter2(property)
    else {
      if(this.fourth == true || this.fifth == true || this.sixth == true){
        console.log("external checked")
        // check if an internal checkbox has been selected
        if (this.second == true || this.first == true){
          console.log("intenal checked")
        //go through all the checked boxes and filter
         if (this.fourth == true){
          if (this.first == true){
            let first = this.items.filter(elem => elem.OctoberToApril== true)
            let sec = this.items.filter(elem => elem.KinderTo2 == true)
            let firstFilter = first.filter(elem => elem.Gr6To8)
            let secFilter = sec.filter(elem => elem.Gr6To8)
            if (this.day == "Half-day"){
            var fil4 = firstFilter.filter(elem => elem.day == "Half-day")
            var fils4 = secFilter.filter(elem => elem.day == "Half-day")
            }
            if (this.day == "Full-day"){
            var fil4 = firstFilter.filter(elem => elem.day == "Full-day")
            var fils4 = secFilter.filter(elem => elem.day == "Full-day")
            }
            fil4.map(elem=>this.filtered.push(elem))
            fils4.map(elem=>this.filtered.push(elem))
           }
  
           if (this.second == true){
            let first = this.items.filter(elem => elem.OctoberToApril == true)
            let sec = this.items.filter(elem => elem.Gr3To5 == true)
            let firstFilter = first.filter(elem => elem.Gr6To8)
            let secFilter = sec.filter(elem => elem.Gr6To8)
            if (this.day == "Half-day"){
            var fil4 = firstFilter.filter(elem => elem.day == "Half-day")
            var fils4 = secFilter.filter(elem => elem.day == "Half-day")
            }
            if (this.day == "Full-day"){
            var fil4 = firstFilter.filter(elem => elem.day == "Full-day")
            var fils4 = secFilter.filter(elem => elem.day == "Full-day")
            }
            fil4.map(elem=>this.filtered.push(elem))
            fils4.map(elem=>this.filtered.push(elem))
           }
          
         }
          
         if (this.fifth == true){
  
          if (this.first == true){
            let first = this.items.filter(elem => elem.MayToJune== true)
            let sec = this.items.filter(elem => elem.KinderTo2 == true)
            let firstFilter = first.filter(elem => elem.Gr6To8)
            let secFilter = sec.filter(elem => elem.Gr6To8)
            if (this.day == "Half-day"){
            var fil4 = firstFilter.filter(elem => elem.day == "Half-day")
            var fils4 = secFilter.filter(elem => elem.day == "Half-day")
            }
            if (this.day == "Full-day"){
            var fil4 = firstFilter.filter(elem => elem.day == "Full-day")
            var fils4 = secFilter.filter(elem => elem.day == "Full-day")
            }
            fil4.map(elem=>this.filtered.push(elem))
            fils4.map(elem=>this.filtered.push(elem))
           }
  
  
        if (this.second == true){
            let first = this.items.filter(elem => elem.MayToJune == true)
            let sec = this.items.filter(elem => elem.Gr3To5 == true)
            let firstFilter = first.filter(elem => elem.Gr6To8)
            let secFilter = sec.filter(elem => elem.Gr6To8)
            if (this.day == "Half-day"){
            var fil4 = firstFilter.filter(elem => elem.day == "Half-day")
            var fils4 = secFilter.filter(elem => elem.day == "Half-day")
            }
            if (this.day == "Full-day"){
            var fil4 = firstFilter.filter(elem => elem.day == "Full-day")
            var fils4 = secFilter.filter(elem => elem.day == "Full-day")
            }
            fil4.map(elem=>this.filtered.push(elem))
            fils4.map(elem=>this.filtered.push(elem))
           }
         }
  /* 
         if (this.sixth == true){
          let third = this.items.filter(elem => elem.day == this.day)
  
          let thirdFilter = third.filter(elem => elem.Gr6To8)
          thirdFilter.map(elem=>this.filtered.push(elem))
         }
         */
        }
  
        // no internal checkbox selected therefore, filter on the filtered items.
        else{
          console.log("internal not checked")
        this.filtered = this.filtered.filter(elem => elem.Gr6To8 == true)
  
        }
      }


      else{
      let result = this.items.filter(elem => elem.Gr6To8 == true)
      if (this.first == true || this.second == true){
        result.map( elem => this.filtered.push(elem))
        
      }
      else{
        this.filtered = result
      }
    }
  }
  }









  filterBoolean3(property: string, rule: boolean) {
    this.fourth = true;
    if (!rule) this.removeFilter3(property)
    else {
    //check if external has been checked
    if(this.first == true || this.second == true || this.third == true || this.sixth == true){
      // check if an internal checkbox has been selected
      if (this.fifth == true){
        console.log("intenal checked")
      //go through all the checked boxes and filter
       if (this.first == true){
        let first = this.items.filter(elem => elem.KinderTo2 == true)
  
        if (this.day == "Half-day"){
          console.log("fitering full days")
          var fill1 = first.filter(elem => elem.day == "Half-day")
           console.log(fill1)
          }
          if (this.day == "Full-day"){
            (console.log("filtering half days"))
          var fill1 = first.filter(elem => elem.day == "Full-day")
  
          }       
  
        
       }
        
       if (this.second == true){
        let second = this.items.filter(elem => elem.Gr3To5 == true)
        if (this.day == "Half-day"){
          var fill2 = second.filter(elem => elem.day == "Half-day")
    
          }
          if (this.day == "Full-day"){
          var fill2 = second.filter(elem => elem.day == "Full-day")
  
          }       
  
        fill2.map(elem=>this.filtered.push(elem))
       }
      
  
       if (this.third == true){
        let third = this.items.filter(elem => elem.Gr6To8 == true)
        if (this.day == "Half-day"){
          var fill3 = third.filter(elem => elem.day == "Half-day")
    
          }
          if (this.day == "Full-day"){
          var fill3 = third.filter(elem => elem.day == "Full-day")
  
          }       
  
        fill3.map(elem=>this.filtered.push(elem))
       }
  
      /*  if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)
  
        let thirdFilter = third.filter(elem => elem.MayToJune)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }
   */
  
      }
  

      // no internal checkbox selected therefore, filter on the filtered items.
      else{
      this.filtered = this.filtered.filter(elem => elem.OctoberToApril == true)

      }
    }

     
// if external has not been checked
else{
      let result = this.items.filter(elem => elem.OctoberToApril == true)
      if (this.fifth == true){
        result.map( elem => this.filtered.push(elem))
        
      }
      else{
        this.filtered = result
      }
    }
  }
  }





  filterBoolean4(property: string, rule: boolean) {
    this.fifth = true;
    if (!rule) this.removeFilter4(property)
    else {
          //check if external has been checked
    if(this.first == true || this.second == true || this.third == true || this.sixth == true){
      console.log("external checked")
      // check if an internal checkbox has been selected
      if (this.fourth == true){
        //go through all the checked boxes and filter
         if (this.first == true){
          let first = this.items.filter(elem => elem.KinderTo2 == true)
  
          if (this.day == "Half-day"){
            console.log("fitering full days")
            var fill1 = first.filter(elem => elem.day == "Half-day")
             console.log(fill1)
            }
            if (this.day == "Full-day"){
              (console.log("filtering half days"))
            var fill1 = first.filter(elem => elem.day == "Full-day")
    
            }
          
         }
          
         if (this.second == true){
          let second = this.items.filter(elem => elem.Gr3To5 == true)
          if (this.day == "Half-day"){
            var fill2 = second.filter(elem => elem.day == "Half-day")
      
            }
            if (this.day == "Full-day"){
            var fill2 = second.filter(elem => elem.day == "Full-day")
    
            }    
            fill2.map(elem=>this.filtered.push(elem))
         }
        
  
         if (this.third == true){
          let third = this.items.filter(elem => elem.Gr6To8 == true)
          if (this.day == "Half-day"){
            var fill3 = third.filter(elem => elem.day == "Half-day")
      
            }
            if (this.day == "Full-day"){
            var fill3 = third.filter(elem => elem.day == "Full-day")
    
            }  
            fill3.map(elem=>this.filtered.push(elem))   
         }
  
        /*  if (this.sixth == true){
          let third = this.items.filter(elem => elem.day == this.day)
  
          let thirdFilter = third.filter(elem => elem.OctoberToApril)
          thirdFilter.map(elem=>this.filtered.push(elem))
         }
   */
        }

      // no internal checkbox selected therefore, filter on the filtered items.
      else{
        console.log("internal not checked")
      this.filtered = this.filtered.filter(elem => elem.MayToJune == true)

      }
    }

      else{
      let result = this.items.filter(elem => elem.MayToJune == true)
      if (this.fourth == true){
        result.map( elem => this.filtered.push(elem))
        
      }
      else{
        this.filtered = result
      }
    }
    }
  }








  removeFilter(property: string) {
    this.first = false

    if(this.fourth == true || this.fifth == true || this.sixth == true){
      this.filtered = this.filtered.filter(elem => elem.KinderTo2 == false)
      console.log("external checked")
      // check if an internal checkbox has been selected
      if (this.second == true || this.third == true){
        console.log("intenal checked")
      //go through all the checked boxes and filter
       if (this.fourth == true){
         console.log("logged fourth")
         if (this.second == true){
          let first = this.items.filter(elem => elem.OctoberToApril== true)
          let sec = first.filter(elem => elem.Gr3To5 == true)
          let firstFilter = sec.filter(elem => elem.KinderTo2 )
          let secFilter = sec.filter(elem => elem.KinderTo2)
          if (this.day == "Half-day"){
          var fil = firstFilter.filter(elem => elem.day == "Half-day")
          var fils = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil = firstFilter.filter(elem => elem.day == "Full-day")
          var fils = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil.map(elem=>this.filtered.push(elem))
          
         }
       
         if (this.third== true){
          let first = this.items.filter(elem => elem.OctoberToApril== true)
          let sec = first.filter(elem => elem.Gr6To8 == true)
          let firstFilter = sec.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
          if (this.day == "Half-day"){
          var fil1 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils1 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil1 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils1 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil1.map(elem=>this.filtered.push(elem))
         
         }

         

        
       }
        
       if (this.fifth == true){

         console.log("logged fifth")

        
        if (this.second == true){
          let first = this.items.filter(elem => elem.MayToJune == true)
          let sec = first.filter(elem => elem.Gr3To5 == true)
          let firstFilter = sec.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
          if (this.day == "Half-day"){
          var fil2 = firstFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil2 = firstFilter.filter(elem => elem.day == "Full-day")
       
          }
          fil2.map(elem=>this.filtered.push(elem))
   
         }


         if (this.third== true){
          let first = this.items.filter(elem => elem.MayToJune== true)
          let sec = first.filter(elem => elem.Gr6To8 == true)
          let firstFilter = sec.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
          if (this.day == "Half-day"){
          var fil3 = firstFilter.filter(elem => elem.day == "Half-day")
      
          }
          if (this.day == "Full-day"){
          var fil3 = firstFilter.filter(elem => elem.day == "Full-day")
       
          }
          fil3.map(elem=>this.filtered.push(elem))
      
         }
       
       }



    /*    if (this.sixth == true){
         console.log("logged sixth")
        if (this.second == true){
          let first = this.items.filter(elem => elem.day == this.day)
          let sec = this.items.filter(elem => elem.Gr3To5 == true)
          let firstFilter = first.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
       
          firstFilter.map(elem=>this.filtered.push(elem))
          secFilter.map(elem=>this.filtered.push(elem))
         }


         if (this.third == true){
          let first = this.items.filter(elem => elem.day == this.day)
          let sec = this.items.filter(elem => elem.Gr6To8 == true)
          let firstFilter = first.filter(elem => elem.KinderTo2)
          let secFilter = sec.filter(elem => elem.KinderTo2)
       
          firstFilter.map(elem=>this.filtered.push(elem))
          secFilter.map(elem=>this.filtered.push(elem))
         }
       }
       */
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else{
        console.log("internal not checked")
        console.log(this.day)
        if(this.fourth == true){
          let first = this.items.filter(elem => elem.OctoberToApril == true)
          
          if (this.day == "Half-day"){
            console.log("fitering full days")
            var fill1 = first.filter(elem => elem.day == "Half-day")
             console.log(fill1)
            }
            if (this.day == "Full-day"){
              (console.log("filtering half days"))
            var fill1 = first.filter(elem => elem.day == "Full-day")
  
            }       
    
          fill1.map(elem=>this.filtered.push(elem))


          
         }
          
         if (this.fifth == true){
          let second = this.items.filter(elem => elem.MayToJune == true)
          if (this.day == "Half-day"){
            var fill2 = second.filter(elem => elem.day == "Half-day")
      
            }
            if (this.day == "Full-day"){
            var fill2 = second.filter(elem => elem.day == "Full-day")
  
            }       
    
          fill2.map(elem=>this.filtered.push(elem))
         }
        
        /*  if (this.sixth == true){
          let second = this.items.filter(elem => elem.day == this.day)
          second.map(elem=>this.filtered.push(elem))
         } */
      }
    }
    



    else{
    if(this.second == false && this.third == false){
    this.applyFilters()
    }
    else{
      console.log("removetrue")
      console.log(this.filtered)
   this.filtered = this.filtered.filter(elem => elem.KinderTo2 == false)
    }
  }
  }







  removeFilter1(property: string) {
    this.second = false
    if(this.fourth == true || this.fifth == true || this.sixth == true){
      this.filtered = this.filtered.filter(elem => elem.Gr3To5 == false)
      console.log("external checked")
      // check if an internal checkbox has been selected
      if (this.first == true || this.third == true){
        console.log("intenal checked")
      //go through all the checked boxes and filter
       if (this.fourth == true){
        if (this.first == true){
          console.log("first is checked")
          let first = this.items.filter(elem => elem.OctoberToApril== true)
          let sec = first.filter(elem => elem.KinderTo2 == true)
          console.log(sec)
          let firstFilter = sec.filter(elem => elem.Gr3To5)
          let secFilter = sec.filter(elem => elem.Gr3To5)
          if (this.day == "Half-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Half-day")
       
          }
          if (this.day == "Full-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Full-day")

          }
          fil4.map(elem=>this.filtered.push(elem))

         }
        
         if (this.third == true){
          let first = this.items.filter(elem => elem.OctoberToApril== true)
          let sec = first.filter(elem => elem.Gr6To8 == true)
          let firstFilter = sec.filter(elem => elem.Gr3To5)
          let secFilter = sec.filter(elem => elem.Gr3To5)
          if (this.day == "Half-day"){
          var fil5 = firstFilter.filter(elem => elem.day == "Half-day")
       
          }
          if (this.day == "Full-day"){
          var fil5 = firstFilter.filter(elem => elem.day == "Full-day")
    
          }
          fil5.map(elem=>this.filtered.push(elem))

         }


       }
        
       if (this.fifth == true){
        if (this.first == true){
          let first = this.items.filter(elem => elem.MayToJune== true)
          let sec = first.filter(elem => elem.KinderTo2 == true)
          let firstFilter = sec.filter(elem => elem.Gr3To5)
          let secFilter = sec.filter(elem => elem.Gr3To5)
          if (this.day == "Half-day"){
          var fil6 = firstFilter.filter(elem => elem.day == "Half-day")
      
          }
          if (this.day == "Full-day"){
          var fil6 = firstFilter.filter(elem => elem.day == "Full-day")
       
          }
          fil6.map(elem=>this.filtered.push(elem))
    
         }


          if (this.third == true){
          let first = this.items.filter(elem => elem.MayToJune == true)
          let sec = first.filter(elem => elem.Gr6To8 == true)
          let firstFilter = sec.filter(elem => elem.Gr3To5)
          let secFilter = sec.filter(elem => elem.Gr3To5)
          if (this.day == "Half-day"){
          var fil7 = firstFilter.filter(elem => elem.day == "Half-day")
      
          }
          if (this.day == "Full-day"){
          var fil7 = firstFilter.filter(elem => elem.day == "Full-day")
       
          }
          fil7.map(elem=>this.filtered.push(elem))

         }
       }

       /* if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)

        let thirdFilter = third.filter(elem => elem.Gr3To5)
        thirdFilter.map(elem=>this.filtered.push(elem))
       } */
      
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else{
        if(this.fourth == true){
          let first = this.items.filter(elem => elem.OctoberToApril == true)
            
          if (this.day == "Half-day"){
            console.log("fitering full days")
            var fill1 = first.filter(elem => elem.day == "Half-day")
             console.log(fill1)
            }
            if (this.day == "Full-day"){
              (console.log("filtering half days"))
            var fill1 = first.filter(elem => elem.day == "Full-day")
  
            }       
    
          fill1.map(elem=>this.filtered.push(elem))


          
         }
          
         if (this.fifth == true){
          let second = this.items.filter(elem => elem.MayToJune == true)
          if (this.day == "Half-day"){
            var fill2 = second.filter(elem => elem.day == "Half-day")
      
            }
            if (this.day == "Full-day"){
            var fill2 = second.filter(elem => elem.day == "Full-day")
  
            }       
    
          fill2.map(elem=>this.filtered.push(elem))
         }
/* 
         if (this.sixth == true){
          let second = this.items.filter(elem => elem.day == this.day)
          second.map(elem=>this.filtered.push(elem))
         } */
      }
    }

    else{
    if(this.first == false && this.third == false){
      this.applyFilters()
      }
      else{
        console.log("removetrue")
        console.log(this.filtered)
     this.filtered = this.filtered.filter(elem => elem.Gr3To5 == false)
      }
    }
  }









  removeFilter2(property: string) {
    this.third=false
    if(this.fourth == true || this.fifth == true || this.sixth == true){
      this.filtered = this.filtered.filter(elem => elem.Gr6To8 == false)
      console.log("external checked")
      // check if an internal checkbox has been selected
      if (this.second == true || this.first == true){
        console.log("intenal checked")
      //go through all the checked boxes and filter
       if (this.fourth == true){
        if (this.first == true){
          let first = this.items.filter(elem => elem.OctoberToApril== true)
          let sec = first.filter(elem => elem.KinderTo2 == true)
          let firstFilter = sec.filter(elem => elem.Gr6To8)
          let secFilter = sec.filter(elem => elem.Gr6To8)
          if (this.day == "Half-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils4 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils4 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil4.map(elem=>this.filtered.push(elem))
       
         }

         if (this.second == true){
          let first = this.items.filter(elem => elem.OctoberToApril == true)
          let sec = first.filter(elem => elem.Gr3To5 == true)
          let firstFilter = sec.filter(elem => elem.Gr6To8)
          let secFilter = sec.filter(elem => elem.Gr6To8)
          if (this.day == "Half-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils4 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils4 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil4.map(elem=>this.filtered.push(elem))
      
         }
        
       }
        
       if (this.fifth == true){

        if (this.first == true){
          let first = this.items.filter(elem => elem.MayToJune== true)
          let sec = first.filter(elem => elem.KinderTo2 == true)
          let firstFilter = sec.filter(elem => elem.Gr6To8)
          let secFilter = sec.filter(elem => elem.Gr6To8)
          if (this.day == "Half-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils4 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils4 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil4.map(elem=>this.filtered.push(elem))
    
         }


      if (this.second == true){
          let first = this.items.filter(elem => elem.MayToJune == true)
          let sec = first.filter(elem => elem.Gr3To5 == true)
          let firstFilter = sec.filter(elem => elem.Gr6To8)
          let secFilter = sec.filter(elem => elem.Gr6To8)
          if (this.day == "Half-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Half-day")
          var fils4 = secFilter.filter(elem => elem.day == "Half-day")
          }
          if (this.day == "Full-day"){
          var fil4 = firstFilter.filter(elem => elem.day == "Full-day")
          var fils4 = secFilter.filter(elem => elem.day == "Full-day")
          }
          fil4.map(elem=>this.filtered.push(elem))
      
         }
       }
/* 
       if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)

        let thirdFilter = third.filter(elem => elem.Gr6To8)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }
       */
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else{
        console.log("internal not checked")
        if(this.fourth == true){
          let first = this.items.filter(elem => elem.OctoberToApril == true)
           
          if (this.day == "Half-day"){
            console.log("fitering full days")
            var fill1 = first.filter(elem => elem.day == "Half-day")
             console.log(fill1)
            }
            if (this.day == "Full-day"){
              (console.log("filtering half days"))
            var fill1 = first.filter(elem => elem.day == "Full-day")
  
            }       
    
          fill1.map(elem=>this.filtered.push(elem))
          
         }
          
         if (this.fifth == true){
          let second = this.items.filter(elem => elem.MayToJune == true)
          if (this.day == "Half-day"){
            var fill2 = second.filter(elem => elem.day == "Half-day")
      
            }
            if (this.day == "Full-day"){
            var fill2 = second.filter(elem => elem.day == "Full-day")
  
            }       
    
          fill2.map(elem=>this.filtered.push(elem))
         }
/* 
         if (this.sixth == true){
          let second = this.items.filter(elem => elem.day == this.day)
          second.map(elem=>this.filtered.push(elem))
         } */

      }
    }


    else{
    if(this.second == false && this.first == false){
      this.applyFilters()
      }
      else{
        console.log("removetrue")
        console.log(this.filtered)
     this.filtered = this.filtered.filter(elem => elem.Gr6To8 == false)
      }
    }
  }








  
  removeFilter3(property: string) {
    this.fourth=false
   // check if external was selected 
   if(this.first == true || this.second == true || this.third == true || this.sixth == true){
    this.filtered = this.filtered.filter(elem => elem.OctoberToApril == false)
    console.log("external checked")
    // check if an internal checkbox has been selected
    if (this.fifth == true){
      console.log("intenal checked")
    //go through all the checked boxes and filter
     if (this.first == true){
      let first = this.items.filter(elem => elem.KinderTo2 == true)

      if (this.day == "Half-day"){
        console.log("fitering full days")
        var fill1 = first.filter(elem => elem.day == "Half-day")
         console.log(fill1)
        }
        if (this.day == "Full-day"){
          (console.log("filtering half days"))
        var fill1 = first.filter(elem => elem.day == "Full-day")

        }       

      
     }
      
     if (this.second == true){
      let second = this.items.filter(elem => elem.Gr3To5 == true)
      if (this.day == "Half-day"){
        var fill2 = second.filter(elem => elem.day == "Half-day")
  
        }
        if (this.day == "Full-day"){
        var fill2 = second.filter(elem => elem.day == "Full-day")

        }       

      fill2.map(elem=>this.filtered.push(elem))
     }
    

     if (this.third == true){
      let third = this.items.filter(elem => elem.Gr6To8 == true)
      if (this.day == "Half-day"){
        var fill3 = third.filter(elem => elem.day == "Half-day")
  
        }
        if (this.day == "Full-day"){
        var fill3 = third.filter(elem => elem.day == "Full-day")

        }       

      fill3.map(elem=>this.filtered.push(elem))
     }

    /*  if (this.sixth == true){
      let third = this.items.filter(elem => elem.day == this.day)

      let thirdFilter = third.filter(elem => elem.MayToJune)
      thirdFilter.map(elem=>this.filtered.push(elem))
     }
 */

    }

    // no internal checkbox selected therefore, filter on the filtered items.
    else{
      console.log("internal not checked")
      if(this.first == true){
        let first = this.items.filter(elem => elem.KinderTo2 == true)
        if (this.day == "Half-day"){
          console.log("fitering full days")
          var fill5 = first.filter(elem => elem.day == "Half-day")
           console.log(fill5)
          }
          if (this.day == "Full-day"){
            (console.log("filtering half days"))
          var fill5 = first.filter(elem => elem.day == "Full-day")

          }       
  
        fill5.map(elem=>this.filtered.push(elem))
        
       }
        
       
        
       if (this.second == true){
        let second = this.items.filter(elem => elem.Gr3To5 == true)
        if (this.day == "Half-day"){
          console.log("fitering full days")
          var fill6 = second.filter(elem => elem.day == "Half-day")
           console.log(fill6)
          }
          if (this.day == "Full-day"){
            (console.log("filtering half days"))
          var fill6 = second.filter(elem => elem.day == "Full-day")

          }       
  
        fill6.map(elem=>this.filtered.push(elem))
        
       }
       
      
  
       if (this.third == true){
        let third = this.items.filter(elem => elem.Gr6To8 == true)
        if (this.day == "Half-day"){
          console.log("fitering full days")
          var fill7 = third.filter(elem => elem.day == "Half-day")
           console.log(fill1)
          }
          if (this.day == "Full-day"){
            (console.log("filtering half days"))
          var fill7 = third.filter(elem => elem.day == "Full-day")

          }       
  
        fill7.map(elem=>this.filtered.push(elem))
        
       }
       
      

       /* if (this.sixth == true){
        let second = this.items.filter(elem => elem.day == this.day)
        second.map(elem=>this.filtered.push(elem))
       }
 */
    }
  }


    // external has not been selected apply normal
    else{
    if(this.fifth == false){
      this.applyFilters()
      }
      else{
        console.log("removetrue")
        console.log(this.filtered)
     this.filtered = this.filtered.filter(elem => elem.OctoberToApril == false)
      }

    }
  }

























  removeFilter4(property: string) {
    this.fifth=false

    if(this.first == true || this.second == true || this.third == true || this.sixth == true){
      this.filtered = this.filtered.filter(elem => elem.MayToJune == false)
      // check if an internal checkbox has been selected
      if (this.fourth == true){
      //go through all the checked boxes and filter
       if (this.first == true){
        let first = this.items.filter(elem => elem.KinderTo2 == true)

        if (this.day == "Half-day"){
          console.log("fitering full days")
          var fill1 = first.filter(elem => elem.day == "Half-day")
           console.log(fill1)
          }
          if (this.day == "Full-day"){
            (console.log("filtering half days"))
          var fill1 = first.filter(elem => elem.day == "Full-day")
  
          }
        
       }
        
       if (this.second == true){
        let second = this.items.filter(elem => elem.Gr3To5 == true)
        if (this.day == "Half-day"){
          var fill2 = second.filter(elem => elem.day == "Half-day")
    
          }
          if (this.day == "Full-day"){
          var fill2 = second.filter(elem => elem.day == "Full-day")
  
          }    
          fill2.map(elem=>this.filtered.push(elem))
       }
      

       if (this.third == true){
        let third = this.items.filter(elem => elem.Gr6To8 == true)
        if (this.day == "Half-day"){
          var fill3 = third.filter(elem => elem.day == "Half-day")
    
          }
          if (this.day == "Full-day"){
          var fill3 = third.filter(elem => elem.day == "Full-day")
  
          }  
          fill3.map(elem=>this.filtered.push(elem))   
       }

      /*  if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)

        let thirdFilter = third.filter(elem => elem.OctoberToApril)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }
 */
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else{
        console.log("internal not checked")
      if(this.first == true){
        let first = this.items.filter(elem => elem.KinderTo2 == true)
        if (this.day == "Half-day"){
          console.log("fitering full days")
          var fill5 = first.filter(elem => elem.day == "Half-day")
           console.log(fill5)
          }
          if (this.day == "Full-day"){
            (console.log("filtering half days"))
          var fill5 = first.filter(elem => elem.day == "Full-day")

          }       
  
        fill5.map(elem=>this.filtered.push(elem))
       }
        
       if (this.second == true){
        let second = this.items.filter(elem => elem.Gr3To5 == true)
        if (this.day == "Half-day"){
          console.log("fitering full days")
          var fill6 = second.filter(elem => elem.day == "Half-day")
           console.log(fill6)
          }
          if (this.day == "Full-day"){
            (console.log("filtering half days"))
          var fill6 = second.filter(elem => elem.day == "Full-day")

          }       
  
        fill6.map(elem=>this.filtered.push(elem))
       }
      
  
       if (this.third == true){
    
        let third = this.items.filter(elem => elem.Gr6To8 == true)
        if (this.day == "Half-day"){
          console.log("fitering full days")
          var fill7 = third.filter(elem => elem.day == "Half-day")
           console.log(fill1)
          }
          if (this.day == "Full-day"){
            (console.log("filtering half days"))
          var fill7 = third.filter(elem => elem.day == "Full-day")

          }       
  
        fill7.map(elem=>this.filtered.push(elem))
       }

      /*  if (this.sixth == true){
        let second = this.items.filter(elem => elem.day == this.day)
        second.map(elem=>this.filtered.push(elem))
       } */

      }
    }




    else{
    if(this.fourth == false){
      this.applyFilters()
      }
      else{
        console.log("removetrue")
        console.log(this.filtered)
     this.filtered = this.filtered.filter(elem => elem.MayToJune == false)
      }
    }
  }


  

 /*  filterExact1(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters1()
  }

  filterExact2(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters2()
  } */

  reset(){
    $('.cbox').prop('checked', false);
    $('.rad').prop('checked', false);
    this.removeFilter("day")
    this.removeFilter("KinderTo2")
    this.removeFilter("Gr3To5")
    this.removeFilter("Gr6To8")
    this.first=false
    this.second=false
    this.third=false
    this.fourth=false
    this.fifth=false
    this.filtered= this.items;

  }

  navigateToDesignPage(){
  this.router.navigate(["/DesignPage"]); 
}

}



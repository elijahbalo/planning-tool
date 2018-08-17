import { Component, OnInit } from '@angular/core';
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
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


first = false
second = false
third = false
fourth = false
fifth = false
sixth = false


prop

 
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
  constructor(private modalService: NgbModal,private db: AngularFirestore,private router: Router,
    private route:ActivatedRoute) {
    
  }
  ngOnInit(){
    localStorage.setItem('landing', JSON.stringify(true));
    localStorage.setItem('submit', JSON.stringify(false));
    localStorage.setItem('design', JSON.stringify(false));
    localStorage.setItem('confirm', JSON.stringify(false));
   this.db.collection('/itineraries').valueChanges().subscribe(items => {
      this.items=items
      this.applyFilters()
    })
    localStorage.setItem("set",JSON.stringify(false))
   console.log(this.items)

  }





  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
  resizeImage(){
    let value = false;
    if (screen.width < 1024) {
      value = true;
      return value
  }
  }

  logCheckbox(element: HTMLInputElement): void {
    console.log(`Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`);
    this.grades= element.value;
    console.log(this.grades)
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
        let first = this.items.filter(elem => elem.OctoberToApril== true)

        let firstFilter = first.filter(elem => elem.KinderTo2)
        firstFilter.map(elem=>this.filtered.push(elem))
        
       }
        
       if (this.fifth == true){
        let second = this.items.filter(elem => elem.MayToJune == true)

        let secondFilter = second.filter(elem => elem.KinderTo2)
        secondFilter.map(elem=>this.filtered.push(elem))
       }
      
       if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)

        let thirdFilter = third.filter(elem => elem.KinderTo2)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }
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
        let first = this.items.filter(elem => elem.OctoberToApril== true)

        let firstFilter = first.filter(elem => elem.Gr3To5)
        firstFilter.map(elem=>this.filtered.push(elem))
        
       }
        
       if (this.fifth == true){
        let second = this.items.filter(elem => elem.MayToJune == true)

        let secondFilter = second.filter(elem => elem.Gr3To5)
        secondFilter.map(elem=>this.filtered.push(elem))
       }
      
       if (this.sixth == true){
        let second = this.items.filter(elem => elem.day == this.day)

        let secondFilter = second.filter(elem => elem.Gr3To5)
        secondFilter.map(elem=>this.filtered.push(elem))
       }
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
          let first = this.items.filter(elem => elem.OctoberToApril== true)
  
          let firstFilter = first.filter(elem => elem.Gr6To8)
          firstFilter.map(elem=>this.filtered.push(elem))
          
         }
          
         if (this.fifth == true){
          let second = this.items.filter(elem => elem.MayToJune == true)
  
          let secondFilter = second.filter(elem => elem.Gr6To8)
          secondFilter.map(elem=>this.filtered.push(elem))
         }

         if (this.sixth == true){
          let second = this.items.filter(elem => elem.day == this.day)
  
          let secondFilter = second.filter(elem => elem.Gr6To8)
          secondFilter.map(elem=>this.filtered.push(elem))
         }
        
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
      //go through all the checked boxes and filter
       if (this.first == true){
        let first = this.items.filter(elem => elem.KinderTo2 == true)

        let firstFilter = first.filter(elem => elem.OctoberToApril)
        firstFilter.map(elem=>this.filtered.push(elem))
        
       }
        
       if (this.second == true){
        let second = this.items.filter(elem => elem.Gr3To5 == true)

        let secondFilter = second.filter(elem => elem.OctoberToApril)
        secondFilter.map(elem=>this.filtered.push(elem))
       }
      

       if (this.third == true){
        let third = this.items.filter(elem => elem.Gr6To8 == true)
        let thirdFilter = third.filter(elem => elem.OctoberToApril)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }

       if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)
        let thirdFilter = third.filter(elem => elem.OctoberToApril)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }


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
        console.log("intenal checked")
      //go through all the checked boxes and filter
       if (this.first == true){
        let first = this.items.filter(elem => elem.KinderTo2 == true)

        let firstFilter = first.filter(elem => elem.MayToJune)
        firstFilter.map(elem=>this.filtered.push(elem))
        
       }
        
       if (this.second == true){
        let second = this.items.filter(elem => elem.Gr3To5 == true)

        let secondFilter = second.filter(elem => elem.MayToJune)
        secondFilter.map(elem=>this.filtered.push(elem))
       }
      

       if (this.third == true){
        let third = this.items.filter(elem => elem.Gr6To8 == true)
        let thirdFilter = third.filter(elem => elem.MayToJune)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }

       if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == true)
        let thirdFilter = third.filter(elem => elem.MayToJune)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }

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
        let first = this.items.filter(elem => elem.OctoberToApril== true)

        let firstFilter = first.filter(elem => elem.KinderTo2)
        firstFilter.map(elem=>this.filtered.push(elem))
        
       }
        
       if (this.fifth == true){
        let second = this.items.filter(elem => elem.MayToJune == true)

        let secondFilter = second.filter(elem => elem.KinderTo2)
        secondFilter.map(elem=>this.filtered.push(elem))
       }


       if (this.sixth == true){
         
        let third = this.items.filter(elem => elem.day == this.day)

        let thirdFilter = third.filter(elem => elem.KinderTo2)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }
      
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else{
        console.log("internal not checked")
        if(this.fourth == true){
          let first = this.items.filter(elem => elem.OctoberToApril == true)
          first.map(elem=>this.filtered.push(elem))
          
         }
          
         if (this.fifth == true){
          let second = this.items.filter(elem => elem.MayToJune == true)
          second.map(elem=>this.filtered.push(elem))
         }
        
         if (this.sixth == true){
          let second = this.items.filter(elem => elem.day == this.day)
          second.map(elem=>this.filtered.push(elem))
         }
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
        let first = this.items.filter(elem => elem.OctoberToApril== true)

        let firstFilter = first.filter(elem => elem.Gr3To5)
        firstFilter.map(elem=>this.filtered.push(elem))
        
       }
        
       if (this.fifth == true){
        let second = this.items.filter(elem => elem.MayToJune == true)

        let secondFilter = second.filter(elem => elem.Gr3To5)
        secondFilter.map(elem=>this.filtered.push(elem))
       }

       if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)

        let thirdFilter = third.filter(elem => elem.Gr3To5)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }
      
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else{
        if(this.fourth == true){
          let first = this.items.filter(elem => elem.OctoberToApril == true)
          first.map(elem=>this.filtered.push(elem))
          
         }
          
         if (this.fifth == true){
          let second = this.items.filter(elem => elem.MayToJune == true)
          second.map(elem=>this.filtered.push(elem))
         }

         if (this.sixth == true){
          let second = this.items.filter(elem => elem.day == this.day)
          second.map(elem=>this.filtered.push(elem))
         }
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
        let first = this.items.filter(elem => elem.OctoberToApril== true)

        let firstFilter = first.filter(elem => elem.Gr6To8)
        firstFilter.map(elem=>this.filtered.push(elem))
        
       }
        
       if (this.fifth == true){
        let second = this.items.filter(elem => elem.MayToJune == true)

        let secondFilter = second.filter(elem => elem.Gr6To8)
        secondFilter.map(elem=>this.filtered.push(elem))
       }

       if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)

        let thirdFilter = third.filter(elem => elem.Gr6To8)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }
      
      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else{
        console.log("internal not checked")
        if(this.fourth == true){
          let first = this.items.filter(elem => elem.OctoberToApril == true)
          first.map(elem=>this.filtered.push(elem))
          
         }
          
         if (this.fifth == true){
          let second = this.items.filter(elem => elem.MayToJune == true)
          second.map(elem=>this.filtered.push(elem))
         }

         if (this.sixth == true){
          let second = this.items.filter(elem => elem.day == this.day)
          second.map(elem=>this.filtered.push(elem))
         }

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

      let firstFilter = first.filter(elem => elem.MayToJune)
      firstFilter.map(elem=>this.filtered.push(elem))
      
     }
      
     if (this.second == true){
      let second = this.items.filter(elem => elem.Gr3To5 == true)

      let secondFilter = second.filter(elem => elem.MayToJune)
      secondFilter.map(elem=>this.filtered.push(elem))
     }
    

     if (this.third == true){
      let third = this.items.filter(elem => elem.Gr6To8 == true)
      let thirdFilter = third.filter(elem => elem.MayToJune)
      thirdFilter.map(elem=>this.filtered.push(elem))
     }

     if (this.sixth == true){
      let third = this.items.filter(elem => elem.day == this.day)

      let thirdFilter = third.filter(elem => elem.MayToJune)
      thirdFilter.map(elem=>this.filtered.push(elem))
     }


    }

    // no internal checkbox selected therefore, filter on the filtered items.
    else{
      console.log("internal not checked")
      if(this.first == true){
        let first = this.items.filter(elem => elem.KinderTo2 == true)
        first.map(elem=>this.filtered.push(elem))
        
       }
        
       if (this.second == true){
        let second = this.items.filter(elem => elem.Gr3To5 == true)
        second.map(elem=>this.filtered.push(elem))
       }
      
  
       if (this.third == true){
        let third = this.items.filter(elem => elem.Gr6To8 == true)
        third.map(elem=>this.filtered.push(elem))
       }

       if (this.sixth == true){
        let second = this.items.filter(elem => elem.day == this.day)
        second.map(elem=>this.filtered.push(elem))
       }

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

        let firstFilter = first.filter(elem => elem.OctoberToApril)
        firstFilter.map(elem=>this.filtered.push(elem))
        
       }
        
       if (this.second == true){
        let second = this.items.filter(elem => elem.Gr3To5 == true)

        let secondFilter = second.filter(elem => elem.OctoberToApril)
        secondFilter.map(elem=>this.filtered.push(elem))
       }
      

       if (this.third == true){
        let third = this.items.filter(elem => elem.Gr6To8 == true)
        let thirdFilter = third.filter(elem => elem.OctoberToApril)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }

       if (this.sixth == true){
        let third = this.items.filter(elem => elem.day == this.day)

        let thirdFilter = third.filter(elem => elem.OctoberToApril)
        thirdFilter.map(elem=>this.filtered.push(elem))
       }

      }

      // no internal checkbox selected therefore, filter on the filtered items.
      else{
        console.log("internal not checked")
      if(this.first == true){
        let first = this.items.filter(elem => elem.KinderTo2 == true)
        first.map(elem=>this.filtered.push(elem))
        
       }
        
       if (this.second == true){
        let second = this.items.filter(elem => elem.Gr3To5 == true)
        second.map(elem=>this.filtered.push(elem))
       }
      
  
       if (this.third == true){
        let third = this.items.filter(elem => elem.Gr6To8 == true)
        third.map(elem=>this.filtered.push(elem))
       }

       if (this.sixth == true){
        let second = this.items.filter(elem => elem.day == this.day)
        second.map(elem=>this.filtered.push(elem))
       }

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



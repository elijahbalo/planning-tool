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


first:boolean
second:boolean



 
  p: number = 1;

  log = '';
  KinderTo2: boolean;
  Gr3To5: boolean;
  Gr6To8: boolean;
  checkboxValue:boolean;
  closeResult: string;
  items: any
  filtered:any;
  filters = {}
  filters1 = {}
  grades: string;
  timeOfYear: string;
  day: string;
  constructor(private modalService: NgbModal,private db: AngularFirestore) {
    
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

  private applyFilters1(first) {
    this.first=first
    console.log('action called')
    let newlyFilter = Lodash.filter(this.items, Lodash.conforms(this.filters1))
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
  

  private applyFilters2(second) {
    this.second=second
    console.log('action called')
    let newlyFilter = Lodash.filter(this.items, Lodash.conforms(this.filters1))
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




  filterBoolean1(property: string, rule: boolean) {
    if (!rule) this.removeFilter(property)
    else {
      this.filters[property] = val => val
      this.applyFilters1(rule)
    }
  }


  filterBoolean2(property: string, rule: boolean) {
    if (!rule) this.removeFilter(property)
    else {
      this.filters1[property] = val => val
      this.applyFilters2(rule)
    }
  }

  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }



  filterExact(property: string, rule: any) {

    this.filters[property] = val => val == rule
    this.applyFilters()
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
    this.filtered= this.items;

  }


}



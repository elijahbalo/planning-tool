import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import * as Lodash from 'lodash';
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

 
  p: number = 1;



  closeResult: string;
  items: any
  filtered: any;
  filters = {}
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
    this.items = this.db.collection('/itineraries').valueChanges().subscribe(items => {
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

  private applyFilters() {
    console.log('action called')
    if ((this.grades == "empty")){
    this.filtered= this.items;
    }
    else{
    this.filtered = Lodash.filter(this.items, Lodash.conforms(this.filters))
    }
    console.log(this.filtered)
  }

  private applyFilters1() {
    console.log('action called')
    this.filtered = Lodash.filter(this.items, Lodash.conforms(this.filters))
    console.log(this.filtered)
  }

  private applyFilters2() {
    console.log('action called')
    this.filtered = Lodash.filter(this.items, Lodash.conforms(this.filters))
    console.log(this.filtered)
  }
  
  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }

  filterExact1(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters1()
  }

  filterExact2(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters2()
  }

  reset(){
    this.filtered= this.items;
  }
}


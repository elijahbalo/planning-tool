import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as Lodash from 'lodash';
import * as $ from 'jquery';
import { TranslationService } from '../../../services/translation.service';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
  // ,encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {

  body = {
    subject: 'Test email',
    from_name: 'History Museum',
    from_email: 'elijah.balogun@museedelhistoire.ca',
    to: 'pierre.mageau@museedelhistoire.ca',
    message: 'This is to test that the form email service works.',
    AKEY: 'uK21MLM0A2'
  }
  en;
  fr;
  activities;
  constructor(
    private modalService: NgbModal,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute,
    private translateService: TranslationService,
    private http: HttpClient
  ) { }
  ngOnInit() {
    this.setDefaultLang();
  }

  navigateToBrowsePage(event) {
    event.preventDefault();
    this.router.navigate(['BrowsePage']);
  }

  navigateToCreatePage(event) {
    event.preventDefault();
    this.router.navigate(['CreatePage']);
  }
  setDefaultLang() {
    this.en = true;
    this.fr = false;
  }

  fetchTranslation(key) {
    return this.translateService.fetchTranslation(key);
  }
  switchLanguage(event) {
    let lang = event

    if (lang == 'en') {
      localStorage.setItem('lang', JSON.stringify('en'));

      this.fr = false;
      this.en = true;
    }
    if (lang == 'fr') {
      localStorage.setItem('lang', JSON.stringify('fr'));

      this.en = false;
      this.fr = true;
    }
    this.translateService.switchLanguage(lang);
  }

  /*   postForm() {
      let data = {
        subject: 'Test email',
        from_name: 'History Museum',
        from_email: 'elijah.balogun@museedelhistoire.ca',
        to: 'pierre.mageau@museedelhistoire.ca',
        message: 'This is to test that the form email service works.',
        AKEY: 'uK21MLM0A2'
      }
      var xhr = new XMLHttpRequest();
      // we defined the xhr
      xhr.open("POST", this.url, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.send(data);
      console.log(data)
    }
   */
  /*  postForm() {
     console.log(this.body);
     return this.http
       .post(this.url, this.body)
       .subscribe(
         res => {
           console.log(res);
         },
         err => {
           console.log('Error occured');
         }
       );
   } */


}

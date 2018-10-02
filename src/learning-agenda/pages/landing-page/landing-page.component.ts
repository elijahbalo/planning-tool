import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from 'angularfire2/firestore';
import * as Lodash from 'lodash';
import * as $ from 'jquery';
import { TranslationService } from '../../../services/translation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
  // ,encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {
  en;
  fr;
  activities;
  constructor(
    private modalService: NgbModal,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute,
    private translateService: TranslationService
  ) {}
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
  switchLanguage() {
    let lang = JSON.parse(localStorage.getItem('lang'));

    if (lang == 'en') {
      localStorage.setItem('lang', JSON.stringify('fr'));

      this.fr = false;
      this.en = true;
    }
    if (lang == 'fr') {
      localStorage.setItem('lang', JSON.stringify('en'));

      this.en = false;
      this.fr = true;
    }
    this.translateService.switchLanguage(lang);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  @Output()
  lang: EventEmitter<any> = new EventEmitter<any>();
  en = false;
  fr = false;
  constructor(private translateService: TranslationService) {}
  ngOnInit() {
    localStorage.setItem('lang', JSON.stringify('en'));
    if (JSON.parse(localStorage.getItem('lang')) == 'en') {
      this.en = true;
    }

    if (JSON.parse(localStorage.getItem('lang')) == 'fr') {
      this.fr = true;
    }
  }
  fetchTranslation(key) {
    return this.translateService.fetchTranslation(key);
  }
  showFilterAside: boolean = false; // Hide filter aside menu by default.
  onFilterBtnSelect() {
    this.showFilterAside = !this.showFilterAside ? true : false;
  }
  switchLanguage(language: string) {
    if (language == 'en') {
      localStorage.setItem('lang', JSON.stringify('en'));

      this.fr = false;
      this.en = true;
    }
    if (language == 'fr') {
      localStorage.setItem('lang', JSON.stringify('fr'));

      this.en = false;
      this.fr = true;
    }
    this.translateService.switchLanguage(language);
  }
}

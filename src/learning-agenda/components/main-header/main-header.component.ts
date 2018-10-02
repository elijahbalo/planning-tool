import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  @Output()
  lang: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  en;
  @Input()
  fr;
  constructor(private translateService: TranslationService) { }
  ngOnInit() {
    if (JSON.parse(localStorage.getItem('lang')) == 'en') {
      this.fr = false;
      this.en = true;
    }

    if (JSON.parse(localStorage.getItem('lang')) == 'fr') {
      this.fr = true;
      this.en = false;
    }

    if (this.en == true) {
      this.switchLanguage('en')
    }
    if (this.fr == true) {
      this.switchLanguage('fr')
    }
  }
  getDefaultLang() {
    this.translateService.getDefaultLang();
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
    this.lang.emit(language)
  }
}

import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  getDefaultLang() {
    this.translate.getDefaultLang();
  }
  getLangs() {
    return this.translate.get;
  }
  get(key) {
    return this.translate.get(key).subscribe((res: string) => {
      console.log(res);
      //=> 'Hello world'

      // You can call instant() here
      //=> 'Something else'
    });
  }

  fetchTranslation(key: string, params = {}) {
    return this.translate.instant(key, params);
  }
}

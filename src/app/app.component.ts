import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslationService } from '../services/translation.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { FormService } from '../services/form.service';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslationService,
    private formService: FormService
  ) {}
  switchLanguage(language: string) {
    this.translate.switchLanguage(language);
  }

  postForm() {
    this.formService.sendFormData().subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    );
  }
}

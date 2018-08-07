import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardComponent} from '../components/card/card.component';
import { EmptyCardComponent} from '../components/empty-card/empty-card.component';
import { BuildComponent} from '../components/build/build.component';
import { ActivityComponent} from '../components/activity/activity.component';
import { ActivityCardComponent} from '../components/activity-card/activity-card.component';
import { HeaderComponent} from '../components/header/header.component';
import { ConfirmComponent} from '../components/confirm/confirm.component';
import { StickyFooterComponent} from '../components/sticky-footer/sticky-footer.component';
import { ConfirmStickerComponent} from '../components/confirm-sticker/confirm-sticker.component';
import { WarningComponent} from '../components/warning/warning.component';
import { CalendarComponent} from '../components/calendar/calendar.component';
import { MainHeaderComponent} from '../components/main-header/main-header.component';
import { MainFooterComponent} from '../components/main-footer/main-footer.component';
import { SubmitFormComponent} from '../components/submit-form/submit-form.component';
import { LandingPageComponent} from '../pages/landing-page/landing-page.component';
import { ConfirmPageComponent} from '../pages/confirm-page/confirm-page.component';
import { DesignPageComponent} from '../pages/design-page/design-page.component';
import { SubmitPageComponent} from '../pages/submit-page/submit-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    EmptyCardComponent,
    CardComponent,
    BuildComponent,
    ActivityComponent,
    ActivityCardComponent,
    HeaderComponent,
    ConfirmComponent,
    StickyFooterComponent,
    ConfirmStickerComponent,
    WarningComponent,
    MainHeaderComponent,
    CalendarComponent,
    MainFooterComponent,
    SubmitFormComponent,
    LandingPageComponent,
    DesignPageComponent,
    ConfirmPageComponent,
    SubmitPageComponent

  ],
  imports: [
    SlideshowModule,
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

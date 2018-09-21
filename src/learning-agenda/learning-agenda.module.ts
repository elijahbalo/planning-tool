import { NgModule } from '@angular/core';
import { AppComponent } from '../app/app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EllipsisModule } from 'ngx-ellipsis';
import { MultilineEllipsisModule } from 'angular2-multiline-ellipsis';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmptyCardComponent } from './components/empty-card/empty-card.component';
import { CardComponent } from './components/card/card.component';
import { BuildComponent } from './components/build/build.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { ActivityDisplayComponent } from './components/activity-display/activity-display.component';
import { EmptyActivityDisplayComponent } from './components/empty-activity-display/empty-activity-display.component';
import { HeaderComponent } from './components/header/header.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { StickyFooterComponent } from './components/sticky-footer/sticky-footer.component';
import { ConfirmStickerComponent } from './components/confirm-sticker/confirm-sticker.component';
import { WarningComponent } from './components/warning/warning.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ClipboardModule } from 'ngx-clipboard';
import { DetailsComponent } from './components/details/details.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BrowsePageComponent } from './pages/browse-page/browse-page.component';
import { ConfirmPageComponent } from './pages/confirm-page/confirm-page.component';
import { ItineraryPageComponent } from './pages/itinerary-page/itinerary-page.component';
import { DesignPageComponent } from './pages/design-page/design-page.component';
import { SubmitPageComponent } from './pages/submit-page/submit-page.component';
import { SwapBoxComponent } from './components/swap-box/swap-box.component';
import { SelectGradeComponent } from './components/select-grade/select-grade.component';
import { SelectDurationComponent } from './components/select-duration/select-duration.component';
import { ArriveDisplayComponent } from './components/arrive-display/arrive-display.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { NewActivityComponent } from './components/new-activity/new-activity.component';
import { ReviewComponent } from './components/review/review.component';
import { AppRoutingModule } from './router';
import { SlideshowModule } from 'ng-simple-slideshow';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  imports: [
    CommonModule,
    SlideshowModule,
    NgbModule.forRoot(),
    BrowserModule,
    EllipsisModule,
    AppRoutingModule,
    ClipboardModule,
    MultilineEllipsisModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    SelectGradeComponent,
    SelectDurationComponent,
    ArriveDisplayComponent,
    ContactInfoComponent,
    NewActivityComponent,
    ReviewComponent,
    SwapBoxComponent,
    EmptyCardComponent,
    DetailsComponent,
    CardComponent,
    BuildComponent,
    ActivityComponent,
    ActivityDisplayComponent,
    EmptyActivityDisplayComponent,
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
    BrowsePageComponent,
    DesignPageComponent,
    ConfirmPageComponent,
    SubmitPageComponent,
    ItineraryPageComponent
  ],
  providers: [AngularFirestoreModule]
})
export class LearningAgendaModule {}

import { AppComponent } from './app.component'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgModule } from '@angular/core';
import { LearningAgendaModule } from '../learning-agenda/learning-agenda.module'


@NgModule({
  declarations: [
    
  ],
  imports: [
    LearningAgendaModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

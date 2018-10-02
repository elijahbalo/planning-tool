import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormService } from '../services/form.service';
import { LearningAgendaModule } from '../learning-agenda/learning-agenda.module';

@NgModule({
  declarations: [],
  imports: [LearningAgendaModule],

  bootstrap: [AppComponent]
})
export class AppModule {}

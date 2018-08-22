import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent} from  '../pages/landing-page/landing-page.component';
import { DesignPageComponent} from '../pages/design-page/design-page.component';
import { ConfirmPageComponent} from '../pages/confirm-page/confirm-page.component';
import { SubmitPageComponent} from '../pages/submit-page/submit-page.component';
import { BrowsePageComponent} from '../pages/browse-page/browse-page.component';

const routes: Routes = [
 {path: '', redirectTo: 'LandingPage', pathMatch: 'full'}, 
  {path: 'LandingPage', component: LandingPageComponent},
  {path: 'DesignPage', component: DesignPageComponent },
  {path: 'ConfirmPage', component: ConfirmPageComponent},
  {path: 'SubmitPage', component: SubmitPageComponent},
  {path: 'BrowsePage', component:BrowsePageComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

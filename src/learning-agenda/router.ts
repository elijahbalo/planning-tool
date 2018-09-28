import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DesignPageComponent } from './pages/design-page/design-page.component';
import { ConfirmPageComponent } from './pages/confirm-page/confirm-page.component';
import { SubmitPageComponent } from './pages/submit-page/submit-page.component';
import { BrowsePageComponent } from './pages/browse-page/browse-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ItineraryPageComponent } from './pages/itinerary-page/itinerary-page.component';

const routes: Routes = [
  {
    path: 'online-visit-planning-tool',
    redirectTo: 'online-visit-planning-tool/LandingPage',
    pathMatch: 'full'
  },
  {
    path: 'online-visit-planning-tool/LandingPage',
    component: LandingPageComponent
  },
  { path: 'DesignPage', component: DesignPageComponent },
  { path: 'ConfirmPage', component: ConfirmPageComponent },
  { path: 'SubmitPage', component: SubmitPageComponent },
  {
    path: 'online-visit-planning-tool/BrowsePage',
    component: BrowsePageComponent
  },
  {
    path: 'online-visit-planning-tool/CreatePage',
    component: CreatePageComponent
  },
  { path: 'ItineraryPage/:id', component: ItineraryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

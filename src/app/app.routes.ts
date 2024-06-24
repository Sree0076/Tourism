import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthComponent } from './pages/auth/auth.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { ActivitiesComponent } from './pages/activities/activities.component';

export const routes: Routes = [


  {path: 'auth', component: AuthComponent},
  {path: '', component: HomeComponent},
  {path: 'destination', component: DestinationComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'about', component: AboutComponent},
];

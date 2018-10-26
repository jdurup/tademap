import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { TiragesComponent } from './components/tirages/tirages.component';

const routes: Routes = [
  { path: 'equipes', component: TeamsComponent },
  { path: 'tirages', component: TiragesComponent },
];

export const AppRoutingRoutes = RouterModule.forRoot(routes);

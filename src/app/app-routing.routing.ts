import { TeamsComponent } from './teams/teams.component';
import { Routes, RouterModule } from '@angular/router';
import { TiragesComponent } from './tirages/tirages.component';

const routes: Routes = [
  { path: 'equipes', component: TeamsComponent },
  { path: 'tirages', component: TiragesComponent },
];

export const AppRoutingRoutes = RouterModule.forRoot(routes);

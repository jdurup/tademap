// @angular dependencies
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
// @angular/material dependecies
import {
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
// third dependencies

// apps dependencies
import { AppComponent } from './app.component';
import { AppRoutingRoutes } from './app-routing.routing';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { TiragesDetailComponent } from './components/tirages-detail/tirages-detail.component';
import { TiragesComponent } from './components/tirages/tirages.component';

@NgModule({
   declarations: [
      AppComponent,
      TeamsComponent,
      TeamDetailComponent,
      MessagesComponent,
      TiragesDetailComponent,
      TiragesComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      MatButtonModule,
      MatBadgeModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatGridListModule,
      MatSidenavModule,
      MatTableModule,
      AppRoutingRoutes,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

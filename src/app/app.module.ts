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
    MatSidenavModule
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
// third dependencies

// apps dependencies
import { AppComponent } from './app.component';
import { AppRoutingRoutes } from './app-routing.routing';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { TiragesDetailComponent } from './tirages-detail/tirages-detail.component';
import { TiragesComponent } from './tirages/tirages.component';

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
      MatSidenavModule,
      AppRoutingRoutes
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

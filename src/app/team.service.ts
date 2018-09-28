import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from './team';
import { MessageService } from './message.service';
import { TEAMS } from './mock-teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private messageService: MessageService) { }

  getTeams(): Observable<Team[]> {
    this.messageService.add('TeamService: Chargement des équipes');
    return of(TEAMS);
  }

}

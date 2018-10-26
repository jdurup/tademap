import { Component, OnInit } from '@angular/core';
import { Team } from '../../classes/team';
import { TiragesService } from '../../services/tirages/tirages.service';
import { Tirage } from '../../classes/tirage';
import { TeamService } from '../../services/team/team.service';

@Component({
  selector: 'app-tirages',
  templateUrl: './tirages.component.html',
  styleUrls: ['./tirages.component.scss']
})
export class TiragesComponent implements OnInit {

  tirages: Tirage[];
  selectedTirage: Tirage;

  constructor(
    private tiragesService: TiragesService,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.getTirages();
  }

  onSelect(tirage: Tirage): void {
    this.selectedTirage = tirage;
  }

  getSavedTirages(): void {
    this.tiragesService.getSavedTirages()
      .subscribe(tirages => this.tirages = tirages);
  }

  getTirages(): void {
    this.tirages = this.tiragesService.getTirages();
  }

  create(): void {
    let teams: Team[];
    this.teamService.getTeams()
      .subscribe(equipes => teams = equipes);
    this.tiragesService.create(teams);
    this.getTirages();
  }

  getTime(partie): number {
    let timeMilli = 0;
    if (partie.fin === null) {
      timeMilli = Date.now() - partie.debut;
    } else {
      timeMilli = partie.fin - partie.debut;
    }
    return timeMilli;
  }

}

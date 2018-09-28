import { Team } from './../team';
import { TiragesService } from './../tirages.service';
import { Component, OnInit } from '@angular/core';
import { Tirage } from './../tirage';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-tirages',
  templateUrl: './tirages.component.html',
  styleUrls: ['./tirages.component.css']
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

  getTirages(): void {
    this.tiragesService.getTirages()
      .subscribe(tirages => this.tirages = tirages);
  }

  create(): void {
    let teams: Team[];
    this.teamService.getTeams()
      .subscribe(equipes => teams = equipes);
    this.tiragesService.create(teams);
    this.getTirages();
  }

}

import { TeamService } from './../team.service';
import { Component, OnInit } from '@angular/core';

import { Team } from './../team';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  equipe: Team;
  equipes: Team[];

  constructor(
    private teamService: TeamService,
    private iconReg: MatIconRegistry,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getHeroes();
    this.iconReg
      .addSvgIcon('symbol_hash', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/images/svg/symbol_hash.svg'));
  }

  onSelect(equipe: Team): void {
    this.equipe = equipe;
  }

  getHeroes(): void {
    this.teamService.getTeams()
      .subscribe(equipes => this.equipes = equipes);
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Team } from './team';
import { Tirage } from './tirage';
import { TIRAGES } from './mock-tirages';


@Injectable({
  providedIn: 'root'
})

export class TiragesService {
  tirages: Tirage[] = [];

  constructor(private messageService: MessageService) { }

  getTirages(): Observable<Tirage[]> {
    this.messageService.add('TeamService: Chargement des tirages');
    return of(TIRAGES);
  }

  create(listEquipes: Team[]) {
    let newTirage: Tirage;
    const equipes = [].concat(listEquipes);
    newTirage = new Tirage('A - 1er Tour');
    if (!(equipes.length % 2)) { equipes.push(null); }
    while (equipes.length !== 0) {
      let index: number;
      index = Math.floor(Math.random() * equipes.length);
      const eq1: Team[] = equipes.splice(index, 1);
      index = Math.floor(Math.random() * equipes.length);
      const eq2: Team[] = equipes.splice(index, 1);
      newTirage.addPartie(eq1[0], eq2[0]);
    }
    this.tirages.push(newTirage);
  }

}

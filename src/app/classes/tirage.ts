import { Partie } from './partie';
import { Team } from './team';
import { MessageService } from '../services/message/message.service';
import * as R from 'ramda';

export class Tirage {
    public id: string;
    public status: string;
    public parties: Array<Partie>;
    public terrains: Array<number>;

    constructor(id: string, private messageService: MessageService) {
        this.id = id;
        this.status = 'created';
        this.parties = [];
    }

    addPartie(equipe1: Team, equipe2: Team, terrain: number = null, debut: number = Date.now()) {
        this.parties.push({
            equipe1: equipe1,
            equipe2: equipe2,
            scoreEq1: R.isNil(equipe2) ? 13 : R.isNil(equipe1) ? -1 : 0,
            scoreEq2: R.isNil(equipe1) ? 13 : R.isNil(equipe2) ? -1 : 0,
            terrain: terrain,
            debut: debut,
            fin: null
        });
    }

    delPartiefromEquipe(equipe: Team) {
        let indexPartie: number;
        indexPartie = R.findIndex(R.propEq('equipe1', equipe) || R.propEq('equipe2', equipe))(this.parties);
        this.parties.splice(indexPartie, 1);
    }

    selectTerrain(partie: Partie, terrain: number = null): void {
        if (this.terrains.length === 0) {
            this.messageService.add('Tirage: Aucun terrain disponible');
        }
        if (R.isNil(terrain)) {
            partie.terrain = this.terrains.pop();
        } else {
            const index = this.terrains.indexOf(terrain);
            if (index === -1) {
                partie.terrain = this.terrains.pop();
            } else {
                partie.terrain = this.terrains.splice(index, 1)[0];
            }
        }
    }

    setScore() {}
}

import { Team } from './team';
import * as R from 'ramda';

export class Tirage {
    public id: string;
    public status: string;
    public parties: Array<{ equipe1: Team, equipe2: Team, scoreEq1: number, scoreEq2: number, terrain: number}>;

    constructor(id: string) {
        this.id = id;
        this.status = 'created';
        this.parties = [];
    }

    addPartie(equipe1: Team, equipe2: Team, terrain: number = null) {
        this.parties.push({
            equipe1: equipe1,
            equipe2: equipe2,
            scoreEq1: 0,
            scoreEq2: 0,
            terrain: terrain});
    }

    delPartiefromEquipe(equipe: Team) {
        let indexPartie: number;
        indexPartie = R.findIndex(R.propEq('equipe1', equipe) || R.propEq('equipe2', equipe))(this.parties);
        this.parties.splice(indexPartie, 1);
    }
}

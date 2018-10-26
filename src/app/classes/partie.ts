import { Team } from './team';
// import * as R from 'ramda';

export class Partie {
    public equipe1: Team;
    public equipe2: Team;
    public scoreEq1: number;
    public scoreEq2: number;
    public terrain: number;
    public debut: number;
    public fin: number;

    constructor(equipe1: Team, equipe2: Team,
        scoreEq1: number = 0, scoreEq2: number = 0,
        terrain: number = null,
        debut: number = null, fin: number = null) {
        this.equipe1 = equipe1;
        this.equipe2 = equipe2;
        this.scoreEq1 = scoreEq1;
        this.scoreEq2 = scoreEq2;
        this.terrain = terrain;
        this.debut = debut;
        this.fin = fin;
    }
}

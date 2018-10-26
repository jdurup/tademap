export class Team {
    public numero: number;
    public club: string;
    public joueurs: Array<{ nom: string, prenom: string, club: string }>;
    public adversaires: Array<number>;
    public terrains: Array<number>;

    constructor(numero: number) {
        this.numero = numero;
        this.club = 'Undefined';
        this.joueurs = [];
        this.adversaires = [];
        this.terrains = [];
    }

    public nombreJoueurs() {
        return this.joueurs.length;
    }

    public setClub() {
        this.club = 'Undefined';
        this.joueurs.forEach(joueur => {
            if (this.club === 'Undefined') {
                this.club = joueur.club;
            } else {
                if (this.club !== joueur.club) { this.club = 'N/H'; }
            }
        });
    }

    public addJoueur(nom: string, prenom: string, club: string) {
        this.joueurs.push({
            nom: nom, prenom: prenom, club: club
        });
        this.setClub();
    }
}

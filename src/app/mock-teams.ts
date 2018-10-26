import { Team } from './classes/team';

const team1: Team = new Team(1);
team1.addJoueur('Nom1', 'Prenom1', 'club1');
team1.addJoueur('Nom2', 'Prenom2', 'club1');
const team2: Team = new Team(2);
team2.addJoueur('Nom3', 'Prenom3', 'club2');
team2.addJoueur('Nom4', 'Prenom4', 'club3');
const team3: Team = new Team(3);
team3.addJoueur('Nom5', 'Prenom5', 'club4');
team3.addJoueur('Nom6', 'Prenom6', 'club4');
const team4: Team = new Team(4);
team4.addJoueur('Nom7', 'Prenom7', 'club5');
team4.addJoueur('Nom8', 'Prenom8', 'club6');
const team5: Team = new Team(5);
team4.addJoueur('Nom9', 'Prenom9', 'club7');
team4.addJoueur('Nom10', 'Prenom10', 'club7');

export const TEAMS: Team[] = [
    team1,
    team2,
    team3,
    team4,
    team5
];

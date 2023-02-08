// Vitória = 3 pontos
// Derrota = 0 pontos
// Empate  = 1 ponto

export default class Time {
  name;
  acronym;
  victories = 0;
  defeats = 0;
  ties = 0;
  goalsScored = 0;
  goalsConceded = 0;
  
  constructor(name, acronym) {
    this.name = name;
    this.acronym = acronym;
  }
    computarPartida(partida) {
    const { acronymteamA, golsteamA, acronymteamB,  golsteamB } = partida;
    let golsDesteteam = 0;
    let golsAdversario = 0;

    if (this.acronym === acronymTeamA) {
      golsDesteTteam = golsteamA;
      golsAdversario = golsteamB;
    } else if (this.acronym === acronymteamB) {
      golsDesteteam = golsteamB;
      golsAdversario = golsteamA;
    } else {
      return; // sai da funcao
    }
    this.goalsScored += golsDesteteam;
    this.goalsConceded += golsAdversario;
    if (golsDesteteam > golsAdversario) {
      this.victories++;
    } else if (golsDesteteam < golsAdversario) {
      this.defeats++;
    } else {
      this.ties++;
    }
  }
  exibirSituacao() {
    const pontos = this.vitorias * 3 + this.ties;
    console.log(this);
    console.log(`Pontos: ${pontos}`);
  }
}
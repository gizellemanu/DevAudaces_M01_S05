export default class Personagem {
  name;
  percentageLife = 100;
  SufferedDamage(DamagePercentage) {
    const newLife = this.percentageLife - DamagePercentage;
    this.percentageLife = newLife < 0 ? 0 : newLife;
  }
  usouKitMedico() {
    const newLife = this.percentageLife + 10;
    this.percentageLife = newLife > 100 ? 100 : newLife;
  }
}

export default class fees {
  InitialCapital;
  AppliedFee;
  time;
  constructor(InitialCapital, AppliedFee, time) {
    this.InitialCapital = InitialCapital;
    this.AppliedFee = AppliedFee;
    this.time = time;
  }
  SimpleFees() {
    const C = this.InitialCapital;
    const i = this.AppliedFee;
    const t = this.time;
    const J = C * i * t;
    return Math.round(C + J);
  }
  CompoudFees() {
    const C = this.InitialCapital;
    const i = this.AppliedFee;
    const t = this.time;
    const M = C * (1 + i) ** t;
    return Math.round(M);
  }
}
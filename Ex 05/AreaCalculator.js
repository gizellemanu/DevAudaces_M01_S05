export default class AreaCalculator {
  type;
  base;
  height;
  constructor(type, base, height) {
    this.type = type;
    this.base = base;
    this.height = height;
  }
  calculate() {
    let result;
    switch(this.type) {
      case "triangle":
        result = (this.base * this.height) / 2;
        break;
      case "square":
      case "rectangle":
        result = this.base * this.height;
        break;
      default:
        result = null;
    };
    return result;
  }
}

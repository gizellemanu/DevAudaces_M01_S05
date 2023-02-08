import AreaCalculator from "./AreaCalculator.js";
console.log("m1-s05-e05");

const squareA = new AreaCalculator("square", 16, 16);
const areaSA = squareA.calculator();
console.log(areaSA); 
const triangleB = new AreaCalculator("triangle", 18, 17);
const areaTB = triangleB.calculator();
console.log(areaTB); 
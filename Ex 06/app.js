import fees from "./fees.js";

console.log("m1-s05-e06");

const aplicacao1 = new fees(10000, 0.07, 24);
const aplicacao2 = new fees(10000, 0.15, 10);
console.log(aplicacao1.SimpleFees());
console.log(aplicacao2.CompoudFees());
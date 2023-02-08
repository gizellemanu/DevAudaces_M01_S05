import employee from "./employee.js";

console.log("m1-s05-e01");

const manu = new employee("528.442.040-31", "manu Lovelace", 1000);

console.log(manu.salary); // 1000
manu.promover(50);
console.log(manu.salary); // 1500

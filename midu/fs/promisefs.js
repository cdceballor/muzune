const fs = require("fs/promises");

console.log("Acá");
console.log("podemos ver");
fs.readFile("./fs/asyncFile.txt", "utf-8").then((text) => {
  console.log("dentro del doc");
  console.log(text);
});

console.log("sigue el doc");
console.log("terminó el doc");

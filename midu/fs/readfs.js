const fs = require("fs");

const syncMethod = () => {
  const text = fs.readFileSync("./fs/file.txt", "utf8");
  console.log(text);
};

const asyncMethod = () => {
  console.log("dentro del doc");
  return fs.readFileSync("./fs/asyncFile.txt", "utf-8", (err, text) => {
    console.log(text);
  });
};

console.log("Acá");
console.log("podemos ver");
console.log("sigue el doc");
console.log(asyncMethod());
console.log("terminó el doc");
